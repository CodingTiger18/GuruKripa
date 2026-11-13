import { test } from 'node:test';
import assert from 'node:assert/strict';
import { 
  getDailyDeityInfo, 
  POSTER_ASPECT_RATIOS, 
  POSTER_THEMES 
} from '../src/data/deity-poster-engine.js';
import { calculatePanchang } from '../src/data/panchang-engine.js';

test('Deity Poster Engine: Aspect Ratios and Theme Specifications', () => {
  assert.equal(POSTER_ASPECT_RATIOS.length, 4, 'Must have 4 aspect ratios');
  const ids = POSTER_ASPECT_RATIOS.map(a => a.id);
  assert.ok(ids.includes('square'), 'Square aspect ratio supported');
  assert.ok(ids.includes('portrait'), 'Portrait aspect ratio supported');
  assert.ok(ids.includes('story'), 'Story status aspect ratio supported');
  assert.ok(ids.includes('landscape'), 'X Landscape aspect ratio supported');

  assert.ok(POSTER_THEMES.gold, 'Gold theme must exist');
  assert.ok(POSTER_THEMES.saffron, 'Saffron theme must exist');
  assert.ok(POSTER_THEMES.maroon, 'Maroon theme must exist');
  assert.ok(POSTER_THEMES.neelkanth, 'Neelkanth theme must exist');
});

test('Deity Poster Engine: Akshaya Tritiya special deity mapping (Lakshmi, Kubera, Swarna Bhairava)', () => {
  // Simulate Akshaya Tritiya (Vaishakha Shukla Tritiya)
  const mockPanchang = {
    date: '2026-05-10', // May (month 5)
    tithi: { name: 'Shukla Tritiya', paksha: 'Shukla' },
    nakshatra: { name: 'Rohini' },
    vaar: { sanskrit: 'Shukravara', english: 'Friday' },
    city: 'Chennai',
    country: 'India'
  };

  const deity = getDailyDeityInfo(mockPanchang);

  assert.ok(deity, 'Deity info must not be null');
  assert.ok(deity.festival.includes('Akshaya Tritiya'), 'Must identify Akshaya Tritiya');
  assert.ok(deity.deityName.includes('Mahalakshmi'), 'Must include Goddess Mahalakshmi');
  assert.ok(deity.deityName.includes('Kubera'), 'Must include Lord Kubera');
  assert.ok(deity.deityName.includes('Swarna Akarshana Bhairava'), 'Must include Swarna Akarshana Bhairava');
  assert.equal(deity.theme, 'gold', 'Must use gold theme');
  assert.ok(deity.mantra.includes('त्रिभुवनमहालक्ष्म्यै'), 'Must have authentic Lakshmi Kubera mantra');
  assert.ok(deity.quote.includes('imperishable (Akshaya)'), 'Must include Akshaya blessing quote');
  assert.ok(deity.specialNote.includes('Gold & Silver Purchase'), 'Must highlight gold buying muhurta');
});

test('Deity Poster Engine: Dynamic Tithi Mapping for Ekadashi and Pradosham', () => {
  // 1. Ekadashi
  const ekadashiPanchang = {
    date: '2026-11-20',
    tithi: { name: 'Shukla Ekadashi', paksha: 'Shukla' },
    nakshatra: { name: 'Revati' },
    vaar: { sanskrit: 'Guruvara', english: 'Thursday' }
  };
  const ekaDeity = getDailyDeityInfo(ekadashiPanchang);
  assert.ok(ekaDeity.deityName.includes('Vishnu'), 'Ekadashi must map to Lord Vishnu');
  assert.ok(ekaDeity.mantra.includes('शान्ताकारं'), 'Ekadashi mantra must be Shantakaram Bhujagashayanam');

  // 2. Pradosham / Trayodashi
  const pradoshamPanchang = {
    date: '2026-11-22',
    tithi: { name: 'Shukla Trayodashi', paksha: 'Shukla' },
    nakshatra: { name: 'Bharani' },
    vaar: { sanskrit: 'Shanivara', english: 'Saturday' }
  };
  const pradoshDeity = getDailyDeityInfo(pradoshamPanchang);
  assert.ok(pradoshDeity.deityName.includes('Shiva'), 'Trayodashi must map to Lord Shiva');
  assert.equal(pradoshDeity.theme, 'neelkanth', 'Trayodashi must use Neelkanth theme');
});

test('Deity Poster Engine: Real-Time Calculated Panchang Integration', () => {
  const city = { name: "New Delhi", country: "India", lat: 28.6139, lon: 77.2090, tz_offset: 5.5 };
  const realPanchang = calculatePanchang(new Date(2026, 10, 14), city);

  const deity = getDailyDeityInfo(realPanchang);
  assert.ok(deity, 'Deity must be computed for real Panchang');
  assert.ok(deity.deityName && deity.deityName.length > 5, 'Deity name valid');
  assert.ok(deity.mantra && deity.mantra.length > 10, 'Mantra valid');
  assert.ok(deity.quote && deity.quote.length > 20, 'Quote valid');
  assert.ok(POSTER_THEMES[deity.theme], 'Theme must match valid poster theme');
});
