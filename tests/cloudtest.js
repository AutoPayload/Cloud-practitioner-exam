const path = require('path'); const fs = require('fs');
const PAGE = 'file://' + path.join(__dirname, '..', 'clf-c02-study-guide.html');
const OUT = path.join(__dirname, 'output'); fs.mkdirSync(OUT, { recursive: true });
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
const mock = (seed) => `
(() => {
  const docs = ${JSON.stringify(seed)}; const writes = []; window.__docs = docs; window.__writes = writes;
  const listeners = [];
  const snapOf = (path) => ({ id: path.split('/').pop(), exists: path in docs, data: () => docs[path], metadata: {} });
  const notify = () => listeners.forEach(fn => fn());
  const db = {
    doc: (path) => ({ path, get: async () => snapOf(path), set: async (d) => { writes.push(['set', path]); docs[path] = JSON.parse(JSON.stringify(d)); notify(); }, delete: async () => { writes.push(['delete', path]); delete docs[path]; notify(); } }),
    collection: (c) => ({ onSnapshot: (next) => { const fire = () => next({ docs: Object.keys(docs).filter(p => p.startsWith(c + '/') && p.split('/').length === 2).map(snapOf) }); listeners.push(fire); setTimeout(fire, 10); return () => {}; } })
  };
  const user = { id: async () => 'u_me', profiles: async (ids) => Object.fromEntries([].concat(ids).map(i => [i, { id: i, name: i === 'u_me' ? 'Jorge' : 'Ana', avatarUrl: '', isMe: i === 'u_me' }])) };
  window.claude = { use: async (n) => n === 'db' ? db : n === 'user' ? user : null };
})();`;
(async () => {
  const b = await chromium.launch(); const errs = [], ok = [];
  const remoteState = { stats: {}, understood: { concepts: true, wa: true }, cards: {}, plan: {}, exams: [{ p: 82, at: 1 }], updatedAt: Date.now() - 3600000, board: true };
  const seed = { 'data/users/u_me/progress': { v: 1, state: remoteState }, 'board/u_other': { chapters: 5, answered: 40, right: 30, mastered: 10, exams: 2, last: 75, best: 81, ready: false, at: Date.now() - 7200000 } };
  // 1: new device opened straight on a chapter must load account progress, not overwrite it
  let ctx = await b.newContext(); let p = await ctx.newPage(); p.on('pageerror', e => errs.push(e.message));
  await p.addInitScript(mock(seed));
  await p.goto(PAGE + '#t-s3'); await p.waitForTimeout(800);
  const loaded = await p.evaluate(() => ({ status: document.getElementById('sync-status').textContent, w: window.__writes.length, understood: JSON.parse(localStorage.getItem('clf-c02-guide-v1')).understood }));
  (loaded.understood.concepts && loaded.w === 0 && /Saved to your account/.test(loaded.status)) ? ok.push('remote loaded on new device, no overwrite') : errs.push('load ' + JSON.stringify(loaded));
  // 2: answering saves progress + board
  await p.click('#t-s3 .qc .opt[data-k="0"]'); const mr = await p.$('#t-s3 .qc [data-check]'); if (mr) { await p.click('#t-s3 .qc .opt[data-k="1"]'); await p.click('#t-s3 .qc [data-check]'); }
  await p.waitForTimeout(2200);
  const w = await p.evaluate(() => ({ writes: window.__writes, board: window.__docs['board/u_me'], st: Object.keys(window.__docs['data/users/u_me/progress'].state.stats).length }));
  (w.st === 1 && w.board && w.board.chapters === 2 && w.board.best === 82) ? ok.push('progress + board saved: ' + JSON.stringify(w.writes)) : errs.push('save ' + JSON.stringify(w));
  // 3: team view
  await p.evaluate(() => location.hash = 'team'); await p.waitForTimeout(300);
  const team = await p.$$eval('#team-list tbody tr', rs => rs.map(r => r.innerText.replace(/\s+/g, ' ')));
  (team.length === 2 && team.some(t => /Jorge.*YOU/.test(t)) && team.some(t => /Ana/.test(t))) ? ok.push('team board: ' + team.join(' | ')) : errs.push('team ' + JSON.stringify(team));
  await p.screenshot({ path: path.join(OUT, 'team-1280.png'), fullPage: true });
  // 4: opt out deletes the board doc
  await p.click('#team-optin'); await p.waitForTimeout(2200);
  const gone = await p.evaluate(() => !('board/u_me' in window.__docs));
  gone ? ok.push('opt-out removes board entry') : errs.push('opt-out failed');
  await ctx.close();
  // 5: no window.claude (local file) keeps working
  ctx = await b.newContext(); p = await ctx.newPage(); p.on('pageerror', e => errs.push(e.message));
  await p.goto(PAGE + '#team'); await p.waitForTimeout(300);
  const t2 = await p.evaluate(() => [document.getElementById('sync-status').textContent, document.getElementById('team-list').innerText]);
  /browser/.test(t2[0]) && /signed in/.test(t2[1]) ? ok.push('local mode fallback') : errs.push('local ' + JSON.stringify(t2));
  console.log('OK', ok); console.log('ERR', errs.length ? errs : 'none'); await b.close();
})();
