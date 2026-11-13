import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculatePanchang, getJulianDay, getLahiriAyanamsa } from '../src/data/panchang-engine.js';

test('Julian Day Number calculation is accurate for J2000.0', () => {
  // Jan 1, 2000 at 12:00 UTC is exactly JD 2451545.0
  const jd = getJulianDay(2000, 1, 1, 12.0);
  assert.equal(jd, 2451545.0);
});

test('Lahiri Ayanamsa calculation is within standard Vedic range (23.8° to 24.5° for modern era)', () => {
  const jd = getJulianDay(2026, 11, 13, 12.0);
  const ayanamsa = getLahiriAyanamsa(jd);
  assert.ok(ayanamsa >= 24.1 && ayanamsa <= 24.4, `Ayanamsa ${ayanamsa} out of expected 2026 range`);
});

test('Panchang calculations for Chennai, India (Vedic Homeland)', () => {
  const chennai = {
    name: "Chennai",
    country: "India",
    lat: 13.0827,
    lon: 80.2707,
    tz_offset: 5.5
  };
  const testDate = new Date(2026, 10, 13); // Nov 13, 2026
  const panchang = calculatePanchang(testDate, chennai);

  assert.ok(panchang.sunrise.includes("AM"), "Sunrise should be AM");
  assert.ok(panchang.sunset.includes("PM"), "Sunset should be PM");
  assert.ok(panchang.tithi.name.length > 0, "Tithi should be populated");
  assert.ok(panchang.nakshatra.name.length > 0, "Nakshatra should be populated");
  assert.ok(panchang.nakshatra.pada >= 1 && panchang.nakshatra.pada <= 4, "Pada must be 1 to 4");
  assert.ok(panchang.muhurtas.rahuKalam.includes("–"), "Rahu Kalam must be a time range");
  assert.equal(panchang.gowriPanchangam.length, 8, "Gowri daytime must have 8 divisions");
  assert.equal(panchang.choghadiya.length, 8, "Choghadiya daytime must have 8 divisions");
  assert.equal(panchang.planets.length, 9, "Must compute positions for 9 Navagrahas");
});

test('Panchang calculations for New York, USA (Western Hemisphere Diaspora)', () => {
  const ny = {
    name: "New York",
    country: "USA",
    lat: 40.7128,
    lon: -74.0060,
    tz_offset: -5.0
  };
  const testDate = new Date(2026, 10, 13);
  const panchang = calculatePanchang(testDate, ny);

  assert.ok(panchang.sunrise.includes("AM"));
  assert.ok(panchang.sunset.includes("PM"));
  assert.notEqual(panchang.sunrise, "12:00 AM", "Sunrise should not be midnight");
});

test('Panchang calculations for Sydney, Australia (Southern Hemisphere)', () => {
  const sydney = {
    name: "Sydney",
    country: "Australia",
    lat: -33.8688,
    lon: 151.2093,
    tz_offset: 10.0
  };
  const testDate = new Date(2026, 10, 13);
  const panchang = calculatePanchang(testDate, sydney);

  assert.ok(panchang.sunrise.includes("AM"));
  assert.ok(panchang.sunset.includes("PM"));
  assert.ok(panchang.dayDuration.length > 0);
});

test('Panchang calculations for London, UK (Greenwich Zero Meridian)', () => {
  const london = {
    name: "London",
    country: "UK",
    lat: 51.5074,
    lon: -0.1278,
    tz_offset: 0.0
  };
  const testDate = new Date(2026, 10, 13);
  const panchang = calculatePanchang(testDate, london);

  assert.ok(panchang.sunrise.includes("AM"));
  assert.ok(panchang.sunset.includes("PM"));
});

test('Panchang calculations for Tokyo, Japan (Far East Hemisphere)', () => {
  const tokyo = {
    name: "Tokyo",
    country: "Japan",
    lat: 35.6762,
    lon: 139.6503,
    tz_offset: 9.0
  };
  const testDate = new Date(2026, 10, 13);
  const panchang = calculatePanchang(testDate, tokyo);

  assert.ok(panchang.sunrise.includes("AM"));
  assert.ok(panchang.sunset.includes("PM"));
});
