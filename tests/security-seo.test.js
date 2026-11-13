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
  assert.ok(fs.existsSync(path.resolve('public/assets/og-banner.svg')), 'OpenGraph og-banner.svg must exist');

  const sitemap = fs.readFileSync(path.resolve('public/sitemap.xml'), 'utf8');
  assert.ok(sitemap.includes('hreflang="sa"'), 'Sitemap must include Sanskrit hreflang');
  assert.ok(sitemap.includes('hreflang="ta"'), 'Sitemap must include Tamil hreflang');
  assert.ok(sitemap.includes('hreflang="te"'), 'Sitemap must include Telugu hreflang');
  assert.ok(sitemap.includes('hreflang="en"'), 'Sitemap must include English hreflang');
  assert.ok(sitemap.includes('#jyotirlingas'), 'Sitemap must include Jyotirlingas route');

  const privacy = fs.readFileSync(path.resolve('public/privacy.html'), 'utf8');
  assert.ok(privacy.includes('Google AdSense'), 'Privacy policy must disclose Google AdSense');
  assert.ok(privacy.includes('cookies'), 'Privacy policy must disclose cookies');
  assert.ok(privacy.includes('sponsored'), 'Privacy policy must disclose sponsored affiliate links');
});

test('Ad-Revenue Architecture: Zero-CLS slots coverage, sticky dismiss, and AdSense tags', () => {
  const mainJs = fs.readFileSync(path.resolve('src/main.js'), 'utf8');
  const adCss = fs.readFileSync(path.resolve('src/styles/ad-slots.css'), 'utf8');

  // Verify all 5 ad slots are defined in main.js
  assert.ok(mainJs.includes("'ad-header-leaderboard'"), 'Must include Header Leaderboard slot');
  assert.ok(mainJs.includes("'ad-panchang-inline'"), 'Must include Panchang Inline slot');
  assert.ok(mainJs.includes("'ad-stotra-incontent'"), 'Must include Stotra In-content slot');
  assert.ok(mainJs.includes("'ad-story-native'"), 'Must include Story Native Feed slot');
  assert.ok(mainJs.includes("'ad-footer-anchor'"), 'Must include Mobile Sticky Anchor Footer slot');

  // Verify adsbygoogle tags & close toggle
  assert.ok(mainJs.includes('class="adsbygoogle"'), 'Must render standard Google AdSense adsbygoogle tag');
  assert.ok(mainJs.includes('gk-close-ad-footer-anchor'), 'Must provide sticky ad dismiss button');
  assert.ok(mainJs.includes('gk_hide_sticky_ad'), 'Must persist dismissal in sessionStorage');

  // Verify CSS Zero-CLS Layout Containment
  assert.ok(adCss.includes('contain: layout'), 'Must enforce CSS layout containment');
  assert.ok(adCss.includes('.gk-ad-sticky-footer'), 'Must style sticky footer');
});

test('Dynamic SEO Engine & Ethical Affiliate Compliance: OpenGraph, JSON-LD schemas, rel="sponsored"', () => {
  const mainJs = fs.readFileSync(path.resolve('src/main.js'), 'utf8');
  const indexHtml = fs.readFileSync(path.resolve('index.html'), 'utf8');

  // OpenGraph & Twitter tags in index.html
  assert.ok(indexHtml.includes('property="og:image"'), 'index.html must have og:image');
  assert.ok(indexHtml.includes('name="twitter:image"'), 'index.html must have twitter:image');
  assert.ok(indexHtml.includes('name="keywords"'), 'index.html must have keywords meta');
  assert.ok(indexHtml.includes('name="google-adsense-account"'), 'index.html must have AdSense account verification tag');

  // Dynamic SEO method in main.js
  assert.ok(mainJs.includes('updateSEO()'), 'main.js must implement updateSEO()');
  assert.ok(mainJs.includes('FAQPage'), 'SEO must include FAQPage structured schema');
  assert.ok(mainJs.includes('BreadcrumbList'), 'SEO must include BreadcrumbList schema');

  // Ethical Affiliate links with strict rel="sponsored nofollow noopener"
  assert.ok(mainJs.includes('renderAffiliateScriptures'), 'Must provide scriptures affiliate component');
  assert.ok(mainJs.includes('renderAffiliateMalas'), 'Must provide malas affiliate component');
  assert.ok(mainJs.includes('rel="sponsored nofollow noopener"'), 'All affiliate links must use rel="sponsored nofollow noopener"');
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
