# QA prune plan: CLF-C02 study guide

Prepared 2026-10-01 by the QA reviewer for the fixer agent. Guide folder: `/tmp/claude-0/-home-user-Cloud-practitioner-exam/d417aea2-cff8-55fa-86f4-826cceeb2c14/scratchpad/guide/`.

Goal of every change: more exam value per minute for this learner. They read English as a second language (probably Spanish), studied the course up to Amazon S3, and are short on time. Nothing here adds a new topic. The few additions are one or two lines each and fill gaps the exam tests.

## 0. Summary

### Numbers

Measured by applying this exact plan in memory to the current sources, with the same checks `validate.js` runs. Reading time uses 150 words per minute (a careful second-language reader).

| | Before | After P1 only | After P1 + P2 |
|---|---:|---:|---:|
| Words in the 27 chapters | 12,648 | 12,385 | 12,025 |
| Words in the 5 pages (Start, Study plan, Exam skills, Compare, Cheat sheet) | 5,540 | 4,902 | 4,635 |
| Reading time, whole guide | ~121 min | ~115 min | ~111 min |
| Reading time on the new fast track (Must know chapters in full, only the “How the exam asks” table of Skim chapters, plus Study plan, Exam skills, Compare and Cheat sheet) | n/a | n/a | **~94 min** |
| Practice questions | 437 | 402 | 378 |
| … multiple-response | 24 | 24 | 24 |
| … tagged “Not in your notes” | 26 | 26 | 25 |
| … per domain (D1/D2/D3/D4) | 59/80/245/53 | 59/73/220/50 | 57/70/204/47 |
| Flashcards in total | 330 | 253 | 253 |
| … fact cards (cards.js) | 120 | 85 | 85 |
| … “Which service?” cards made from decoder cues | 210 | 168 | 168 |
| Decoder entries (all stay searchable) | 210 | 210 | 210 |
| Single-answer questions where the correct option is the longest (giveaway signal) | 32% | 33% | 31% |
| One pass through everything (reading + about 1 min per question + about 33 s per flashcard over its reviews) | ~12.3 h | ~10.9 h | ~10.2 h on the fast track |

Chapter word counts fall less than you might expect because TAGS adds one short line to all 27 chapters (about 300 words). The real reading saving comes from the tags themselves: 10 chapters become “read the table only”. The biggest time savings overall are in questions (−59) and flashcards (−77).

### The 5 most important changes

1. **METHOD-1: replace the Study plan with a 10-day fast track** (about 75 minutes a day, then one simulation a day until three in a row at 80%+). It replaces nine learning-science cards, a 4-week plan, a 2-week tip, a daily routine and six labs. It follows the app's chapter order, so “Next →” and the home “Continue” button match the plan. Day 1 starts with the exam-language decision (Spanish is available) and ESL +30.
2. **TAGS: mark every chapter “Must know” (17) or “Skim” (10).** Skim chapters: read the “How the exam asks” table, then practice. HOME-1 explains the tags and links the fast track from the top of the Start page.
3. **Q-…: delete 59 practice questions** (35 P1: trivia, limits, prices, associate-level or exact duplicates; 24 P2: near-duplicates and low-yield). Every topic keeps at least 9 questions; all 24 multiple-response questions stay, and 3 of them get realistic distractors. One question is replaced to cover the classic Free Tier offers, which nothing tested.
4. **Flashcards from 330 to 253** (−23%): delete 35 fact cards (trivia, limits, and cards that repeat a decoder card) and remove the flashcard of 42 niche or obvious decoder entries by setting their cue to "" (they stay searchable).
5. **Remove product-lifecycle notes and dollar prices everywhere, and fix what was misleading:** SKILLS-1 and D3C-4 told the learner never to pick Cloud9/CodeStar; D1-1 the SaaS table said the provider manages your data; CHEAT-2/D3B-4 S3 object size changed from 5 TB to 50 TB, so the learner must accept both; D4-4 the classic Free Tier offers were missing; D4-5 support prices removed and plans shown cheapest first.

### Risky or judgment calls (read before applying)

- **Lifecycle notes are removed on purpose** (Migration Hub, Snowball Edge, Pinpoint, Kendra, Amazon Q, Audit Manager, QuickSight and AppStream renames, CodeCommit, AWS IQ, Database Savings Plans). Exam items do not test product history, and these notes cost reading time. Kept: the two changes that can change an answer (support-plan names; S3 maximum object size) and one note that Support-plan changes are no longer root-only. I checked these three against AWS pages on 2026-10-01: the S3 50 TB announcement (December 2025), the December 2025 support plans announcement (legacy plans run until 1 January 2027), and the IAM/Support docs.
- **Amazon Bedrock:** I could confirm Amazon Q on the current CLF-C02 in-scope list but not Bedrock. D3C-5 removes the callout that claimed both; the table rows for Bedrock and Q stay (one line each, likely distractors).
- **Spanish exam:** confirmed that CLF-C02 is offered in Spanish (Latin America) and Spanish (Spain). “AWS service names stay in English” (SKILLS-8) is the normal practice for localized AWS exams but I did not find an official sentence that says it.
- **What “studied up to S3” covers:** the current Study plan treats Domains 1–2 and EC2 to S3 as already studied (the order of the course notes). In the original course order, Well-Architected, CAF and most security services come after S3. The new fast track does not depend on this: it makes no “review” claims, and marks as new only what is new under both readings.
- **Near-duplicate cuts remove some repetition.** That is intentional: the Missed questions mode and flashcards now do the repeating.
- **Saved progress:** deleted questions and cards simply stop counting (the app filters stats by the current bank). The 3 cue fixes (CUEFIX) reset those 3 cards. Old Study-plan ticks (keys w1a…w4f) are ignored; the new checklist uses f1a…f11c. No change to `shell.html` is needed.

### How to apply

1. Work through the sections in this order. Inside a file, apply the changes from top to bottom: a few later anchors assume earlier changes (SKILLS-6 and SKILLS-7 after SKILLS-5; D1-2 after D1-1).
2. Every anchor is exact text. Each one was checked to occur **exactly once** in its file at the moment it is applied, both for “P1 + P2 in order” and for “P1 only”. Search for the exact text; do not use line numbers.
3. **DELETE (whole lines)**: remove the complete line(s) that contain the anchor, including the line break, so no empty line is left. **REPLACE (whole lines)**: replace those complete lines with the new text, keeping the indentation shown. **REPLACE (exact text)**: replace only the quoted text inside the line.
4. Questions are identified by the start of the stem, which is unique in that file. DELETE a question = remove its whole `Q(...)` block, from the line that starts with `Q(` through its closing line (`]);` or `], 2);`).
5. P1 = do it (clear time saving or correctness). P2 = nice to have. P1 changes never depend on P2 changes.
6. When done, run `python3 build_guide.py && node validate.js` in the guide folder and compare with section 9.

## 1. method.html (Study plan page)

#### METHOD-1 · P1 · REPLACE (whole file)
File: `method.html`

Why: The page had nine learning-science cards, a 4-week plan, a 2-week tip, a daily routine and six labs (about 1,170 words). A busy learner needs one concrete path. This replaces all of it with a 10-day fast track (about 75 minutes a day) in the same chapter order as the app, so the “Next →” links and the home “Continue” button follow the plan. It keeps the checklist mechanism (new data-plan keys f1a…f11c; old ticks are simply ignored) and the #plan-count counter.

Replace the entire content of `method.html` with:

```html
  <section class="view" id="v-method" hidden aria-labelledby="method-title">
    <div class="read">
      <div class="stack">
        <span class="eyebrow">The fastest path to a pass</span>
        <h1 id="method-title">10-day fast track</h1>
        <p class="lede">About 75 minutes a day for 10 days, then exam simulations until you are ready. Topics you already studied in your course go faster: read them quickly and go straight to the questions. Tick each task when you finish it. Your ticks are saved in this browser.</p>
      </div>

      <section class="stack" aria-labelledby="m-rules">
        <h2 id="m-rules">Four rules that save time</h2>
        <ul class="stack" style="gap:6px">
          <li><strong>Practice more than you read.</strong> A chapter takes 5 to 10 minutes to read. Spend most of your time on questions.</li>
          <li><strong>Answer first, then read why.</strong> After each question, read why the wrong options are wrong. Most of the learning happens there.</li>
          <li><strong>Must know or Skim.</strong> Read <span class="tag good">Must know</span> chapters fully. In <span class="tag">Skim</span> chapters, read the “How the exam asks” table first, and the rest only if something there surprises you.</li>
          <li><strong>Flashcards every day, about 15 minutes.</strong> On the Flashcards page, set “New cards per session” to 40.</li>
        </ul>
      </section>

      <section class="stack" aria-labelledby="m-plan">
        <div class="row between"><h2 id="m-plan">Your 10 days</h2><span class="small" id="plan-count"></span></div>
        <p>“Practice all” means the button at the end of each chapter that starts all of its questions.</p>
        <div class="plan">
          <div class="week"><h4>Day 1 · Cloud concepts <small>about 80 min</small></h4>
            <label class="task"><input type="checkbox" data-plan="f1a" id="plan-f1a"><span>Choose the exam language. The exam is offered in Spanish (Latin America and Spain). If you choose English, request <strong>ESL +30</strong> (30 extra minutes) in your AWS Certification account <em>before</em> you book. Details are on the <a href="#skills">Exam skills</a> page.</span></label>
            <label class="task"><input type="checkbox" data-plan="f1b" id="plan-f1b"><span>Read <a href="#t-concepts">cloud concepts</a>, <a href="#t-wa">Well-Architected</a> and <a href="#t-caf">adoption and migration</a>. Do “Practice all” for each one.</span></label>
            <label class="task"><input type="checkbox" data-plan="f1c" id="plan-f1c"><span>Flashcards, 15 minutes. Select Domains 1 and 2.</span></label>
          </div>
          <div class="week"><h4>Day 2 · Security, part 1 <small>about 80 min</small></h4>
            <label class="task"><input type="checkbox" data-plan="f2a" id="plan-f2a"><span>Read <a href="#t-srm">shared responsibility</a>, <a href="#t-iam">IAM</a>, <a href="#t-netsec">network protection</a> and <a href="#t-crypto">encryption</a>. Do “Practice all” for each one.</span></label>
            <label class="task"><input type="checkbox" data-plan="f2b" id="plan-f2b"><span>Flashcards, 15 minutes. Domains 1 and 2.</span></label>
          </div>
          <div class="week"><h4>Day 3 · Detection and global infrastructure <small>about 70 min</small></h4>
            <label class="task"><input type="checkbox" data-plan="f3a" id="plan-f3a"><span>Read <a href="#t-detect">detection and compliance</a> and <a href="#t-infra">global infrastructure</a>. Skim <a href="#t-edge">DNS and content delivery</a>. Do “Practice all” for all three.</span></label>
            <label class="task"><input type="checkbox" data-plan="f3b" id="plan-f3b"><span>Flashcards, 15 minutes. From today, select all four domains.</span></label>
          </div>
          <div class="week"><h4>Day 4 · Compute <small>about 75 min</small></h4>
            <label class="task"><input type="checkbox" data-plan="f4a" id="plan-f4a"><span>Read <a href="#t-ec2">EC2</a>. Skim <a href="#t-elb">load balancing</a>. Read <a href="#t-containers">containers and serverless</a> (new). Do “Practice all” for all three.</span></label>
            <label class="task"><input type="checkbox" data-plan="f4b" id="plan-f4b"><span>Flashcards, 15 minutes.</span></label>
          </div>
          <div class="week"><h4>Day 5 · Storage <small>about 70 min</small></h4>
            <label class="task"><input type="checkbox" data-plan="f5a" id="plan-f5a"><span>Skim <a href="#t-storage">EBS, EFS and FSx</a>. Read <a href="#t-s3">Amazon S3</a>. Skim <a href="#t-transfer">hybrid storage and transfer</a>. Do “Practice all” for all three.</span></label>
            <label class="task"><input type="checkbox" data-plan="f5b" id="plan-f5b"><span>Flashcards, 15 minutes.</span></label>
          </div>
          <div class="week"><h4>Day 6 · Databases, networking, integration (new) <small>about 75 min</small></h4>
            <label class="task"><input type="checkbox" data-plan="f6a" id="plan-f6a"><span>Read <a href="#t-db">databases and analytics</a>. Skim <a href="#t-network">VPC</a> and <a href="#t-integration">application integration</a>. Do “Practice all” for all three.</span></label>
            <label class="task"><input type="checkbox" data-plan="f6b" id="plan-f6b"><span>Flashcards, 15 minutes.</span></label>
          </div>
          <div class="week"><h4>Day 7 · Operations, AI and other services (new) <small>about 70 min</small></h4>
            <label class="task"><input type="checkbox" data-plan="f7a" id="plan-f7a"><span>Skim <a href="#t-monitor">monitoring</a>, <a href="#t-deploy">deploying and managing</a>, <a href="#t-ml">AI and ML</a> and <a href="#t-other">more services</a>. Do “Practice all” for each one.</span></label>
            <label class="task"><input type="checkbox" data-plan="f7b" id="plan-f7b"><span>Flashcards, 15 minutes.</span></label>
          </div>
          <div class="week"><h4>Day 8 · Billing, pricing and support (new) <small>about 80 min</small></h4>
            <label class="task"><input type="checkbox" data-plan="f8a" id="plan-f8a"><span>Read <a href="#t-pricing">pricing</a>, <a href="#t-accounts">accounts</a>, <a href="#t-costtools">cost tools</a> and <a href="#t-support">support</a>. Do “Practice all” for each one.</span></label>
            <label class="task"><input type="checkbox" data-plan="f8b" id="plan-f8b"><span>Flashcards, 15 minutes.</span></label>
          </div>
          <div class="week"><h4>Day 9 · First exam simulation <small>about 110 min</small></h4>
            <label class="task"><input type="checkbox" data-plan="f9a" id="plan-f9a"><span>Take an <a href="#practice">exam simulation</a>: 65 questions in 90 minutes. Then read the explanation of every question you got wrong.</span></label>
            <label class="task"><input type="checkbox" data-plan="f9b" id="plan-f9b"><span>Flashcards: only the cards that are due.</span></label>
          </div>
          <div class="week"><h4>Day 10 · Fix weak spots <small>about 75 min</small></h4>
            <label class="task"><input type="checkbox" data-plan="f10a" id="plan-f10a"><span>On the Practice exam page, choose “Missed questions” and repeat until the list is empty.</span></label>
            <label class="task"><input type="checkbox" data-plan="f10b" id="plan-f10b"><span>Study the <a href="#compare">Compare</a> page: cover the right column of each table and say the answer out loud.</span></label>
            <label class="task"><input type="checkbox" data-plan="f10c" id="plan-f10c"><span>Reread your two weakest chapters (see “By topic” in your simulation results).</span></label>
          </div>
          <div class="week"><h4>After day 10 · Until you are ready <small>1 simulation a day</small></h4>
            <label class="task"><input type="checkbox" data-plan="f11a" id="plan-f11a"><span>One exam simulation a day, then clear the Missed questions it creates. Book the real exam after three simulations in a row at 80% or more.</span></label>
            <label class="task"><input type="checkbox" data-plan="f11b" id="plan-f11b"><span>The day before the exam: read the <a href="#cheat">Cheat sheet</a> and do your due flashcards. No new topics. Sleep well.</span></label>
            <label class="task"><input type="checkbox" data-plan="f11c" id="plan-f11c"><span>Exam day: follow the checklist on the <a href="#skills">Exam skills</a> page.</span></label>
          </div>
        </div>
        <div class="callout tip"><span class="ct">More time?</span><p>With 3 to 4 weeks, spread each day over two days and take one simulation a week. Keep the same order.</p></div>
        <p class="small">Optional, 15 minutes, if you have an AWS account: turn on MFA for the root user and create a monthly budget with an email alert. This protects you from surprise charges. You don't need it to pass.</p>
      </section>
    </div>
  </section>
```

(Keep one empty first line as in the other page files.)

## 2. home.html (Start page)

#### HOME-1 · P1 · REPLACE (whole lines)
File: `home.html`

Why: Puts the fastest path first. The old five steps said chapters take “twenty to thirty minutes each” (they take 5 to 10) and pointed to a 4-week plan. The MIX step is merged into PRACTICE and SIMULATE.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<section class="stack" aria-labelledby="how-title">
      <h2 id="how-title">How to use this guide</h2>
      <p class="lede">Follow the same loop for every chapter. Each step uses a learning technique that research shows works; the <a href="#method">Study plan</a> page explains why.</p>
      <div class="steps">
        <div class="step"><span class="n">STEP 1 · LEARN</span><h4>Read one chapter</h4><p>Short explanations, key facts, the phrases the exam uses, and the traps. Twenty to thirty minutes each.</p><a href="#topics">Open the topics</a></div>
        <div class="step"><span class="n">STEP 2 · RECALL</span><h4>Answer the quick check</h4><p>Every chapter ends with exam-style questions. Answer before you look at the explanation.</p></div>
        <div class="step"><span class="n">STEP 3 · REPEAT</span><h4>Review due flashcards daily</h4><p>Ten minutes a day. The spacing is automatic: missed cards return today, known ones in 1, 3, 7 and 21 days.</p><a href="#cards">Flashcards</a></div>
        <div class="step"><span class="n">STEP 4 · MIX</span><h4>Practice across topics</h4><p>Mixed practice sessions train you to recognize which service a question is about.</p><a href="#practice">Practice exam</a></div>
        <div class="step"><span class="n">STEP 5 · SIMULATE</span><h4>Take full exams</h4><p>65 questions in 90 minutes. Book the real exam after three simulations in a row at 80% or more.</p><a href="#practice" data-start-exam="1">Set up an exam simulation</a></div>
      </div>
    </section>
```

Replace those whole lines with:

```html
    <section class="stack" aria-labelledby="how-title">
      <h2 id="how-title">How to use this guide</h2>
      <div class="callout tip"><span class="ct">Short on time? Start here</span><p>Follow the <a href="#method">10-day fast track</a>: about 75 minutes a day. Read chapters marked <b>Must know</b> fully. In chapters marked <b>Skim</b>, read the “How the exam asks” table.</p></div>
      <div class="steps">
        <div class="step"><span class="n">STEP 1 · LEARN</span><h4>Read one chapter</h4><p>5 to 10 minutes. Start with the tables: they hold the facts the exam asks about.</p><a href="#topics">Open the topics</a></div>
        <div class="step"><span class="n">STEP 2 · PRACTICE</span><h4>Answer all its questions</h4><p>Use “Practice all” at the end of the chapter. Read why each wrong option is wrong.</p></div>
        <div class="step"><span class="n">STEP 3 · REPEAT</span><h4>Flashcards, 15 minutes a day</h4><p>Missed cards come back today. Known cards come back in 1, 3, 7 and 21 days.</p><a href="#cards">Flashcards</a></div>
        <div class="step"><span class="n">STEP 4 · SIMULATE</span><h4>Take full exams</h4><p>65 questions in 90 minutes. Book the real exam after three simulations in a row at 80% or more.</p><a href="#practice" data-start-exam="1">Set up an exam simulation</a></div>
      </div>
    </section>
```

#### HOME-2 · P2 · DELETE (whole lines)
File: `home.html`

Why: The “What's in the guide” cards repeat the navigation bar that is always visible at the top. Less scrolling before the fast-track link.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<section class="stack" aria-labelledby="map-title">
      <h2 id="map-title">What's in the guide</h2>
      <div class="cards">
        <a class="card" href="#method" style="text-decoration:none;color:inherit"><h4>Study plan</h4><p>The study method and a 4-week plan with a checklist that remembers your progress.</p></a>
        <a class="card" href="#skills" style="text-decoration:none;color:inherit"><h4>Exam skills</h4><p>How questions are built, the words that change the answer, a 5-step method, worked examples, and exam day.</p></a>
        <a class="card" href="#topics" style="text-decoration:none;color:inherit"><h4>Topics</h4><p>27 chapters covering all four domains, with a quick check at the end of each.</p></a>
        <a class="card" href="#decoder" style="text-decoration:none;color:inherit"><h4>Service decoder</h4><p>Search a keyword from a question and find the service it points to.</p></a>
        <a class="card" href="#compare" style="text-decoration:none;color:inherit"><h4>Compare</h4><p>Side-by-side tables for the service pairs the exam loves to mix up.</p></a>
        <a class="card" href="#cheat" style="text-decoration:none;color:inherit"><h4>Cheat sheet</h4><p>Numbers, rules and one-liners to review the day before the exam.</p></a>
      </div>
    </section>
```

Delete those lines completely (including the line break, so no empty line is left).

#### HOME-3 · P1 · REPLACE (whole lines)
File: `home.html`

Why: Product-lifecycle news (closed to new customers, renamed services, dates) does not change which answer is correct, so it costs reading time for nothing. The support-plan change is kept because it can change an answer. The last bullet promised amber boxes in chapters; most of them are deleted by this plan.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="callout new"><span class="ct">Updated for 2026</span>
      <ul>
        <li>AWS support plans changed in December 2025 (Business Support+, Enterprise, Unified Operations). The guide teaches the classic and the new lineup.</li>
        <li>Amazon Bedrock and Amazon Q (generative AI) are in scope for CLF-C02.</li>
        <li>S3's maximum object size is now 50 TB; Snowball Edge, Migration Hub, Audit Manager and Pinpoint no longer accept new customers; CodeCommit is fully available again.</li>
        <li>Amazon Q Developer (May 2026), Amazon Q Business and Amazon Kendra (July 2026) closed to new customers. QuickSight is now Amazon Quick Sight and AppStream 2.0 is now WorkSpaces Applications. Exam questions still use the older names.</li>
        <li>Where your course notes differ from AWS today, the chapter says so in an amber box like this one.</li>
      </ul>
    </div>
```

Replace those whole lines with:

```html
    <div class="callout new"><span class="ct">Updated for 2026</span>
      <p>AWS changed its support plans in December 2025. Exam questions may use the classic names (Developer, Business, Enterprise On-Ramp, Enterprise) or the new ones (Business Support+, Enterprise, Unified Operations). The Support chapter covers both.</p>
    </div>
```

## 3. skills.html (Exam skills page)

#### SKILLS-1 · P1 · DELETE (whole lines)
File: `skills.html`

Why: Misleading for the exam. It tells the learner that Cloud9 and CodeStar are “not good answers”, but exam items can still use them (Cloud9 was on the CLF-C02 in-scope list), and an option that matches the need may still be the right answer. Lifecycle status is not tested.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<li><strong>Retired or closed products</strong> such as CodeStar and Snowcone (retired), Cloud9 (closed to new customers), and previous-generation options such as the Classic Load Balancer are not good answers for new designs.</li>
```

Delete those lines completely (including the line break, so no empty line is left).

#### SKILLS-2 · P2 · REPLACE (exact text)
File: `skills.html`

Why: Plain English, shorter.

Find exactly this text:

```html
Knowing the services is half of the job. The other half is reading each question the way it was written: find what is really asked, spot the word that decides the answer, and eliminate the traps. This page teaches that skill.
```

Replace it with:

```html
Knowing the services is half of the job. The other half is reading the question well: find what is asked, spot the word that decides the answer, and remove the traps.
```

#### SKILLS-3 · P2 · REPLACE (exact text)
File: `skills.html`

Why: Plain English (the “colour them in your head” image is hard for a non-native reader; it was also the only British spelling).

Find exactly this text:

```html
Almost every question has the same three parts. Colour them in your head as you read.
```

Replace it with:

```html
Almost every question has the same three parts. Look for them as you read.
```

#### SKILLS-4 · P2 · REPLACE (exact text)
File: `skills.html`

Why: Plain English: “cross out”, “over-engineered” are harder words; the list is also one item shorter.

Find exactly this text:

```html
<li><strong>Eliminate.</strong> Cross out options from the wrong category (a database for a networking need), services that don't do that job, answers that are true but don't answer the question, and over-engineered solutions.</li>
```

Replace it with:

```html
<li><strong>Eliminate.</strong> Remove options from the wrong category (for example a database when the need is networking), options that are true but don't answer the question, and solutions that are too complicated.</li>
```

#### SKILLS-5 · P2 · DELETE (whole lines)
File: `skills.html`

Why: This is the <details> block whose number badge is 3 (the root-user example). Worked example 3 is word for word the same as the bank question “Which actions follow AWS best practices for protecting the root user? (Select TWO.)” (qb_n3.js). The learner will meet it in practice anyway.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<details class="ritem">
          <summary><span class="res" style="background:var(--accent-soft);color:var(--accent)">3</span><span class="s">Which actions should a company take to protect its AWS account root user? (Select TWO.) <small>A. Enable MFA on the root user · B. Share the root password with the admin team · C. Delete any root user access keys · D. Use the root user for daily administration · E. Attach an IAM policy to the root user</small></span></summary>
          <div class="rbody"><ol><li>Multiple response: exactly two answers, each correct by itself.</li><li>B and D break best practices. E is impossible: you can't attach IAM policies to the root user.</li><li><strong>Answer: A and C.</strong> Protect root with MFA and don't keep access keys for it.</li></ol></div>
        </details>
```

Delete those lines completely (including the line break, so no empty line is left).

#### SKILLS-6 · P2 · REPLACE (exact text)
File: `skills.html`

Why: Renumber after SKILLS-5 (example 4 becomes 3).

Find exactly this text:

```html
color:var(--accent)">4</span>
```

Replace it with:

```html
color:var(--accent)">3</span>
```

#### SKILLS-7 · P2 · REPLACE (exact text)
File: `skills.html`

Why: Renumber after SKILLS-5 (example 5 becomes 4).

Find exactly this text:

```html
color:var(--accent)">5</span>
```

Replace it with:

```html
color:var(--accent)">4</span>
```

#### SKILLS-8 · P1 · REPLACE (whole lines)
File: `skills.html`

Why: For this learner the language choice is the highest-value exam-day decision, and it was the last bullet of the card. The fast track (METHOD-1, day 1) points here.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="card"><h4>Before you book</h4><ul>
            <li>Create your AWS Certification account and schedule with Pearson VUE, at a test center or online.</li>
            <li>If English isn't your first language and you take the exam in English, request <strong>ESL +30</strong> (30 extra minutes) in your account <em>before</em> you schedule. You request it once, and it applies to all future exams.</li>
            <li>The exam is also offered in Spanish (Latin America and Spain) and other languages.</li>
          </ul></div>
```

Replace those whole lines with:

```html
          <div class="card"><h4>Before you book</h4><ul>
            <li>Create your AWS Certification account and schedule with Pearson VUE, at a test center or online.</li>
            <li><strong>Choose the language you read fastest.</strong> The exam is offered in Spanish (Latin America and Spain). AWS service names stay in English.</li>
            <li>If you take the exam in English and it isn't your first language, request <strong>ESL +30</strong> (30 extra minutes) in your account <em>before</em> you schedule. You request it once, and it applies to all future exams.</li>
          </ul></div>
```

#### SKILLS-9 · P2 · DELETE (whole lines)
File: `skills.html`

Why: Result emails, badges and the 50% voucher do not help anyone pass. Keep the booking, online-exam and test-center cards and the checklist.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="card"><h4>After the exam</h4><ul>
            <li>The official result arrives by email within five business days, with a score report by domain.</li>
            <li>Passed: you get a digital badge, the certification is valid for 3 years, and you get a 50% discount voucher for your next AWS exam.</li>
            <li>Didn't pass: you can retake after 14 days (you pay again). Use the domain report to focus.</li>
          </ul></div>
```

Delete those lines completely (including the line break, so no empty line is left).

## 4. compare.html (Compare page)

#### CMP-1 · P2 · REPLACE (exact text)
File: `compare.html`

Why: Plain English (“rides the backbone” is an idiom).

Find exactly this text:

```html
2 static anycast IPs, traffic rides the AWS backbone, fast failover
```

Replace it with:

```html
2 static anycast IPs, traffic travels on the AWS network, fast failover
```

#### CMP-2 · P2 · REPLACE (exact text)
File: `compare.html`

Why: “Free tier” is easy to confuse with the AWS Free Tier offer.

Find exactly this text:

```html
<td>Free tier, no automatic rotation</td>
```

Replace it with:

```html
<td>Free (standard parameters), no automatic rotation</td>
```

## 5. cheat.html (Cheat sheet)

#### CHEAT-1 · P1 · DELETE (whole lines)
File: `cheat.html`

Why: Exact dollar price, not asked. What matters about Shield Advanced (response team, cost protection) is in the chapter and on the security one-liners card.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<li>Shield Advanced <b>$3,000/month</b> per organization</li>
```

Delete those lines completely (including the line break, so no empty line is left).

#### CHEAT-2 · P1 · REPLACE (exact text)
File: `cheat.html`

Why: The limit changed in December 2025 (verified on aws.amazon.com). Older exam items may still say 5 TB, so the learner should accept either. The multipart detail is dropped (beyond CLF level).

Find exactly this text:

```html
<li>S3 max object <b>50 TB</b>; multipart required above <b>5 GB</b></li>
```

Replace it with:

```html
<li>S3 max object <b>50 TB</b> (older questions may say <b>5 TB</b>)</li>
```

#### CHEAT-3 · P2 · REPLACE (exact text)
File: `cheat.html`

Why: Plain English (“in one breath” is an idiom).

Find exactly this text:

```html
<h4>Shared responsibility in one breath</h4>
```

Replace it with:

```html
<h4>Shared responsibility in four lines</h4>
```

## 6. Chapters (ch_d1.html … ch_d4.html)

### TAGS · P1 · ADD a “Must know” or “Skim” line to all 27 chapters

Why: the learner needs to know where to spend time before opening a chapter. “Skim” chapters are 1–2 exam questions each, or their “How the exam asks” table already holds what is tested. All of Domain 2 (30% of the exam) and all of Domain 4 (short, new to this learner, 12%) are Must know. No CSS change: `.tag` and `.tag.good` already exist.

In each chapter, find the `<h2>` line below and insert **one new line directly after it** (4 spaces of indentation, before the `<p class="lede">` line).

For **Must know** insert:

```html
    <p class="small"><span class="tag good">Must know</span> Read the whole chapter.</p>
```

For **Skim** insert:

```html
    <p class="small"><span class="tag">Skim</span> Read the “How the exam asks” table first. Read the rest only if something there surprises you.</p>
```

| File | Chapter | Find this line (exact) | Tag | Words before → after (P1+P2) |
|---|---|---|---|---|
| ch_d1.html | concepts | `<h2>Cloud concepts and economics</h2>` | Must know | 924 → 870 |
| ch_d1.html | wa | `<h2>Well-Architected Framework</h2>` | Must know | 410 → 416 |
| ch_d1.html | caf | `<h2>Cloud adoption and migration</h2>` | Must know | 538 → 507 |
| ch_d2.html | srm | `<h2>Shared responsibility model</h2>` | Must know | 379 → 385 |
| ch_d2.html | iam | `<h2>IAM and identity</h2>` | Must know | 738 → 681 |
| ch_d2.html | netsec | `<h2>Network and application protection</h2>` | Must know | 487 → 489 |
| ch_d2.html | crypto | `<h2>Encryption and secrets</h2>` | Must know | 430 → 391 |
| ch_d2.html | detect | `<h2>Detection, audit and compliance</h2>` | Must know | 469 → 427 |
| ch_d3a.html | infra | `<h2>Global infrastructure</h2>` | Must know | 449 → 455 |
| ch_d3a.html | edge | `<h2>DNS, content delivery and edge</h2>` | Skim | 375 → 369 |
| ch_d3a.html | ec2 | `<h2>EC2 and purchasing options</h2>` | Must know | 544 → 503 |
| ch_d3a.html | elb | `<h2>Load balancing and Auto Scaling</h2>` | Skim | 334 → 310 |
| ch_d3a.html | containers | `<h2>Containers and serverless</h2>` | Must know | 392 → 356 |
| ch_d3b.html | storage | `<h2>EBS, EFS and FSx</h2>` | Skim | 369 → 361 |
| ch_d3b.html | s3 | `<h2>Amazon S3</h2>` | Must know | 616 → 618 |
| ch_d3b.html | transfer | `<h2>Hybrid storage, transfer and backup</h2>` | Skim | 409 → 355 |
| ch_d3b.html | db | `<h2>Databases and analytics</h2>` | Must know | 600 → 553 |
| ch_d3c.html | network | `<h2>VPC and hybrid networking</h2>` | Skim | 381 → 399 |
| ch_d3c.html | integration | `<h2>Application integration</h2>` | Skim | 344 → 362 |
| ch_d3c.html | monitor | `<h2>Monitoring and observability</h2>` | Skim | 328 → 333 |
| ch_d3c.html | deploy | `<h2>Deploying and managing resources</h2>` | Skim | 453 → 398 |
| ch_d3c.html | ml | `<h2>AI and machine learning</h2>` | Skim | 432 → 365 |
| ch_d3c.html | other | `<h2>More services to recognize</h2>` | Skim | 355 → 320 |
| ch_d4.html | pricing | `<h2>Pricing models and free tier</h2>` | Must know | 513 → 483 |
| ch_d4.html | accounts | `<h2>Accounts and governance</h2>` | Must know | 422 → 428 |
| ch_d4.html | costtools | `<h2>Cost management tools</h2>` | Must know | 411 → 417 |
| ch_d4.html | support | `<h2>Support plans and resources</h2>` | Must know | 546 → 474 |

### ch_d1.html

#### D1-1 · P1 · REPLACE (exact text)
File: `ch_d1.html`

Why: Correctness. The table said the provider manages data in SaaS, and the note under it said the opposite. Customer data is always the customer's responsibility (shared responsibility model). This fixes the row so the note (D1-2) can go.

Find exactly this text:

```html
<tr><td>Data</td><td>You</td><td>You</td><td>You</td><td>Provider</td></tr>
```

Replace it with:

```html
<tr><td>Your data and who can access it</td><td>You</td><td>You</td><td>You</td><td>You</td></tr>
```

#### D1-2 · P1 · DELETE (whole lines)
File: `ch_d1.html`

Why: Now said by the table row (D1-1).

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<p class="small">Even with SaaS, the data you put in and who can see it stay your responsibility. That is why the shared responsibility model always lists customer data on the customer's side.</p>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D1-3 · P2 · REPLACE (whole lines)
File: `ch_d1.html`

Why: The agility/elasticity and scalability/elasticity bullets repeat the list just above them (and the Compare page “Cloud vocabulary” table). Keep the one contrast that is not said elsewhere.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="callout trap"><span class="ct">Don't confuse</span>
    <ul>
      <li><strong>Agility vs elasticity.</strong> Agility is how fast you <em>get</em> resources. Elasticity is resources that <em>follow demand</em> automatically.</li>
      <li><strong>Scalability vs elasticity.</strong> Scalability is the <em>ability</em> to handle more load. Elasticity is scaling up <em>and down automatically</em>.</li>
      <li><strong>Economies of scale vs stop guessing capacity.</strong> The first is about AWS's size making prices lower. The second is about matching capacity to your real demand.</li>
    </ul>
  </div>
```

Replace those whole lines with:

```html
  <div class="callout trap"><span class="ct">Don't confuse</span>
    <p><strong>Economies of scale vs stop guessing capacity.</strong> The first is about AWS's size making prices lower. The second is about matching capacity to your real demand.</p>
  </div>
```

#### D1-4 · P1 · DELETE (whole lines)
File: `ch_d1.html`

Why: Lifecycle note (Migration Hub closed to new customers). It does not change the answer: the chapter table still says Migration Hub tracks migrations.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="callout new"><span class="ct">Changed recently</span>
    <p>AWS Migration Hub stopped accepting new customers on November 7, 2025. Existing customers can keep using it, and it may still appear on the exam as the answer for “track migration progress in one place.”</p>
  </div>
```

Delete those lines completely (including the line break, so no empty line is left).

### ch_d2.html

#### D2-1 · P2 · REPLACE (exact text)
File: `ch_d2.html`

Why: Policy grammar (Principal, Condition, the Version date) is beyond CLF level.

Find exactly this text:

```html
<p>A policy statement has: <code>Effect</code> (Allow or Deny), <code>Action</code> (such as <code>s3:GetObject</code>), <code>Resource</code> (which ARN), and optionally <code>Principal</code> and <code>Condition</code>. <code>Version</code> is always <code>"2012-10-17"</code>.</p>
```

Replace it with:

```html
<p>A policy is a JSON document. Each statement has an <code>Effect</code> (Allow or Deny), an <code>Action</code> (such as <code>s3:GetObject</code>) and a <code>Resource</code>.</p>
```

#### D2-2 · P2 · DELETE (whole lines)
File: `ch_d2.html`

Why: Managed vs inline policy types are associate-level detail. The matching flashcard is also deleted (section 8.4, card 34).

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<p><strong>Policy types:</strong> <em>AWS managed</em> (ready-made by AWS, such as ReadOnlyAccess), <em>customer managed</em> (you write it and reuse it), and <em>inline</em> (embedded in one user, group or role). Prefer managed policies, narrowed to least privilege.</p>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D2-3 · P2 · REPLACE (exact text)
File: `ch_d2.html`

Why: Brand names (Gemalto, SurePassID, Authy) are trivia.

Find exactly this text:

```html
<p><strong>MFA devices:</strong> virtual apps (Google Authenticator, Authy), U2F/FIDO security keys (YubiKey), hardware key fobs (Gemalto, SurePassID for GovCloud).</p>
```

Replace it with:

```html
<p><strong>MFA devices:</strong> an authenticator app on a phone, a security key (such as YubiKey), or a hardware key fob.</p>
```

#### D2-4 · P2 · REPLACE (exact text)
File: `ch_d2.html`

Why: Small high-yield addition: activating IAM access to the Billing console is on AWS's current root-only list (checked against the IAM documentation) and was missing.

Find exactly this text:

```html
restore IAM user permissions, view certain tax invoices
```

Replace it with:

```html
restore IAM user permissions, turn on IAM access to the Billing console, view certain tax invoices
```

#### D2-5 · P1 · REPLACE (exact text)
File: `ch_d2.html`

Why: Keeps the one note that can change an answer (verified in the AWS Support docs). Drops the Simple AD lifecycle sentence.

Find exactly this text:

```html
<div class="callout new"><span class="ct">Changed recently</span><p>Your notes list changing the Support plan as root-only. AWS now lets IAM users with the right permissions change it, so it is unlikely to be the answer to a root-only question today. AWS Directory Service <strong>Simple AD</strong> stopped accepting new customers on July 30, 2026; AWS suggests Managed Microsoft AD or AD Connector instead.</p></div>
```

Replace it with:

```html
<div class="callout new"><span class="ct">Your notes differ</span><p>Changing the Support plan is no longer root-only: an IAM user with the right permissions can do it.</p></div>
```

#### D2-6 · P1 · REPLACE (exact text)
File: `ch_d2.html`

Why: Exact dollar price, not asked.

Find exactly this text:

```html
<li><strong>AWS Shield Advanced:</strong> about $3,000 per month per organization. Adds protection
```

Replace it with:

```html
<li><strong>AWS Shield Advanced:</strong> a paid subscription. Adds protection
```

#### D2-7 · P2 · REPLACE (exact text)
File: `ch_d2.html`

Why: Drops a Redshift lifecycle aside.

Find exactly this text:

```html
<li><strong>Opt-in encryption:</strong> EBS volumes, RDS, EFS, and SSE-KMS for S3. (Your notes also list Redshift; since January 2025 new Redshift warehouses are encrypted by default, but older exam questions may still treat it as opt-in.)</li>
```

Replace it with:

```html
<li><strong>Opt-in encryption:</strong> EBS volumes, RDS, EFS, and SSE-KMS for S3.</li>
```

#### D2-8 · P2 · REPLACE (exact text)
File: `ch_d2.html`

Why: Trivia; the exam uses “FIPS 140-2 Level 3”.

Find exactly this text:

```html
FIPS 140-2 Level 3 (newer HSMs: 140-3).
```

Replace it with:

```html
FIPS 140-2 Level 3.
```

#### D2-9 · P2 · REPLACE (exact text)
File: `ch_d2.html`

Why: AWS owned keys and custom key stores are beyond CLF level. Two types are enough for the remaining question.

Find exactly this text:

```html
<p><strong>KMS key types:</strong> <em>customer managed</em> (you create and control, enable or disable, rotation you choose), <em>AWS managed</em> (created for a service in your account, like <code>aws/s3</code>), <em>AWS owned</em> (used by AWS across many accounts, invisible to you), and <em>CloudHSM keys</em> (custom key store).</p>
```

Replace it with:

```html
<p><strong>KMS key types:</strong> <em>customer managed</em> (you create and control them, including rotation) and <em>AWS managed</em> (AWS creates and manages them for a service in your account).</p>
```

#### D2-10 · P1 · DELETE (whole lines)
File: `ch_d2.html`

Why: Lifecycle/rename note (Security Hub CSPM, Audit Manager closed). It does not change any answer.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="callout new"><span class="ct">Changed recently</span><p>In December 2025 AWS renamed the original Security Hub to <strong>Security Hub CSPM</strong> and gave the name Security Hub to a new unified security service. AWS Audit Manager (collects evidence for audits) no longer accepts new customers. Exam questions written earlier still use the old names.</p></div>
```

Delete those lines completely (including the line break, so no empty line is left).

### ch_d3a.html

#### D3A-1 · P2 · DELETE (whole lines)
File: `ch_d3a.html`

Why: DNS record types are associate-level. The alias-record question and flashcard are also removed.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<li><strong>Records:</strong> A (name → IPv4), AAAA (name → IPv6), CNAME (name → another name), <strong>Alias</strong> (name → AWS resource such as a load balancer, CloudFront or S3 website).</li>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D3A-2 · P1 · DELETE (whole lines)
File: `ch_d3a.html`

Why: Instance naming (m5.2xlarge) is trivia; its question and flashcard are also removed.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<li><strong>Instance type:</strong> <code>m5.2xlarge</code> = class <code>m</code>, generation <code>5</code>, size <code>2xlarge</code>.</li>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D3A-3 · P2 · REPLACE (exact text)
File: `ch_d3a.html`

Why: SSH troubleshooting is beyond CLF level.

Find exactly this text:

```html
 Allow rules only; stateful. A <em>timeout</em> means a security group problem; <em>connection refused</em> means the app isn't running.</li>
```

Replace it with:

```html
 Allow rules only; stateful.</li>
```

#### D3A-4 · P2 · REPLACE (exact text)
File: `ch_d3a.html`

Why: FTP port is never the point of a CLF question.

Find exactly this text:

```html
 · 443 HTTPS · 21 FTP.</li>
```

Replace it with:

```html
 · 443 HTTPS.</li>
```

#### D3A-5 · P2 · REPLACE (exact text)
File: `ch_d3a.html`

Why: Leads with the service the exam asks about (Session Manager).

Find exactly this text:

```html
<li><strong>EC2 Instance Connect:</strong> SSH from the browser without managing keys (port 22 must still be open). <strong>Session Manager</strong> (Systems Manager) needs no open ports at all.</li>
```

Replace it with:

```html
<li><strong>Session Manager</strong> (part of Systems Manager) gives a shell on the instance with no open ports and no SSH keys. EC2 Instance Connect is SSH from the browser, so port 22 must be open.</li>
```

#### D3A-6 · P2 · REPLACE (exact text)
File: `ch_d3a.html`

Why: AMI Region scoping is associate-level (its question is removed).

Find exactly this text:

```html
 AMIs are Regional; copy them to use in another Region. <strong>EC2 Image Builder</strong>
```

Replace it with:

```html
 <strong>EC2 Image Builder</strong>
```

#### D3A-7 · P2 · REPLACE (exact text)
File: `ch_d3a.html`

Why: Shorter; removes commentary about the notes.

Find exactly this text:

```html
<p class="small">The notes quote RI discounts of up to 72% and 75% in different places. The exact percentages change over time and are rarely tested. Know the order: Spot is cheapest, then Savings Plans and RIs, then On-Demand, and Dedicated Host costs the most.</p>
```

Replace it with:

```html
<p class="small">Exact percentages are rarely tested. Know the order: Spot is cheapest, then Savings Plans and RIs, then On-Demand. Dedicated Host costs the most.</p>
```

#### D3A-8 · P1 · DELETE (whole lines)
File: `ch_d3a.html`

Why: The table row already says “Previous generation. Don't pick it for new workloads,” which is all the exam needs.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="callout new"><span class="ct">Your notes differ</span><p>Your notes say the Classic Load Balancer was retired in 2023. What retired was EC2-Classic networking. The Classic Load Balancer still exists as a previous-generation option, so prefer an ALB or NLB.</p></div>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D3A-9 · P2 · REPLACE (exact text)
File: `ch_d3a.html`

Why: Simple/step scaling is associate-level (its question is removed).

Find exactly this text:

```html
<li><strong>Scaling policies:</strong> manual · <strong>target tracking</strong> (keep average CPU at 40%) · <strong>simple/step</strong> (a CloudWatch alarm adds 2 instances) · <strong>scheduled</strong> (every Friday at 5 PM) · <strong>predictive</strong> (ML forecasts daily and weekly patterns).</li>
```

Replace it with:

```html
<li><strong>Scaling policies:</strong> <strong>target tracking</strong> (keep average CPU at 40%) · <strong>scheduled</strong> (every Friday at 5 PM) · <strong>predictive</strong> (ML forecasts daily and weekly patterns) · manual.</li>
```

#### D3A-10 · P2 · DELETE (whole lines)
File: `ch_d3a.html`

Why: Repeats the cue table below it and the Compare page compute table.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="tbl wide"><table><thead><tr><th>Need</th><th>EC2</th><th>Lambda</th><th>Batch</th></tr></thead><tbody>
      <tr><td>Runs for hours</td><td>Yes</td><td>No (15 min max)</td><td>Yes</td></tr>
      <tr><td>You manage servers</td><td>Yes</td><td>No</td><td>AWS manages them for you</td></tr>
      <tr><td>Pay when idle</td><td>Yes (while running)</td><td>No</td><td>No (only while jobs run)</td></tr>
      <tr><td>Scales automatically</td><td>With Auto Scaling</td><td>Yes</td><td>Yes</td></tr>
    </tbody></table></div>
```

Delete those lines completely (including the line break, so no empty line is left).

### ch_d3b.html

#### D3B-1 · P2 · REPLACE (exact text)
File: `ch_d3b.html`

Why: Delete-on-termination defaults are associate-level (question and card removed).

Find exactly this text:

```html
 Keeps data after the instance stops. The root volume is deleted on termination by default; extra volumes are kept.</td>
```

Replace it with:

```html
 Keeps data after the instance stops.</td>
```

#### D3B-2 · P2 · REPLACE (exact text)
File: `ch_d3b.html`

Why: Snapshot Archive and Recycle Bin are niche features (their questions and decoder cards are removed).

Find exactly this text:

```html
<td>Point-in-time copies, can be copied across AZs and Regions. <strong>Snapshot Archive</strong> is 75% cheaper (24–72 h to restore). <strong>Recycle Bin</strong> recovers deleted snapshots.</td>
```

Replace it with:

```html
<td>Point-in-time backups. You can copy them to another AZ or Region.</td>
```

#### D3B-3 · P2 · REPLACE (exact text)
File: `ch_d3b.html`

Why: Naming rules are trivia (the bucket-name question is removed).

Find exactly this text:

```html
<li>A <strong>bucket</strong> is created in one Region. By default its name must be globally unique: lowercase, no underscores, not an IP address.</li>
```

Replace it with:

```html
<li>A <strong>bucket</strong> is created in one Region, but by default its name must be unique across all AWS accounts.</li>
```

#### D3B-4 · P1 · REPLACE (exact text)
File: `ch_d3b.html`

Why: Keeps the one lifecycle fact that can change an answer and says plainly which number to accept.

Find exactly this text:

```html
<li>Max object size is <strong>50 TB</strong> (raised from 5 TB in December 2025). Uploads over 5 GB must use <strong>multipart upload</strong>.</li>
```

Replace it with:

```html
<li>Max object size is <strong>50 TB</strong> (it was 5 TB until December 2025, so older questions may say 5 TB). Big files are uploaded in parts (<strong>multipart upload</strong>).</li>
```

#### D3B-5 · P2 · REPLACE (exact text)
File: `ch_d3b.html`

Why: HTTP 403 troubleshooting is beyond CLF level.

Find exactly this text:

```html
<td>Serve HTML, CSS and images directly. A 403 error means the bucket policy doesn't allow public reads.</td>
```

Replace it with:

```html
<td>Serve HTML, CSS and images directly, with no servers.</td>
```

#### D3B-6 · P2 · REPLACE (exact text)
File: `ch_d3b.html`

Why: The transfer-time numbers are trivia; the one-week rule is what questions test.

Find exactly this text:

```html
<p><strong>Rule of thumb:</strong> 10 TB over 1 Gbps takes about 30 hours; 100 TB over 100 Mbps takes about 124 days. If the network transfer would take more than a week, use Snowball. Data transferred <em>into</em> S3 is free.</p>
```

Replace it with:

```html
<p><strong>Rule of thumb:</strong> if moving the data over the network would take more than a week, use Snowball.</p>
```

#### D3B-7 · P1 · DELETE (whole lines)
File: `ch_d3b.html`

Why: Lifecycle note; Snowball stays the offline-transfer answer on the exam.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="callout new"><span class="ct">Changed recently</span><p>Since November 2025, Snowball Edge is only offered to existing customers, and AWS points new customers to DataSync and AWS Data Transfer Terminal (a physical site where you bring your own drives). Snowcone and Snowmobile were retired earlier. Exam questions may still use Snowball as the offline transfer answer.</p></div>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D3B-8 · P2 · DELETE (whole lines)
File: `ch_d3b.html`

Why: Not in the course notes and very unlikely on CLF-C02. It stays in the decoder for search.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<tr><td>Amazon Keyspaces</td><td>Wide column, Cassandra-compatible</td><td>An Apache Cassandra workload.</td></tr>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D3B-9 · P1 · DELETE (whole lines)
File: `ch_d3b.html`

Why: Rename/lifecycle note; exam questions say QuickSight and Timestream.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="callout new"><span class="ct">Changed recently</span><p>In October 2025 Amazon QuickSight became <strong>Amazon Quick Sight</strong>, part of Amazon Quick. It is the same dashboard service, and exam questions still say QuickSight. Amazon Timestream for LiveAnalytics closed to new customers in June 2025; new customers use Timestream for InfluxDB.</p></div>
```

Delete those lines completely (including the line break, so no empty line is left).

### ch_d3c.html

#### D3C-1 · P2 · REPLACE (exact text)
File: `ch_d3c.html`

Why: Health API detail is low-yield.

Find exactly this text:

```html
 like scheduled maintenance. The AWS Health API gives the same events programmatically (Business-level support or higher).</td>
```

Replace it with:

```html
 like scheduled maintenance.</td>
```

#### D3C-2 · P2 · DELETE (whole lines)
File: `ch_d3c.html`

Why: Niche; stays searchable in the decoder.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<tr><td>AWS Infrastructure Composer</td><td>Design serverless apps visually; it generates CloudFormation.</td></tr>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D3C-3 · P2 · DELETE (whole lines)
File: `ch_d3c.html`

Why: Duplicate: Service Catalog is taught in Accounts and governance.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<tr><td>AWS Service Catalog</td><td>A portal of pre-approved CloudFormation products that users can launch safely (see Accounts and governance).</td></tr>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D3C-4 · P1 · DELETE (whole lines)
File: `ch_d3c.html`

Why: Misleading: it says “don't pick” CodeStar and Cloud9. If a question describes a cloud IDE, Cloud9 can still be the intended answer. Lifecycle status is not tested.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="callout new"><span class="ct">Changed recently</span><p>AWS CodeCommit stopped accepting new customers in 2024 but returned to full availability in November 2025, so it is a valid answer again. AWS CodeStar was discontinued in July 2024, and AWS Cloud9 closed to new customers the same month; don't pick them.</p></div>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D3C-5 · P2 · DELETE (whole lines)
File: `ch_d3c.html`

Why: Meta note. Also only half verified: Amazon Q appears on the current in-scope list, but I could not confirm Bedrock there. The table rows for Bedrock and Q stay.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="callout new"><span class="ct">Not in your notes</span><p>Amazon Bedrock and Amazon Q are on the current in-scope service list for CLF-C02, so expect them to appear as answers for generative AI questions.</p></div>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D3C-6 · P1 · DELETE (whole lines)
File: `ch_d3c.html`

Why: Lifecycle note; does not change answers.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="callout new"><span class="ct">Changed recently</span><p>Amazon Q Developer stopped accepting new sign-ups in May 2026 (AWS now offers Kiro for AI coding). Amazon Q Business and Amazon Kendra closed to new customers in July 2026 (AWS points to Amazon Quick and Amazon Bedrock knowledge bases). Existing customers keep using them, and exam questions still use these names as answers.</p></div>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D3C-7 · P2 · REPLACE (exact text)
File: `ch_d3c.html`

Why: Rename note; exam questions say AppStream 2.0.

Find exactly this text:

```html
 to a web browser. Now called <strong>Amazon WorkSpaces Applications</strong>.</td>
```

Replace it with:

```html
 to a web browser.</td>
```

#### D3C-8 · P1 · DELETE (whole lines)
File: `ch_d3c.html`

Why: Lifecycle note; does not change answers.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="callout new"><span class="ct">Changed recently</span><p>Amazon Pinpoint stopped accepting new customers in May 2025, and its campaign features end on October 30, 2026. Its SMS, voice and push features continue as AWS End User Messaging; email moves to Amazon SES. It may still appear on the exam as the marketing-campaign answer.</p></div>
```

Delete those lines completely (including the line break, so no empty line is left).

### ch_d4.html

#### D4-1 · P1 · DELETE (whole lines)
File: `ch_d4.html`

Why: Launched after the exam was written; not on CLF-C02.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<tr><td>Database Savings Plans (December 2025)</td><td class="num">up to 35%</td><td>1-year commitment across RDS, Aurora, DynamoDB, ElastiCache and other AWS databases, any engine, size or Region</td></tr>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D4-2 · P2 · DELETE (whole lines)
File: `ch_d4.html`

Why: Low-yield; the two compute Savings Plans are what questions compare.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<tr><td>SageMaker AI Savings Plans</td><td class="num">up to 64%</td><td>SageMaker AI usage</td></tr>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D4-3 · P1 · REPLACE (exact text)
File: `ch_d4.html`

Why: Removes per-GB dollar prices; keeps the rules that questions test.

Find exactly this text:

```html
<p><strong>Data transfer:</strong> inbound to AWS is free. Between instances in the same AZ over private IPs is free. Across AZs costs about $0.01/GB each way; between Regions about $0.02/GB. Out to the internet is charged, with volume tiers.</p>
```

Replace it with:

```html
<p><strong>Data transfer:</strong> data coming <em>in</em> to AWS is free. Traffic between instances in the same AZ over private IPs is free. Traffic between AZs, between Regions and out to the internet costs money.</p>
```

#### D4-4 · P1 · REPLACE (whole lines)
File: `ch_d4.html`

Why: High-yield gap: the classic Free Tier offer types (Always Free, 12 months free, trials) were missing, and older exam questions use them. The new Free plan is kept in one line, without the credit amounts.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<li>New accounts (since July 2025) get up to <strong>$200 in credits</strong>: $100 at sign-up and up to $100 more for trying services.</li>
      <li><strong>Free plan:</strong> no charges; it ends after 6 months or when the credits run out. <strong>Paid plan:</strong> charges start after the credits are used.</li>
      <li><strong>Always free</strong> offers every month, for example Lambda 1 million requests and 400,000 GB-seconds, and DynamoDB 25 GB.</li>
```

Replace those whole lines with:

```html
      <li><strong>Classic Free Tier</strong> (used in most exam questions) has three kinds of offers: <strong>Always Free</strong> (for example Lambda, 1 million requests a month), <strong>12 months free</strong> for new accounts, and short <strong>free trials</strong>.</li>
      <li><strong>Free plan</strong> (new accounts since July 2025): you get credits and pay nothing; the plan ends after 6 months or when the credits run out. The <strong>Paid plan</strong> charges you after the credits are used.</li>
```

#### D4-5 · P1 · REPLACE (whole lines)
File: `ch_d4.html`

Why: Removes the “Starts at” dollar column. Questions ask for the cheapest plan that has a feature, so the heading now says the rows are in price order.

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<h3>Classic plans (what most exam questions use)</h3>
    <div class="tbl wide"><table><thead><tr><th>Plan</th><th>Starts at</th><th>Access to engineers</th><th>Fastest response</th><th>Stand-out features</th></tr></thead><tbody>
      <tr><td>Basic</td><td class="num">free</td><td>No technical cases (account and billing help only)</td><td class="num">—</td><td>Documentation, re:Post, core Trusted Advisor checks, AWS Health Dashboard</td></tr>
      <tr><td>Developer</td><td class="num">$29/mo</td><td>Business-hours email, Cloud Support Associates</td><td class="num">&lt;12 business h (system impaired)</td><td>General guidance &lt;24 business hours</td></tr>
      <tr><td>Business</td><td class="num">$100/mo</td><td>24/7 phone, email, chat, Cloud Support Engineers</td><td class="num">&lt;1 h (production down)</td><td>Full Trusted Advisor checks, AWS Support API, third-party software help</td></tr>
      <tr><td>Enterprise On-Ramp</td><td class="num">$5,500/mo</td><td>24/7</td><td class="num">&lt;30 min (business-critical down)</td><td>A pool of Technical Account Managers (TAMs), Concierge Support Team</td></tr>
      <tr><td>Enterprise</td><td class="num">$15,000/mo</td><td>24/7</td><td class="num">&lt;15 min (business-critical down)</td><td><strong>Designated TAM</strong>, Concierge Support Team (billing and account help), Infrastructure Event Management, Well-Architected reviews</td></tr>
    </tbody></table></div>
```

Replace those whole lines with:

```html
    <h3>Classic plans, cheapest first (what most exam questions use)</h3>
    <div class="tbl wide"><table><thead><tr><th>Plan</th><th>Access to engineers</th><th>Fastest response</th><th>Stand-out features</th></tr></thead><tbody>
      <tr><td>Basic (free)</td><td>No technical cases (account and billing help only)</td><td class="num">—</td><td>Documentation, re:Post, core Trusted Advisor checks, AWS Health Dashboard</td></tr>
      <tr><td>Developer</td><td>Business-hours email, Cloud Support Associates</td><td class="num">&lt;12 business h (system impaired)</td><td>General guidance &lt;24 business hours</td></tr>
      <tr><td>Business</td><td>24/7 phone, email, chat, Cloud Support Engineers</td><td class="num">&lt;1 h (production down)</td><td>Full Trusted Advisor checks, AWS Support API, third-party software help</td></tr>
      <tr><td>Enterprise On-Ramp</td><td>24/7</td><td class="num">&lt;30 min (business-critical down)</td><td>A pool of Technical Account Managers (TAMs), Concierge Support Team</td></tr>
      <tr><td>Enterprise</td><td>24/7</td><td class="num">&lt;15 min (business-critical down)</td><td><strong>Designated TAM</strong>, Concierge Support Team (billing and account help), Infrastructure Event Management, Well-Architected reviews</td></tr>
    </tbody></table></div>
```

#### D4-6 · P1 · REPLACE (whole lines)
File: `ch_d4.html`

Why: A second table for the new lineup is more than the exam needs. One paragraph maps old names to new (checked against the AWS announcement of December 2025).

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<h3>New lineup (December 2025)</h3>
    <div class="tbl wide"><table><thead><tr><th>Plan</th><th>For</th><th>Stand-out features</th></tr></thead><tbody>
      <tr><td>Basic</td><td>Everyone, free</td><td>Account and billing help, documentation, core Trusted Advisor checks</td></tr>
      <tr><td>Business Support+</td><td>Production workloads (from $29/mo; replaces Developer and Business)</td><td>24/7 phone, chat and email with engineers, AI-powered help, full Trusted Advisor, fast response for business-critical issues</td></tr>
      <tr><td>Enterprise</td><td>Business-critical workloads</td><td>Designated TAM, response within 15 minutes for critical cases, security incident response</td></tr>
      <tr><td>Unified Operations</td><td>Mission-critical workloads</td><td>A designated team of specialists, architecture guidance, critical workload reviews</td></tr>
    </tbody></table></div>
    <p class="small">The classic Developer, Business and Enterprise On-Ramp plans end on January 1, 2027.</p>
```

Replace those whole lines with:

```html
    <h3>New plan names (December 2025)</h3>
    <p><strong>Basic</strong> stays free. <strong>Business Support+</strong> replaces Developer and Business: 24/7 access to engineers and the full Trusted Advisor checks. <strong>Enterprise</strong> keeps the designated TAM and the 15-minute response. <strong>Unified Operations</strong> is the new top plan, with a team of specialists.</p>
```

#### D4-7 · P1 · DELETE (whole lines)
File: `ch_d4.html`

Why: Lifecycle note. AWS IQ itself is kept as one table row (D4-8).

Find the whole line(s) containing exactly this text (indentation of the first line omitted):

```html
<div class="callout new"><span class="ct">Changed recently</span><p>AWS IQ, a marketplace for hiring AWS Certified freelancers, closed on May 28, 2026. AWS now points customers to AWS Marketplace professional services and the AWS Partner Network. Older exam questions may still mention AWS IQ.</p></div>
```

Delete those lines completely (including the line break, so no empty line is left).

#### D4-8 · P2 · ADD
File: `ch_d4.html`

Why: AWS IQ was on the CLF-C02 in-scope list; after D4-7 this one row is the only mention left.

Find the line that contains:

```html
<tr><td>AWS Managed Services (AMS)</td><td>AWS operates your infrastructure for you: patching, monitoring, backups, change requests.</td></tr>
```

Insert this new line directly after it:

```html
      <tr><td>AWS IQ</td><td>Hire AWS Certified freelancers for a short project.</td></tr>
```

## 7. Question bank

Files: `../qb_concepts.js`, `../qb_security.js`, `../qb_tech.js` (one folder up from the guide), and `qb_n1.js`, `qb_n2.js`, `qb_n3.js`.

### 7.1 DELETE 59 questions (35 P1, 24 P2)

For each row, find the question whose stem **starts with** the quoted text (it is unique in that file) and delete its whole `Q(...)` block. The number at the end of each ID is the question's current position in its file, for orientation only.

#### `../qb_concepts.js` (3 deletions)

| ID | Pri | Topic | Stem starts with (exact) | Why |
|---|---|---|---|---|
| Q-qb_concepts-26 | P1 | infra | `How many Availability Zones does an AWS Region usually have?` | Detailed limit (how many AZs a Region has). Trivia. |
| Q-qb_concepts-38 | P2 | wa | `Which of the following is NOT one of the six pillars of` | Near-duplicate of the multiple-response question “Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO.)” in qb_n3.js, which also uses Scalability as the trap. |
| Q-qb_concepts-48 | P2 | caf | `Which set lists the three AWS CAF perspectives that represent TECHNICAL capabilities?` | Near-duplicate of “Which of the following are technical perspectives of the AWS Cloud Adoption Framework (AWS CAF)? (Select TWO.)” in qb_n3.js. |

#### `../qb_security.js` (10 deletions)

| ID | Pri | Topic | Stem starts with (exact) | Why |
|---|---|---|---|---|
| Q-qb_security-1 | P2 | srm | `According to the AWS shared responsibility model, which task is the CUSTOMER's` | Near-duplicate of the multiple-response question “…which tasks are the CUSTOMER's responsibility when using Amazon EC2? (Select TWO.)” in qb_n3.js (same fact plus security groups). |
| Q-qb_security-2 | P2 | srm | `According to the AWS shared responsibility model, which of the following is` | Near-duplicate of “…which of the following are AWS's responsibilities? (Select TWO.)” in qb_n3.js. |
| Q-qb_security-15 | P1 | iam | `In an IAM policy statement, which element lists the specific AWS resources` | IAM policy grammar (Resource vs Condition vs Sid vs Version) is beyond CLF level. |
| Q-qb_security-20 | P2 | iam | `Which task requires the root user?` | Third root-only question in a row (after “Which task can ONLY be performed…” and “Which of the following actions requires…”). Two are enough. |
| Q-qb_security-22 | P1 | iam | `Which of the following is a U2F (Universal 2nd Factor) physical security` | MFA device brand trivia (U2F key, YubiKey vs Gemalto). |
| Q-qb_security-24 | P1 | iam | `An access key is made up of an access key ID and` | Near-duplicate of “A developer needs to manage AWS resources from the AWS CLI on their laptop…” (same access-key fact). |
| Q-qb_security-35 | P1 | iam | `Which AWS Directory Service option is an AD-compatible managed directory in AWS` | Directory Service sub-options (Simple AD cannot join on-premises AD) are associate-level. The AD Connector question stays. |
| Q-qb_security-55 | P1 | crypto | `Which type of KMS key is created and managed by AWS on` | KMS key alias detail (aws/s3). The customer managed key question stays. |
| Q-qb_security-68 | P1 | detect | `AWS Security Hub runs automated security checks against standards such as CIS.` | Security Hub's dependency on AWS Config is a setup detail; its explanation also carries a rename note. |
| Q-qb_security-72 | P1 | detect | `A company's compliance team wants to prove to a customer that AWS` | Near-duplicate of “An external auditor asks for AWS's SOC 2 and PCI DSS compliance reports…” (both: AWS Artifact reports). |

#### `../qb_tech.js` (31 deletions)

| ID | Pri | Topic | Stem starts with (exact) | Why |
|---|---|---|---|---|
| Q-qb_tech-2 | P2 | ec2 | `Which statement about EC2 User Data scripts is correct?` | Near-duplicate of the first User Data question in the same file. |
| Q-qb_tech-3 | P1 | ec2 | `In the EC2 instance type name m5.2xlarge, what does the '5' represent?` | Instance naming trivia (m5.2xlarge). |
| Q-qb_tech-9 | P1 | ec2 | `A user tries to SSH into a newly launched EC2 instance, and` | SSH troubleshooting (timeout vs connection refused) is associate-level. |
| Q-qb_tech-11 | P2 | ec2 | `A web server on EC2 must accept secure web traffic from the` | Giveaway (443 = HTTPS). The RDP port question stays. |
| Q-qb_tech-12 | P1 | ec2 | `A user wants to open an SSH session to an Amazon Linux` | “Instance Connect still needs port 22” is associate-level. The Session Manager question (qb_n2.js) covers the exam point. |
| Q-qb_tech-25 | P1 | ec2 | `How are On-Demand Linux and Windows EC2 instances billed?` | Per-second billing detail. |
| Q-qb_tech-28 | P2 | ec2 | `A company created a custom AMI in us-east-1 and needs to launch` | AMI Region scoping is associate-level. |
| Q-qb_tech-29 | P1 | ec2 | `A company wants to buy a pre-configured AMI from a third-party vendor` | Near-duplicate of “A company wants to buy a third-party firewall product and pay for it through its existing AWS bill…” (qb_n3.js). Both: AWS Marketplace. |
| Q-qb_tech-33 | P1 | storage | `By default, what happens to an EC2 instance's EBS volumes when the` | Delete-on-termination defaults are associate-level. |
| Q-qb_tech-34 | P1 | storage | `A company wants to keep EBS snapshots for years for compliance at` | EBS Snapshot Archive: niche feature. |
| Q-qb_tech-35 | P1 | storage | `An administrator accidentally deletes an important EBS snapshot. Which feature could have` | Recycle Bin: niche feature. |
| Q-qb_tech-37 | P2 | storage | `What happens to data on an EC2 instance store volume when the` | Near-duplicate of “An application needs the HIGHEST possible disk I/O performance for temporary cache…” and of the instance-store backup question (both: instance store is temporary). |
| Q-qb_tech-42 | P1 | storage | `Which AWS storage service is OBJECT storage?` | Near-duplicate of “Which list correctly matches AWS storage services to their storage type?” (same file). |
| Q-qb_tech-44 | P2 | storage | `At the Cloud Practitioner level, how many EC2 instances can a standard` | Near-duplicate of the EFS question “Hundreds of Linux EC2 instances across multiple Availability Zones…” (EBS = one instance). |
| Q-qb_tech-54 | P2 | elb | `An Auto Scaling policy is configured as 'when a CloudWatch alarm shows` | Simple/step scaling is associate-level. Target tracking, scheduled and predictive stay. |
| Q-qb_tech-55 | P1 | elb | `An Auto Scaling group is configured with minimum = 2, desired =` | Minimum/desired/maximum arithmetic is associate-level. |
| Q-qb_tech-58 | P1 | s3 | `Which of the following is a VALID Amazon S3 bucket name?` | Bucket naming rules: trivia. |
| Q-qb_tech-59 | P2 | s3 | `In Amazon S3, what is an object's key?` | Object key definition: low exam value. |
| Q-qb_tech-60 | P1 | s3 | `A company needs to upload a 20 GB video file to Amazon` | Multipart upload threshold (5 GB): detailed limit. |
| Q-qb_tech-61 | P1 | s3 | `What is the MAXIMUM size of a single object in Amazon S3?` | Maximum object size: detailed limit, and the answer changed in December 2025 (older items say 5 TB), so drilling “50 TB” can cost a point. |
| Q-qb_tech-62 | P1 | s3 | `An IAM user's identity policy allows s3:GetObject on a bucket, but the` | Near-duplicate of “An IAM user belongs to a group whose policy allows all Amazon S3 actions…” (qb_security.js). Both: explicit Deny wins. |
| Q-qb_tech-65 | P2 | s3 | `A company wants to reject any upload to an S3 bucket that` | A bucket policy that forces SSE-KMS is associate-level. |
| Q-qb_tech-68 | P1 | s3 | `Versioning is enabled on a bucket that already contains objects. What version` | Version ID “null” trivia. |
| Q-qb_tech-69 | P2 | s3 | `What is REQUIRED before you can set up S3 replication (CRR or` | Replication prerequisites are associate-level. |
| Q-qb_tech-71 | P2 | s3 | `A company wants to aggregate logs from several S3 buckets into one` | Same-Region Replication use cases: low yield. The Cross-Region Replication question stays. |
| Q-qb_tech-73 | P1 | s3 | `Which characteristic is the SAME across all Amazon S3 storage classes?` | Near-duplicate of “What durability is Amazon S3 designed for?” (same file); its explanation also lists per-GB prices. |
| Q-qb_tech-81 | P1 | s3 | `What is the MINIMUM storage duration charge for S3 Glacier Deep Archive?` | Minimum storage duration (180 days): detailed limit. |
| Q-qb_tech-82 | P2 | s3 | `A machine learning team needs S3 storage with single-digit millisecond latency and` | S3 Express One Zone: niche. It still appears in the multiple-response single-AZ question. |
| Q-qb_tech-88 | P2 | s3 | `Which identity can enable MFA Delete on an S3 bucket?` | Fourth root-only question. MFA Delete stays in the IAM chapter's root-only list. |
| Q-qb_tech-89 | P1 | s3 | `Where does Amazon S3 encrypt data when using SERVER-SIDE encryption?` | Near-duplicate of “A company's policy requires that data be encrypted BEFORE it leaves the company's own servers…” (qb_security.js). Both test server-side vs client-side. |
| Q-qb_tech-92 | P1 | transfer | `How much does AWS charge for data transferred INTO Amazon S3 from` | Dollar price ($0.00 per GB), with a distractor about Shield Advanced pricing. |

#### `qb_n1.js` (6 deletions)

| ID | Pri | Topic | Stem starts with (exact) | Why |
|---|---|---|---|---|
| Q-qb_n1-7 | P1 | edge | `A company wants its domain name example.com to point to an Application` | Route 53 record types (alias) are associate-level. |
| Q-qb_n1-11 | P1 | edge | `A startup wants to register a new domain name and manage its` | Near-duplicate of “Which AWS service translates human-friendly domain names…” (same file). Both: Route 53. |
| Q-qb_n1-12 | P1 | edge | `A company's static web content rarely changes and must load quickly for` | Near-duplicate of “Users around the world complain that images and videos stored in an S3 bucket… load slowly” (same file). Both: CloudFront. |
| Q-qb_n1-22 | P2 | containers | `Which of the following is a serverless AWS service?` | Near-duplicate of “Which of the following are serverless compute services? (Select TWO.)” (qb_n3.js). |
| Q-qb_n1-50 | P2 | network | `How are subnets related to Availability Zones in a VPC?` | Subnet-to-AZ mapping is associate-level, and VPC is only 1–2 exam questions. |
| Q-qb_n1-51 | P2 | network | `What makes a subnet a public subnet in a VPC?` | Public-subnet definition (route table) is associate-level. |

#### `qb_n2.js` (3 deletions)

| ID | Pri | Topic | Stem starts with (exact) | Why |
|---|---|---|---|---|
| Q-qb_n2-10 | P1 | integration | `What is the MAXIMUM time a message can stay in an Amazon` | SQS retention (14 days): detailed limit. |
| Q-qb_n2-22 | P2 | monitor | `By default, EC2 sends metrics to CloudWatch every 5 minutes. How can` | Detailed-monitoring interval: detailed limit. The memory-metric question stays. |
| Q-qb_n2-36 | P1 | deploy | `An EC2 instance doesn't appear as a managed node in AWS Systems` | Systems Manager troubleshooting (agent missing) is associate-level. |

#### `qb_n3.js` (6 deletions)

| ID | Pri | Topic | Stem starts with (exact) | Why |
|---|---|---|---|---|
| Q-qb_n3-2 | P1 | pricing | `Which type of data transfer is generally free on AWS?` | Near-duplicate of “Under the AWS pay-as-you-go pricing model, which of the following is typically FREE?” (qb_concepts.js). Same answer. |
| Q-qb_n3-10 | P1 | pricing | `What does a company commit to when it buys a Savings Plan?` | Near-duplicate of “A company commits to spending $10 per hour on EC2 for 1 year…” (qb_tech.js); its explanation also has a lifecycle note. |
| Q-qb_n3-15 | P2 | accounts | `An SCP attached to a member account denies all Amazon EC2 actions.` | Near-duplicate of “Service control policies do NOT apply to which of the following?” (same file). Keep one SCP-scope question. |
| Q-qb_n3-32 | P2 | costtools | `A company on the Basic Support plan sees only a few Trusted` | Near-duplicate of “What is the LEAST expensive classic support plan that includes 24/7 phone…” (same file). Both: Business. |
| Q-qb_n3-48 | P2 | support | `A retailer expects record traffic on Black Friday and wants AWS support` | Event management (AWS Countdown / Infrastructure Event Management) in Enterprise: niche. |
| Q-qb_n3-49 | P1 | support | `In December 2025 AWS changed its support plans. Which new plan replaced` | Asks what changed in December 2025. Exam items test what a plan provides, not product history. The new names are in the Support chapter. |

### 7.2 Q-qb_n3-12 · P1 · REPLACE one question

File: `qb_n3.js`. Find the question whose stem starts with `Which of the following incurs an hourly charge on AWS?` and replace its whole `Q(...)` block with:

```js
Q("pricing", 1, "Which of the following is one of the offer types of the classic AWS Free Tier?", [
  ["12 months free for new accounts", "The classic Free Tier has three offer types: Always Free, 12 months free, and short free trials. Accounts created since July 2025 use the Free plan with credits instead, but older exam questions still describe the classic offers."],
  ["Free Reserved Instances for the first year", "Reserved Instances are a paid commitment. They are never part of the Free Tier."],
  ["Unlimited free use of every service", "Free Tier offers have monthly limits, and many services have no free offer at all."],
  ["Free Enterprise Support for six months", "Support plans aren't part of the Free Tier. Only Basic Support is free."]
]);
```

Why: The old question tests an hourly IPv4 price (trivia). The classic Free Tier offer types were not tested anywhere, and older exam questions use them. Replace in place (same topic, so the pricing count stays the same).

### 7.3 Edit explanations and options (19 edits, all P2)

These keep the question and only fix text inside it. Anchors are exact text inside the question's block (unique in the file).

#### QE-1 · P2 · REPLACE (exact text)
File: `../qb_concepts.js` · inside the question whose stem starts “Why are Availability Zones within a Region physically separated from each other?…” (currently question 27 in the file)

Why: Grammar error in the explanation.

Find exactly this text:

```js
They are but close enough for low-latency networking.
```

Replace it with:

```js
They are still close enough for low-latency networking.
```

#### QE-2 · P2 · REPLACE (exact text)
File: `../qb_security.js` · inside the question whose stem starts “As a customer moves from running software on Amazon EC2 to using…” (currently question 7 in the file)

Why: Giveaway: the correct option was by far the longest. Move the detail into the explanation.

Find exactly this text:

```js
["They decrease, because AWS takes over more layers such as OS and database patching", "The more managed the service, the more AWS handles.
```

Replace it with:

```js
["They decrease, because AWS manages more layers", "The more managed the service, the more AWS handles, such as OS and database patching.
```

#### QE-3 · P2 · REPLACE (exact text)
File: `../qb_security.js` · inside the question whose stem starts “Which task can ONLY be performed by the AWS account root user?…” (currently question 18 in the file)

Why: Shorter, plain English.

Find exactly this text:

```js
 Note: your notes list changing or canceling the Support plan as root-only too, but AWS now lets IAM users with the right permissions do that, so it is unlikely to be the answer on a current exam.
```

Replace it with:

```js
 Changing the Support plan is no longer root-only.
```

#### QE-4 · P2 · REPLACE (exact text)
File: `../qb_security.js` · inside the question whose stem starts “Which AWS service provides FREE, automatic protection for all customers against common…” (currently question 37 in the file)

Why: Dollar price.

Find exactly this text:

```js
Shield Advanced is a paid service ($3,000 per month per organization) with extra protections.
```

Replace it with:

```js
Shield Advanced is a paid service with extra protections.
```

#### QE-5 · P2 · REPLACE (exact text)
File: `../qb_security.js` · inside the question whose stem starts “A company notices that EC2 instances with AWS-owned IP addresses are port-scanning…” (currently question 46 in the file)

Why: Giveaway: the correct option was by far the longest.

Find exactly this text:

```js
["Report it to the AWS Trust & Safety team using the AWS abuse form (or abuse@amazonaws.com)"
```

Replace it with:

```js
["Report it to AWS Trust & Safety with the abuse form"
```

#### QE-6 · P2 · DELETE (text inside a line)
File: `../qb_security.js` · inside the question whose stem starts “A company's regulations require encryption keys to be stored on dedicated, single-tenant…” (currently question 51 in the file)

Why: Trivia.

Find exactly this text:

```js
 (Newer HSM types are validated to FIPS 140-3 Level 3.)
```

Delete it (replace with nothing).

#### QE-7 · P2 · REPLACE (exact text)
File: `../qb_security.js` · inside the question whose stem starts “A company needs full control over its KMS keys, including the ability…” (currently question 56 in the file)

Why: Detailed limits.

Find exactly this text:

```js
 (every 365 days by default, configurable from 90 to 2,560 days). You can even bring your own key material.
```

Replace it with:

```js
.
```

#### QE-8 · P2 · DELETE (text inside a line)
File: `../qb_tech.js` · inside the question whose stem starts “A company needs a load balancer for its HTTP/HTTPS web application that…” (currently question 45 in the file)

Why: Meta note (the chapter callout is removed too).

Find exactly this text:

```js
 (Your notes say it was retired in 2023; it was EC2-Classic networking that retired.)
```

Delete it (replace with nothing).

#### QE-9 · P2 · REPLACE (exact text)
File: `../qb_tech.js` · inside the question whose stem starts “A financial company must keep records for 10 years for regulatory reasons.…” (currently question 78 in the file)

Why: Dollar price.

Find exactly this text:

```js
Deep Archive is the cheapest class (about $0.00099 per GB-month) for long-term retention
```

Replace it with:

```js
Deep Archive is the cheapest class for long-term retention
```

#### QE-10 · P2 · DELETE (text inside a line)
File: `../qb_tech.js` · inside the question whose stem starts “A company needs to move 80 TB of data from its data…” (currently question 90 in the file)

Why: Lifecycle note.

Find exactly this text:

```js
 (Since November 2025 Snowball Edge is only offered to existing customers, and AWS points new customers to DataSync or AWS Data Transfer Terminal. Exam questions may still use Snowball.)
```

Delete it (replace with nothing).

#### QE-11 · P2 · DELETE (text inside a line)
File: `../qb_tech.js` · inside the question whose stem starts “A research ship at sea has very limited internet connectivity. It needs…” (currently question 91 in the file)

Why: Lifecycle note.

Find exactly this text:

```js
 (Since November 2025 Snowball Edge is only offered to existing customers, and AWS points new customers to other options such as DataSync. Exam questions may still use Snowball.)
```

Delete it (replace with nothing).

#### QE-12 · P2 · DELETE (text inside a line)
File: `qb_n2.js` · inside the question whose stem starts “Employees want to ask questions in plain language, such as “What is…” (currently question 45 in the file)

Why: Lifecycle note.

Find exactly this text:

```js
 (Kendra closed to new customers in July 2026, but exam questions still use it.)
```

Delete it (replace with nothing).

#### QE-13 · P2 · DELETE (text inside a line)
File: `qb_n2.js` · inside the question whose stem starts “Developers want a generative AI assistant inside their code editor that suggests…” (currently question 50 in the file)

Why: Lifecycle note.

Find exactly this text:

```js
 (New sign-ups closed in May 2026 and AWS now offers Kiro, but exam questions still say Amazon Q Developer.)
```

Delete it (replace with nothing).

#### QE-14 · P2 · DELETE (text inside a line)
File: `qb_n2.js` · inside the question whose stem starts “A marketing team wants to run targeted campaigns to customer segments over…” (currently question 60 in the file)

Why: Lifecycle note.

Find exactly this text:

```js
 Note: it stopped accepting new customers in 2025 and its campaign features end in October 2026.
```

Delete it (replace with nothing).

#### QE-15 · P2 · REPLACE (exact text)
File: `qb_n3.js` · inside the question whose stem starts “Which of these AWS services has no additional charge, so you pay…” (currently question 4 in the file)

Why: Dollar price.

Find exactly this text:

```js
Shield Advanced costs about $3,000 per month per organization.
```

Replace it with:

```js
Shield Advanced is a paid subscription.
```

#### QE-16 · P2 · DELETE (text inside a line)
File: `qb_n3.js` · inside the question whose stem starts “When can AWS interrupt a running Spot Instance?…” (currently question 9 in the file)

Why: Extra detail; the main point is “when AWS needs the capacity back”.

Find exactly this text:

```js
 (Your notes describe the older bidding model: an instance can also be stopped if you set a maximum price and the Spot price rises above it.)
```

Delete it (replace with nothing).

#### QE-17 · P2 · REPLACE (exact text)
File: `qb_n3.js` · inside the question whose stem starts “Which of the following are advantages of cloud computing? (Select TWO.)…” (currently question 50 in the file)

Why: Weak distractors: all three wrong options were obviously bad (“increase hardware maintenance”…). The new ones are the traps real questions use (reversed wording, “AWS does all security”, “always cheaper”).

Find exactly this text:

```js
  ["Increase the time spent on hardware maintenance", "The cloud reduces hardware work; AWS maintains the hardware."],
  ["Pay for unused capacity in advance", "Paying for idle capacity is the on-premises problem the cloud removes."],
  ["Longer procurement cycles for new servers", "The cloud gets resources in minutes, not weeks."]
```

Replace it with:

```js
  ["Trade variable expense for fixed expense", "The wording is backwards. The cloud lets you trade fixed (capital) expense for variable expense."],
  ["AWS takes over all of the customer's security tasks", "Security is shared. The customer always keeps security IN the cloud: data, IAM and configuration."],
  ["A guaranteed lower cost for every workload", "The cloud is often cheaper, but no workload is guaranteed to cost less. Cost depends on how you use it."]
```

#### QE-18 · P2 · REPLACE (exact text)
File: `qb_n3.js` · inside the question whose stem starts “Which services analyze activity to detect threats or investigate the root cause…” (currently question 61 in the file)

Why: Weak distractors (Certificate Manager and Pricing Calculator are not security-monitoring services, so the answer was a giveaway). Inspector and Config are the real look-alikes.

Find exactly this text:

```js
  ["AWS Artifact", "Artifact provides compliance documents."],
  ["AWS Certificate Manager", "ACM manages TLS certificates."],
  ["AWS Pricing Calculator", "The calculator estimates costs."]
```

Replace it with:

```js
  ["Amazon Inspector", "Inspector scans software for known vulnerabilities (CVEs). It doesn't analyze account activity for threats."],
  ["AWS Config", "Config records resource configurations and checks them against rules. It doesn't detect threats."],
  ["AWS Artifact", "Artifact provides compliance documents."]
```

#### QE-19 · P2 · REPLACE (exact text)
File: `qb_n3.js` · inside the question whose stem starts “Which of the following are included in the classic Enterprise Support plan?…” (currently question 65 in the file)

Why: Weak distractors (“free Reserved Instances”, “unlimited free EC2”). The new ones are plausible extras that Enterprise does not include.

Find exactly this text:

```js
  ["Free Reserved Instances", "No support plan includes free instances."],
  ["Unlimited free EC2 usage", "Support plans don't include compute usage."],
```

Replace it with:

```js
  ["AWS Managed Services operating your infrastructure", "AWS Managed Services is a separate offering. A support plan gives guidance; it doesn't run your operations."],
  ["Free AWS Shield Advanced protection", "Shield Advanced is a separate paid subscription. No support plan includes it."],
```

### 7.4 Questions per topic after P1 + P2

Minimum is 9 (the brief asked for about 8 or more). The exam simulation still draws 65 questions with the 24/30/34/12 weights from a pool of 57/70/204/47.

| Topic | Before | After |
|---|---:|---:|
| concepts | 24 | 24 |
| wa | 13 | 12 |
| caf | 22 | 21 |
| srm | 12 | 10 |
| iam | 28 | 23 |
| netsec | 12 | 12 |
| crypto | 12 | 11 |
| detect | 16 | 14 |
| infra | 14 | 13 |
| edge | 13 | 10 |
| ec2 | 31 | 23 |
| elb | 12 | 10 |
| containers | 15 | 14 |
| storage | 15 | 9 |
| s3 | 34 | 20 |
| transfer | 11 | 10 |
| db | 21 | 21 |
| network | 14 | 12 |
| integration | 14 | 13 |
| monitor | 11 | 10 |
| deploy | 14 | 13 |
| ml | 15 | 15 |
| other | 11 | 11 |
| pricing | 13 | 11 |
| accounts | 13 | 12 |
| costtools | 14 | 13 |
| support | 13 | 11 |

## 8. Flashcards: decoder.js and cards.js

The app makes a “Which service? <cue>” flashcard from every decoder entry that has a cue, and adds the fact cards from cards.js. Setting a cue to "" removes that flashcard but keeps the entry in the decoder search.

### 8.1 DEC-1 … DEC-9 · P1 · remove lifecycle notes from “what it does” (decoder.js)

This text also shows on the back of the flashcards. Replace exactly:

| ID | Entry | Find (exact) | Replace with |
|---|---|---|---|
| DEC-1 | AWS Migration Hub | ` (closed to new customers since November 2025).` | `.` |
| DEC-2 | Amazon Timestream | ` (for new customers: Timestream for InfluxDB).` | `.` |
| DEC-3 | Amazon QuickSight | ` (now Amazon Quick Sight).` | `.` |
| DEC-4 | AWS Audit Manager | ` (no longer open to new customers).` | `.` |
| DEC-5 | AWS CodeCommit | ` (fully available again since November 2025).` | `.` |
| DEC-6 | Amazon Kendra | ` (closed to new customers in July 2026).` | `.` |
| DEC-7 | Amazon Q | ` (Q Developer closed to new sign-ups in May 2026, Q Business in July 2026).` | `.` |
| DEC-8 | Amazon AppStream 2.0 | ` (now named WorkSpaces Applications).` | `.` |
| DEC-9 | Amazon Pinpoint | ` (closed to new customers; ends October 2026).` | `.` |

### 8.2 CUE · P1 · remove the flashcard of 42 decoder entries (set the cue to "")

Why: niche services that are very unlikely to be the answer, sub-features already covered by a question or a fact card, or services this learner already knows (EC2, IAM, VPC, ELB). They stay in the decoder search. In the line that starts with `D("<name>",` change only the **last** argument to an empty string, for example:

```js
D("Recycle Bin", "Storage", "storage", "Retention rules that let you recover deleted EBS snapshots and AMIs.", "");
```

| Entry (exact name) | Current cue (for finding it) |
|---|---|
| EC2 Instance Connect | SSH from the console without managing a key file |
| EC2 Image Builder | automatically build and patch golden AMIs on a schedule |
| S3 Express One Zone | the fastest S3 storage, co-located with compute in one AZ |
| S3 pre-signed URL | share one private file for a limited time without making it public |
| EBS Snapshot Archive | keep EBS snapshots for years at a lower cost |
| Recycle Bin | recover an EBS snapshot that was deleted by mistake |
| EFS Infrequent Access | cut EFS costs for files that are rarely opened |
| Amazon Keyspaces | an Apache Cassandra workload |
| Amazon MemoryDB | Redis speed with durability as a primary database |
| Amazon Managed Blockchain | parties transact without a trusted central authority |
| Amazon Data Firehose | deliver streaming data to S3 or Redshift with no code |
| AWS PrivateLink | offer a service privately to thousands of VPCs |
| AWS Client VPN | remote employees connect their laptops to a VPC |
| AWS Audit Manager | continuously collect audit evidence for a framework |
| CloudWatch Logs | centralize and search application logs |
| AWS License Manager | track Microsoft and Oracle license usage |
| AWS Launch Wizard | deploy SQL Server or SAP following AWS best practices |
| AWS Infrastructure Composer | design a serverless application visually |
| AWS CodeArtifact | store npm, pip and Maven packages privately |
| AWS IoT Greengrass | run cloud logic on devices at the edge |
| AWS Ground Station | download data from satellites |
| AWS Fault Injection Service | test resilience by injecting failures |
| Amazon Pinpoint | marketing campaigns by SMS, email and push |
| AWS Billing Conductor | show customers a custom bill with your own rates |
| Amazon MSK | a company already uses Apache Kafka for streaming |
| AWS Data Exchange | subscribe to third-party data such as financial or weather data |
| AWS AppConfig | roll out a feature flag gradually with automatic rollback |
| Amazon WorkSpaces Secure Browser | a secure browser for reaching internal websites |
| AWS Activate | AWS credits and help for a startup |
| AWS Prescriptive Guidance | AWS-written migration patterns and guides |
| AWS Schema Conversion Tool | convert an Oracle schema to PostgreSQL before migrating |
| AWS Health API | read AWS Health events from code |
| AWS Knowledge Center | AWS-written answers to frequent questions |
| AWS Migration Hub | track the status of a migration in one place |
| Technical Account Manager | a designated advisor who knows your environment |
| Amazon EC2 | full control of a virtual server and its operating system |
| AWS IAM | control who can do what in an AWS account |
| Elastic IP address | keep the same public IP after stop and start |
| VPC peering | connect two VPCs privately |
| Amazon VPC | an isolated private network for your AWS resources |
| Elastic Load Balancing | distribute traffic across healthy instances |
| AWS CloudShell | run CLI commands from the browser without installing anything |

### 8.3 CUEFIX · P2 · fix 3 ambiguous cues

In the line that starts with `D("<name>",` replace the last argument (the cue) with the new text:

| Entry | Current cue | New cue | Why |
|---|---|---|---|
| S3 Standard-IA | infrequently accessed data that must be available fast and survive an AZ loss | data read about once a month that must come back in milliseconds | Ambiguous with S3 Glacier Instant Retrieval: both are millisecond, multi-AZ classes. The difference the exam uses is how often the data is read. |
| S3 Glacier Instant Retrieval | archive data that still needs millisecond access a few times a year | archive data read about once a quarter that still needs millisecond access | Pairs with the Standard-IA cue above. |
| Amazon RDS | a managed relational SQL database | a managed MySQL, PostgreSQL, Oracle or SQL Server database | Ambiguous with Aurora (“a managed relational SQL database” fits both). |

### 8.4 CARDS · P1 · delete 35 fact cards (cards.js)

Delete the whole line that starts with `C(` and whose second argument (the front) is exactly:

| # | Front (exact) | Reason |
|---|---|---|
| 1 | What are the three cloud deployment models? | Repeats a decoder card or is already known |
| 2 | What usually answers an exam question about “encryption keys”? | Repeats a decoder card or is already known |
| 3 | What is the best way to give an EC2 application access to S3? | Repeats a decoder card or is already known |
| 4 | Shield Standard vs Shield Advanced? | Repeats a decoder card or is already known |
| 5 | What are the S3 server-side encryption options? | Beyond CLF level |
| 6 | What does Security Hub need enabled first? | Beyond CLF level |
| 7 | How long does CloudTrail keep event history by default? | Detailed limit or number |
| 8 | How many AZs does a Region usually have? | Detailed limit or number |
| 9 | What is a Route 53 alias record for? | Beyond CLF level |
| 10 | What does m5.2xlarge mean? | Beyond CLF level |
| 11 | When does EC2 User Data run? | Repeats the “EC2 User Data” decoder card |
| 12 | SSH times out vs “connection refused”: what does each mean? | Beyond CLF level |
| 13 | How are On-Demand Linux and Windows instances billed? | Detailed limit or number |
| 14 | Name the Auto Scaling policy types. | Beyond CLF level |
| 15 | What does the Lambda free tier include each month? | Detailed limit or number |
| 16 | What happens to EBS volumes when an instance terminates (default)? | Detailed limit or number |
| 17 | What is S3 Standard's designed availability? | Detailed limit or number |
| 18 | What is the maximum S3 object size, and when is multipart upload required? | Detailed limit or number |
| 19 | What are the minimum storage durations of the S3 classes? | Detailed limit or number |
| 20 | What is required before setting up S3 replication? | Beyond CLF level |
| 21 | Which identity can enable S3 MFA Delete? | Repeats the root-only card |
| 22 | A static S3 website returns 403 Forbidden. What's missing? | Troubleshooting detail |
| 23 | What version ID do objects have that existed before versioning was enabled? | Trivia |
| 24 | How many read replicas can an RDS database have? | Detailed limit or number |
| 25 | What makes a subnet public? | Beyond CLF level |
| 26 | Which VPC endpoint type supports only S3 and DynamoDB? | Beyond CLF level |
| 27 | SQS message retention: default and maximum? | Detailed limit or number |
| 28 | How often does EC2 send metrics to CloudWatch? | Detailed limit or number |
| 29 | What are the three CloudWatch alarm states? | Detailed limit or number |
| 30 | Where are CloudWatch billing metrics stored? | Detailed limit or number |
| 31 | What does Systems Manager need on each server? | Beyond CLF level |
| 32 | What must you do so your own tags appear in cost reports? | Setup detail |
| 33 | What are the new support plans (December 2025)? | Lifecycle / not on the exam |
| 34 | Name the three kinds of IAM identity-based policies. | Beyond CLF level |
| 35 | What do Database Savings Plans cover? | Lifecycle / not on the exam |

### 8.5 CARD-REP-1 · P1 · REPLACE one fact card (cards.js)

Replace the whole line whose front is exactly `What does the AWS Free plan offer new accounts?` with:

```js
C("pricing", "What are the three classic AWS Free Tier offer types?", "Always Free, 12 months free, and short free trials. (New accounts since July 2025 get the Free plan with credits instead.)");
```

Why: Same slot, higher-yield fact (matches the replacement question and PRICING edit D4-4).

#### CARD-EDIT-1 · P2 · REPLACE (exact text)
File: `cards.js`

Why: Dollar price.

Find exactly this text:

```js
"Per TB of data scanned (about $5/TB); compressed, columnar formats lower the cost."
```

Replace it with:

```js
"Per TB of data each query scans. Compressed, columnar files (such as Parquet) cost less to query."
```

## 9. Expected `validate.js` output

After **P1 + P2**:

```text
questions 378 multi 24 extra 25
by domain { '1': 57, '2': 70, '3': 204, '4': 47 }
decoder 210 fact cards 85 total cards 253
chapters 27 missing []
correct strictly longest 109 / 354 31%
bad 0
```

After **P1 only**: questions 402, multi 24, extra 26, by domain 59/73/220/50, decoder 210, fact cards 85, total cards 253, bad 0.

The Start page counters (`data-count`) and the Practice page text update by themselves. The existing `regress.js` checks still hold (the IAM topic keeps two multiple-response questions; the Compare jump buttons are unchanged).

## 10. Keep as is (deliberately not cut)

- **The Compare page (20 tables).** Highest exam value per word in the guide: most wrong answers on CLF-C02 are a look-alike service. Only two word fixes (CMP-1, CMP-2).
- **Every chapter's “How the exam asks about it” table and “Don't confuse” box.** They are the exam-shaped core, and the Skim tag relies on them.
- **Memory hooks and the Cheat sheet.** Cheap, and they target lists that are tested almost word for word (six advantages, six pillars, CAF phases and perspectives, 7 Rs, DR order, support response times). Repeating them on the Cheat sheet is intended: it is the day-before review page.
- **Facts repeated between a chapter and the Compare or Cheat sheet pages** (CloudTrail vs Config vs CloudWatch, DR strategies, root-only tasks). Chapters are for first learning; the review pages are for recall.
- **The five characteristics table and its three questions.** Tested at a basic level, and the plain-English rows help a second-language reader.
- **The 7 Rs with one question per R.** Each R is a separate answer on the exam.
- **“More services to recognize” and “AI and machine learning”.** CLF-C02 tests one-line recognition of many services, and these names are common distractors. Tagged Skim, not cut.
- **All four Domain 4 chapters as Must know.** Short, new to this learner, 12% of the exam.
- **Penetration-testing rules, AWS Abuse / Trust & Safety, Acceptable Use Policy, security information sources.** Short, and on the CLF-C02 task list.
- **The classic support table with response times.** Still the most likely exam content; only the price column goes.
- **All 210 decoder entries.** Search costs nothing. Only flashcards were reduced (CUE).
- **All 24 multiple-response questions** (3 get better distractors in QE-17 … QE-19).
- **The five diagrams** (shared responsibility, Region and AZs, three-tier app, VPC, integration). They replace reading rather than add to it.
- **Exam-day material** (scoring, words that change the answer, five steps, timing, ESL +30, online-exam rules, checklist). Short and directly useful on the day.
- **The quick check, “I understand” toggle and “Practice all” button in each chapter, and all app code** (`shell.html`). Nothing in the app wastes the learner's time, so no code change is proposed.
- **The “Not in your notes” tag on 25 questions.** It tells the learner which points are new to them.
