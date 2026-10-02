import io
def patch(path, pairs):
    s = open(path, encoding='utf-8').read()
    for a, b in pairs:
        n = s.count(a)
        assert n == 1, (path, n, a[:90])
        s = s.replace(a, b)
    open(path, 'w', encoding='utf-8').write(s)

# ---------------- shell.html (app bugs) ----------------
patch('shell.html', [
 # 1 flashcards: a new card known on first sight goes to box 2 (1 day)
 ('if (ok) { s.box = Math.min(5, (s.box || 0) + 1);', 'if (ok) { s.box = Math.min(5, Math.max(1, s.box || 0) + 1);'),
 ('`You reviewed ${FC.total} cards: ${FC.got} answers you knew and ${FC.again} to repeat. Missed cards come back in your next review today. Cards you knew come back in 1, 3, 7 and then 21 days.`',
  '`You reviewed ${FC.total} cards with ${FC.got} correct answers and ${FC.again} misses. Missed cards come back in your next review today. Cards you knew come back in 1, 3, 7 and then 21 days.`'),
 # 7 flashcards: Space twice must not grade
 ('if (e.key === " " || e.key === "Enter") { if (!FC.flipped) { e.preventDefault(); FC.flipped = true; drawCard(); } return; }',
  'if (e.key === " " || e.key === "Enter") { if (!FC.flipped) { e.preventDefault(); FC.flipped = true; drawCard(); } else if (e.key === " ") e.preventDefault(); return; }'),
 # 5 decoder highlight
 ('const hl = s => { let out = esc(s); words.forEach(w => { if (w.length > 1) out = out.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&") + ")", "gi"), "<mark>$1</mark>"); }); return out; };',
  'const hl = s => {\n      const ws = words.filter(w => w.length > 1).map(w => w.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&"));\n      if (!ws.length) return esc(s);\n      const re = new RegExp("(" + ws.join("|") + ")", "gi");\n      return String(s).split(re).map((p, i) => i % 2 ? "<mark>" + esc(p) + "</mark>" : esc(p)).join("");\n    };'),
 # 2 + 8 topic practice must not discard a running exam or overwrite the saved topic selection
 ('  function startTopicPractice(k) {\n    store.pTopics = [k]; store.pMode = "practice"; persist();\n    const pool = QB.filter(q => q.t === k);\n    go("practice");',
  '  const examRunning = () => S && !S.done && S.mode === "exam";\n  function showExamNotice() {\n    const n = $("p-notice"); if (!n) return;\n    n.hidden = false; n.textContent = "An exam simulation is in progress. Finish it or leave it before starting another session.";\n    clearTimeout(showExamNotice.t); showExamNotice.t = setTimeout(() => { n.hidden = true; }, 6000);\n  }\n  function startTopicPractice(k) {\n    if (examRunning()) { go("practice"); showExamNotice(); return; }\n    clearInterval(tick); S = null;\n    const pool = QB.filter(q => q.t === k);\n    go("practice");'),
 ('    if (x) { e.preventDefault(); store.pTopics = ORDER.slice(); store.pMode = "exam"; persist(); go("practice"); renderPracticeHome(); }',
  '    if (x) { e.preventDefault(); if (examRunning()) { go("practice"); showExamNotice(); return; } S = null; store.pTopics = ORDER.slice(); store.pMode = "exam"; persist(); go("practice"); renderPracticeHome(); }'),
 # 3, 4, 9 finish(): hide setup, only scroll when visible, only record finished or timed-out exams
 ('  function finish(timeUp) {\n    if (!S || S.done) return;\n    S.done = true; S.timeUp = !!timeUp; S.ended = Date.now();',
  '  function finish(timeUp, quit) {\n    if (!S || S.done) return;\n    S.done = true; S.timeUp = !!timeUp; S.quit = !!quit; S.ended = Date.now();'),
 ('      if (S.deck.length >= 40) { store.exams.push(', '      if (S.deck.length >= 40 && !S.quit) { store.exams.push('),
 ('    $("p-quiz").hidden = true; $("p-results").hidden = false; window.scrollTo(0, 0);\n  }',
  '    $("p-home").hidden = true; $("p-quiz").hidden = true; $("p-results").hidden = false;\n    if (current === "practice") window.scrollTo(0, 0);\n  }'),
 ('      S.deck = keep.map(k => S.deck[k]); S.sel = keep.map(k => S.sel[k]); S.checked = keep.map(() => true); S.flags = keep.map(k => S.flags[k]);\n    }\n    finish(false);',
  '      S.deck = keep.map(k => S.deck[k]); S.sel = keep.map(k => S.sel[k]); S.checked = keep.map(() => true); S.flags = keep.map(k => S.flags[k]);\n    }\n    finish(false, true);'),
 # 9 results: a half-answered multiple-response question is unanswered
 ('    const answered = S.deck.filter((it, k) => S.sel[k].length).length;', '    const answered = S.deck.filter((it, k) => S.sel[k].length === it.q.n).length;'),
 # 6 keep keyboard focus after re-rendering
 ('          if (st.item.q.n === 1) finish(); else draw();\n          return;',
  '          if (st.item.q.n === 1) finish(); else draw();\n          const nb = box.querySelector(\'.opt[data-k="\' + b.dataset.k + \'"]\'); if (nb && !nb.disabled) nb.focus({ preventScroll: true });\n          return;'),
 ('    if (!exam && q.n === 1) { checkCurrent(); return; }\n    renderQ();\n  }',
  '    if (!exam && q.n === 1) { checkCurrent(); return; }\n    renderQ();\n    const nb = document.querySelector(\'#p-qhost .opt[data-k="\' + k + \'"]\'); if (nb) nb.focus({ preventScroll: true });\n  }'),
 # notice element in the quiz view
 ('      <div id="p-qhost"></div>', '      <p class="selhint warn" id="p-notice" hidden role="status"></p>\n      <div id="p-qhost"></div>'),
 # 8 focus ring on nav tabs
 ('.nav a[aria-current="page"] { color: var(--ink); border-bottom-color: var(--accent); }',
  '.nav a[aria-current="page"] { color: var(--ink); border-bottom-color: var(--accent); }\n.nav a:focus-visible { outline-offset: -3px; }'),
 # decoder pills scroll sideways on phones
 ('.dec-list { display: grid; gap: 8px; }', '.dec-list { display: grid; gap: 8px; }\n@media (max-width: 520px) { #dec-cats { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 4px; } #dec-cats .pill { flex: none; } }'),
 # storage check
 ('  function persist() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }',
  '  let storageOK = true;\n  try { localStorage.setItem(KEY + "-t", "1"); localStorage.removeItem(KEY + "-t"); } catch (e) { storageOK = false; }\n  function persist() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }'),
 ('    html += `<p class="small">${readiness()}</p>`;',
  '    html += `<p class="small">${readiness()}</p>`;\n    if (!storageOK) html += `<p class="small" style="color:var(--flag)">This browser is blocking site storage, so your progress will be lost when you close the page.</p>`;'),
])

# ---------------- home.html ----------------
patch('home.html', [
 ('<p class="small">About 16, 20, 22 and 8 of the 65 questions. Security and technology together make up almost two thirds of the exam.</p>',
  '<p class="small">About 16, 19, 22 and 8 of the 65 questions (the exam simulation uses the same split). Security and technology together make up almost two thirds of the exam.</p>'),
 ('<div class="fact"><b>2 types</b><span>1 of 4, or 2 of 5 answers</span></div>', '<div class="fact"><b>2 types</b><span>1 of 4, or 2+ of 5+ answers</span></div>'),
 ('        <li>Where your course notes differ from AWS today, the chapter says so in an amber box like this one.</li>',
  '        <li>Amazon Q Developer (May 2026), Amazon Q Business and Amazon Kendra (July 2026) closed to new customers. QuickSight is now Amazon Quick Sight and AppStream 2.0 is now WorkSpaces Applications. Exam questions still use the older names.</li>\n        <li>Where your course notes differ from AWS today, the chapter says so in an amber box like this one.</li>'),
])

# ---------------- skills.html ----------------
patch('skills.html', [
 ('<li><strong>Retired products</strong> such as Cloud9, CodeStar, Snowcone or the Classic Load Balancer are not good answers for new designs.</li>',
  '<li><strong>Retired or closed products</strong> such as CodeStar and Snowcone (retired), Cloud9 (closed to new customers), and previous-generation options such as the Classic Load Balancer are not good answers for new designs.</li>'),
])

# ---------------- method.html ----------------
patch('method.html', [
 ('<td>Create an S3 bucket, upload an <code>index.html</code>, enable static website hosting, and add a public-read bucket policy.</td>',
  '<td>Create an S3 bucket, upload an <code>index.html</code>, enable static website hosting, turn off Block Public Access for this bucket only, and add a public-read bucket policy. Delete the bucket when you finish.</td>'),
 ('<td>Create a CloudWatch alarm on an instance\'s CPU that sends an email through SNS.</td>',
  '<td>Before you terminate the lab 3 instance, create a CloudWatch alarm on its CPU that sends an email through SNS.</td>'),
])

# ---------------- chapters ----------------
patch('ch_d1.html', [
 ('      <tr><td>Servers, storage, networking</td><td>You</td><td>Provider</td><td>Provider</td><td>Provider</td></tr>\n    </tbody></table></div>\n  </section>',
  '      <tr><td>Servers, storage, networking</td><td>You</td><td>Provider</td><td>Provider</td><td>Provider</td></tr>\n    </tbody></table></div>\n    <p class="small">Even with SaaS, the data you put in and who can see it stay your responsibility. That is why the shared responsibility model always lists customer data on the customer\'s side.</p>\n  </section>'),
 ('Picture six sporks, one per pillar.', 'One letter per pillar.'),
 ('      <tr><td>AWS Migration Hub</td>', '      <tr><td>AWS Schema Conversion Tool / DMS Schema Conversion</td><td>Convert a database schema and code to a different engine (for example Oracle → Aurora PostgreSQL) before DMS moves the data.</td></tr>\n      <tr><td>AWS Migration Hub</td>'),
])
patch('ch_d2.html', [
 ('<li><strong>Opt-in encryption:</strong> EBS volumes, RDS, EFS, Redshift, and SSE-KMS for S3.</li>',
  '<li><strong>Opt-in encryption:</strong> EBS volumes, RDS, EFS, and SSE-KMS for S3. (Your notes also list Redshift; since January 2025 new Redshift warehouses are encrypted by default, but older exam questions may still treat it as opt-in.)</li>'),
 ('A security group is a <strong>bouncer with a guest list</strong>', 'A security group is a <strong>door guard with a guest list</strong>'),
 ('<code>Version</code> is always <code>"2012-10-17"</code>.</p>',
  '<code>Version</code> is always <code>"2012-10-17"</code>.</p>\n    <p><strong>Policy types:</strong> <em>AWS managed</em> (ready-made by AWS, such as ReadOnlyAccess), <em>customer managed</em> (you write it and reuse it), and <em>inline</em> (embedded in one user, group or role). Prefer managed policies, narrowed to least privilege.</p>'),
 ('so it is unlikely to be the answer to a root-only question today.</p></div>',
  'so it is unlikely to be the answer to a root-only question today. AWS Directory Service <strong>Simple AD</strong> stopped accepting new customers on July 30, 2026; AWS suggests Managed Microsoft AD or AD Connector instead.</p></div>'),
 ('      <tr><td>AWS Trusted Advisor</td><td>Checks your account against best practices, including security checks such as open ports, root MFA and public buckets.</td></tr>\n    </tbody></table></div>\n  </section>',
  '      <tr><td>AWS Trusted Advisor</td><td>Checks your account against best practices, including security checks such as open ports, root MFA and public buckets.</td></tr>\n    </tbody></table></div>\n    <p><strong>Where to find security information:</strong> the AWS Security Center (aws.amazon.com/security), the AWS Security Blog, the Knowledge Center and re:Post. Third-party security tools are sold in AWS Marketplace.</p>\n  </section>'),
])
patch('ch_d3a.html', [
 ('  <div class="callout trap"><span class="ct">Don\'t confuse</span><p>A load balancer <strong>spreads</strong> traffic but never adds instances.',
  '  <div class="callout new"><span class="ct">Your notes differ</span><p>Your notes say the Classic Load Balancer was retired in 2023. What retired was EC2-Classic networking. The Classic Load Balancer still exists as a previous-generation option, so prefer an ALB or NLB.</p></div>\n  <div class="callout trap"><span class="ct">Don\'t confuse</span><p>A load balancer <strong>spreads</strong> traffic but never adds instances.'),
])
patch('ch_d3b.html', [
 ('      <tr><td>Amazon OpenSearch Service</td><td>Search and log analytics (the successor of Elasticsearch on AWS).</td></tr>',
  '      <tr><td>Amazon OpenSearch Service</td><td>Search and log analytics (the successor of Elasticsearch on AWS).</td></tr>\n      <tr><td>AWS Data Exchange</td><td>Find, subscribe to and use third-party data sets (for example financial or weather data) in AWS.</td></tr>'),
 ('<strong>Athena</strong>, goddess of wisdom, answers questions about S3.</p></div>',
  '<strong>Athena</strong>, goddess of wisdom, answers questions about S3.</p></div>\n  <div class="callout new"><span class="ct">Changed recently</span><p>In October 2025 Amazon QuickSight became <strong>Amazon Quick Sight</strong>, part of Amazon Quick. It is the same dashboard service, and exam questions still say QuickSight. Amazon Timestream for LiveAnalytics closed to new customers in June 2025; new customers use Timestream for InfluxDB.</p></div>'),
])
patch('ch_d3c.html', [
 ('      <tr><td>Amazon Kinesis</td><td>Stream</td>', '      <tr><td>Amazon MSK</td><td>Managed Kafka</td><td>Managed Apache Kafka. Pick it when a company already uses Kafka for streaming.</td></tr>\n      <tr><td>Amazon Kinesis</td><td>Stream</td>'),
 ('<em>Your account health</em> (formerly Personal Health Dashboard) shows events that affect <em>your</em> resources, like scheduled maintenance.</td></tr>',
  '<em>Your account health</em> (formerly Personal Health Dashboard) shows events that affect <em>your</em> resources, like scheduled maintenance. The AWS Health API gives the same events programmatically (Business-level support or higher).</td></tr>'),
 ('      <tr><td>AWS Infrastructure Composer</td><td>Design serverless apps visually; it generates CloudFormation.</td></tr>',
  '      <tr><td>AWS Infrastructure Composer</td><td>Design serverless apps visually; it generates CloudFormation.</td></tr>\n      <tr><td>AWS AppConfig</td><td>Change application settings and feature flags safely at run time, with gradual rollout and automatic rollback.</td></tr>'),
 ('AWS Cloud9 and CodeStar were discontinued; don\'t pick them.', 'AWS CodeStar was discontinued in July 2024, and AWS Cloud9 closed to new customers the same month; don\'t pick them.'),
 ('<p>Amazon Bedrock and Amazon Q are on the current in-scope service list for CLF-C02, so expect them to appear as answers for generative AI questions.</p></div>',
  '<p>Amazon Bedrock and Amazon Q are on the current in-scope service list for CLF-C02, so expect them to appear as answers for generative AI questions.</p></div>\n  <div class="callout new"><span class="ct">Changed recently</span><p>Amazon Q Developer stopped accepting new sign-ups in May 2026 (AWS now offers Kiro for AI coding). Amazon Q Business and Amazon Kendra closed to new customers in July 2026 (AWS points to Amazon Quick and Amazon Bedrock knowledge bases). Existing customers keep using them, and exam questions still use these names as answers.</p></div>'),
 ('      <tr><td>Amazon AppStream 2.0</td><td>Streams <em>one desktop application</em> to a web browser.</td></tr>',
  '      <tr><td>Amazon AppStream 2.0</td><td>Streams <em>one desktop application</em> to a web browser. Now called <strong>Amazon WorkSpaces Applications</strong>.</td></tr>\n      <tr><td>Amazon WorkSpaces Secure Browser</td><td>A managed, disposable web browser for safely reaching internal websites and SaaS apps (formerly WorkSpaces Web).</td></tr>'),
])
patch('ch_d4.html', [
 ('      <tr><td>SageMaker AI Savings Plans</td><td class="num">up to 64%</td><td>SageMaker AI usage</td></tr>',
  '      <tr><td>SageMaker AI Savings Plans</td><td class="num">up to 64%</td><td>SageMaker AI usage</td></tr>\n      <tr><td>Database Savings Plans (December 2025)</td><td class="num">up to 35%</td><td>1-year commitment across RDS, Aurora, DynamoDB, ElastiCache and other AWS databases, any engine, size or Region</td></tr>'),
 ('<td>Custom pricing and billing views, for resellers or internal chargeback.</td>', '<td>Custom pricing and billing views, for resellers or to bill each internal team for its own usage.</td>'),
 ('      <tr><td>AWS Partner Network (APN)</td><td>Consulting and technology partners that help you build and migrate.</td></tr>',
  '      <tr><td>AWS Partner Network (APN)</td><td>Consulting and technology partners (system integrators and software vendors) that help you build and migrate. Partners get training, certification and other benefits.</td></tr>'),
 ('      <tr><td>AWS Skill Builder, whitepapers, Solutions Library, blogs</td><td>Free training, best-practice papers and ready-made reference solutions.</td></tr>',
  '      <tr><td>AWS Skill Builder, whitepapers, Solutions Library, blogs</td><td>Free training, best-practice papers and ready-made reference solutions.</td></tr>\n      <tr><td>AWS Prescriptive Guidance</td><td>Free AWS-written strategies, guides and patterns for migration and modernization.</td></tr>\n      <tr><td>AWS Activate</td><td>A program for startups with AWS credits, technical support, training and community.</td></tr>'),
 ('  <div class="callout hook"><span class="ct">Memory hook</span><p>Response times shrink as plans grow:',
  '  <div class="callout new"><span class="ct">Changed recently</span><p>AWS IQ, a marketplace for hiring AWS Certified freelancers, closed on May 28, 2026. AWS now points customers to AWS Marketplace professional services and the AWS Partner Network. Older exam questions may still mention AWS IQ.</p></div>\n  <div class="callout hook"><span class="ct">Memory hook</span><p>Response times shrink as plans grow:'),
])

# ---------------- questions ----------------
patch('qb_n1.js', [
 ('["Amazon Neptune graphs", "Neptune is a graph database."]', '["Amazon Neptune", "Neptune is a graph database."]'),
])
patch('qb_n2.js', [
 ('["Amazon Kinesis Data Firehose to S3",', '["Amazon Data Firehose to S3",'),
 ('["Amazon Kinesis Data Firehose", "Firehose delivers streams to storage but doesn\'t manage device connections or commands."]', '["Amazon Data Firehose", "Firehose delivers streams to storage but doesn\'t manage device connections or commands."]'),
 ('"Kendra is ML-powered enterprise search that finds answers inside documents from many sources using natural language questions."',
  '"Kendra is ML-powered enterprise search that finds answers inside documents from many sources using natural language questions. (Kendra closed to new customers in July 2026, but exam questions still use it.)"'),
 ('"Amazon Q Developer is AWS\'s generative AI assistant for software development, in the IDE and the AWS console."',
  '"Amazon Q Developer is AWS\'s generative AI assistant for software development, in the IDE and the AWS console. (New sign-ups closed in May 2026 and AWS now offers Kiro, but exam questions still say Amazon Q Developer.)"'),
 ('"Global tables replicate data but still trust a single owner, AWS account and schema."',
  '"Global tables copy one company\'s table to several Regions. The data still has one owner that everyone must trust, so it isn\'t a shared ledger."'),
 ('"DMS migrates databases while the source stays operational and replicates ongoing changes, including between different engines."',
  '"DMS migrates databases while the source stays operational and replicates ongoing changes. For a different engine, AWS SCT or DMS Schema Conversion converts the schema first."'),
])
patch('qb_n3.js', [
 ('["The Paid plan", "The Paid plan starts charging once credits are used, and an RI is a paid commitment."]',
  '["The Paid plan", "The Paid plan starts charging as soon as your credits are used up, so it doesn\'t remove the risk of charges."]'),
 ('"Which services can alert a company before its AWS spending passes a threshold it sets? (Select TWO.)"',
  '"Which services can send an alert when a company\'s AWS spending passes an amount that the company sets? (Select TWO.)"'),
 ('["A minimum amount of S3 storage", "Savings Plans cover compute such as EC2, Fargate, Lambda and SageMaker, not S3 storage."]',
  '["A minimum amount of S3 storage", "Savings Plans cover compute (EC2, Fargate, Lambda), SageMaker AI and, since December 2025, databases. They don\'t cover S3 storage."]'),
 ('"Spot uses spare capacity, and you get a two-minute warning. AWS can reclaim it with a two-minute notice, which is why Spot suits fault-tolerant work."',
  '"Spot uses spare EC2 capacity. AWS can take it back with a two-minute warning, which is why Spot suits fault-tolerant work. (Your notes describe the older bidding model: an instance can also be stopped if you set a maximum price and the Spot price rises above it.)"'),
 ('["Cost optimization", "Cost optimization is a Trusted Advisor category."]', '["Operational excellence", "Operational excellence is a Trusted Advisor category."]'),
 ('"Billing Conductor creates custom billing groups and pricing rules, for resellers or internal chargeback."',
  '"Billing Conductor creates custom billing groups and pricing rules, for resellers or to bill each internal team for its own usage."'),
])

# ---------------- decoder + cards ----------------
patch('decoder.js', [
 ('"Up to 72% off for a 1- or 3-year commitment to an instance configuration.", "a discount for steady 24/7 use over 1 or 3 years");',
  '"Up to 72% off for a 1- or 3-year commitment to an instance configuration.", "reserve a specific instance type in a Region for 1 or 3 years at a discount");'),
 ('"Archive storage with retrieval from minutes to 12 hours; free bulk retrieval.", "archives where retrieval in hours is acceptable");',
  '"Archive storage with retrieval from minutes to 12 hours; free bulk retrieval.", "archives you may need back within minutes to a few hours, once or twice a year");'),
 ('D("Amazon Kendra", "AI and ML", "ml", "ML-powered enterprise search with natural-language questions.", "employees ask questions and get answers from company documents");',
  'D("Amazon Kendra", "AI and ML", "ml", "ML-powered enterprise search with natural-language questions (closed to new customers in July 2026).", "an intelligent search engine for company documents");'),
 ('D("Amazon Q", "AI and ML", "ml", "Generative AI assistant for developers and businesses.", "an AI assistant that writes code or answers questions about company data");',
  'D("Amazon Q", "AI and ML", "ml", "Generative AI assistant for developers and businesses (Q Developer closed to new sign-ups in May 2026, Q Business in July 2026).", "a generative AI chat assistant for developers and employees");'),
 ('"Custom billing groups and rates for resellers or chargeback."', '"Custom billing groups and rates for resellers or internal team billing."'),
 ('D("Amazon AppStream 2.0", "End-user computing", "other", "Streams desktop applications to a browser.",', 'D("Amazon AppStream 2.0", "End-user computing", "other", "Streams desktop applications to a browser (now named WorkSpaces Applications).",'),
 ('D("Amazon QuickSight", "Analytics", "db", "Serverless business intelligence dashboards.",', 'D("Amazon QuickSight", "Analytics", "db", "Serverless business intelligence dashboards (now Amazon Quick Sight).",'),
 ('D("Amazon Timestream", "Database", "db", "Serverless time-series database.",', 'D("Amazon Timestream", "Database", "db", "Time-series database (for new customers: Timestream for InfluxDB).",'),
])
s = open('decoder.js', encoding='utf-8').read()
s += '''// Added after QA review
D("Amazon MSK", "Application integration", "integration", "Managed Apache Kafka.", "a company already uses Apache Kafka for streaming");
D("AWS Data Exchange", "Analytics", "db", "Find and subscribe to third-party data sets in AWS.", "subscribe to third-party data such as financial or weather data");
D("AWS AppConfig", "Developer tools", "deploy", "Safely change app settings and feature flags at run time.", "roll out a feature flag gradually with automatic rollback");
D("Amazon WorkSpaces Secure Browser", "End-user computing", "other", "A managed, disposable browser for internal websites and SaaS apps.", "a secure browser for reaching internal websites");
D("AWS Activate", "Support and resources", "support", "Startup program with credits, support and training.", "AWS credits and help for a startup");
D("AWS Prescriptive Guidance", "Support and resources", "support", "AWS-written strategies, guides and patterns for migration and modernization.", "AWS-written migration patterns and guides");
D("AWS Schema Conversion Tool", "Migration and transfer", "caf", "Converts a database schema and code to a different engine before migration.", "convert an Oracle schema to PostgreSQL before migrating");
D("AWS Health API", "Management and governance", "monitor", "Programmatic access to AWS Health events (Business-level support or higher).", "read AWS Health events from code");
'''
open('decoder.js', 'w', encoding='utf-8').write(s)
s = open('cards.js', encoding='utf-8').read()
s += 'C("iam", "Name the three kinds of IAM identity-based policies.", "AWS managed (ready-made by AWS), customer managed (you write and reuse it), and inline (embedded in one user, group or role).");\n'
s += 'C("pricing", "What do Database Savings Plans cover?", "Since December 2025: up to 35% off with a 1-year $/hour commitment across RDS, Aurora, DynamoDB, ElastiCache and other AWS databases.");\n'
open('cards.js', 'w', encoding='utf-8').write(s)
print('patched')
