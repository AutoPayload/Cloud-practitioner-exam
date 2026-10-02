const path = require('path'); const fs = require('fs');
const PAGE = 'file://' + path.join(__dirname, '..', 'clf-c02-study-guide.html');
const OUT = path.join(__dirname, 'output'); fs.mkdirSync(OUT, { recursive: true });
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
(async () => {
  const b = await chromium.launch();
  const errs = [];
  for (const [w, scheme] of [[400,'light'],[1280,'dark']]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 }, colorScheme: scheme });
    p.on('pageerror', e => errs.push(w+' '+e.message));
    p.on('console', m => { if (m.type()==='error' && !/ERR_CERT|net::/.test(m.text())) errs.push(w+' console '+m.text()); });
    await p.goto(PAGE);
    const over = async (tag) => { const sw = await p.evaluate(() => document.documentElement.scrollWidth); if (sw > w) errs.push(`${w} overflow ${tag}: ${sw}`); };
    await p.screenshot({ path: path.join(OUT, `home-${w}.png`), fullPage: false }); await over('home');
    for (const v of ['method','skills','topics','decoder','compare','cards','practice','cheat']) {
      await p.evaluate(v => location.hash = v, v); await p.waitForTimeout(150); await over(v);
      const vis = await p.evaluate(v => !document.getElementById('v-'+v).hidden, v); if (!vis) errs.push(`${w} view not visible ${v}`);
    }
    // every chapter
    const keys = await p.evaluate(() => [...document.querySelectorAll('article.chapter')].map(a => a.id));
    for (const id of keys) { await p.evaluate(id => location.hash = id, id); await p.waitForTimeout(60); await over(id);
      const ok = await p.evaluate(id => !document.getElementById(id).hidden && !!document.querySelector('#'+id+' .qc .qcard'), id); if (!ok) errs.push(`${w} chapter/quick check missing ${id}`); }
    // quick check answer in s3 chapter
    await p.evaluate(() => location.hash = 't-s3'); await p.waitForTimeout(100);
    await p.click('#t-s3 .qc .opt[data-k="0"]').catch(e=>errs.push('qc click '+e.message));
    const fb = await p.isVisible('#t-s3 .qc .feedback').catch(()=>false);
    if (!fb) { const multi = await p.$('#t-s3 .qc [data-check]'); if (multi) { await p.click('#t-s3 .qc .opt[data-k="1"]'); await p.click('#t-s3 .qc [data-check]'); } }
    if (!(await p.isVisible('#t-s3 .qc .feedback'))) errs.push(w+' quick check feedback missing');
    if (w===400) await p.screenshot({ path: path.join(OUT, `chapter-s3-${w}.png`), fullPage: false });
    // decoder search
    await p.evaluate(() => location.hash = 'decoder'); await p.fill('#dec-search', 'PII'); await p.waitForTimeout(100);
    const decN = await p.$$eval('#dec-list .dec', els => els.length); if (decN < 1) errs.push('decoder search empty');
    // flashcards
    await p.evaluate(() => location.hash = 'cards'); await p.waitForTimeout(100);
    await p.click('#fc-start'); await p.click('#fc-flip'); await p.click('#fc-yes'); await p.click('#fc-flip'); await p.click('#fc-no');
    if (w===1280) await p.screenshot({ path: path.join(OUT, `cards-${w}.png`) });
    // practice: multi-response topic session (iam has MR)
    await p.evaluate(() => location.hash = 'practice'); await p.waitForTimeout(100);
    await p.click('#p-sel-none'); await p.click('#pt-iam'); await p.click('#pl-all'); await p.click('#p-start');
    let sawMR = false;
    for (let i = 0; i < 40; i++) {
      const n = await p.$$eval('#p-qhost .opt', els => els.length);
      if (n === 5) { sawMR = true; await p.click('#p-qhost .opt[data-k="0"]'); await p.click('#p-qhost .opt[data-k="1"]');
        const third = await p.click('#p-qhost .opt[data-k="2"]').then(()=>p.$eval('#p-qhost [data-hint]', e=>e.textContent)).catch(()=>'');
        if (!/You can pick 2/.test(third)) errs.push('MR limit hint missing');
        await p.click('#p-check'); if (w===400) await p.screenshot({ path: path.join(OUT, `mr-${w}.png`), fullPage: true }); }
      else await p.click('#p-qhost .opt[data-k="0"]');
      const last = await p.$eval('#p-next', e => e.textContent); await p.click('#p-next'); if (/results/.test(last)) break;
    }
    if (!sawMR) errs.push('no MR seen in iam'); 
    if (!(await p.isVisible('#p-results'))) errs.push(w+' results not shown');
    await p.click('#p-back');
    // exam
    await p.click('#p-sel-all'); await p.click('#pm-exam'); await p.click('#p-start');
    const dist = await p.evaluate(() => { const c={}; document.querySelectorAll('#p-navgrid button').forEach(()=>{}); return null; });
    for (let i = 0; i < 65; i++) { await p.keyboard.press('a'); const n = await p.$$eval('#p-qhost .opt', els => els.length); if (n===5) await p.keyboard.press('b'); if (i<64) await p.keyboard.press('ArrowRight'); }
    await p.click('#p-finish'); await p.click('#p-finish-yes');
    const dbars = await p.$$eval('#p-dbars .tbar', els => els.map(e => e.textContent.replace(/\s+/g,' ')));
    console.log(w, 'exam domain split:', dbars.join(' | '));
    if (w===1280) await p.screenshot({ path: path.join(OUT, `results-${w}.png`) });
    await over('results');
    // home progress after activity
    await p.evaluate(() => location.hash = 'home'); await p.waitForTimeout(100);
    if (w===1280) await p.screenshot({ path: path.join(OUT, `home-after-${w}.png`), fullPage: true });
    await p.close();
  }
  console.log('errors:', errs.length ? errs : 'none');
  await b.close();
})();
