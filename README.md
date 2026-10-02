# CLF-C02 study guide

Study material for the AWS Certified Cloud Practitioner (CLF-C02) exam.

## The pages

| File | What it is |
|---|---|
| `clf-c02-study-guide.html` | The all-in-one guide: 10-day fast track, exam skills, 27 chapters (tagged Must know or Skim), 378 exam-style questions with a timed 65-question simulation, spaced-repetition flashcards, a service decoder, comparison tables, a cheat sheet and a Team progress page. |
| `clf-c02-practice-exam.html` | The first practice exam (Cloud Concepts, Security, and EC2 through S3). The guide includes all of its topics. |

Both files open directly in a browser. Opened locally, progress is saved in that
browser only. The published claude.ai version saves each signed-in person's
progress to their claude.ai account and shows a shared Team board. It uses the
artifact `db` and `user` capabilities, which exist only on claude.ai.

## Layout

```
notes/                  the original course study notes
src/questions/          question banks (Q(topic, notInNotes, stem, options, nCorrect))
src/guide/              guide page shell, chapters, pages, decoder and flashcards
src/practice-exam/      template for the first practice exam
scripts/build.py        builds the HTML pages into the repo root
scripts/validate.js     checks the question bank, decoder, cards and chapters
tests/                  Playwright browser tests (smoke, regressions, account sync)
docs/qa-prune-plan.md   the review plan used to trim the guide
history/                one-off patch scripts kept for the record
```

## Question format

`Q(topic, notInNotes, stem, [[option, explanation], ...], nCorrect)`. The first
`nCorrect` options (default 1) are the correct ones; the page shuffles them.
Multiple-response questions have 5 options and `nCorrect` 2.

## Build and test

```
python3 scripts/build.py guide      # or: practice, or no argument for both
node scripts/validate.js            # must end with "bad 0"
node tests/smoke.js                 # needs Playwright and Chromium
node tests/regress.js
node tests/cloudtest.js
```

Note: the question banks in `src/questions/` were trimmed after the first
practice exam was published, so `python3 scripts/build.py practice` now builds
a shorter version of that exam than the committed file.
