import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculatePanchang } from '../src/data/panchang-engine.js';

test('Drik Panchang Depth: Muhurtas, Calendar, Samvat, Disha Shool & Ascendant', () => {
  const city = { name: "Ujjain", country: "India", lat: 23.1827, lon: 75.7682, tz_offset: 5.5 };
  const panchang = calculatePanchang(new Date(2026, 10, 14), city);

  // 1. Nirayana Ascendant (Lagna)
  assert.ok(panchang.lagna, 'Lagna object must exist');
  assert.ok(panchang.lagna.rashi, 'Lagna Rashi name required');
  assert.ok(panchang.lagna.rashiEnglish, 'Lagna English name required');
  assert.ok(typeof panchang.lagna.deg === 'number' && panchang.lagna.deg >= 0 && panchang.lagna.deg < 30, 'Lagna deg valid');
  assert.ok(typeof panchang.lagna.min === 'number' && panchang.lagna.min >= 0 && panchang.lagna.min < 60, 'Lagna min valid');
  assert.ok(panchang.lagna.nakshatra, 'Lagna Nakshatra required');
  assert.ok(panchang.lagna.pada >= 1 && panchang.lagna.pada <= 4, 'Lagna Pada valid');

  // 2. Calendar & Astronomical Reckoning
  assert.ok(panchang.calendar, 'Calendar object must exist');
  assert.ok(panchang.calendar.vikramSamvat.includes('2083'), 'Vikram Samvat calculated');
  assert.ok(panchang.calendar.shakaSamvat.includes('1948'), 'Shaka Samvat calculated');
  assert.ok(panchang.calendar.kaliSamvat.includes('5127'), 'Kali Samvat calculated');
  assert.ok(panchang.calendar.ayana.includes('ayana'), 'Ayana computed');
  assert.ok(panchang.calendar.ritu, 'Ritu computed');
  assert.ok(panchang.calendar.dishaShool, 'Disha Shool computed');
  assert.ok(panchang.calendar.dishaShoolRemedy, 'Disha Shool remedy provided');

  // 3. Auspicious & Inauspicious Muhurtas (Drik Panchang standard)
  const m = panchang.muhurtas;
  assert.ok(m.rahuKalam.includes('–'), 'Rahu Kalam formatted');
  assert.ok(m.yamagandam.includes('–'), 'Yamagandam formatted');
  assert.ok(m.gulikaKalam.includes('–'), 'Gulika Kalam formatted');
  assert.ok(m.brahmaMuhurta.includes('–'), 'Brahma Muhurta formatted');
  assert.ok(m.amritKaal.includes('–'), 'Amrit Kaal formatted');
  assert.ok(m.vijayaMuhurta.includes('–'), 'Vijaya Muhurta formatted');
  assert.ok(m.godhuliMuhurta.includes('–'), 'Godhuli Muhurta formatted');
  assert.ok(m.durMuhurtam.includes('–'), 'Dur Muhurtam formatted');
  assert.ok(m.varjyam.includes('–'), 'Varjyam formatted');

  // 4. Moonrise & Moonset, End Times
  assert.ok(panchang.moonrise.includes('AM') || panchang.moonrise.includes('PM'), 'Moonrise formatted');
  assert.ok(panchang.moonset.includes('AM') || panchang.moonset.includes('PM'), 'Moonset formatted');
  assert.ok(panchang.tithiEndTime.includes('followed by'), 'Tithi end time includes next tithi');
  assert.ok(panchang.nakshatraEndTime.includes('followed by'), 'Nakshatra end time includes next nakshatra');
});
