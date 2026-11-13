/**
 * GuruKripa — Daily Panchang Deity Postcard & Social Publisher Engine
 * Dynamically pairs visitor's localized daily Panchang with presiding Hindu divinities
 * and generates high-resolution devotional postcards for Instagram, WhatsApp, and X (Twitter).
 * 100% Client-Side. $0.00 Recurring Cost.
 */

export const POSTER_ASPECT_RATIOS = [
  { id: "portrait", name: "Social Portrait (4:5)", width: 1080, height: 1350, desc: "High-Engagement Instagram Feed" },
  { id: "square", name: "Instagram Square (1:1)", width: 1080, height: 1080, desc: "Instagram & Facebook Feed" },
  { id: "story", name: "Status / Story (9:16)", width: 1080, height: 1920, desc: "WhatsApp Status & IG Stories" },
  { id: "landscape", name: "X Timeline (16:9)", width: 1200, height: 675, desc: "X (Twitter) Feed Preview" }
];

export const POSTER_THEMES = {
  gold: {
    id: "gold",
    name: "Swarna Gold (Lakshmi & Kubera)",
    primary: "#FFD700",
    secondary: "#D4AF37",
    accent: "#FF6F00",
    bgStart: "#150a01",
    bgMid: "#2b1403",
    bgEnd: "#421e05",
    textLight: "#FFF8E7",
    textMuted: "#FFE0B2",
    border: "#FFD700"
  },
  saffron: {
    id: "saffron",
    name: "Temple Saffron (Surya & Hanuman)",
    primary: "#FFA000",
    secondary: "#E65100",
    accent: "#FFD54F",
    bgStart: "#1a0800",
    bgMid: "#331200",
    bgEnd: "#4d1d00",
    textLight: "#FFF3E0",
    textMuted: "#FFCC80",
    border: "#FFB74D"
  },
  maroon: {
    id: "maroon",
    name: "Sacred Maroon (Durga & Devi)",
    primary: "#F06292",
    secondary: "#C2185B",
    accent: "#FFD54F",
    bgStart: "#1a000e",
    bgMid: "#33001c",
    bgEnd: "#4d002a",
    textLight: "#FCE4EC",
    textMuted: "#F8BBD0",
    border: "#EC407A"
  },
  neelkanth: {
    id: "neelkanth",
    name: "Neelkanth Blue (Shiva & Krishna)",
    primary: "#4FC3F7",
    secondary: "#0288D1",
    accent: "#FFD700",
    bgStart: "#030c17",
    bgMid: "#061830",
    bgEnd: "#0b264d",
    textLight: "#E1F5FE",
    textMuted: "#B3E5FC",
    border: "#4FC3F7"
  }
};

/**
 * Maps the daily Panchang to the presiding deity, sacred mantra, and auspicious quote.
 */
export function getDailyDeityInfo(panchangData) {
  if (!panchangData) return null;

  const dateObj = new Date(panchangData.date || Date.now());
  const month = dateObj.getMonth() + 1; // 1-12
  const day = dateObj.getDate();
  const weekday = dateObj.getDay(); // 0 (Sun) - 6 (Sat)
  const tithiName = panchangData.tithi ? panchangData.tithi.name : "";
  const tithiPaksha = panchangData.tithi ? panchangData.tithi.paksha : "";
  const nakshatra = panchangData.nakshatra ? panchangData.nakshatra.name : "";

  // 1. Annual Sacred Parvas & Festival Overrides
  // Check for Akshaya Tritiya (Vaishakha Shukla Tritiya ~ April/May)
  if (tithiPaksha === "Shukla" && tithiName.includes("Tritiya") && (month === 4 || month === 5)) {
    return {
      deityKey: "akshaya_lakshmi_kubera",
      festival: "अक्षय तृतीया — Akshaya Tritiya Mahaparva",
      deityName: "Maa Mahalakshmi, Lord Kubera & Swarna Akarshana Bhairava",
      deitySanskrit: "श्रीमहालक्ष्मी, कुबेरेश्वर एवं स्वर्णाकर्षण भैरव",
      deityTitle: "Divine Bestowers of Imperishable Wealth, Gold & Spiritual Abundance",
      theme: "gold",
      mantra: "ॐ श्रीं ह्रीं क्लीं त्रिभुवनमहालक्ष्म्यै अस्माकं दारिद्र्यं नाशय नाशय प्रचुरधनं देहि देहि क्लीं ह्रीं श्रीं ॐ ॥",
      quote: "On this sacred Akshaya Tritiya, may Goddess Mahalakshmi and Lord Kubera endow your family with imperishable (Akshaya) righteous prosperity, noble health, and spiritual enlightenment.",
      specialNote: "🌟 Auspicious Gold & Silver Purchase Muhurta Active Today"
    };
  }

  // Maha Shivaratri (Magha/Phalguna Krishna Chaturdashi ~ Feb/March)
  if (tithiPaksha === "Krishna" && tithiName.includes("Chaturdashi") && (month === 2 || month === 3)) {
    return {
      deityKey: "shiva_somavara",
      festival: "महाशिवरात्रि — Maha Shivaratri Mahaparva",
      deityName: "Lord Shiva — Someshwara & Mahakala",
      deitySanskrit: "देवाधिदेव महादेव एवं भगवान् महाकाल",
      deityTitle: "Supreme Lord of Cosmic Dissolution, Yoga & Transcendence",
      theme: "neelkanth",
      mantra: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान्मृत्य pushyam mukshiya ma'mrtat ॥",
      quote: "May the supreme grace of Lord Shiva incinerate all negative karmas, awaken inner bliss, and grant the light of eternal consciousness.",
      specialNote: "🔱 Maha Rudrabhisheka & Nishita Kaala Puja Active Tonight"
    };
  }

  // Krishna Janmashtami (Bhadrapada Krishna Ashtami ~ Aug/Sept)
  if (tithiPaksha === "Krishna" && tithiName.includes("Ashtami") && (month === 8 || month === 9)) {
    return {
      deityKey: "krishna_budhavara",
      festival: "श्रीकृष्ण जन्माष्टमी — Sri Krishna Janmashtami",
      deityName: "Bhagavan Sri Krishna — Parthasarathi",
      deitySanskrit: "लीलापुरुषोत्तम भगवान् श्रीकृष्ण",
      deityTitle: "Supreme Personality of Godhead & Teacher of the Bhagavad Gita",
      theme: "neelkanth",
      mantra: "वसुदेवसुतं देवं कंसचाणूरमर्दनम् । देवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम् ॥",
      quote: "May Sri Krishna bless your life with divine joy, righteous wisdom, and complete victory over all worldly hurdles.",
      specialNote: "🦚 Rohini Nakshatra Madhyaratri Avatara Snanam"
    };
  }

  // Rama Navami (Chaitra Shukla Navami ~ March/April)
  if (tithiPaksha === "Shukla" && tithiName.includes("Navami") && (month === 3 || month === 4)) {
    return {
      deityKey: "devi_durga",
      festival: "श्रीरामनवमी — Sri Rama Navami Mahotsava",
      deityName: "Maryada Purushottama Sri Ramachandra",
      deitySanskrit: "मर्यादापुरुषोत्तम श्रीरामचन्द्र प्रभु",
      deityTitle: "Embodiment of Dharma, Truth & Righteous Conduct",
      theme: "saffron",
      mantra: "रामाय रामभद्राय रामचन्द्राय वेधसे । रघुनाथाय नाथाय सीतायाः पतये नमः ॥",
      quote: "May Lord Sri Rama guide your steps along the path of unblemished righteousness, truth, and noble fortitude.",
      specialNote: "🏹 Madhyahna 12:00 PM Sri Rama Janmotsava Window"
    };
  }

  // Vinayaka / Ganesh Chaturthi (Bhadrapada Shukla Chaturthi ~ Aug/Sept)
  if (tithiPaksha === "Shukla" && tithiName.includes("Chaturthi") && (month === 8 || month === 9)) {
    return {
      deityKey: "ganesha_chaturthi",
      festival: "विनायक चतुर्थी — Sri Ganesha Chaturthi",
      deityName: "Lord Vighnaharta Sri Ganesha",
      deitySanskrit: "विघ्नहर्ता सिद्धिबुद्धिप्रदाता श्रीगणेशः",
      deityTitle: "Remover of All Obstacles & Bestower of Intellect and Success",
      theme: "gold",
      mantra: "वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
      quote: "May Lord Ganesha remove all impediments from your life and bless every righteous new endeavor with supreme auspiciousness.",
      specialNote: "🐘 Madhyahna Ganesha Pratishtha Muhurta"
    };
  }

  // 2. Tithi-Based Dynamic Governance
  // Ekadashi (11th Tithi) -> Lord Maha Vishnu
  if (tithiName.includes("Ekadashi")) {
    return {
      deityKey: "vishnu_ekadashi",
      festival: `${tithiPaksha} एकादशी — Sacred Hari Vasara`,
      deityName: "Lord Maha Vishnu & Sri Krishna",
      deitySanskrit: "श्रीमहाविष्णु एवं जगद्गुरु श्रीकृष्ण",
      deityTitle: "Preserver of the Cosmic Order & Source of Moksha",
      theme: "gold",
      mantra: "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम् । वन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम् ॥",
      quote: "On this sacred Ekadashi, fast and meditate upon the lotus feet of Lord Vishnu to purify the soul and liberate lifetimes of karma.",
      specialNote: "🪷 Parana window follows at sunrise tomorrow"
    };
  }

  // Trayodashi (13th Tithi) -> Shiva & Pradosham
  if (tithiName.includes("Trayodashi")) {
    return {
      deityKey: "shiva_somavara",
      festival: `${tithiPaksha} त्रयोदशी — Sacred Pradosha Vrata`,
      deityName: "Lord Shiva & Rishabharoodha Nandi",
      deitySanskrit: "श्रीमहादेव एवं वृषभारूढ भगवान्",
      deityTitle: "Cosmic Healer, Auspiciousness & Ultimate Refuge",
      theme: "neelkanth",
      mantra: "नमामीशमीशान निर्वाणरूपं विभुं व्यापकं ब्रह्मवेदस्वरूपम् । निजं निर्गुणं निर्विकल्पं निरीहं चिदाकाशमाकाशवासं भजेऽहम् ॥",
      quote: "During this sacred Pradosha twilight, worshipping Lord Shiva absolves all sins and brings enduring family tranquility.",
      specialNote: "🔱 Pradosha Sandhya Kaala Puja at Sunset"
    };
  }

  // Chaturthi (4th / 19th Tithi) -> Sri Ganesha / Sankashti
  if (tithiName.includes("Chaturthi")) {
    const isSankashti = tithiPaksha === "Krishna";
    return {
      deityKey: "ganesha_chaturthi",
      festival: isSankashti ? "संकष्टी चतुर्थी — Sankashti Ganesha Vrata" : "विनायक चतुर्थी — Vinayaka Chaturthi",
      deityName: "Lord Ganesha (Vighnaharta)",
      deitySanskrit: "श्रीगणेश एवं संकटमोचन विनायक",
      deityTitle: "Destroyer of Obstacles & Master of Wisdom",
      theme: "saffron",
      mantra: "एकदन्तं महाकायं तप्तकाञ्चनसप्रभम् । लम्बोदरं विशालाक्षं वन्देऽहं गणनायकम् ॥",
      quote: "Surrendering unto the lotus feet of Sri Ganesha eliminates all tribulations and initiates the dawn of prosperity.",
      specialNote: isSankashti ? "🌙 Moonrise Arghya required tonight" : "🐘 Modaka and Durva offering favored"
    };
  }

  // Ashtami / Navami -> Maa Durga / Sri Rama
  if (tithiName.includes("Ashtami") || tithiName.includes("Navami")) {
    return {
      deityKey: "devi_durga",
      festival: `${tithiPaksha} ${tithiName} — Devi & Rama Aradhana`,
      deityName: "Maa Durga Bhavani & Sri Rama",
      deitySanskrit: "जगज्जननी माँ दुर्गा एवं मर्यादापुरुषोत्तम श्रीराम",
      deityTitle: "Divine Protectress of Truth & Vanquisher of Dark Energies",
      theme: "maroon",
      mantra: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके । शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥",
      quote: "May the divine mother Durga shield your household from negative influences and grant fearless courage in all righteous actions.",
      specialNote: "🦁 Chandi Parayana and Deepa Aradhana blessed"
    };
  }

  // Purnima (Full Moon) -> Satyanarayana & Lalita Devi
  if (tithiName.includes("Purnima")) {
    return {
      deityKey: "akshaya_lakshmi_kubera",
      festival: "श्री सत्यनारायण पौर्णमासी — Sacred Full Moon",
      deityName: "Bhagavan Sri Satyanarayana & Maa Lalita Devi",
      deitySanskrit: "श्रीसत्यनारायण स्वामी एवं ललिता त्रिपुरसुन्दरी",
      deityTitle: "Embodiments of Truth, Divine Motherhood and Completeness",
      theme: "gold",
      mantra: "सत्यं ज्ञानमनन्तं ब्रह्म । ॐ नमो भगवते सत्यनारायणाय ॥",
      quote: "May the radiant full moon of this Purnima illuminate your consciousness with truth, harmony, and unceasing grace.",
      specialNote: "🌕 Sri Satyanarayana Vrata & Kunkumarchana favoured"
    };
  }

  // 3. Weekday (Vaara) Presiding Divinities (Weekly Cycle Fallback)
  const weekdayDeities = [
    // 0: Sunday
    {
      deityKey: "surya_ravivara",
      festival: "पवित्र रविवासर — Sacred Day of the Sun",
      deityName: "Lord Surya Narayana (Sun God)",
      deitySanskrit: "प्रत्यक्ष देवता भगवान् सूर्यनारायण",
      deityTitle: "The Living Source of Cosmic Energy, Health (Arogya) and Vitality",
      theme: "saffron",
      mantra: "जपाकुसुमसंकाशं काश्यपेयं महाद्युतिम् । तमोऽरिं सर्वपापघ्नं प्रणतोऽस्मि दिवाकरम् ॥",
      quote: "Worship the rising Sun for boundless vitality, radiant physical health, clarity of intellect, and spiritual brilliance.",
      specialNote: "☀️ Gayatri Japa and Surya Namaskar recommended"
    },
    // 1: Monday
    {
      deityKey: "shiva_somavara",
      festival: "पवित्र सोमवासर — Sacred Day of Lord Shiva",
      deityName: "Lord Chandramouliswara (Shiva)",
      deitySanskrit: "चन्द्रमौलीश्वर भगवान् सदाशिव",
      deityTitle: "The Lord of the Crescent Moon, Peace & Deep Meditation",
      theme: "neelkanth",
      mantra: "ॐ नमः शिवाय । कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम् । सदा वसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि ॥",
      quote: "Offer water and Bilva leaves to Lord Shiva to calm the mind and dissolve the anxieties of worldly life.",
      specialNote: "🔱 Somvar Jalabhishek & Panchakshari Mantra"
    },
    // 2: Tuesday
    {
      deityKey: "hanuman_murugan",
      festival: "पवित्र मङ्गलवासर — Day of Hanuman & Murugan",
      deityName: "Lord Hanuman & Lord Murugan (Skanda)",
      deitySanskrit: "सङ्कटमोचन श्रीहनुमान् एवं मुरुगन् स्वामी",
      deityTitle: "Invincible Guardians, Protectors against Fear and Bestowers of Courage",
      theme: "saffron",
      mantra: "मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम् । वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये ॥",
      quote: "Chant the Hanuman Chalisa to cultivate fearless determination, resolve Mangala doshas, and defeat all adversaries.",
      specialNote: "🚩 Sindoor offering and Sundarkand reading blessed"
    },
    // 3: Wednesday
    {
      deityKey: "krishna_budhavara",
      festival: "पवित्र बुधवासर — Day of Sri Krishna & Budha",
      deityName: "Sri Krishna & Lord Budha (Mercury)",
      deitySanskrit: "लीलाधर श्रीकृष्ण एवं बुद्धिप्रदाता बुध ग्रह",
      deityTitle: "Divine Bestowers of Intellect, Eloquence and Commerce",
      theme: "neelkanth",
      mantra: "प्रियङ्गुकलिकाश्यामं रूपेणाप्रतिमं बुधम् । सौम्यं सौम्यगुणोपेतं तं बुधं प्रणमाम्यहम् ॥",
      quote: "Seek the blessings of Sri Krishna for sharpness of mind, success in education and trade, and sweet eloquence.",
      specialNote: "🦚 Tulasi archana to Sri Krishna brings academic excellence"
    },
    // 4: Thursday
    {
      deityKey: "guru_dakshinamurthy",
      festival: "पवित्र गुरुवासर — Day of the Supreme Preceptor",
      deityName: "Lord Dakshinamurthy & Brihaspati",
      deitySanskrit: "जगद्गुरु दक्षिणामूर्ति एवं भगवान् दत्तात्रेय",
      deityTitle: "Embodiments of Highest Wisdom, Spiritual Realization and Grace",
      theme: "gold",
      mantra: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः । गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः ॥",
      quote: "Honor your Gurus and elders today; the grace of the Guru is the sovereign bridge that carries one across worldly suffering.",
      specialNote: "✨ Chana dal and yellow flower offerings auspicious"
    },
    // 5: Friday
    {
      deityKey: "akshaya_lakshmi_kubera",
      festival: "पवित्र शुक्रवासर — Day of Divine Motherhood",
      deityName: "Maa Mahalakshmi, Kamakshi & Annapoorneshwari",
      deitySanskrit: "सर्वमङ्गला माँ महालक्ष्मी एवं जगदम्बा",
      deityTitle: "Goddess of Universal Grace, Wealth, Food and Domestic Bliss",
      theme: "maroon",
      mantra: "ॐ श्रीं महालक्ष्म्यै नमः । नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते । शङ्खचक्रगदाहस्ते महालक्ष्मि नमोऽस्तु ते ॥",
      quote: "Light a sacred ghee lamp for Maa Mahalakshmi to invite harmony, abundance, and auspicious serenity into your home.",
      specialNote: "🪙 Friday Kunkumarchana & Lakshmi Ashtakam blessed"
    },
    // 6: Saturday
    {
      deityKey: "venkateswara_shani",
      festival: "पवित्र शनिवासर — Day of Shani Dev & Venkateswara",
      deityName: "Sri Venkateswara & Lord Shani Bhagavan",
      deitySanskrit: "कलियुग प्रत्यक्ष देव श्रीवेङ्कटेश्वर एवं शनिदेव",
      deityTitle: "Dispenser of Karmic Justice & Savior of Kali Yuga",
      theme: "gold",
      mantra: "वेङ्कटेशो वासुदेवः प्रद्युम्नोऽमितविक्रमः । नीलाञ्जनसमाभासं रविपुत्रं यमाग्रजम् ॥",
      quote: "Chant the Govinda Nama and practice charity to the needy to dissolve the malefic effects of Saturn and attain peace.",
      specialNote: "👑 Sesame oil deepa offering to Shani Dev mitigates hardships"
    }
  ];

  return weekdayDeities[weekday] || weekdayDeities[0];
}

/**
 * Text Auto-Fit Helper: Scales down font size until text strictly fits within maxWidth.
 */
function drawFittedText(ctx, text, x, y, maxWidth, initialSize, fontStyle, fillStyle, align = "center") {
  let size = initialSize;
  ctx.textAlign = align;
  ctx.font = `${fontStyle} ${size}px 'Noto Serif Devanagari', 'Cinzel', 'Noto Sans', sans-serif`;
  while (ctx.measureText(text).width > maxWidth && size > 12) {
    size -= 1;
    ctx.font = `${fontStyle} ${size}px 'Noto Serif Devanagari', 'Cinzel', 'Noto Sans', sans-serif`;
  }
  ctx.fillStyle = fillStyle;
  ctx.fillText(text, x, y);
  return size;
}

/**
 * Text Word-Wrapping Helper: Splits long text into multiple lines fitting maxWidth.
 */
function drawWrappedLines(ctx, text, x, y, maxWidth, lineHeight, maxLines, fontSize, fontStyle, fillStyle, align = "center") {
  ctx.textAlign = align;
  ctx.font = `${fontStyle} ${fontSize}px 'Noto Serif Devanagari', 'Noto Sans', sans-serif`;
  ctx.fillStyle = fillStyle;
  const words = text.split(/\s+/);
  let line = "";
  let currY = y;
  let lineCount = 0;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + (line ? " " : "") + words[n];
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, currY);
      line = words[n];
      currY += lineHeight;
      lineCount++;
      if (lineCount >= maxLines - 1 && n < words.length - 1) {
        line += " ...";
        break;
      }
    } else {
      line = testLine;
    }
  }
  if (line) {
    ctx.fillText(line, x, currY);
    currY += lineHeight;
  }
  return currY;
}

/**
 * Sacred Deity Vigraha Vector Renderer
 * Renders ornate, divine iconographic illustrations of Hindu deities directly onto the canvas.
 */
export function drawDeityVigrahaArtwork(ctx, deityKey, cx, cy, radius, theme) {
  ctx.save();

  // 1. Radiant Glowing Halo (Prabhavali)
  const haloGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius * 1.35);
  haloGrad.addColorStop(0, "rgba(255, 235, 59, 0.45)");
  haloGrad.addColorStop(0.5, "rgba(255, 160, 0, 0.25)");
  haloGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = haloGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, radius * 1.35, 0, Math.PI * 2);
  ctx.fill();

  // Ornate Outer Circular Golden Frame
  ctx.strokeStyle = theme.border || "#FFD700";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, radius - 6, 0, Math.PI * 2);
  ctx.stroke();

  // Background Disc for Deity
  const innerGrad = ctx.createRadialGradient(cx, cy - 20, 10, cx, cy, radius);
  innerGrad.addColorStop(0, "#2a1505");
  innerGrad.addColorStop(1, "#0f0515");
  ctx.fillStyle = innerGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, radius - 8, 0, Math.PI * 2);
  ctx.fill();

  // 2. Specific Sacred Vigraha Renderers
  if (deityKey === "venkateswara_shani") {
    // --- LORD VENKATESWARA (BALAJI) & SHANI DEV ---
    // A. Sacred Crown (Kirita Makuta)
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.moveTo(cx - 32, cy - 40);
    ctx.lineTo(cx, cy - 105);
    ctx.lineTo(cx + 32, cy - 40);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#FF8F00";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Gem on Crown Top
    ctx.fillStyle = "#D50000";
    ctx.beginPath();
    ctx.arc(cx, cy - 105, 5, 0, Math.PI * 2);
    ctx.fill();

    // B. Divine Face & Neck (Dark Stone / Shyama Sundara)
    ctx.fillStyle = "#263238";
    ctx.beginPath();
    ctx.ellipse(cx, cy - 22, 28, 32, 0, 0, Math.PI * 2);
    ctx.fill();

    // C. Glowing Holy Tirunamam (Namam)
    ctx.fillStyle = "#FFFFFF";
    // Left white flank
    ctx.beginPath();
    ctx.moveTo(cx - 16, cy - 44);
    ctx.lineTo(cx - 8, cy - 44);
    ctx.lineTo(cx - 3, cy - 18);
    ctx.lineTo(cx - 8, cy - 18);
    ctx.closePath();
    ctx.fill();
    // Right white flank
    ctx.beginPath();
    ctx.moveTo(cx + 16, cy - 44);
    ctx.lineTo(cx + 8, cy - 44);
    ctx.lineTo(cx + 3, cy - 18);
    ctx.lineTo(cx + 8, cy - 18);
    ctx.closePath();
    ctx.fill();
    // Middle Sacred Red Kasturi Tilak
    ctx.fillStyle = "#D50000";
    ctx.fillRect(cx - 2.5, cy - 42, 5, 28);

    // D. Upper Hands: Sudarshana Chakra (Right) & Panchajanya Shankha (Left)
    // Blazing Golden Chakra on Right
    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx + 70, cy - 45, 18, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#FFA000";
    ctx.beginPath();
    ctx.arc(cx + 70, cy - 45, 8, 0, Math.PI * 2);
    ctx.fill();

    // Sacred White Conch (Shankha) on Left
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.ellipse(cx - 70, cy - 45, 12, 18, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 2;
    ctx.stroke();

    // E. Golden Shoulders & Body Adornments
    ctx.fillStyle = "#FFB300";
    ctx.beginPath();
    ctx.arc(cx, cy + 30, 48, 0, Math.PI);
    ctx.fill();

    // Golden Makara Kundalas (Earrings)
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.arc(cx - 34, cy - 18, 7, 0, Math.PI * 2);
    ctx.arc(cx + 34, cy - 18, 7, 0, Math.PI * 2);
    ctx.fill();

    // Tulasi & Flower Garland (Vanamaala)
    ctx.strokeStyle = "#4CAF50";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(cx, cy + 15, 42, 0.2, Math.PI - 0.2);
    ctx.stroke();

    // F. Shani Bhagavan Representation: Glowing Sapphire Crescent & Raven Symbol
    ctx.fillStyle = "#0288D1";
    ctx.beginPath();
    ctx.arc(cx + 65, cy + 35, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#E1F5FE";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("शनि", cx + 65, cy + 40);

  } else if (deityKey === "akshaya_lakshmi_kubera") {
    // --- GODDESS MAHALAKSHMI & LORD KUBERA (GOLD & LOTUS) ---
    // A. Pink Sacred Lotus (Padmasana)
    ctx.fillStyle = "#F06292";
    for (let p = -3; p <= 3; p++) {
      ctx.beginPath();
      ctx.ellipse(cx + p * 20, cy + 62, 14, 26, (p * 15 * Math.PI) / 180, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "#EC407A";
    ctx.beginPath();
    ctx.ellipse(cx, cy + 70, 75, 18, 0, 0, Math.PI * 2);
    ctx.fill();

    // B. Maa Mahalakshmi Vigraha
    // Golden Crown (Kirita)
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.moveTo(cx - 26, cy - 36);
    ctx.lineTo(cx, cy - 88);
    ctx.lineTo(cx + 26, cy - 36);
    ctx.closePath();
    ctx.fill();

    // Divine Face
    ctx.fillStyle = "#FFE0B2";
    ctx.beginPath();
    ctx.ellipse(cx, cy - 20, 24, 28, 0, 0, Math.PI * 2);
    ctx.fill();

    // Red Bindi & Kunkuma
    ctx.fillStyle = "#D50000";
    ctx.beginPath();
    ctx.arc(cx, cy - 26, 4, 0, Math.PI * 2);
    ctx.fill();

    // Red Silk Saree & Gold Jewelry
    ctx.fillStyle = "#C2185B";
    ctx.beginPath();
    ctx.moveTo(cx - 36, cy + 50);
    ctx.quadraticCurveTo(cx, cy + 5, cx + 36, cy + 50);
    ctx.fill();

    // Upper Lotus Blossoms in Hands
    ctx.fillStyle = "#FF80AB";
    ctx.beginPath();
    ctx.arc(cx - 55, cy - 35, 14, 0, Math.PI * 2);
    ctx.arc(cx + 55, cy - 35, 14, 0, Math.PI * 2);
    ctx.fill();

    // C. Golden Pot (Kalasha) pouring Shower of Golden Coins (Akshaya Dhana)
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.arc(cx - 28, cy + 25, 14, 0, Math.PI * 2);
    ctx.fill();

    // Cascading Gold Coins
    ctx.fillStyle = "#FFD700";
    ctx.strokeStyle = "#FF6F00";
    ctx.lineWidth = 1;
    const coins = [
      [cx - 24, cy + 45], [cx - 16, cy + 56], [cx - 8, cy + 62],
      [cx + 4, cy + 66], [cx + 18, cy + 68], [cx + 32, cy + 66],
      [cx - 32, cy + 58], [cx + 8, cy + 58]
    ];
    coins.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.ellipse(x, y, 7, 4.5, Math.PI / 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });

    // D. Lord Kubera's Navanidhi Emblem (Right side)
    ctx.fillStyle = "#FFA000";
    ctx.beginPath();
    ctx.arc(cx + 58, cy + 25, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#3E2723";
    ctx.font = "bold 13px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("कुबेर", cx + 58, cy + 30);

  } else if (deityKey === "shiva_somavara") {
    // --- LORD SHIVA (MEDITATIVE KAILASH MAHAMRITYUNJAYA) ---
    // A. Crescent Moon (Chandra) on hair
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(cx + 20, cy - 65, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#0f0515";
    ctx.beginPath();
    ctx.arc(cx + 16, cy - 67, 13, 0, Math.PI * 2);
    ctx.fill();

    // B. Matted Locks (Jata Mukuta) & Ganga
    ctx.fillStyle = "#4E342E";
    ctx.beginPath();
    ctx.ellipse(cx, cy - 48, 30, 24, 0, 0, Math.PI * 2);
    ctx.fill();

    // Ganga Water Stream
    ctx.strokeStyle = "#4FC3F7";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx + 8, cy - 65);
    ctx.quadraticCurveTo(cx + 40, cy - 50, cx + 50, cy - 20);
    ctx.stroke();

    // C. Face & Blue Throat (Neelkantha)
    ctx.fillStyle = "#CFD8DC";
    ctx.beginPath();
    ctx.ellipse(cx, cy - 18, 26, 30, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tripundra (3 White Vibhuti Stripes)
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(cx - 16, cy - 32, 32, 2.5);
    ctx.fillRect(cx - 16, cy - 28, 32, 2.5);
    ctx.fillRect(cx - 16, cy - 24, 32, 2.5);

    // Third Eye (Trinetra) & Red Bindu
    ctx.fillStyle = "#D50000";
    ctx.beginPath();
    ctx.ellipse(cx, cy - 28, 3, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Blue Throat (Neelkantha)
    ctx.fillStyle = "#0288D1";
    ctx.beginPath();
    ctx.ellipse(cx, cy + 14, 18, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // D. Serpent Vasuki around neck
    ctx.strokeStyle = "#7CB342";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(cx, cy + 18, 26, 0.2, Math.PI - 0.2);
    ctx.stroke();

    // E. Trishul & Damru (Left)
    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(cx - 65, cy - 80);
    ctx.lineTo(cx - 65, cy + 70);
    ctx.stroke();
    // Trishul Prongs
    ctx.beginPath();
    ctx.arc(cx - 65, cy - 65, 14, Math.PI, 0);
    ctx.stroke();

  } else if (deityKey === "surya_ravivara") {
    // --- LORD SURYA NARAYANA (SUN GOD) ---
    // 12 Blazing Sun Rays
    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 3.5;
    for (let r = 0; r < 12; r++) {
      const angle = (r * 30 * Math.PI) / 180;
      const x1 = cx + (radius - 12) * Math.cos(angle);
      const y1 = cy + (radius - 12) * Math.sin(angle);
      const x2 = cx + (radius + 14) * Math.cos(angle);
      const y2 = cy + (radius + 14) * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Solar Halo & Crown
    ctx.fillStyle = "#FFB300";
    ctx.beginPath();
    ctx.arc(cx, cy, 38, 0, Math.PI * 2);
    ctx.fill();

    // Crown
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.moveTo(cx - 24, cy - 25);
    ctx.lineTo(cx, cy - 68);
    ctx.lineTo(cx + 24, cy - 25);
    ctx.closePath();
    ctx.fill();

    // Two Red Lotuses in Hands
    ctx.fillStyle = "#E91E63";
    ctx.beginPath();
    ctx.arc(cx - 48, cy, 14, 0, Math.PI * 2);
    ctx.arc(cx + 48, cy, 14, 0, Math.PI * 2);
    ctx.fill();

    // Solar Om Symbol
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 32px 'Cinzel', serif";
    ctx.textAlign = "center";
    ctx.fillText("ॐ", cx, cy + 12);

  } else if (deityKey === "hanuman_murugan") {
    // --- LORD HANUMAN & MURUGAN (COURAGE & VEL) ---
    // Saffron Aura
    ctx.fillStyle = "#FF6D00";
    ctx.beginPath();
    ctx.ellipse(cx - 18, cy - 10, 28, 34, 0, 0, Math.PI * 2);
    ctx.fill();

    // Golden Crown & Tilak
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.moveTo(cx - 38, cy - 35);
    ctx.lineTo(cx - 18, cy - 75);
    ctx.lineTo(cx + 2, cy - 35);
    ctx.closePath();
    ctx.fill();

    // Lord Murugan's Sacred Vel (Spear) on Right
    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx + 52, cy + 65);
    ctx.lineTo(cx + 52, cy - 65);
    ctx.stroke();
    // Vel Blade Shape
    ctx.fillStyle = "#FFB300";
    ctx.beginPath();
    ctx.moveTo(cx + 52, cy - 88);
    ctx.lineTo(cx + 64, cy - 60);
    ctx.lineTo(cx + 52, cy - 45);
    ctx.lineTo(cx + 40, cy - 60);
    ctx.closePath();
    ctx.fill();

    // Golden Gada (Mace) of Hanuman on Left
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.arc(cx - 55, cy + 25, 18, 0, Math.PI * 2);
    ctx.fill();

  } else if (deityKey === "ganesha_chaturthi") {
    // --- LORD GANESHA (VIGHNAHARTA) ---
    // Crown
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.moveTo(cx - 28, cy - 35);
    ctx.lineTo(cx, cy - 85);
    ctx.lineTo(cx + 28, cy - 35);
    ctx.closePath();
    ctx.fill();

    // Elephant Head & Large Ears
    ctx.fillStyle = "#FFA726";
    ctx.beginPath();
    ctx.arc(cx - 38, cy - 10, 20, 0, Math.PI * 2);
    ctx.arc(cx + 38, cy - 10, 20, 0, Math.PI * 2);
    ctx.arc(cx, cy - 8, 30, 0, Math.PI * 2);
    ctx.fill();

    // Curved Trunk (Vakratunda)
    ctx.strokeStyle = "#FB8C00";
    ctx.lineWidth = 14;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(cx, cy + 6);
    ctx.quadraticCurveTo(cx - 15, cy + 40, cx + 18, cy + 45);
    ctx.stroke();

    // Golden Sweet Modaka in trunk
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.arc(cx + 25, cy + 42, 8, 0, Math.PI * 2);
    ctx.fill();

    // Holy Red Trishul Mark on forehead
    ctx.fillStyle = "#D50000";
    ctx.beginPath();
    ctx.arc(cx, cy - 18, 4, 0, Math.PI * 2);
    ctx.fill();

  } else {
    // --- UNIVERSAL SACRED VEDIC OM ICON ---
    ctx.fillStyle = "#FFD700";
    ctx.font = "bold 88px 'Cinzel', serif";
    ctx.textAlign = "center";
    ctx.fillText("🕉️", cx, cy + 28);
  }

  ctx.restore();
}

/**
 * Renders the High-DPI Devotional Postcard onto an HTML5 Canvas.
 * Fully responsive across all aspect ratios with ZERO text overflow.
 */
export function drawDeityPostcardCanvas(canvas, panchangData, options = {}) {
  if (!canvas || !panchangData) return;

  const aspectRatioId = options.aspectRatio || "portrait";
  const themeId = options.theme || "gold";

  const arConfig = POSTER_ASPECT_RATIOS.find(a => a.id === aspectRatioId) || POSTER_ASPECT_RATIOS[0];
  const theme = POSTER_THEMES[themeId] || POSTER_THEMES.gold;
  const deityInfo = getDailyDeityInfo(panchangData);

  canvas.width = arConfig.width;
  canvas.height = arConfig.height;

  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;

  // Inner Safe Content Margins
  const outerPad = 32;
  const innerPad = 48;
  const contentW = W - 140; // max content width strictly within golden inner borders
  const cx = W / 2;

  // 1. Devotional Background Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, W, H);
  bgGrad.addColorStop(0, theme.bgStart);
  bgGrad.addColorStop(0.4, theme.bgMid);
  bgGrad.addColorStop(1, theme.bgEnd);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // 2. Ornate Golden Borders (Outer & Inner)
  ctx.save();
  ctx.strokeStyle = theme.border;
  ctx.lineWidth = 10;
  ctx.strokeRect(outerPad, outerPad, W - outerPad * 2, H - outerPad * 2);

  ctx.strokeStyle = "rgba(255, 215, 0, 0.45)";
  ctx.lineWidth = 2.5;
  ctx.strokeRect(innerPad, innerPad, W - innerPad * 2, H - innerPad * 2);

  // Four Corner Ornate Filigrees
  const corners = [
    [innerPad + 8, innerPad + 8],
    [W - innerPad - 8, innerPad + 8],
    [innerPad + 8, H - innerPad - 8],
    [W - innerPad - 8, H - innerPad - 8]
  ];
  ctx.fillStyle = theme.primary;
  corners.forEach(([x, y]) => {
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();

  // Layout Vertical Positioning Geometry
  let curY = 100;

  // 3. Devotional Header (Portal Title)
  drawFittedText(ctx, "ॐ   G U R U K R I P A   ॐ", cx, curY, contentW, 46, "bold", theme.primary);
  curY += 34;
  drawFittedText(ctx, "SANATANA DHARMA DAILY PANCHANG ALMANAC", cx, curY, contentW, 20, "700", theme.textMuted);
  curY += 28;

  // 4. Festival / Sacred Day Banner Ribbon
  const ribbonH = 46;
  const ribbonW = Math.min(contentW, 860);
  ctx.fillStyle = "rgba(255, 215, 0, 0.12)";
  ctx.fillRect(cx - ribbonW / 2, curY, ribbonW, ribbonH);
  ctx.strokeStyle = theme.border;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(cx - ribbonW / 2, curY, ribbonW, ribbonH);

  drawFittedText(ctx, deityInfo.festival, cx, curY + 30, ribbonW - 30, 26, "bold", "#FFD700");
  curY += ribbonH + 20;

  // 5. PROMINENT SACRED DEITY ARTWORK & VIGRAHA (Centerpiece)
  const isTall = H >= 1300;
  const vigrahaRadius = isTall ? 95 : 75;
  const vigrahaCenterY = curY + vigrahaRadius + 5;

  drawDeityVigrahaArtwork(ctx, deityInfo.deityKey, cx, vigrahaCenterY, vigrahaRadius, theme);

  curY = vigrahaCenterY + vigrahaRadius + 28;

  // Deity Name & Subtitle (Auto-fitted strictly inside contentW)
  drawFittedText(ctx, deityInfo.deityName, cx, curY, contentW, isTall ? 34 : 28, "bold", theme.textLight);
  curY += 26;
  drawFittedText(ctx, deityInfo.deityTitle, cx, curY, contentW, isTall ? 20 : 17, "italic", theme.textMuted);
  curY += 26;

  // 6. Panchang 5-Limbs Snapshot Card
  const cardH = isTall ? 240 : 190;
  const cardW = contentW;
  const cardX = cx - cardW / 2;
  const cardY = curY;

  ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
  ctx.fillRect(cardX, cardY, cardW, cardH);
  ctx.strokeStyle = "rgba(212, 175, 55, 0.5)";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(cardX, cardY, cardW, cardH);

  // City & Date Header
  drawFittedText(ctx, `📍 ${panchangData.city}, ${panchangData.country}  •  ${panchangData.date}`, cx, cardY + 32, cardW - 40, 22, "bold", theme.primary);

  // 2-Column Panchang Details
  const col1X = cardX + 35;
  const col2X = cx + 25;
  const colW = cardW / 2 - 45;
  const panchangFontSize = isTall ? 17 : 14;
  const lineGap = isTall ? 38 : 30;
  let pY = cardY + 68;

  const items = [
    { l: "Tithi (Lunar Day):", v: `${panchangData.tithi ? panchangData.tithi.name : ''}` },
    { l: "Yoga & Karana:", v: `${panchangData.yoga || ''} / ${panchangData.karana || ''}` },
    { l: "Nakshatra (Mansion):", v: `${panchangData.nakshatra ? panchangData.nakshatra.name : ''}` },
    { l: "Sun & Moon Sign:", v: `Sun: ${panchangData.sunRashi || ''} • Moon: ${panchangData.moonRashi || ''}` },
    { l: "Vedic Vaara (Day):", v: `${panchangData.vaar ? panchangData.vaar.sanskrit : ''} (${panchangData.vaar ? panchangData.vaar.english : ''})` },
    { l: "Sunrise / Sunset:", v: `${panchangData.sunrise} — ${panchangData.sunset}` }
  ];

  for (let i = 0; i < 3; i++) {
    const it1 = items[i * 2];
    const it2 = items[i * 2 + 1];

    ctx.textAlign = "left";
    ctx.fillStyle = theme.textMuted;
    ctx.font = `700 ${panchangFontSize - 2}px 'Noto Sans', sans-serif`;
    ctx.fillText(it1.l, col1X, pY);
    ctx.fillText(it2.l, col2X, pY);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = `bold ${panchangFontSize}px 'Noto Sans', sans-serif`;
    ctx.fillText(it1.v, col1X, pY + 18);
    ctx.fillText(it2.v, col2X, pY + 18);

    pY += lineGap;
  }

  curY += cardH + 16;

  // 7. Auspicious & Inauspicious Muhurta Badges (Two side-by-side boxes)
  const badgeW = (contentW - 20) / 2;
  const badgeH = isTall ? 58 : 46;

  // Auspicious Window
  ctx.fillStyle = "rgba(46, 125, 50, 0.25)";
  ctx.fillRect(cardX, curY, badgeW, badgeH);
  ctx.strokeStyle = "#4CAF50";
  ctx.strokeRect(cardX, curY, badgeW, badgeH);

  drawFittedText(ctx, "✨ ABHIJIT / AMRIT KAAL (AUSPICIOUS)", cardX + badgeW / 2, curY + 20, badgeW - 10, isTall ? 15 : 13, "700", "#81C784");
  drawFittedText(ctx, panchangData.muhurtas ? panchangData.muhurtas.abhijitMuhurta : "Midday", cardX + badgeW / 2, curY + 44, badgeW - 10, isTall ? 18 : 15, "bold", "#FFFFFF");

  // Inauspicious Window
  ctx.fillStyle = "rgba(198, 40, 40, 0.25)";
  ctx.fillRect(cardX + badgeW + 20, curY, badgeW, badgeH);
  ctx.strokeStyle = "#E57373";
  ctx.strokeRect(cardX + badgeW + 20, curY, badgeW, badgeH);

  drawFittedText(ctx, "⚠️ RAHU KALAM (INAUSPICIOUS)", cardX + badgeW + 20 + badgeW / 2, curY + 20, badgeW - 10, isTall ? 15 : 13, "700", "#EF9A9A");
  drawFittedText(ctx, panchangData.muhurtas ? panchangData.muhurtas.rahuKalam : "Check Local", cardX + badgeW + 20 + badgeW / 2, curY + 44, badgeW - 10, isTall ? 18 : 15, "bold", "#FFFFFF");

  curY += badgeH + 24;

  // 8. Sacred Deity Invocation Mantra (Word Wrapped & Golden)
  curY = drawWrappedLines(ctx, deityInfo.mantra, cx, curY, contentW, isTall ? 32 : 24, 2, isTall ? 24 : 18, "bold", theme.primary);
  curY += 10;

  // 9. Auspicious Blessing Quote (Word Wrapped in Italics)
  curY = drawWrappedLines(ctx, `"${deityInfo.quote}"`, cx, curY, contentW, isTall ? 28 : 22, 3, isTall ? 19 : 15, "italic", theme.textLight);

  // 10. Special Festival Note
  if (deityInfo.specialNote && curY < H - 85) {
    curY += 8;
    drawFittedText(ctx, deityInfo.specialNote, cx, curY, contentW, isTall ? 18 : 15, "bold", "#FFD700");
  }

  // 11. Footer Branding
  drawFittedText(ctx, "Calculated with Lahiri Ayanamsa on GuruKripa • https://gurukripa.pages.dev", cx, H - 48, contentW, 16, "600", theme.textMuted);
}
