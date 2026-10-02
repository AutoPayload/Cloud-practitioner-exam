"""Build the single-file HTML pages from src/.

  python3 scripts/build.py            # build both pages
  python3 scripts/build.py guide      # clf-c02-study-guide.html
  python3 scripts/build.py practice   # clf-c02-practice-exam.html

The output files are written to the repo root. They are complete HTML documents
you can open locally; the claude.ai artifact version is the same page.
"""
import os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'src')
rd = lambda *p: open(os.path.join(SRC, *p), encoding='utf-8').read()

def standalone(fragment):
    head, rest = fragment.split('</style>', 1)
    return ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
            + head + '</style>\n</head>\n<body>\n' + rest + '\n</body>\n</html>\n')

def write(name, fragment):
    path = os.path.join(ROOT, name)
    open(path, 'w', encoding='utf-8').write(standalone(fragment))
    print('wrote', name, len(fragment), 'bytes')

def build_guide():
    shell = rd('guide', 'shell.html')
    parts = {
        '<!--@@HOME@@-->': rd('guide', 'home.html'),
        '<!--@@METHOD@@-->': rd('guide', 'method.html'),
        '<!--@@SKILLS@@-->': rd('guide', 'skills.html'),
        '<!--@@CHAPTERS@@-->': ''.join(rd('guide', f) for f in ['ch_d1.html', 'ch_d2.html', 'ch_d3a.html', 'ch_d3b.html', 'ch_d3c.html', 'ch_d4.html']),
        '<!--@@COMPARE@@-->': rd('guide', 'compare.html'),
        '<!--@@CHEAT@@-->': rd('guide', 'cheat.html'),
    }
    for k, v in parts.items():
        assert shell.count(k) == 1, k
        shell = shell.replace(k, v)
    data = '\n'.join([rd('questions', f) for f in ['qb_concepts.js', 'qb_security.js', 'qb_tech.js', 'qb_n1.js', 'qb_n2.js', 'qb_n3.js']]
                     + [rd('guide', 'decoder.js'), rd('guide', 'cards.js')])
    assert '</script' not in data.lower()
    assert shell.count('/*@@DATA@@*/') == 1
    write('clf-c02-study-guide.html', shell.replace('/*@@DATA@@*/', data))

def build_practice():
    t = rd('practice-exam', 'template.html')
    qb = '\n'.join(rd('questions', f) for f in ['qb_concepts.js', 'qb_security.js', 'qb_tech.js'])
    assert t.count('/*__QB__*/') == 1
    write('clf-c02-practice-exam.html', t.replace('/*__QB__*/', qb))

if __name__ == '__main__':
    what = sys.argv[1] if len(sys.argv) > 1 else 'all'
    if what in ('all', 'guide'): build_guide()
    if what in ('all', 'practice'): build_practice()
