/**
 * GuruKripa — Classical Vedic Rāśi Kundali (Chart) Engine
 * Generates 100% vector SVG charts for all 4 classical Indian charting traditions:
 * 1. North Indian (Diamond / Parashara / Sukshma) [Default]
 * 2. South Indian (Fixed-Sign Square 4x4 Grid)
 * 3. East Indian (Bengali / Maithili / Odia Cross-Diamond)
 * 4. West Indian (Circular 360° Zodiac Wheel / Western)
 * Zero external libraries. 100% responsive, accessible, and high-DPI crisp.
 */

// Classical Rashi Sanskrit Names and Numbers
export const RASHI_NAMES = [
  "Mesha", "Vrishabha", "Mithuna", "Karkataka",
  "Simha", "Kanya", "Tula", "Vrishchika",
  "Dhanu", "Makara", "Kumbha", "Meena"
];

export const RASHI_GLYPHS = [
  "♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"
];

// Planet short badges
export const PLANET_SHORT = {
  "Surya (Sun)": "Su",
  "Chandra (Moon)": "Mo",
  "Mangala (Mars)": "Ma",
  "Budha (Mercury)": "Me",
  "Brihaspati (Jupiter)": "Ju",
  "Shukra (Venus)": "Ve",
  "Shani (Saturn)": "Sa",
  "Rahu (North Node)": "Ra",
  "Ketu (South Node)": "Ke"
};

/**
 * Organizes planets and lagna into sign-based buckets (1 to 12)
 */
export function buildChartData(lagnaRashiIndex, lagnaDeg, planets) {
  // Signs: 1-based index (1 = Mesha ... 12 = Meena)
  const signOccupants = {};
  for (let i = 1; i <= 12; i++) {
    signOccupants[i] = [];
  }

  // Add Lagna
  const lagnaRashi = Math.max(1, Math.min(12, lagnaRashiIndex || 1));
  signOccupants[lagnaRashi].push({
    name: "Lagna (Ascendant)",
    short: "Lg",
    isLagna: true,
    deg: lagnaDeg ? Math.floor(lagnaDeg % 30) : 0
  });

  // Add Planets
  if (Array.isArray(planets)) {
    planets.forEach(p => {
      let rIdx = p.rashiIndex;
      if (!rIdx) {
        const lon = (p.siderealLon !== undefined) ? p.siderealLon : p.longitude;
        if (typeof lon === 'number' && !isNaN(lon)) {
          rIdx = Math.floor(lon / 30.0) + 1;
        }
      }
      if (!rIdx || rIdx < 1 || rIdx > 12) rIdx = 1;
      if (!signOccupants[rIdx]) signOccupants[rIdx] = [];

      const short = PLANET_SHORT[p.name] || p.name.substring(0, 2);
      const isRetro = p.isRetrograde || (p.status && p.status.includes("Retrograde"));
      signOccupants[rIdx].push({
        name: p.name,
        short: isRetro ? `(${short})` : short,
        isRetrograde: isRetro,
        deg: p.degrees !== undefined ? p.degrees : (p.deg !== undefined ? p.deg : 0)
      });
    });
  }

  return {
    lagnaRashi,
    signOccupants
  };
}

/**
 * 1. North Indian Style Chart (Diamond / Parashara House-Fixed Style)
 * Houses are fixed in space:
 * Top central diamond is House 1. Houses 1..12 proceed COUNTER-CLOCKWISE.
 * Each house displays its rising Rashi number (1..12) and occupant planets.
 */
export function renderNorthIndianChart(chartData) {
  const { lagnaRashi, signOccupants } = chartData;

  // Compute which Rashi number goes to which house (1 to 12)
  // House H (1..12) has Rashi: ((lagnaRashi - 1 + (H - 1)) % 12) + 1
  const houseRashis = {};
  for (let h = 1; h <= 12; h++) {
    houseRashis[h] = ((lagnaRashi - 1 + (h - 1)) % 12) + 1;
  }

  function getPlanets(h) {
    const r = houseRashis[h];
    const occ = signOccupants[r] || [];
    return occ.map(o => o.short).join(" ");
  }

  return `<svg viewBox="0 0 400 400" class="gk-kundali-svg" aria-label="North Indian Kundli Chart">
    <rect x="2" y="2" width="396" height="396" fill="#180e22" stroke="#d4af37" stroke-width="2.5" rx="6"/>
    
    <!-- Outer Diagonals -->
    <line x1="2" y1="2" x2="398" y2="398" stroke="#d4af37" stroke-width="1.8" opacity="0.9"/>
    <line x1="398" y1="2" x2="2" y2="398" stroke="#d4af37" stroke-width="1.8" opacity="0.9"/>
    
    <!-- Inner Diamond -->
    <polygon points="200,2 398,200 200,398 2,200" fill="#241434" stroke="#d4af37" stroke-width="2" opacity="0.95"/>
    
    <!-- House Labels & Occupants -->
    <!-- House 1: Top Diamond -->
    <text x="200" y="70" class="gk-k-sign" text-anchor="middle">${houseRashis[1]}</text>
    <text x="200" y="125" class="gk-k-planets" text-anchor="middle">${getPlanets(1)}</text>
    <text x="200" y="145" class="gk-k-house-sub" text-anchor="middle">House 1 (Tanu)</text>

    <!-- House 2: Top Left Triangle -->
    <text x="125" y="45" class="gk-k-sign" text-anchor="middle">${houseRashis[2]}</text>
    <text x="100" y="75" class="gk-k-planets" text-anchor="middle">${getPlanets(2)}</text>

    <!-- House 3: Upper Left Corner Triangle -->
    <text x="45" y="125" class="gk-k-sign" text-anchor="middle">${houseRashis[3]}</text>
    <text x="65" y="100" class="gk-k-planets" text-anchor="middle">${getPlanets(3)}</text>

    <!-- House 4: Left Diamond -->
    <text x="70" y="200" class="gk-k-sign" text-anchor="middle">${houseRashis[4]}</text>
    <text x="125" y="205" class="gk-k-planets" text-anchor="middle">${getPlanets(4)}</text>
    <text x="125" y="222" class="gk-k-house-sub" text-anchor="middle">House 4 (Matru)</text>

    <!-- House 5: Lower Left Corner Triangle -->
    <text x="45" y="275" class="gk-k-sign" text-anchor="middle">${houseRashis[5]}</text>
    <text x="65" y="300" class="gk-k-planets" text-anchor="middle">${getPlanets(5)}</text>

    <!-- House 6: Bottom Left Triangle -->
    <text x="125" y="365" class="gk-k-sign" text-anchor="middle">${houseRashis[6]}</text>
    <text x="100" y="335" class="gk-k-planets" text-anchor="middle">${getPlanets(6)}</text>

    <!-- House 7: Bottom Diamond -->
    <text x="200" y="345" class="gk-k-sign" text-anchor="middle">${houseRashis[7]}</text>
    <text x="200" y="285" class="gk-k-planets" text-anchor="middle">${getPlanets(7)}</text>
    <text x="200" y="265" class="gk-k-house-sub" text-anchor="middle">House 7 (Kalatra)</text>

    <!-- House 8: Bottom Right Triangle -->
    <text x="275" y="365" class="gk-k-sign" text-anchor="middle">${houseRashis[8]}</text>
    <text x="300" y="335" class="gk-k-planets" text-anchor="middle">${getPlanets(8)}</text>

    <!-- House 9: Lower Right Corner Triangle -->
    <text x="355" y="275" class="gk-k-sign" text-anchor="middle">${houseRashis[9]}</text>
    <text x="335" y="300" class="gk-k-planets" text-anchor="middle">${getPlanets(9)}</text>

    <!-- House 10: Right Diamond -->
    <text x="330" y="200" class="gk-k-sign" text-anchor="middle">${houseRashis[10]}</text>
    <text x="275" y="205" class="gk-k-planets" text-anchor="middle">${getPlanets(10)}</text>
    <text x="275" y="222" class="gk-k-house-sub" text-anchor="middle">House 10 (Karma)</text>

    <!-- House 11: Upper Right Corner Triangle -->
    <text x="355" y="125" class="gk-k-sign" text-anchor="middle">${houseRashis[11]}</text>
    <text x="335" y="100" class="gk-k-planets" text-anchor="middle">${getPlanets(11)}</text>

    <!-- House 12: Top Right Triangle -->
    <text x="275" y="45" class="gk-k-sign" text-anchor="middle">${houseRashis[12]}</text>
    <text x="300" y="75" class="gk-k-planets" text-anchor="middle">${getPlanets(12)}</text>
    
    <!-- Central Title Badge -->
    <circle cx="200" cy="200" r="16" fill="#180e22" stroke="#d4af37" stroke-width="1.5"/>
    <text x="200" y="205" class="gk-k-center-om" text-anchor="middle">ॐ</text>
  </svg>`;
}

/**
 * 2. South Indian Style Chart (Fixed-Sign 4x4 Square Grid Style)
 * Signs are FIXED clockwise:
 * Row 0: Meena (12), Mesha (1), Vrishabha (2), Mithuna (3)
 * Row 1: Kumbha (11), [HOLLOW CENTER], [HOLLOW CENTER], Karkataka (4)
 * Row 2: Makara (10), [HOLLOW CENTER], [HOLLOW CENTER], Simha (5)
 * Row 3: Dhanu (9), Vrishchika (8), Tula (7), Kanya (6)
 */
export function renderSouthIndianChart(chartData) {
  const { lagnaRashi, signOccupants } = chartData;

  // Grid layout: 4 columns x 4 rows (each box is 100x100)
  // Mapping of grid (row, col) to 1-based Rashi:
  const gridMap = [
    [12, 1, 2, 3],
    [11, null, null, 4],
    [10, null, null, 5],
    [9, 8, 7, 6]
  ];

  let boxesSvg = "";

  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const rashi = gridMap[r][c];
      const x = c * 100;
      const y = r * 100;

      if (rashi === null) continue; // Hollow center

      const isLagnaBox = (rashi === lagnaRashi);
      const occupants = signOccupants[rashi] || [];
      const planetsText = occupants.map(o => o.short).join(" ");

      boxesSvg += `
        <rect x="${x + 2}" y="${y + 2}" width="96" height="96" fill="${isLagnaBox ? '#2a1435' : '#180e22'}" stroke="#d4af37" stroke-width="1.2" rx="3"/>
        ${isLagnaBox ? `<line x1="${x + 2}" y1="${y + 2}" x2="${x + 98}" y2="${y + 98}" stroke="#e53935" stroke-width="1.5" opacity="0.6"/>` : ''}
        <text x="${x + 8}" y="${y + 18}" class="gk-k-sign-si">${RASHI_NAMES[rashi - 1]} (${rashi})</text>
        <text x="${x + 50}" y="${y + 55}" class="gk-k-planets" text-anchor="middle">${planetsText}</text>
      `;
    }
  }

  return `<svg viewBox="0 0 400 400" class="gk-kundali-svg" aria-label="South Indian Fixed-Sign Kundli Chart">
    <rect x="2" y="2" width="396" height="396" fill="#12081c" stroke="#d4af37" stroke-width="2.5" rx="6"/>
    
    <!-- Outer Grid Lines -->
    <line x1="100" y1="2" x2="100" y2="398" stroke="#d4af37" stroke-width="1.5"/>
    <line x1="200" y1="2" x2="200" y2="100" stroke="#d4af37" stroke-width="1.5"/>
    <line x1="200" y1="300" x2="200" y2="398" stroke="#d4af37" stroke-width="1.5"/>
    <line x1="300" y1="2" x2="300" y2="398" stroke="#d4af37" stroke-width="1.5"/>
    
    <line x1="2" y1="100" x2="398" y2="100" stroke="#d4af37" stroke-width="1.5"/>
    <line x1="2" y1="200" x2="100" y2="200" stroke="#d4af37" stroke-width="1.5"/>
    <line x1="300" y1="200" x2="398" y2="200" stroke="#d4af37" stroke-width="1.5"/>
    <line x1="2" y1="300" x2="398" y2="300" stroke="#d4af37" stroke-width="1.5"/>

    <!-- Individual Boxes -->
    ${boxesSvg}

    <!-- Center Hollow Sacred Space -->
    <rect x="102" y="102" width="196" height="196" fill="#1e0f2b" stroke="#d4af37" stroke-width="1.5" rx="4"/>
    <text x="200" y="175" class="gk-k-center-om" text-anchor="middle" font-size="36">ॐ</text>
    <text x="200" y="215" class="gk-k-center-title" text-anchor="middle">RĀŚI KUNDALI</text>
    <text x="200" y="235" class="gk-k-house-sub" text-anchor="middle">South Indian (Dakshina) Style</text>
  </svg>`;
}

/**
 * 3. East Indian Style Chart (Bengali / Maithili / Odia / Surya Style)
 * Rectangular diagram divided by crossed diagonals into 12 triangles and kites.
 * Signs are FIXED counter-clockwise starting from Mesha at upper-left.
 */
export function renderEastIndianChart(chartData) {
  const { lagnaRashi, signOccupants } = chartData;

  // Fixed sign placement in East Indian tradition:
  // 1 (Mesha): Top-left triangle
  // 2 (Vrishabha): Top central triangle
  // 3 (Mithuna): Top-right triangle
  // 4 (Karkataka): Upper-right outer triangle
  // 5 (Simha): Middle-right diamond
  // 6 (Kanya): Lower-right outer triangle
  // 7 (Tula): Bottom-right triangle
  // 8 (Vrishchika): Bottom central triangle
  // 9 (Dhanu): Bottom-left triangle
  // 10 (Makara): Lower-left outer triangle
  // 11 (Kumbha): Middle-left diamond
  // 12 (Meena): Upper-left outer triangle

  function getPlanets(r) {
    const occ = signOccupants[r] || [];
    return occ.map(o => o.short).join(" ");
  }

  return `<svg viewBox="0 0 400 400" class="gk-kundali-svg" aria-label="East Indian Kundli Chart">
    <rect x="2" y="2" width="396" height="396" fill="#180e22" stroke="#d4af37" stroke-width="2.5" rx="6"/>
    
    <!-- Outer Diagonals & Crosses -->
    <line x1="2" y1="2" x2="398" y2="398" stroke="#d4af37" stroke-width="1.8"/>
    <line x1="398" y1="2" x2="2" y2="398" stroke="#d4af37" stroke-width="1.8"/>
    
    <!-- Intermediate Diamond Lines -->
    <polygon points="200,2 398,200 200,398 2,200" fill="none" stroke="#d4af37" stroke-width="1.8"/>

    <!-- Sign Labels and Occupants (Fixed signs 1 to 12) -->
    <!-- Sign 1: Mesha (Top Left) -->
    <text x="80" y="65" class="gk-k-sign">${RASHI_NAMES[0]} (1)</text>
    <text x="80" y="85" class="gk-k-planets">${getPlanets(1)}</text>
    ${lagnaRashi === 1 ? '<text x="80" y="105" class="gk-k-lagna-badge">Lagna</text>' : ''}

    <!-- Sign 2: Vrishabha (Top Center) -->
    <text x="200" y="65" class="gk-k-sign" text-anchor="middle">${RASHI_NAMES[1]} (2)</text>
    <text x="200" y="85" class="gk-k-planets" text-anchor="middle">${getPlanets(2)}</text>
    ${lagnaRashi === 2 ? '<text x="200" y="105" class="gk-k-lagna-badge" text-anchor="middle">Lagna</text>' : ''}

    <!-- Sign 3: Mithuna (Top Right) -->
    <text x="320" y="65" class="gk-k-sign" text-anchor="end">${RASHI_NAMES[2]} (3)</text>
    <text x="320" y="85" class="gk-k-planets" text-anchor="end">${getPlanets(3)}</text>
    ${lagnaRashi === 3 ? '<text x="320" y="105" class="gk-k-lagna-badge" text-anchor="end">Lagna</text>' : ''}

    <!-- Sign 4: Karkataka (Right Upper) -->
    <text x="365" y="145" class="gk-k-sign" text-anchor="end">${RASHI_NAMES[3]} (4)</text>
    <text x="365" y="165" class="gk-k-planets" text-anchor="end">${getPlanets(4)}</text>
    ${lagnaRashi === 4 ? '<text x="365" y="185" class="gk-k-lagna-badge" text-anchor="end">Lagna</text>' : ''}

    <!-- Sign 5: Simha (Right Center) -->
    <text x="320" y="210" class="gk-k-sign" text-anchor="middle">${RASHI_NAMES[4]} (5)</text>
    <text x="320" y="230" class="gk-k-planets" text-anchor="middle">${getPlanets(5)}</text>
    ${lagnaRashi === 5 ? '<text x="320" y="250" class="gk-k-lagna-badge" text-anchor="middle">Lagna</text>' : ''}

    <!-- Sign 6: Kanya (Right Lower) -->
    <text x="365" y="295" class="gk-k-sign" text-anchor="end">${RASHI_NAMES[5]} (6)</text>
    <text x="365" y="315" class="gk-k-planets" text-anchor="end">${getPlanets(6)}</text>
    ${lagnaRashi === 6 ? '<text x="365" y="335" class="gk-k-lagna-badge" text-anchor="end">Lagna</text>' : ''}

    <!-- Sign 7: Tula (Bottom Right) -->
    <text x="320" y="365" class="gk-k-sign" text-anchor="end">${RASHI_NAMES[6]} (7)</text>
    <text x="320" y="340" class="gk-k-planets" text-anchor="end">${getPlanets(7)}</text>
    ${lagnaRashi === 7 ? '<text x="320" y="320" class="gk-k-lagna-badge" text-anchor="end">Lagna</text>' : ''}

    <!-- Sign 8: Vrishchika (Bottom Center) -->
    <text x="200" y="365" class="gk-k-sign" text-anchor="middle">${RASHI_NAMES[7]} (8)</text>
    <text x="200" y="340" class="gk-k-planets" text-anchor="middle">${getPlanets(8)}</text>
    ${lagnaRashi === 8 ? '<text x="200" y="320" class="gk-k-lagna-badge" text-anchor="middle">Lagna</text>' : ''}

    <!-- Sign 9: Dhanu (Bottom Left) -->
    <text x="80" y="365" class="gk-k-sign">${RASHI_NAMES[8]} (9)</text>
    <text x="80" y="340" class="gk-k-planets">${getPlanets(9)}</text>
    ${lagnaRashi === 9 ? '<text x="80" y="320" class="gk-k-lagna-badge">Lagna</text>' : ''}

    <!-- Sign 10: Makara (Left Lower) -->
    <text x="35" y="295" class="gk-k-sign">${RASHI_NAMES[9]} (10)</text>
    <text x="35" y="315" class="gk-k-planets">${getPlanets(10)}</text>
    ${lagnaRashi === 10 ? '<text x="35" y="335" class="gk-k-lagna-badge">Lagna</text>' : ''}

    <!-- Sign 11: Kumbha (Left Center) -->
    <text x="80" y="210" class="gk-k-sign" text-anchor="middle">${RASHI_NAMES[10]} (11)</text>
    <text x="80" y="230" class="gk-k-planets" text-anchor="middle">${getPlanets(11)}</text>
    ${lagnaRashi === 11 ? '<text x="80" y="250" class="gk-k-lagna-badge" text-anchor="middle">Lagna</text>' : ''}

    <!-- Sign 12: Meena (Left Upper) -->
    <text x="35" y="145" class="gk-k-sign">${RASHI_NAMES[11]} (12)</text>
    <text x="35" y="165" class="gk-k-planets">${getPlanets(12)}</text>
    ${lagnaRashi === 12 ? '<text x="35" y="185" class="gk-k-lagna-badge">Lagna</text>' : ''}

    <!-- Center Om and Badge -->
    <circle cx="200" cy="200" r="22" fill="#180e22" stroke="#d4af37" stroke-width="1.8"/>
    <text x="200" y="208" class="gk-k-center-om" text-anchor="middle">ॐ</text>
  </svg>`;
}

/**
 * 4. West Indian Style Chart (Circular 360° Zodiac Wheel / Western Style)
 * Elegant circular mandala wheel with 12 equal 30° radial segments,
 * sign glyphs, Lagna marker, and exact planetary coordinates.
 */
export function renderWestIndianChart(chartData) {
  const { lagnaRashi, signOccupants } = chartData;

  const cx = 200;
  const cy = 200;
  const outerR = 190;
  const innerR = 135;
  const centerR = 65;

  let sectorsSvg = "";
  let glyphsSvg = "";
  let planetsSvg = "";

  // 12 sectors starting from 0 (Mesha at East horizon / 0° or Top)
  for (let i = 0; i < 12; i++) {
    const signNum = i + 1;
    // Standard celestial wheel: 0° is Aries at 9 o'clock or 12 o'clock; let's align Mesha counter-clockwise from 180° (Ascendant left)
    const startAngle = (180 - i * 30) * Math.PI / 180;
    const endAngle = (180 - (i + 1) * 30) * Math.PI / 180;
    const midAngle = (180 - (i + 0.5) * 30) * Math.PI / 180;

    const x1 = cx + outerR * Math.cos(startAngle);
    const y1 = cy - outerR * Math.sin(startAngle);
    const x2 = cx + outerR * Math.cos(endAngle);
    const y2 = cy - outerR * Math.sin(endAngle);

    const xi1 = cx + innerR * Math.cos(startAngle);
    const yi1 = cy - innerR * Math.sin(startAngle);
    const xi2 = cx + innerR * Math.cos(endAngle);
    const yi2 = cy - innerR * Math.sin(endAngle);

    const isLagnaSign = (signNum === lagnaRashi);

    // Radial separator line
    sectorsSvg += `<line x1="${xi1}" y1="${yi1}" x2="${x1}" y2="${y1}" stroke="#d4af37" stroke-width="1.2" opacity="0.8"/>`;

    // Sign glyph & name in outer ring
    const gx = cx + (innerR + 28) * Math.cos(midAngle);
    const gy = cy - (innerR + 28) * Math.sin(midAngle);
    glyphsSvg += `<text x="${gx}" y="${gy + 5}" class="gk-k-glyph" text-anchor="middle">${RASHI_GLYPHS[i]}</text>`;

    // Planets inside the inner sector
    const occupants = signOccupants[signNum] || [];
    if (occupants.length > 0) {
      const px = cx + (centerR + 35) * Math.cos(midAngle);
      const py = cy - (centerR + 35) * Math.sin(midAngle);
      const label = occupants.map(o => o.short).join(" ");
      planetsSvg += `<text x="${px}" y="${py + 4}" class="gk-k-planets-circ" text-anchor="middle">${label}</text>`;
    }
  }

  return `<svg viewBox="0 0 400 400" class="gk-kundali-svg" aria-label="West Indian Circular Zodiac Kundli Wheel">
    <rect x="2" y="2" width="396" height="396" fill="#12081c" stroke="#d4af37" stroke-width="2.5" rx="6"/>
    
    <!-- Concentric Rings -->
    <circle cx="${cx}" cy="${cy}" r="${outerR}" fill="#1a0c28" stroke="#d4af37" stroke-width="2"/>
    <circle cx="${cx}" cy="${cy}" r="${innerR}" fill="#241434" stroke="#d4af37" stroke-width="1.5"/>
    <circle cx="${cx}" cy="${cy}" r="${centerR}" fill="#12081c" stroke="#d4af37" stroke-width="2"/>
    
    <!-- Radial Sectors -->
    ${sectorsSvg}
    ${glyphsSvg}
    ${planetsSvg}

    <!-- Center Om & Lagna Indicator -->
    <circle cx="${cx}" cy="${cy}" r="22" fill="#180e22" stroke="#d4af37" stroke-width="1.5"/>
    <text x="${cx}" y="${cy + 7}" class="gk-k-center-om" text-anchor="middle">ॐ</text>
    <text x="${cx}" y="${cy - 35}" class="gk-k-house-sub" text-anchor="middle">Lagna: ${RASHI_NAMES[lagnaRashi - 1]}</text>
  </svg>`;
}
