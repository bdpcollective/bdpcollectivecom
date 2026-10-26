#!/usr/bin/env node

/**
 * Batch-optimize images in public/images/:
 *   - Resize to max 1920px wide (preserving aspect ratio)
 *   - Convert to WebP at quality 80
 *   - Delete the original .jpg/.jpeg
 *   - Skip files already converted (WebP magic-byte check)
 *
 * Runs sequentially to avoid memory spikes on large sets.
 */

import { readdir, readFile, unlink, stat } from 'node:fs/promises';
import { join, extname, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(fileURLToPath(import.meta.url), '..', '..', 'public', 'images');

const EXTENSIONS = new Set(['.jpg', '.jpeg']);
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 80;

// WebP files start with RIFF....WEBP
async function isWebP(filePath) {
  try {
    const buf = Buffer.alloc(12);
    const fh = await import('node:fs').then(fs =>
      new Promise((res, rej) => {
        const fd = fs.openSync(filePath, 'r');
        fs.readSync(fd, buf, 0, 12, 0);
        fs.closeSync(fd);
        res(buf);
      })
    );
    return fh[0] === 0x52 && fh[1] === 0x49 && fh[2] === 0x46 && fh[3] === 0x46 &&
           fh[8] === 0x57 && fh[9] === 0x45 && fh[10] === 0x42 && fh[11] === 0x50;
  } catch {
    return false;
  }
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
  let converted = 0;
  let skipped = 0;
  let errors = 0;
  let totalSavedBytes = 0;

  console.log(`Scanning ${ROOT} for .jpg/.jpeg files...\n`);

  for await (const filePath of walkDir(ROOT)) {
    const ext = extname(filePath).toLowerCase();
    if (!EXTENSIONS.has(ext)) continue;

    // Check if file was already converted in a previous run (has WebP magic bytes
    // but still has .jpg/.jpeg extension — shouldn't happen, but be safe)
    if (await isWebP(filePath)) {
      skipped++;
      continue;
    }

    const outPath = filePath.slice(0, -ext.length) + '.webp';
    const originalSize = (await stat(filePath)).size;

    try {
      await sharp(filePath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(outPath);

      const newSize = (await stat(outPath)).size;
      totalSavedBytes += originalSize - newSize;

      // Delete original
      await unlink(filePath);
      converted++;

      if (converted % 100 === 0) {
        console.log(`  Converted ${converted} images so far...`);
      }
    } catch (err) {
      errors++;
      console.error(`  ERROR: ${filePath}: ${err.message}`);
    }
  }

  const savedMB = (totalSavedBytes / 1024 / 1024).toFixed(1);
  console.log(`\nDone.`);
  console.log(`  Converted: ${converted}`);
  console.log(`  Skipped:   ${skipped}`);
  console.log(`  Errors:    ${errors}`);
  console.log(`  Saved:     ~${savedMB} MB`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
