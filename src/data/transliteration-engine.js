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

// Indic Unicode Block Offsets relative to Devanagari (0x0900)
// Devanagari: 0x0900 - 0x097F
// Bengali:    0x0980 - 0x09FF (Offset: +0x0080)
// Gujarati:   0x0A80 - 0x0AFF (Offset: +0x0180)
// Odia:       0x0B00 - 0x0B7F (Offset: +0x0200)
// Tamil:      0x0B80 - 0x0BFF (Offset: +0x0280) - with grantha/special substitutions
// Telugu:     0x0C00 - 0x0C7F (Offset: +0x0300)
// Kannada:    0x0C80 - 0x0CFF (Offset: +0x0380)
// Malayalam:  0x0D00 - 0x0D7F (Offset: +0x0400)

const IAST_MAP = {
  // Vowels
  'अ': 'a', 'आ': 'ā', 'इ': 'i', 'ई': 'ī', 'उ': 'u', 'ऊ': 'ū', 'ऋ': 'ṛ', 'ॠ': 'ṝ',
  'ऌ': 'ḷ', 'ॡ': 'ḹ', 'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au',
  // Matras
  'ा': 'ā', 'ि': 'i', 'ी': 'ī', 'ु': 'u', 'ू': 'ū', 'ृ': 'ṛ', 'ॄ': 'ṝ',
  'ॢ': 'ḷ', 'ॣ': 'ḹ', 'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au',
  // Modifiers
  'ं': 'ṃ', 'ः': 'ḥ', '्': '', 'ऽ': '\'',
  // Consonants
  'क': 'ka', 'ख': 'kha', 'ग': 'ga', 'घ': 'gha', 'ङ': 'ṅa',
  'च': 'ca', 'छ': 'cha', 'ज': 'ja', 'झ': 'jha', 'ञ': 'ña',
  'ट': 'ṭa', 'ठ': 'ṭha', 'ड': 'ḍa', 'ढ': 'ḍha', 'ण': 'ṇa',
  'त': 'ta', 'थ': 'tha', 'द': 'da', 'ध': 'dha', 'न': 'na',
  'प': 'pa', 'फ': 'pha', 'ब': 'ba', 'भ': 'bha', 'म': 'ma',
  'य': 'ya', 'र': 'ra', 'ल': 'la', 'व': 'va',
  'श': 'śa', 'ष': 'ṣa', 'स': 'sa', 'ह': 'ha',
  'ळ': 'ḷa', 'क्ष': 'kṣa', 'ज्ञ': 'jña',
  // Numerals
  '०': '0', '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9'
};

// Direct Unicode block transformation for regular Indic scripts
function transcodeIndicBlock(text, offset, scriptCode) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    // If character lies within Devanagari block (0x0901 to 0x0970)
    if (code >= 0x0901 && code <= 0x0970) {
      let targetCode = code + offset;
      
      // Tamil specific glyph mapping (Tamil alphabet omits voiced and aspirated consonants)
      if (scriptCode === "ta") {
        // Map aspirated/voiced consonants to base Tamil letters or Grantha
        const devChar = text[i];
        const tamilSpecial = {
          'ख': 'க', 'ग': 'க', 'घ': 'க', 'ङ': 'ங',
          'छ': 'ச', 'ज': 'ஜ', 'झ': 'ச', 'ञ': 'ஞ',
          'ठ': 'ட', 'ड': 'ட', 'ढ': 'ட',
          'थ': 'த', 'द': 'த', 'ध': 'த',
          'फ': 'ப', 'ब': 'ப', 'भ': 'ப',
          'श': 'ஶ', 'ष': 'ஷ', 'स': 'ஸ', 'ह': 'ஹ',
          'क्ष': 'க்ஷ', 'ऋ': 'ரி', 'ृ': '்ரி',
          'ॐ': 'ஓம்'
        };
        if (tamilSpecial[devChar]) {
          result += tamilSpecial[devChar];
          continue;
        }
      }

      // Bengali specific corrections
      if (scriptCode === "bn") {
        if (text[i] === 'व') { result += 'ব'; continue; }
        if (text[i] === 'र') { result += 'র'; continue; }
      }

      // Odia specific corrections
      if (scriptCode === "or") {
        if (text[i] === 'व') { result += 'ୱ'; continue; }
      }

      result += String.fromCharCode(targetCode);
    } else {
      // Retain Vedic Swaras, punctuation, Latin letters, whitespace intact
      result += text[i];
    }
  }
  return result;
}

/**
 * Transcodes Devanagari text into Romanized IAST.
 */
function transcodeToIAST(text) {
  let output = "";
  let i = 0;
  while (i < text.length) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '्') {
      // Virama suppresses inherent 'a'
      i++;
      continue;
    }

    if (IAST_MAP[char]) {
      let val = IAST_MAP[char];
      // Check if it's a consonant ending with 'a'
      if (val.endsWith('a')) {
        if (nextChar && ['ा', 'ि', 'ी', 'ु', 'ू', 'ृ', 'ॄ', 'े', 'ै', 'ो', 'ौ'].includes(nextChar)) {
          // Replace inherent 'a' with the following vowel matra
          val = val.slice(0, -1) + IAST_MAP[nextChar];
          i += 2;
          output += val;
          continue;
        } else if (nextChar === '्') {
          // Virama: drop 'a'
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
 */
export function transliterate(text, targetLangCode) {
  if (!text) return "";
  if (targetLangCode === "sa" || targetLangCode === "hi" || targetLangCode === "mr") {
    // Native Devanagari scripts
    return text;
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

  return text;
}
