import { test } from 'node:test';
import assert from 'node:assert/strict';
import { JapaMalaEngine } from '../src/data/japa-engine.js';

test('Japa Mala increments beads accurately from 0 to 108', () => {
  const engine = new JapaMalaEngine();
  engine.resetAll();

  assert.equal(engine.bead, 0);
  assert.equal(engine.rounds, 0);
  assert.equal(engine.totalChants, 0);

  // 107 taps
  for (let i = 1; i <= 107; i++) {
    const res = engine.increment();
    assert.equal(res.bead, i);
    assert.equal(res.reachedMeru, false);
  }

  // 108th tap (completes round, reaches Meru)
  const res108 = engine.increment();
  assert.equal(res108.bead, 0, 'Bead should reset to 0 after 108');
  assert.equal(res108.rounds, 1, 'Rounds should increment to 1');
  assert.equal(res108.totalChants, 108, 'Total chants should be 108');
  assert.equal(res108.reachedMeru, true, 'Must signal reachedMeru = true');
});

test('Japa Mala JSON export and import restores sadhana history', () => {
  const engine = new JapaMalaEngine();
  engine.bead = 54;
  engine.rounds = 7;
  engine.totalChants = 810;
  engine.dailyTargetRounds = 16;
  engine.currentMantra = "ॐ नमः शिवाय";

  const exported = engine.exportDataJSON();
  assert.ok(exported.includes("japa_sadhana_backup"));

  const newEngine = new JapaMalaEngine();
  newEngine.resetAll();
  const success = newEngine.importDataJSON(exported);

  assert.equal(success, true);
  assert.equal(newEngine.bead, 54);
  assert.equal(newEngine.rounds, 7);
  assert.equal(newEngine.totalChants, 810);
  assert.equal(newEngine.currentMantra, "ॐ नमः शिवाय");
});
