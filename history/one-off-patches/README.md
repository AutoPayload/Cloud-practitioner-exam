# One-off patch scripts

These scripts were run once, in order, against the question banks and guide
sources while the guide was being written and reviewed. They are kept as a
record of what changed and why. They are not meant to be run again: each one
expects the files exactly as they were before it ran.

- `fix1.py`–`fix4.py`: first QA round on the practice exam (outdated facts,
  balanced option lengths, app fixes).
- `fix5.py`: balanced option lengths in the new questions.
- `patch_qa.py`: second QA round on the study guide (2026 updates, coverage
  gaps, app bugs).
- `apply_prune.py`: applied `docs/qa-prune-plan.md` (the "useful content only"
  trim: 10-day fast track, Must know / Skim tags, fewer questions and cards).
