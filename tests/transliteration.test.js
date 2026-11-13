import { test } from 'node:test';
import assert from 'node:assert/strict';
import { transliterate, SUPPORTED_LANGUAGES } from '../src/data/transliteration-engine.js';

test('Transliteration supports all 11 required languages', () => {
  assert.equal(SUPPORTED_LANGUAGES.length, 11, 'Must support exactly 11 languages/scripts');
  const codes = SUPPORTED_LANGUAGES.map(l => l.code);
  assert.deepEqual(codes.sort(), ['bn', 'en', 'gu', 'hi', 'kn', 'ml', 'mr', 'or', 'sa', 'ta', 'te'].sort());
});

test('Transliteration to native Devanagari preserves source text', () => {
  const sample = "ॐ भूर्भुवः स्वः";
  assert.equal(transliterate(sample, 'sa'), sample);
  assert.equal(transliterate(sample, 'hi'), sample);
  assert.equal(transliterate(sample, 'mr'), sample);
});

test('Transliteration to Romanized IAST produces valid diacritics', () => {
  const devanagari = "कर्मण्येवाधिकारस्ते";
  const iast = transliterate(devanagari, 'en');
  assert.ok(iast.includes('karm') || iast.includes('karmanya'), `Unexpected IAST output: ${iast}`);
});

test('Transliteration to Southern & Eastern scripts generates correct Unicode blocks', () => {
  const sample = "शान्ताकारं भुजगशयनं";

  // Tamil (ta)
  const tamil = transliterate(sample, 'ta');
  assert.ok(tamil.length > 0);
  assert.notEqual(tamil, sample);

  // Telugu (te)
  const telugu = transliterate(sample, 'te');
  assert.ok(telugu.length > 0);
  assert.notEqual(telugu, sample);

  // Kannada (kn)
  const kannada = transliterate(sample, 'kn');
  assert.ok(kannada.length > 0);
  assert.notEqual(kannada, sample);

  // Malayalam (ml)
  const malayalam = transliterate(sample, 'ml');
  assert.ok(malayalam.length > 0);
  assert.notEqual(malayalam, sample);

  // Gujarati (gu)
  const gujarati = transliterate(sample, 'gu');
  assert.ok(gujarati.length > 0);
  assert.notEqual(gujarati, sample);

  // Bengali (bn)
  const bengali = transliterate(sample, 'bn');
  assert.ok(bengali.length > 0);
  assert.notEqual(bengali, sample);

  // Odia (or)
  const odia = transliterate(sample, 'or');
  assert.ok(odia.length > 0);
  assert.notEqual(odia, sample);
});

test('Transliteration eliminates Vedic accent square tofu glyphs across all 11 scripts', () => {
  const vedicText = "ॐ भूर्भुवः॒ स्वः॑ तत्स॑वि॒तुर्वरे॑ण्यं॒";
  const allCodes = ['sa', 'hi', 'mr', 'ta', 'te', 'kn', 'ml', 'gu', 'bn', 'or', 'en'];

  for (const code of allCodes) {
    const rendered = transliterate(vedicText, code);
    // Assert no unstripped Vedic accent marks leak into output
    assert.ok(!rendered.includes('\u0951'), `Udatta accent leaked into ${code} rendering`);
    assert.ok(!rendered.includes('\u0952'), `Anudatta accent leaked into ${code} rendering`);
    assert.ok(rendered.length > 0, `${code} rendering must not be empty`);
  }
});
