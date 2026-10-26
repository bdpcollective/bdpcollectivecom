#!/usr/bin/env node

/**
 * Update image references in source files:
 *   - Walk all .astro, .ts, .js files in src/
 *   - Replace .jpg/.jpeg → .webp, unless the referenced .jpg still exists in public/
 *
 * Paths are often built at runtime (`${basePath}/Name-${i + 2}.jpg`), so we can't
 * reliably match on "/images/". Instead every .jpg/.jpeg is converted except literal
 * paths that resolve to a file still on disk (e.g. "/fog.jpg", '../../public/hero-bg.jpg').
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SRC_ROOT = join(fileURLToPath(import.meta.url), '..', '..', 'src');
const PUBLIC_ROOT = join(fileURLToPath(import.meta.url), '..', '..', 'public');

const FILE_EXTENSIONS = new Set(['.astro', '.ts', '.js', '.tsx', '.jsx']);

const PATTERN = /\.jpe?g\b/gi;

// Text from the start of the enclosing string literal (or line) up to the extension
function literalBefore(content, offset) {
  const start = Math.max(
    content.lastIndexOf('"', offset),
    content.lastIndexOf("'", offset),
    content.lastIndexOf('`', offset),
    content.lastIndexOf('\n', offset),
  ) + 1;
  return content.slice(start, offset);
}

function existsInPublic(path) {
  const marker = 'public/';
  const rel = path.includes(marker)
    ? path.slice(path.lastIndexOf(marker) + marker.length)
    : path.replace(/^\//, '');
  return rel.length > 0 && existsSync(join(PUBLIC_ROOT, rel));
}

async function* walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkDir(fullPath);
    } else if (entry.isFile()) {
      yield fullPath;
    }
  }
}

async function main() {
  let filesModified = 0;
  let totalReplacements = 0;

  console.log(`Scanning ${SRC_ROOT} for image references...\n`);

  for await (const filePath of walkDir(SRC_ROOT)) {
    const ext = extname(filePath).toLowerCase();
    if (!FILE_EXTENSIONS.has(ext)) continue;

    const content = await readFile(filePath, 'utf-8');
    let count = 0;
    const updated = content.replace(PATTERN, (match, offset) => {
      if (existsInPublic(literalBefore(content, offset) + match)) return match;
      count++;
      return '.webp';
    });

    if (count > 0) {
      await writeFile(filePath, updated, 'utf-8');
      filesModified++;
      totalReplacements += count;
      console.log(`  ${filePath.replace(SRC_ROOT, 'src')}: ${count} replacement(s)`);
    }
  }

  console.log(`\nDone.`);
  console.log(`  Files modified:    ${filesModified}`);
  console.log(`  Total replacements: ${totalReplacements}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
