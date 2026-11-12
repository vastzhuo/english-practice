# Daily English Practice

A zero-dependency, installable PWA for daily English vocabulary and PTE Academic
practice. It is a plain static site: no build step, no framework, no
`package.json` — every screen is rendered by vanilla JavaScript straight from
data files in this repository, and all progress stays in the browser.

Live: **https://vastzhuo.github.io/english-practice/** (GitHub Pages, deployed
from `main`).

## The seven tabs

| Tab | Label | What it does |
| --- | --- | --- |
| Learn | 📖 Learn | The home screen: category picker, daily goal (20/50/75/100), quiz length, and **今日学习** — a day's queue built from your own progress by `study-plan.js` (new words, SST reviews, WFD/RS/writing practice). |
| Quiz | ✏️ Quiz | 10/20/50 multiple-choice questions drawn from `words.js`, mixing four question types: meaning → word, fill in the blank, listen-and-choose (speech synthesis), and word → meaning. |
| Shadow | 🗣️ 跟读 | Listen to the word or example sentence with text-to-speech, then read it back; the browser's speech recognition scores the attempt. Optional recording is kept only in the page. Needs network access for recognition. |
| Drive | 🚗 开车 | Hands-free listening loop for the car: English word → pause → English example → pause for you to repeat → Chinese meaning, then the next item. Gap, rate, repeat count and order are configurable; screen wake lock and media-session controls (phone/steering-wheel buttons) are used, and the page warns you not to look at the screen. |
| PTE | 📝 PTE | PTE Academic practice, one sub-module at a time — see the next section. |
| Grammar | 语法 | 360 grammar cards from the DK grammar guide, in the book's own order, grouped into 12 chapters; previous/next navigation with progress saved. |
| Progress | 📊 Progress | Current streak, best streak, and the stats behind today's plan. |

## PTE sub-modules

| Module | Content |
| --- | --- |
| WFD (Write From Dictation) | 152 high-frequency sentences in five categories (`学术场景`, `科学技术`, `社会经济`, `职业与发展`, `环境与规划`). Each sentence is read five times with a 3-second pause, shuffled so a new loop does not start with the last sentence. Your typed answer is diffed word by word against the source (missing / extra words marked). |
| RS (Repeat Sentence) | 50 sentences from the speaking list, played sentence by sentence for shadowing. |
| 阅读 (Reading) | 70 articles grouped by how many turns the argument takes (双转折 / 单转折 / 并列 / 无转折). Trains the connectives and patterns that give paragraph order away. When the source has no article body, vocabulary is marked as **topic-predicted** instead of inventing a passage. |
| WE (Write Essay) | 35 high-frequency prompts across 7 topics and 6 question types, with sentence cards, a 20-minute / 200–300-word target and a copy-prompt helper. |
| SST (Summarize Spoken Text) | 50 lecture items with real, downloadable audio under `audio/sst/` and transcripts taken from the source list; reference/model answers and known content mismatches are flagged. |
| RA / DI / SWT | In review as PR #29 (`cursor/pte-ra-di-swt`), which adds Read Aloud (12 passages taken from existing source text), Describe Image (5 chart types drawn offline as inline SVG) and Write From Summary (10 items reusing SST transcripts). These modules are self-assessed — see *Known limits*. |
| 开车 (Drive) | The same hands-free loop as the Drive tab, over the PTE WFD and RS sentence sets. |

## Architecture

- **Static, no build.** `index.html` loads plain `<script>` tags with `?v=`
  cache-busting queries. There is no bundler, transpiler, or install step.
- **Data lives in the data files:**
  - `words.js` — the vocabulary bank (also the source of the DK grammar cards)
  - `synonyms.js` — synonym comparison groups (`SYNONYMS.lookup()`, `即将推出` fallback)
  - `pte.js` — 152 WFD sentences; `pte-rs.js` — 50 RS sentences
  - `pte-read.js` — 70 reading articles; `pte-we.js` — 35 essay prompts
  - `pte-sst.js` — 50 SST items (audio paths, transcripts, notes)
  - `grammar.js` — derives the 360 grammar points from `words.js`; `study-plan.js` — the daily queue
- **UI** is split by tab/module: `app.js`, `drive.js`, `study-ui.js`,
  `grammar-ui.js`, `pte-app.js`, `pte-we-ui.js`, `pte-sst-ui.js`, plus
  `style.css`. `pte-logic.js` holds the shared PTE logic used by both the UI and
  the tests.
- **State** is a single `localStorage` key, `ep`, holding JSON: word progress
  (`days`, `learned`, `best`), the `pte` sub-object (`wfdMem`, `rsMem`,
  `readFlow`, `readPass`, `readErr`, `we`, `sst`, `ra`, `di`, `swt`, `mode`),
  the `study` queue and `dv` drive settings. Nothing is sent to a server.
- **Offline** comes from `sw.js`: a cache named `ep-vNN` plus a precache list of
  every script, stylesheet and icon. `manifest.json` makes it installable.
- **SST audio** ships as mp3 files under `audio/sst/`; they are referenced by
  `pte-sst.js` but do not change between releases.

## Development

### Run the tests

```
node test/pte.test.mjs
```

Run the file directly; `node --test` is not needed and is not used. Everything is
built into Node (the `node:test` runner, `vm` for loading the browser scripts),
so no install step is involved. CI (`.github/workflows/ci.yml`) runs exactly this
command on every push and every pull request, on Node 20.

### Version numbers

Every shipped change bumps the app version, and **all tags move together**:

- `index.html` — every `?v=NN` query string and the `<small id="ver">vNN</small>`
  label in the header
- `sw.js` — the cache name `const C='ep-vNN'` and every `?v=NN` entry in the
  precache list `F`

Forgetting the cache name is the classic bug: an old service worker keeps
serving stale JavaScript. Use the tool instead of editing by hand:

```
node tools/bump.mjs 40
node tools/bump.mjs --to 40 --dry-run      # show what would change
node tools/bump.mjs --to 40 --root <dir>   # bump a copy of the site
```

It rewrites every tag, prints the files and lines it touched, refuses
non-numeric or backwards targets, errors when an expected tag is missing, and is
safe to run twice. The test suite reads the current version from `index.html`
dynamically, so bumping the version does not require editing tests.

### Content sourcing

New content must be real (with a stated source) or explicitly marked as
self-made notes — never silently presented as verified exam material:

- Quotes/transcripts use a `note` such as `取自 SST 讲座原文 100188`.
- Self-made reference answers set `ref_kind: 'self-made'` and say
  `自制，不是官方答案` in their note.
- Known data problems are flagged in data, not hidden: `content_note` /
  `title_content_mismatch` for a title that does not match the audio,
  `is_recalled_version` for recalled items, and `source: 'predicted'` for
  vocabulary guessed from a topic when no article body exists.

### Pull requests

One logical change per PR, with a test in `test/pte.test.mjs` for every
functional change. The CI job above is the gate.

## Known limits

- **Speaking/reading-aloud practice is self-assessed.** RA, DI and SWT (and the
  SST and RS modules) play the prompt and let you compare/assess yourself; there
  is no microphone recording scoring, no pronunciation or fluency scoring, and
  no PTE score estimate. The Shadow tab does use browser speech recognition but
  that is a rough local check, not an exam scorer.
- Speech synthesis voices, recognition support and the wake lock all depend on
  the browser/OS; Chrome or Edge on Android/desktop gives the best results.
- Installability and offline caching require HTTPS (or localhost) and a
  service-worker-capable browser.
- No accounts and no sync: clearing site data clears all progress.
