import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculatePanchang } from '../src/data/panchang-engine.js';
import { transliterate } from '../src/data/transliteration-engine.js';

test('Planetary ephemeris data integrity for all 9 Navagrahas', () => {
  const city = { name: "Chennai", country: "India", lat: 13.0827, lon: 80.2707, tz_offset: 5.5 };
  const panchang = calculatePanchang(new Date(2026, 10, 14), city);

  assert.equal(panchang.planets.length, 9, 'Must have 9 planets');

  for (const p of panchang.planets) {
    assert.ok(p.name && p.name.length > 0, `Planet name missing: ${JSON.stringify(p)}`);
    assert.ok(p.sanskrit && p.sanskrit.length > 0, `Planet sanskrit name missing: ${p.name}`);
    assert.ok(typeof p.deg === 'number' && !isNaN(p.deg) && p.deg >= 0 && p.deg < 30, `Invalid deg for ${p.name}: ${p.deg}`);
    assert.ok(typeof p.min === 'number' && !isNaN(p.min) && p.min >= 0 && p.min < 60, `Invalid min for ${p.name}: ${p.min}`);
    assert.ok(typeof p.sec === 'number' && !isNaN(p.sec) && p.sec >= 0 && p.sec < 60, `Invalid sec for ${p.name}: ${p.sec}`);
    assert.ok(p.rashi && p.rashi.length > 0, `Rashi missing for ${p.name}`);
    assert.ok(p.rashiEnglish && p.rashiEnglish.length > 0, `Rashi English missing for ${p.name}`);
    assert.ok(p.nakshatra && p.nakshatra.length > 0, `Nakshatra missing for ${p.name}`);
    assert.ok(p.pada >= 1 && p.pada <= 4, `Invalid pada for ${p.name}: ${p.pada}`);
    assert.ok(p.status === "Direct (Marga)" || p.status === "Retrograde (Vakra)", `Invalid status for ${p.name}: ${p.status}`);
  }
});

test('Ayanamsa structured attributes verification', () => {
  const city = { name: "New Delhi", country: "India", lat: 28.6139, lon: 77.2090, tz_offset: 5.5 };
  const panchang = calculatePanchang(new Date(2026, 10, 14), city);

  assert.ok(panchang.ayanamsa, 'Ayanamsa must exist');
  assert.ok(typeof panchang.ayanamsa.degrees === 'number' && !isNaN(panchang.ayanamsa.degrees), 'Ayanamsa degrees must be a valid number');
  assert.ok(panchang.ayanamsa.degrees >= 23 && panchang.ayanamsa.degrees <= 25, 'Ayanamsa degrees in realistic range');
  assert.ok(typeof panchang.ayanamsa.minutes === 'number' && !isNaN(panchang.ayanamsa.minutes), 'Ayanamsa minutes must be a valid number');
  assert.ok(typeof panchang.ayanamsa.seconds === 'number' && !isNaN(panchang.ayanamsa.seconds), 'Ayanamsa seconds must be a valid number');
  assert.ok(panchang.ayanamsa.formatted.includes("°"), 'Ayanamsa formatted must contain degree symbol');
  assert.ok(!panchang.ayanamsa.formatted.includes("undefined"), 'Ayanamsa formatted must NOT contain undefined');
  assert.ok(!panchang.ayanamsa.formatted.includes("NaN"), 'Ayanamsa formatted must NOT contain NaN');
});

test('Gowri Panchangam and Choghadiya day/night slot structures', () => {
  const city = { name: "Bengaluru", country: "India", lat: 12.9716, lon: 77.5946, tz_offset: 5.5 };
  const panchang = calculatePanchang(new Date(2026, 10, 14), city);

  // Gowri
  assert.equal(panchang.gowriPanchangam.length, 8, 'Gowri flat array length must be 8');
  assert.ok(Array.isArray(panchang.gowriPanchangam.day), 'Gowri day slots must be an array');
  assert.equal(panchang.gowriPanchangam.day.length, 8, 'Gowri day slots must have 8 intervals');
  assert.ok(Array.isArray(panchang.gowriPanchangam.night), 'Gowri night slots must be an array');
  assert.equal(panchang.gowriPanchangam.night.length, 8, 'Gowri night slots must have 8 intervals');

  for (const slot of panchang.gowriPanchangam.day) {
    assert.ok(slot.name && slot.name.length > 0, 'Gowri day slot name required');
    assert.ok(slot.nature === "Good" || slot.nature === "Inauspicious", 'Gowri nature must be Good or Inauspicious');
    assert.ok(slot.start.includes("AM") || slot.start.includes("PM"), 'Start time formatted');
    assert.ok(slot.end.includes("AM") || slot.end.includes("PM"), 'End time formatted');
  }

  // Choghadiya
  assert.equal(panchang.choghadiya.length, 8, 'Choghadiya flat array length must be 8');
  assert.ok(Array.isArray(panchang.choghadiya.day), 'Choghadiya day slots must be an array');
  assert.equal(panchang.choghadiya.day.length, 8, 'Choghadiya day slots must have 8 intervals');
  assert.ok(Array.isArray(panchang.choghadiya.night), 'Choghadiya night slots must be an array');
  assert.equal(panchang.choghadiya.night.length, 8, 'Choghadiya night slots must have 8 intervals');

  for (const slot of panchang.choghadiya.day) {
    assert.ok(slot.name && slot.name.length > 0, 'Choghadiya day slot name required');
    assert.ok(slot.nature === "Auspicious" || slot.nature === "Inauspicious", 'Choghadiya nature must be Auspicious or Inauspicious');
  }
});

test('End-to-End Tab HTML Rendering: Zero undefined, zero NaN, zero empty parentheses', () => {
  const city = { name: "Mumbai", country: "India", lat: 19.0760, lon: 72.8777, tz_offset: 5.5 };
  const data = calculatePanchang(new Date(2026, 10, 14), city);

  // 1. Simulate Planetary Longitudes Table Rendering
  const planets = data.planets;
  const ayanamsa = data.ayanamsa;
  const ayanamsaStr = ayanamsa.formatted;

  const planetsHtml = `
    <table class="gk-table">
      ${planets.map(p => {
        const sanskritLabel = p.sanskrit ? ` (${transliterate(p.sanskrit, 'sa')})` : '';
        return `<tr><td>${p.name}${sanskritLabel}</td><td>${p.deg}° ${p.min}' ${p.sec}"</td><td>${p.rashi}</td><td>${p.nakshatra}</td><td>Pada ${p.pada}</td><td>${p.status}</td></tr>`;
      }).join('')}
    </table>
  `;

  assert.ok(!planetsHtml.includes("undefined"), 'Planetary HTML must NOT contain "undefined"');
  assert.ok(!planetsHtml.includes("NaN"), 'Planetary HTML must NOT contain "NaN"');
  assert.ok(!planetsHtml.includes(" ()"), 'Planetary HTML must NOT contain empty parentheses " ()"');
  assert.ok(planetsHtml.includes("Surya (Sun) (सूर्यः)"), 'Must render Surya with Sanskrit name');
  assert.ok(planetsHtml.includes("Pada"), 'Must render Pada numbers');

  // 2. Simulate Gowri Table Rendering
  const gowriDaySlots = data.gowriPanchangam.day;
  const gowriNightSlots = data.gowriPanchangam.night;
  assert.doesNotThrow(() => {
    gowriDaySlots.map(g => `${g.slot}: ${g.name} (${g.nature})`);
    gowriNightSlots.map(g => `${g.slot}: ${g.name} (${g.nature})`);
  }, 'Gowri rendering must never throw TypeError');

  // 3. Simulate Choghadiya Table Rendering
  const choghadiyaDaySlots = data.choghadiya.day;
  const choghadiyaNightSlots = data.choghadiya.night;
  assert.doesNotThrow(() => {
    choghadiyaDaySlots.map(c => `${c.slot}: ${c.name} (${c.nature})`);
    choghadiyaNightSlots.map(c => `${c.slot}: ${c.name} (${c.nature})`);
  }, 'Choghadiya rendering must never throw TypeError');
});
