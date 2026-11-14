#!/usr/bin/env node
// tools/bump.mjs — one command to move every app version tag together.
//
// This is a static site with no build step, so the version number is copied by
// hand into four places:
//
//   index.html  the ?v=NN cache-busting queries on <link> and <script> tags
//   index.html  the <small id="ver">vNN</small> label in the header
//   sw.js       the cache name `const C='ep-vNN'`
//   sw.js       the ?v=NN entries in the precache list F
//
// Forgetting one of them is the classic bug: a stale service worker keeps
// serving old JS. Bump them all at once:
//
//   node tools/bump.mjs 40
//   node tools/bump.mjs --to 40
//   node tools/bump.mjs --to 40 --root <copy-of-the-site> [--dry-run]
//
// The tool never guesses:
//   * a target that is not a whole number, a missing target, or an unknown
//     option exits with code 1;
//   * a file or tag it expects but cannot find exits with code 1 (it does not
//     silently "succeed" with nothing to do);
//   * a backwards target exits with code 2 unless --force is given.
//
// It is idempotent: running it twice with the same target reports
// "nothing to do" and leaves the files alone. After writing it re-reads both
// files and fails if any version tag did not land on the target.
//
// This file is also imported by test/pte.test.mjs, so the parsing, the
// replacement and the error paths are covered by the same test suite.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const USAGE = `Usage: node tools/bump.mjs <version> [options]

Bump every app version tag together (index.html ?v=NN + vNN label,
sw.js cache name + precache ?v=NN).

Arguments:
  <version>, --to <version>   target version, a whole number such as 40

Options:
  --root <dir>   directory holding index.html and sw.js (default: .)
  --dry-run      report the changes without writing the files
  --force        allow a backwards version move
  -h, --help     show this help

Examples:
  node tools/bump.mjs 40
  node tools/bump.mjs --to 40 --dry-run
  node tools/bump.mjs --to 40 --root build/copy`;

const INDEX_FILE = 'index.html';
const SW_FILE = 'sw.js';

// index.html: every ?v=NN query string and the vNN label inside <small id="ver">.
const INDEX_QUERY = /\?v=(\d+)/g;
const INDEX_LABEL = /(<small\s+id="ver"[^>]*>)v(\d+)(<\/small>)/;
// sw.js: the cache name const C='ep-vNN' and every ?v=NN precache entry.
const SW_CACHE = /(const\s+C\s*=\s*'ep-v)(\d+)(')/;
const SW_QUERY = /\?v=(\d+)/g;

export class BumpError extends Error {
  constructor(message, code = 1) {
    super(message);
    this.name = 'BumpError';
    this.code = code;
  }
}

export function parseVersion(value) {
  const text = String(value === undefined || value === null ? '' : value).trim();
  if (!/^\d+$/.test(text)) {
    throw new BumpError(`target version must be a positive whole number, got "${value}"`, 1);
  }
  const version = Number(text);
  if (!Number.isSafeInteger(version) || version < 1) {
    throw new BumpError(`target version must be a positive whole number, got "${value}"`, 1);
  }
  return version;
}

export function parseArgs(argv) {
  const args = { to: undefined, root: '.', dryRun: false, force: false, help: false };
  const setTo = value => {
    if (args.to !== undefined) throw new BumpError('target version given more than once', 1);
    args.to = value;
  };
  for (let i = 0; i < argv.length; i++) {
    const arg = String(argv[i]);
    if (arg === '-h' || arg === '--help') { args.help = true; continue; }
    if (arg === '--dry-run') { args.dryRun = true; continue; }
    if (arg === '--force') { args.force = true; continue; }
    if (arg === '--root') {
      if (i + 1 >= argv.length) throw new BumpError('--root needs a directory', 1);
      args.root = String(argv[++i]);
      continue;
    }
    if (arg.startsWith('--root=')) { args.root = arg.slice('--root='.length); continue; }
    if (arg === '--to') {
      if (i + 1 >= argv.length) throw new BumpError('--to needs a version number', 1);
      setTo(String(argv[++i]));
      continue;
    }
    if (arg.startsWith('--to=')) { setTo(arg.slice('--to='.length)); continue; }
    if (arg.startsWith('-')) throw new BumpError(`unknown option: ${arg}`, 1);
    setTo(arg);
  }
  return args;
}

function lineOf(text, index) {
  let line = 1;
  for (let i = 0; i < index && i < text.length; i++) {
    if (text.charCodeAt(i) === 10) line++;
  }
  return line;
}

function readFile(root, name) {
  const file = path.join(root, name);
  let text;
  try {
    text = fs.readFileSync(file, 'utf8');
  } catch (error) {
    throw new BumpError(`${name}: cannot read ${file} (${error.code || error.message})`, 1);
  }
  return { name, file, text };
}

function queryMatches(text, pattern) {
  return [...text.matchAll(pattern)].map(match => ({
    version: Number(match[1]),
    line: lineOf(text, match.index),
    column: match.index
  }));
}

// Read-only pass: what version is the site at, and where are the tags?
export function plan(root) {
  const index = readFile(root, INDEX_FILE);
  const sw = readFile(root, SW_FILE);

  const queries = queryMatches(index.text, /\?v=(\d+)/g);
  if (!queries.length) {
    throw new BumpError(`${INDEX_FILE}: expected at least one ?v=NN tag, found none`, 1);
  }
  const labelMatch = INDEX_LABEL.exec(index.text);
  if (!labelMatch) {
    throw new BumpError(
      `${INDEX_FILE}: expected a version label like <small id="ver" ...>v39</small>, found none`,
      1
    );
  }
  const label = {
    version: Number(labelMatch[2]),
    line: lineOf(index.text, labelMatch.index),
    column: labelMatch.index
  };

  const cacheMatch = SW_CACHE.exec(sw.text);
  if (!cacheMatch) {
    throw new BumpError(`${SW_FILE}: expected a cache name like const C='ep-v39', found none`, 1);
  }
  const cache = {
    version: Number(cacheMatch[2]),
    line: lineOf(sw.text, cacheMatch.index),
    column: cacheMatch.index
  };
  const precache = queryMatches(sw.text, /\?v=(\d+)/g);
  if (!precache.length) {
    throw new BumpError(`${SW_FILE}: expected ?v=NN entries in the precache list, found none`, 1);
  }

  const versions = [...new Set([
    label.version,
    cache.version,
    ...queries.map(item => item.version),
    ...precache.map(item => item.version)
  ])].sort((a, b) => a - b);

  return {
    root,
    index: { ...index, queries, label },
    sw: { ...sw, cache, precache },
    // The header label is the canonical version shown to the user.
    current: label.version,
    versions
  };
}

function change(file, kind, from, to, hits) {
  const lines = [...new Set(hits.map(hit => hit.line))];
  return { file, kind, from, to, count: hits.length, lines };
}

function describeChanges(planned, target) {
  return [
    change(INDEX_FILE, '?v=', planned.index.queries[0].version, target, planned.index.queries),
    change(INDEX_FILE, 'header label', planned.index.label.version, target,
      [{ line: planned.index.label.line }]),
    change(SW_FILE, 'cache name', planned.sw.cache.version, target,
      [{ line: planned.sw.cache.line }]),
    change(SW_FILE, 'precache ?v=', planned.sw.precache[0].version, target, planned.sw.precache)
  ];
}

// Rewrite the version tags in one directory. Returns a report; throws BumpError
// on bad input, missing tags, or a failed post-write check.
export function bump({ root = process.cwd(), to, dryRun = false, force = false } = {}) {
  const target = parseVersion(to);
  const planned = plan(root);

  if (planned.versions.length === 1 && planned.current === target) {
    return {
      changed: false,
      dryRun,
      from: planned.current,
      to: target,
      files: [INDEX_FILE, SW_FILE],
      changes: [],
      planned
    };
  }
  if (!force && planned.versions.some(version => version > target)) {
    throw new BumpError(
      `refusing to go backwards: ${INDEX_FILE}/${SW_FILE} are at v${planned.current} ` +
      `(found v${planned.versions.join(', v')}), target is v${target}; use --force to override`,
      2
    );
  }

  const nextIndex = planned.index.text
    .replace(/\?v=\d+/g, `?v=${target}`)
    .replace(INDEX_LABEL, (match, open, version, close) => `${open}v${target}${close}`);
  const nextSw = planned.sw.text
    .replace(SW_CACHE, (match, open, version, close) => `${open}${target}${close}`)
    .replace(/\?v=\d+/g, `?v=${target}`);

  const changed = nextIndex !== planned.index.text || nextSw !== planned.sw.text;
  if (changed && !dryRun) {
    fs.writeFileSync(planned.index.file, nextIndex);
    fs.writeFileSync(planned.sw.file, nextSw);
    // Do not trust the write: re-read and prove every tag landed on target.
    const after = plan(root);
    if (after.versions.length !== 1 || after.versions[0] !== target) {
      throw new BumpError(
        `post-write check failed: expected only v${target}, found v${after.versions.join(', v')}`,
        1
      );
    }
  }

  return {
    changed,
    dryRun,
    from: planned.current,
    to: target,
    files: [INDEX_FILE, SW_FILE],
    changes: describeChanges(planned, target),
    planned
  };
}

function formatLines(lines) {
  return lines.length ? `line ${lines.join(', ')}` : 'unknown line';
}

export function printReport(result, out = console.log) {
  if (!result.changed) {
    out(`bump: ${INDEX_FILE} and ${SW_FILE} are already at v${result.to}; nothing to do`);
    return;
  }
  out(`bump: v${result.from} -> v${result.to}`);
  for (const item of result.changes) {
    let what;
    if (item.kind === 'cache name') what = `cache name ep-v${item.from} -> ep-v${item.to}`;
    else if (item.kind === 'header label') what = `header label v${item.from} -> v${item.to}`;
    else if (item.kind === 'precache ?v=') what = `${item.count} x precache ?v=${item.from} -> ?v=${item.to}`;
    else what = `${item.count} x ?v=${item.from} -> ?v=${item.to}`;
    out(`${item.file}: ${what} (${formatLines(item.lines)})`);
  }
  const verb = result.dryRun ? 'would write' : 'wrote';
  out(`${verb} ${result.files.join(', ')}${result.dryRun ? ' (dry run)' : ''}`);
}

// CLI entry point, also used by the tests so the exit codes are covered.
export function run(argv, { cwd = process.cwd(), out = console.log, err = console.error } = {}) {
  let args;
  try {
    args = parseArgs(argv);
  } catch (error) {
    if (error instanceof BumpError) {
      err(`bump: ${error.message}`);
      return error.code;
    }
    throw error;
  }
  if (args.help) {
    out(USAGE);
    return 0;
  }
  if (args.to === undefined) {
    err('bump: a target version is required, for example `node tools/bump.mjs 40`');
    err(USAGE);
    return 1;
  }
  try {
    const result = bump({
      root: path.resolve(cwd, args.root),
      to: args.to,
      dryRun: args.dryRun,
      force: args.force
    });
    printReport(result, out);
    return 0;
  } catch (error) {
    if (error instanceof BumpError) {
      err(`bump: ${error.message}`);
      return error.code;
    }
    throw error;
  }
}

const invokedDirectly = (() => {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return path.resolve(entry).toLowerCase() === fileURLToPath(import.meta.url).toLowerCase();
  } catch {
    return false;
  }
})();

if (invokedDirectly) {
  process.exitCode = run(process.argv.slice(2));
}
