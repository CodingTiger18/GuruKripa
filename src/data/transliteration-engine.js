/**
 * GuruKripa — Client-Side Indic Transliteration Engine (Aksharamukha Core)
 * Converts Canonical Unicode Devanagari into all 11 required scripts:
 * 1. Sanskrit (Devanagari)
 * 2. Hindi (Devanagari)
 * 3. Marathi (Devanagari)
 * 4. Tamil
 * 5. Telugu
 * 6. Kannada
 * 7. Malayalam
 * 8. Gujarati
 * 9. Bengali
 * 10. Odia
 * 11. English / Romanized IAST
 *
 * Hardened against missing glyphs:
 * - Automatically strips Vedic tone accents for regional scripts and IAST
 * - Uses authentic Om glyphs for every language (e.g. ஓம், ఓం, ಓಂ, ഓം, ওঁ, ૐ)
 * - Preserves standard common Dandās (।, ॥) without corrupting offsets
 * - Maps Tamil anusvara and consonants naturally to avoid tofu boxes
 */

export const SUPPORTED_LANGUAGES = [
  { code: "sa", name: "Sanskrit", native: "संस्कृतम्", script: "Devanagari" },
  { code: "hi", name: "Hindi", native: "हिन्दी", script: "Devanagari" },
  { code: "mr", name: "Marathi", native: "मराठी", script: "Devanagari" },
  { code: "ta", name: "Tamil", native: "தமிழ்", script: "Tamil" },
  { code: "te", name: "Telugu", native: "తెలుగు", script: "Telugu" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ", script: "Kannada" },
  { code: "ml", name: "Malayalam", native: "മലയാളം", script: "Malayalam" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી", script: "Gujarati" },
  { code: "bn", name: "Bengali", native: "বাংলা", script: "Bengali" },
  { code: "or", name: "Odia", native: "ଓଡ଼ିଆ", script: "Odia" },
  { code: "en", name: "English (IAST)", native: "English (IAST)", script: "Latin" }
];

/**
 * Strips Vedic swaras (Udatta, Anudatta, Svarita, and extended tone marks)
 * which cause unassigned Unicode points and missing square glyphs (tofu) in
 * regional scripts and Latin fonts.
 */
export function cleanVedicAccents(text) {
  if (!text) return "";
  return text.replace(/[\u0951\u0952\u0953\u0954\u1CD0-\u1CF9\uA8E0-\uA8F7]/g, '');
}

const OM_MAP = {
  sa: "ॐ",
  hi: "ॐ",
  mr: "ॐ",
  ta: "ஓம்",
  te: "ఓం",
  kn: "ಓಂ",
  ml: "ഓം",
  gu: "ૐ",
  bn: "ওঁ",
  or: "ଓଁ",
  en: "Oṃ"
};

const IAST_MAP = {
  // Vowels
  'अ': 'a', 'आ': 'ā', 'इ': 'i', 'ई': 'ī', 'उ': 'u', 'ऊ': 'ū', 'ऋ': 'ṛ', 'ॠ': 'ṝ',
  'ऌ': 'ḷ', 'ॡ': 'ḹ', 'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au',
  // Matras
  'ा': 'ā', 'ि': 'i', 'ी': 'ī', 'ु': 'u', 'ू': 'ū', 'ृ': 'ṛ', 'ॄ': 'ṝ',
  'ॢ': 'ḷ', 'ॣ': 'ḹ', 'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au',
  // Modifiers
  'ं': 'ṃ', 'ः': 'ḥ', '्': '', 'ऽ': '\'', 'ॐ': 'Oṃ',
  // Consonants
  'क': 'ka', 'ख': 'kha', 'ग': 'ga', 'घ': 'gha', 'ङ': 'ṅa',
  'च': 'ca', 'छ': 'cha', 'ज': 'ja', 'झ': 'jha', 'ञ': 'ña',
  'ट': 'ṭa', 'ठ': 'ṭha', 'ड': 'ḍa', 'ढ': 'ḍha', 'ण': 'ṇa',
  'त': 'ta', 'थ': 'tha', 'द': 'da', 'ध': 'dha', 'न': 'na',
  'प': 'pa', 'फ': 'pha', 'ब': 'ba', 'भ': 'bha', 'म': 'ma',
  'य': 'ya', 'र': 'ra', 'ल': 'la', 'व': 'va',
  'श': 'śa', 'ष': 'ṣa', 'स': 'sa', 'ह': 'ha',
  'ळ': 'ḷa', 'क्ष': 'kṣa', 'ज्ञ': 'jña',
  // Numerals & Dandās
  '०': '0', '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9',
  '।': '|', '॥': '||'
};

// Direct Unicode block transformation for regular Indic scripts
function transcodeIndicBlock(text, offset, scriptCode) {
  let result = "";
  // Strip Vedic accents so they do not produce unassigned codepoints in target scripts
  const clean = cleanVedicAccents(text);

  for (let i = 0; i < clean.length; i++) {
    const char = clean[i];
    const code = clean.charCodeAt(i);

    // Sacred Om
    if (char === 'ॐ') {
      result += OM_MAP[scriptCode] || 'ॐ';
      continue;
    }

    // Preserve Dandās across all scripts to avoid unsupported regional punctuation glyphs
    if (code === 0x0964 || code === 0x0965) {
      result += char;
      continue;
    }

    // Devanagari block (0x0901 to 0x0970)
    if (code >= 0x0901 && code <= 0x0970) {
      // Tamil specific glyph mapping
      if (scriptCode === "ta") {
        const tamilSpecial = {
          'ख': 'க', 'ग': 'க', 'घ': 'க', 'ङ': 'ங',
          'च': 'ச', 'छ': 'ச', 'ज': 'ஜ', 'झ': 'ச', 'ञ': 'ஞ',
          'ठ': 'ட', 'ड': 'ட', 'ढ': 'ட',
          'थ': 'த', 'द': 'த', 'ध': 'த',
          'फ': 'ப', 'ब': 'ப', 'भ': 'ப',
          'श': 'ஶ', 'ष': 'ஷ', 'स': 'ஸ', 'ह': 'ஹ',
          'क्ष': 'க்ஷ', 'ऋ': 'ரி', 'ॠ': 'ரீ', 'ृ': '்ரி', 'ॄ': '்ரீ',
          'ं': 'ம்', // Natural Tamil ending anusvara
          'ः': 'ஃ'   // Aytham
        };
        if (tamilSpecial[char]) {
          result += tamilSpecial[char];
          continue;
        }
      }

      // Bengali specific corrections
      if (scriptCode === "bn") {
        if (char === 'व') { result += 'ব'; continue; }
        if (char === 'र') { result += 'র'; continue; }
      }

      // Odia specific corrections
      if (scriptCode === "or") {
        if (char === 'व') { result += 'ୱ'; continue; }
      }

      // Malayalam chillu corrections
      if (scriptCode === "ml") {
        if (char === 'र' && clean[i + 1] === '्') {
          result += 'ർ';
          i++; // Skip virama
          continue;
        }
      }

      const targetCode = code + offset;
      result += String.fromCharCode(targetCode);
    } else {
      result += char;
    }
  }
  return result;
}

/**
 * Transcodes Devanagari text into Romanized IAST with zero tofu leaks.
 */
function transcodeToIAST(text) {
  const clean = cleanVedicAccents(text);
  let output = "";
  let i = 0;

  while (i < clean.length) {
    const char = clean[i];
    const nextChar = clean[i + 1];

    if (char === '्') {
      i++;
      continue;
    }

    if (IAST_MAP[char]) {
      let val = IAST_MAP[char];
      if (val.endsWith('a')) {
        if (nextChar && ['ा', 'ि', 'ी', 'ु', 'ू', 'ृ', 'ॄ', 'े', 'ै', 'ो', 'ौ'].includes(nextChar)) {
          val = val.slice(0, -1) + IAST_MAP[nextChar];
          i += 2;
          output += val;
          continue;
        } else if (nextChar === '्') {
          val = val.slice(0, -1);
          i += 2;
          output += val;
          continue;
        }
      }
      output += val;
      i++;
    } else {
      output += char;
      i++;
    }
  }
  return output;
}

/**
 * Main Transliteration Dispatcher:
 * Converts input text from Devanagari to target language code.
 * @param {string} text - Sanskrit text in Unicode Devanagari
 * @param {string} targetLangCode - 2-letter ISO code or 'en'
 * @param {boolean} [cleanDevanagari=true] - Clean Vedic swaras to avoid tofu boxes
 */
export function transliterate(text, targetLangCode, cleanDevanagari = true) {
  if (!text) return "";

  if (targetLangCode === "sa" || targetLangCode === "hi" || targetLangCode === "mr") {
    return cleanDevanagari ? cleanVedicAccents(text) : text;
  }

  if (targetLangCode === "en") {
    return transcodeToIAST(text);
  }

  const offsets = {
    "bn": 0x0080,
    "gu": 0x0180,
    "or": 0x0200,
    "ta": 0x0280,
    "te": 0x0300,
    "kn": 0x0380,
    "ml": 0x0400
  };

  const offset = offsets[targetLangCode];
  if (offset !== undefined) {
    return transcodeIndicBlock(text, offset, targetLangCode);
  }

  return cleanDevanagari ? cleanVedicAccents(text) : text;
}
