import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculatePanchang } from '../src/data/panchang-engine.js';
import { 
  buildChartData, 
  renderNorthIndianChart, 
  renderSouthIndianChart, 
  renderEastIndianChart, 
  renderWestIndianChart 
} from '../src/data/chart-engine.js';

test('Classical Rāśi Kundali Engine: North, South, East, West styles generation', () => {
  const city = { name: "Varanasi", country: "India", lat: 25.3176, lon: 82.9739, tz_offset: 5.5 };
  const panchang = calculatePanchang(new Date(2026, 10, 14), city);

  assert.ok(panchang.lagna, 'Lagna must be calculated');
  assert.ok(panchang.lagna.rashiIndex >= 1 && panchang.lagna.rashiIndex <= 12, 'Lagna Rashi index must be 1 to 12');

  const chartData = buildChartData(panchang.lagna.rashiIndex, panchang.lagna.deg, panchang.planets);

  assert.equal(chartData.lagnaRashi, panchang.lagna.rashiIndex);
  assert.ok(chartData.signOccupants[panchang.lagna.rashiIndex].some(o => o.isLagna), 'Lagna must occupy its rising sign');

  // 1. North Indian (Parashara Diamond)
  const northSvg = renderNorthIndianChart(chartData);
  assert.ok(northSvg.includes('<svg'), 'North SVG must be valid SVG');
  assert.ok(northSvg.includes('viewBox="0 0 400 400"'), 'North SVG must have 400x400 viewBox');
  assert.ok(!northSvg.includes('undefined'), 'North SVG must NOT contain undefined');
  assert.ok(!northSvg.includes('NaN'), 'North SVG must NOT contain NaN');
  assert.ok(northSvg.includes('House 1 (Tanu)'), 'North SVG must mark House 1 (Ascendant)');
  assert.ok(northSvg.includes('House 7 (Kalatra)'), 'North SVG must mark House 7');
  assert.ok(northSvg.includes('House 10 (Karma)'), 'North SVG must mark House 10');

  // 2. South Indian (Fixed-Sign Grid)
  const southSvg = renderSouthIndianChart(chartData);
  assert.ok(southSvg.includes('<svg'), 'South SVG must be valid SVG');
  assert.ok(southSvg.includes('Mesha (1)'), 'South SVG must contain Mesha (1)');
  assert.ok(southSvg.includes('Meena (12)'), 'South SVG must contain Meena (12)');
  assert.ok(!southSvg.includes('undefined'), 'South SVG must NOT contain undefined');
  assert.ok(!southSvg.includes('NaN'), 'South SVG must NOT contain NaN');
  assert.ok(southSvg.includes('RĀŚI KUNDALI'), 'South SVG must contain title badge');

  // 3. East Indian (Bengali / Surya)
  const eastSvg = renderEastIndianChart(chartData);
  assert.ok(eastSvg.includes('<svg'), 'East SVG must be valid SVG');
  assert.ok(eastSvg.includes('Mesha (1)'), 'East SVG must contain fixed signs');
  assert.ok(!eastSvg.includes('undefined'), 'East SVG must NOT contain undefined');
  assert.ok(!eastSvg.includes('NaN'), 'East SVG must NOT contain NaN');
  assert.ok(eastSvg.includes('Lagna'), 'East SVG must highlight Lagna');

  // 4. West Indian (Circular Wheel / Western)
  const westSvg = renderWestIndianChart(chartData);
  assert.ok(westSvg.includes('<svg'), 'West SVG must be valid SVG');
  assert.ok(westSvg.includes('♈'), 'West SVG must contain Aries zodiac glyph');
  assert.ok(westSvg.includes('♓'), 'West SVG must contain Pisces zodiac glyph');
  assert.ok(!westSvg.includes('undefined'), 'West SVG must NOT contain undefined');
  assert.ok(!westSvg.includes('NaN'), 'West SVG must NOT contain NaN');
  assert.ok(westSvg.includes(`Lagna: ${panchang.lagna.rashi}`), 'West SVG must state active Lagna');
});
