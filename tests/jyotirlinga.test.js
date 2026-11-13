import { test } from 'node:test';
import assert from 'node:assert/strict';
import { JYOTIRLINGAS } from '../src/data/jyotirlinga-data.js';

test('Dvadasha Jyotirlinga Mahakshetra Repository Integrity (All 12 Shrines)', () => {
  assert.equal(JYOTIRLINGAS.length, 12, 'Must have exactly 12 Jyotirlingas');

  const expectedIds = [
    "somnath", "mallikarjuna", "mahakaleshwar", "omkareshwar",
    "kedarnath", "bhimashankar", "kashi-vishwanath", "trimbakeshwar",
    "vaidyanath", "nageshwar", "ramanathaswamy", "grishneshwar"
  ];

  for (const expId of expectedIds) {
    const shrine = JYOTIRLINGAS.find(j => j.id === expId);
    assert.ok(shrine, `Shrine ${expId} must exist in JYOTIRLINGAS`);

    // Icon Verification
    assert.ok(shrine.iconSvg && shrine.iconSvg.includes('<svg'), `${expId} must have valid inline SVG icon`);
    assert.ok(shrine.iconSvg.includes('viewBox="0 0 100 100"'), `${expId} icon must have standard 100x100 viewBox`);

    // Parikaras, Dosha Nivarana & Spiritual Upliftment
    assert.ok(shrine.whatVisitDoes, `${expId} must have whatVisitDoes object`);
    assert.ok(shrine.whatVisitDoes.parikaras && shrine.whatVisitDoes.parikaras.length > 20, `${expId} must detail Parikaras`);
    assert.ok(shrine.whatVisitDoes.doshaNivarana && shrine.whatVisitDoes.doshaNivarana.length > 15, `${expId} must detail Dosha Nivarana`);
    assert.ok(shrine.whatVisitDoes.spiritualUpliftment && shrine.whatVisitDoes.spiritualUpliftment.length > 20, `${expId} must detail Spiritual Upliftment`);

    // Specific Pooja Practices
    assert.ok(Array.isArray(shrine.specificPoojas) && shrine.specificPoojas.length >= 2, `${expId} must have at least 2 specific poojas`);
    for (const pooja of shrine.specificPoojas) {
      assert.ok(pooja.name && pooja.name.length > 0, `${expId} pooja name missing`);
      assert.ok(pooja.timing && pooja.timing.length > 0, `${expId} pooja timing missing`);
      assert.ok(pooja.details && pooja.details.length > 15, `${expId} pooja details missing`);
    }

    // Tri-Fold History (Puranic, Local Sthala, Folklore)
    assert.ok(shrine.history, `${expId} must have history object`);
    assert.ok(shrine.history.puranic && shrine.history.puranic.length > 40, `${expId} must have detailed Puranic history`);
    assert.ok(shrine.history.local && shrine.history.local.length > 30, `${expId} must have detailed Local history`);
    assert.ok(shrine.history.folklore && shrine.history.folklore.length > 30, `${expId} must have detailed Folklore history`);

    // Stotram Verse
    assert.ok(shrine.stotramVerse && shrine.stotramVerse.length > 0, `${expId} must have Sanskrit stotram verse`);
  }
});
