const path = require('path'); const fs = require('fs');
const PAGE = 'file://' + path.join(__dirname, '..', 'clf-c02-study-guide.html');
const OUT = path.join(__dirname, 'output'); fs.mkdirSync(OUT, { recursive: true });
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  const errs = []; const ok = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(PAGE);
  // 1 flashcard scheduling
  await p.evaluate(() => location.hash = 'cards'); await p.click('#fc-start'); await p.click('#fc-flip'); await p.click('#fc-yes');
  const st = await p.evaluate(() => { const s = JSON.parse(localStorage.getItem('clf-c02-guide-v1')); const v = Object.values(s.cards)[0]; return { box: v.box, inDays: Math.round((v.due - Date.now()) / 86400000) }; });
  (st.box === 2 && st.inDays === 1) ? ok.push('flashcard new→box2 (1 day)') : errs.push('flashcard schedule ' + JSON.stringify(st));
  // 5 space twice does not grade
  await p.keyboard.press(' '); await p.keyboard.press(' ');
  const flippedStill = await p.evaluate(() => !!document.querySelector('#fc-yes'));
  flippedStill ? ok.push('space twice keeps card open') : errs.push('space twice graded the card');
  await p.click('#fc-stop');
  // 3 decoder highlight
  await p.evaluate(() => location.hash = 'decoder'); await p.fill('#dec-search', 'app ar');
  const broken = await p.evaluate(() => /ark>|&lt;mark/.test(document.getElementById('dec-list').innerHTML.replace(/<mark>|<\/mark>/g, '')) || /ark&gt;/.test(document.getElementById('dec-list').innerHTML));
  !broken ? ok.push('decoder multiword highlight clean') : errs.push('decoder highlight broken');
  // 4 focus retention on MR quick check: find a chapter whose quick check is MR by forcing several "Another question"
  await p.evaluate(() => location.hash = 't-iam');
  let found = false;
  for (let i = 0; i < 40 && !found; i++) {
    const n = await p.$$eval('#t-iam .qc .opt', els => els.length);
    if (n === 5) { found = true; await p.focus('#t-iam .qc .opt[data-k="0"]'); await p.keyboard.press(' ');
      const f = await p.evaluate(() => document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.k : null);
      f === '0' ? ok.push('MR quick check keeps focus') : errs.push('MR focus lost: ' + f); break; }
    await p.click('#t-iam .qc .opt[data-k="0"]'); const multi = await p.$('#t-iam .qc [data-check]'); if (multi) { await p.click('#t-iam .qc .opt[data-k="1"]'); await p.click('#t-iam .qc [data-check]'); }
    await p.click('#t-iam .qc [data-next]');
  }
  if (!found) errs.push('no MR quick check found in 40 tries');
  // 2 exam not discarded by topic practice
  await p.evaluate(() => location.hash = 'practice'); await p.waitForTimeout(100);
  await p.click('#p-sel-all'); await p.click('#pm-exam'); await p.click('#p-start');
  await p.keyboard.press('a'); await p.keyboard.press('ArrowRight'); await p.keyboard.press('a');
  await p.evaluate(() => location.hash = 't-s3'); await p.waitForTimeout(100);
  await p.click('#t-s3 [data-practice]');
  await p.waitForTimeout(150);
  const st2 = await p.evaluate(() => ({ quiz: !document.getElementById('p-quiz').hidden, timer: !document.getElementById('p-timer').hidden, notice: !document.getElementById('p-notice').hidden, count: document.getElementById('p-qcount').textContent }));
  (st2.quiz && st2.timer && st2.notice && /of 65/.test(st2.count)) ? ok.push('exam kept when starting topic practice') : errs.push('exam discarded ' + JSON.stringify(st2));
  // 9 quitting an exam doesn't record history
  await p.click('#p-quit'); await p.click('#p-quit-yes');
  const hist = await p.evaluate(() => JSON.parse(localStorage.getItem('clf-c02-guide-v1')).exams.length);
  hist === 0 ? ok.push('left exam not recorded') : errs.push('left exam recorded in history');
  // topic selection unchanged after topic practice
  await p.click('#p-back'); const sel = await p.$$eval('#p-topics .chip[aria-pressed="true"]', e => e.length);
  sel === 27 ? ok.push('topic selection kept') : errs.push('topic selection changed: ' + sel);
  // compare jump stays on compare view
  await p.evaluate(() => location.hash = 'compare'); await p.click('[data-scroll="c-cost"]'); await p.waitForTimeout(400);
  const still = await p.evaluate(() => !document.getElementById('v-compare').hidden && location.hash === '#compare');
  still ? ok.push('compare jump stays') : errs.push('compare jump changed view');
  console.log('OK:', ok); console.log('ERR:', errs.length ? errs : 'none');
  await b.close();
})();
