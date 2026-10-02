#!/usr/bin/env python3
"""Apply qa_prune_plan.md to the guide sources.

Every operation is parsed straight from the plan (so anchors are byte-exact),
then applied in plan order. Each anchor must occur exactly once at the moment it
is applied; otherwise the script stops (fail loudly, never guess).

Usage:
  python3 apply_prune.py --dry-run   # parse + check every anchor in memory, write nothing
  python3 apply_prune.py             # apply and write the files
  python3 apply_prune.py --list      # print the parsed operations in order
  --p1-only                          # apply only the P1 items (used on a scratch copy)
"""
import os, re, sys, json

HERE = os.path.dirname(os.path.abspath(__file__))
PLAN = os.path.join(HERE, 'qa_prune_plan.md')
DRY = '--dry-run' in sys.argv

# ---------------------------------------------------------------- plan parsing
plan_lines = open(PLAN, encoding='utf-8').read().split('\n')


def code_blocks(lines):
    """Return the fenced code blocks (list of str, without trailing newline) in lines."""
    out, cur, inside = [], [], False
    for l in lines:
        if l.startswith('```'):
            if inside:
                out.append('\n'.join(cur)); cur = []; inside = False
            else:
                inside = True
            continue
        if inside:
            cur.append(l)
    assert not inside, 'unterminated code block'
    return out


# split the plan into chunks by headings (### or ####)
chunks = []  # (heading, [lines])
cur_head, cur = None, []
for l in plan_lines:
    if re.match(r'^#{2,4} ', l):
        chunks.append((cur_head, cur))
        cur_head, cur = l, []
    else:
        cur.append(l)
chunks.append((cur_head, cur))

ops = []  # dicts: id, pri, kind, file, ...


def file_of(body):
    for l in body:
        m = re.match(r'^File: `([^`]+)`', l)
        if m:
            return m.group(1), l
    return None, None


section = None
for head, body in chunks:
    if head is None:
        continue
    if head.startswith('## '):
        section = head
        continue
    m = re.match(r'^#### (\S+) · (P\d) · (.+)$', head)
    if m:
        oid, pri, kind = m.groups()
        f, fline = file_of(body)
        blocks = code_blocks(body)
        op = dict(id=oid, pri=pri, kind=kind, file=f, blocks=blocks, fline=fline)
        if kind == 'REPLACE (whole file)':
            assert len(blocks) == 1
        elif kind in ('REPLACE (whole lines)', 'REPLACE (exact text)'):
            assert len(blocks) == 2, (oid, len(blocks))
        elif kind in ('DELETE (whole lines)', 'DELETE (text inside a line)'):
            assert len(blocks) == 1, (oid, len(blocks))
        elif kind == 'ADD':
            assert len(blocks) == 2, (oid, len(blocks))
        else:
            raise SystemExit('unknown kind %r in %s' % (kind, oid))
        # QE edits name the question they must sit in
        if fline and 'inside the question whose stem starts' in fline:
            s = fline.split('inside the question whose stem starts “', 1)[1]
            s = s[:s.rindex('…”')]
            op['inside_stem'] = s
        ops.append(op)
        continue
    if head.startswith('### TAGS'):
        must, skim = code_blocks(body)
        for l in body:
            r = re.match(r'^\| (ch_\w+\.html) \| (\w+) \| `([^`]+)` \| (Must know|Skim) \|', l)
            if r:
                fn, key, h2, tag = r.groups()
                ops.append(dict(id='TAGS-' + key, pri='P1', kind='TAG', file=fn, h2=h2,
                                line=must if tag == 'Must know' else skim, tag=tag))
        continue
    if head.startswith('#### `'):  # 7.1 per-file deletion tables
        fn = re.match(r'^#### `([^`]+)`', head).group(1)
        for l in body:
            r = re.match(r'^\| (Q-\S+) \| (P\d) \| (\w+) \| `(.+?)` \| (.*) \|$', l)
            if r:
                qid, pri, topic, stem, why = r.groups()
                ops.append(dict(id=qid, pri=pri, kind='QDEL', file=fn, topic=topic, stem=stem))
        continue
    if head.startswith('### 7.2 '):
        m2 = re.match(r'^### 7\.2 (\S+) · (P\d) · ', head)
        blocks = code_blocks(body)
        assert len(blocks) == 1
        txt = '\n'.join(body)
        stem = re.search(r'stem starts with `([^`]+)`', txt).group(1)
        fn = re.search(r'File: `([^`]+)`', txt).group(1)
        ops.append(dict(id=m2.group(1), pri=m2.group(2), kind='QREP', file=fn, stem=stem, new=blocks[0]))
        continue
    if head.startswith('### 8.1 '):
        for l in body:
            r = re.match(r'^\| (DEC-\d+) \| (.+?) \| `(.+?)` \| `(.+?)` \|$', l)
            if r:
                did, name, find, rep = r.groups()
                ops.append(dict(id=did, pri='P1', kind='DECTXT', file='decoder.js', name=name, find=find, rep=rep))
        continue
    if head.startswith('### 8.2 '):
        rows = [l for l in body if l.startswith('| ') and not l.startswith('| Entry') and not l.startswith('|---')]
        for l in rows:
            r = re.match(r'^\| (.+?) \| (.+?) \|$', l)
            name, cue = r.groups()
            ops.append(dict(id='CUE-' + name, pri='P1', kind='CUE', file='decoder.js', name=name, old=cue, new=''))
        continue
    if head.startswith('### 8.3 '):
        rows = [l for l in body if l.startswith('| ') and not l.startswith('| Entry') and not l.startswith('|---')]
        for l in rows:
            r = re.match(r'^\| (.+?) \| (.+?) \| (.+?) \| (.+) \|$', l)
            name, old, new, why = r.groups()
            ops.append(dict(id='CUEFIX-' + name, pri='P2', kind='CUE', file='decoder.js', name=name, old=old, new=new))
        continue
    if head.startswith('### 8.4 '):
        for l in body:
            r = re.match(r'^\| (\d+) \| (.+?) \| (.+?) \|$', l)
            if r:
                n, front, why = r.groups()
                ops.append(dict(id='CARDS-%s' % n, pri='P1', kind='CDEL', file='cards.js', front=front))
        continue
    if head.startswith('### 8.5 '):
        blocks = code_blocks(body)
        assert len(blocks) == 1
        txt = '\n'.join(body)
        front = re.search(r'front is exactly `([^`]+)`', txt).group(1)
        ops.append(dict(id='CARD-REP-1', pri='P1', kind='CREP', file='cards.js', front=front, new=blocks[0]))
        continue

# ---------------------------------------------------------------- sanity on parse
from collections import Counter
cnt = Counter(o['kind'] for o in ops)
print('parsed ops:', len(ops), dict(cnt))
assert cnt['QDEL'] == 59, cnt['QDEL']
assert cnt['TAG'] == 27, cnt['TAG']
assert cnt['CDEL'] == 35, cnt['CDEL']
assert sum(1 for o in ops if o['id'].startswith('CUE-')) == 42
assert sum(1 for o in ops if o['id'].startswith('CUEFIX-')) == 3
assert sum(1 for o in ops if o['id'].startswith('DEC-')) == 9
assert sum(1 for o in ops if o['id'].startswith('QE-')) == 19

if '--list' in sys.argv:
    for o in ops:
        print(o['id'], o['pri'], o['kind'], o['file'])
    sys.exit(0)

if '--p1-only' in sys.argv:  # only used to check the plan's "P1 only" numbers on a copy
    ops = [o for o in ops if o['pri'] == 'P1']

# ---------------------------------------------------------------- application
files = {}


def path(fn):
    return os.path.normpath(os.path.join(HERE, fn))


def get(fn):
    if fn not in files:
        files[fn] = open(path(fn), encoding='utf-8').read()
    return files[fn]


log = []  # (id, pri, status, note)
problems = []


def once(text, anchor, oid):
    n = text.count(anchor)
    if n != 1:
        raise SystemExit('ANCHOR %s occurs %d times (need exactly 1):\n%r' % (oid, n, anchor[:200]))
    return text.index(anchor)


def line_span(text, start, end):
    """Expand [start, end) to whole lines, including the final line break."""
    ls = text.rfind('\n', 0, start) + 1
    le = text.find('\n', end)
    le = len(text) if le == -1 else le + 1
    return ls, le


def tidy_blank(text, pos):
    """After a whole-line deletion at pos: if it left two blank lines in a row,
    or a blank line right before a closing tag, drop one blank line."""
    notes = []
    # line before pos and line at pos
    prev_end = pos - 1  # the '\n' that ends the previous line
    prev_start = text.rfind('\n', 0, prev_end) + 1 if prev_end > 0 else 0
    prev_line = text[prev_start:prev_end] if prev_end >= 0 else None
    nxt_end = text.find('\n', pos)
    nxt_line = text[pos:nxt_end] if nxt_end != -1 else text[pos:]
    if prev_line is not None and prev_line.strip() == '' and nxt_line.strip() == '' and nxt_end != -1:
        text = text[:pos] + text[nxt_end + 1:]
        notes.append('collapsed double blank line')
    elif prev_line is not None and prev_line.strip() == '' and re.match(r'^\s*</', nxt_line):
        text = text[:prev_start] + text[pos:]
        notes.append('removed blank line before closing tag')
    return text, notes


def q_blocks(text):
    """Yield (start, end, stem_line, topic, stem) for each Q block; end includes final newline."""
    for m in re.finditer(r'^Q\("(\w+)", (\d), "', text, re.M):
        s = m.start()
        e = re.compile(r'^\](, \d+)?\);\n', re.M).search(text, s)
        yield s, e.end(), m.group(1), text[m.end():text.find('\n', m.end())]


orig_q_positions = {}


def qpos_orig(fn, stem):
    if fn not in orig_q_positions:
        orig_q_positions[fn] = [st for _, _, _, st in q_blocks(open(path(fn), encoding='utf-8').read())]
    for i, st in enumerate(orig_q_positions[fn]):
        if st.startswith(stem):
            return i + 1
    return None


for o in ops:
    oid, kind, fn = o['id'], o['kind'], o['file']
    t = get(fn)
    note = ''
    if kind == 'REPLACE (whole file)':
        new = o['blocks'][0]
        # "Keep one empty first line as in the other page files."
        t = '\n' + new + '\n'
    elif kind in ('REPLACE (whole lines)', 'DELETE (whole lines)'):
        anchor = o['blocks'][0]
        i = once(t, anchor, oid)
        ls, le = line_span(t, i, i + len(anchor))
        # the anchor must start at the first non-blank char of its line
        assert t[ls:i].strip() == '', (oid, 'anchor does not start the line')
        assert t[i + len(anchor):le].strip() == '', (oid, 'anchor does not end the line')
        if kind.startswith('REPLACE'):
            t = t[:ls] + o['blocks'][1] + '\n' + t[le:]
        else:
            t = t[:ls] + t[le:]
            t, n2 = tidy_blank(t, ls)
            note = '; '.join(n2)
    elif kind == 'REPLACE (exact text)':
        anchor, rep = o['blocks']
        i = once(t, anchor, oid)
        if 'inside_stem' in o:
            blk = [b for b in q_blocks(t) if b[3].startswith(o['inside_stem'])]
            assert len(blk) == 1, (oid, 'stem not unique', len(blk))
            assert blk[0][0] <= i < blk[0][1], (oid, 'anchor not inside the named question')
        t = t[:i] + rep + t[i + len(anchor):]
    elif kind == 'DELETE (text inside a line)':
        anchor = o['blocks'][0]
        i = once(t, anchor, oid)
        if 'inside_stem' in o:
            blk = [b for b in q_blocks(t) if b[3].startswith(o['inside_stem'])]
            assert len(blk) == 1, (oid, 'stem not unique', len(blk))
            assert blk[0][0] <= i < blk[0][1], (oid, 'anchor not inside the named question')
        t = t[:i] + t[i + len(anchor):]
    elif kind == 'ADD':
        anchor, newline = o['blocks']
        i = once(t, anchor, oid)
        ls, le = line_span(t, i, i + len(anchor))
        t = t[:le] + newline + '\n' + t[le:]
    elif kind == 'TAG':
        anchor = o['h2']
        i = once(t, anchor, oid)
        ls, le = line_span(t, i, i + len(anchor))
        assert t[ls:le].strip() == anchor, (oid, 'h2 line has extra content')
        assert t[le:].startswith('    <p class="lede">'), (oid, 'next line is not the lede')
        t = t[:le] + o['line'] + '\n' + t[le:]
    elif kind in ('QDEL', 'QREP'):
        hits = [b for b in q_blocks(t) if b[3].startswith(o['stem'])]
        if len(hits) != 1:
            raise SystemExit('QUESTION %s: stem matches %d questions: %r' % (oid, len(hits), o['stem']))
        s, e, topic, stem = hits[0]
        if kind == 'QDEL':
            assert topic == o['topic'], (oid, 'topic mismatch', topic, o['topic'])
            want = int(oid.rsplit('-', 1)[1])
            got = qpos_orig(fn, o['stem'])
            if want != got:
                note = 'position in original file is %s, plan says %s' % (got, want)
            t = t[:s] + t[e:]
            t, n2 = tidy_blank(t, s)
            note = '; '.join([x for x in [note] + n2 if x])
        else:
            assert o['new'].startswith('Q("%s",' % topic), (oid, 'replacement topic differs')
            t = t[:s] + o['new'] + '\n' + t[e:]
    elif kind == 'DECTXT':
        i = once(t, o['find'], oid)
        ls, le = line_span(t, i, i + len(o['find']))
        assert t[ls:].startswith('D("%s",' % o['name']), (oid, 'find text is not on the named entry', t[ls:ls + 60])
        t = t[:i] + o['rep'] + t[i + len(o['find']):]
    elif kind == 'CUE':
        prefix = 'D("%s",' % o['name']
        hits = [m for m in re.finditer(r'^' + re.escape(prefix) + r'.*$', t, re.M)]
        if len(hits) != 1:
            raise SystemExit('CUE %s: %d lines start with %r' % (oid, len(hits), prefix))
        line = hits[0].group(0)
        m = re.match(r'^(D\(.*, )"((?:[^"\\]|\\.)*)"\);$', line)
        assert m, (oid, 'cannot parse line', line)
        if m.group(2) != o['old']:
            raise SystemExit('CUE %s: current cue %r != plan %r' % (oid, m.group(2), o['old']))
        newline = m.group(1) + json.dumps(o['new'], ensure_ascii=False) + ');'
        t = t[:hits[0].start()] + newline + t[hits[0].end():]
    elif kind == 'CDEL':
        hits = [m for m in re.finditer(r'^C\("\w+", "((?:[^"\\]|\\.)*)", .*\n', t, re.M) if m.group(1) == o['front']]
        if len(hits) != 1:
            raise SystemExit('CARD %s: %d cards with front %r' % (oid, len(hits), o['front']))
        t = t[:hits[0].start()] + t[hits[0].end():]
    elif kind == 'CREP':
        hits = [m for m in re.finditer(r'^C\("(\w+)", "((?:[^"\\]|\\.)*)", .*\n', t, re.M) if m.group(2) == o['front']]
        if len(hits) != 1:
            raise SystemExit('CARD %s: %d cards with front %r' % (oid, len(hits), o['front']))
        assert o['new'].startswith('C("%s",' % hits[0].group(1)), (oid, 'chapter differs')
        t = t[:hits[0].start()] + o['new'] + '\n' + t[hits[0].end():]
    else:
        raise SystemExit('unhandled ' + kind)
    files[fn] = t
    log.append((oid, o['pri'], kind, fn, note))

for oid, pri, kind, fn, note in log:
    if note:
        print('NOTE', oid, '-', note)
print('applied', len(log), 'operations (P1 %d, P2 %d)' % (
    sum(1 for l in log if l[1] == 'P1'), sum(1 for l in log if l[1] == 'P2')))

if DRY:
    print('dry run: nothing written')
else:
    for fn, t in files.items():
        p = path(fn)
        assert 'guide_backup_v1' not in p
        open(p, 'w', encoding='utf-8', newline='\n').write(t)
        print('wrote', p)
