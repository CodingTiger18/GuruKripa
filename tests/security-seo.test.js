import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('Security Headers audit: CSP Level 3 and HSTS in public/_headers', () => {
  const headersPath = path.resolve('public/_headers');
  assert.ok(fs.existsSync(headersPath), 'public/_headers must exist');
  const content = fs.readFileSync(headersPath, 'utf8');

  assert.ok(content.includes('Content-Security-Policy:'), 'Must enforce Content-Security-Policy');
  assert.ok(content.includes("default-src 'self'"), 'CSP must restrict default-src to self');
  assert.ok(content.includes('Strict-Transport-Security:'), 'Must enforce HSTS');
  assert.ok(content.includes('X-Content-Type-Options: nosniff'), 'Must enforce nosniff');
  assert.ok(content.includes('X-Frame-Options: DENY'), 'Must prevent clickjacking');
});

test('SEO & AdSense compliance files in public/', () => {
  assert.ok(fs.existsSync(path.resolve('public/robots.txt')), 'robots.txt must exist');
  assert.ok(fs.existsSync(path.resolve('public/sitemap.xml')), 'sitemap.xml must exist');
  assert.ok(fs.existsSync(path.resolve('public/ads.txt')), 'ads.txt must exist');
  assert.ok(fs.existsSync(path.resolve('public/privacy.html')), 'privacy.html must exist');
  assert.ok(fs.existsSync(path.resolve('public/terms.html')), 'terms.html must exist');
  assert.ok(fs.existsSync(path.resolve('public/disclaimer.html')), 'disclaimer.html must exist');
  assert.ok(fs.existsSync(path.resolve('public/manifest.json')), 'manifest.json must exist');
  assert.ok(fs.existsSync(path.resolve('public/sw.js')), 'sw.js must exist');

  const sitemap = fs.readFileSync(path.resolve('public/sitemap.xml'), 'utf8');
  assert.ok(sitemap.includes('hreflang="sa"'), 'Sitemap must include Sanskrit hreflang');
  assert.ok(sitemap.includes('hreflang="ta"'), 'Sitemap must include Tamil hreflang');
  assert.ok(sitemap.includes('hreflang="te"'), 'Sitemap must include Telugu hreflang');
  assert.ok(sitemap.includes('hreflang="en"'), 'Sitemap must include English hreflang');
});

test('Zero exposed secrets and zero private keys in codebase', () => {
  const checkFiles = [
    'src/data/panchang-engine.js',
    'src/data/transliteration-engine.js',
    'src/data/japa-engine.js',
    'src/main.js',
    'package.json'
  ];

  for (const rel of checkFiles) {
    const full = path.resolve(rel);
    if (fs.existsSync(full)) {
      const code = fs.readFileSync(full, 'utf8');
      assert.ok(!code.includes('AIzaSy'), `Forbidden API key pattern found in ${rel}`);
      assert.ok(!code.includes('PRIVATE KEY'), `Forbidden private key found in ${rel}`);
      assert.ok(!code.includes('sk_live'), `Forbidden secret token found in ${rel}`);
    }
  }
});
