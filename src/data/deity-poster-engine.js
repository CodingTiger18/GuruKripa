/**
 * GuruKripa — Daily Panchang Deity Postcard & Social Publisher Engine
 * Dynamically pairs visitor's localized daily Panchang with presiding Hindu divinities
 * and generates high-resolution devotional postcards for Instagram, WhatsApp, and X (Twitter).
 * 100% Client-Side. $0.00 Recurring Cost.
 */

export const POSTER_ASPECT_RATIOS = [
  { id: "square", name: "Instagram Square (1:1)", width: 1080, height: 1080, desc: "Instagram & Facebook Feed" },
  { id: "portrait", name: "Social Portrait (4:5)", width: 1080, height: 1350, desc: "High-Engagement Instagram Feed" },
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
    bgStart: "#1a0f02",
    bgMid: "#2e1a04",
    bgEnd: "#452707",
    textLight: "#FFF8E7",
    textMuted: "#FFE0B2",
    border: "#FFD700"
  },
  saffron: {
    id: "saffron",
    name: "Temple Saffron (Surya & Hanuman)",
    primary: "#FF9800",
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
    primary: "#E91E63",
    secondary: "#880E4F",
    accent: "#FFD54F",
    bgStart: "#1a000d",
    bgMid: "#33001a",
    bgEnd: "#4d0026",
    textLight: "#FCE4EC",
    textMuted: "#F8BBD0",
    border: "#F06292"
  },
  neelkanth: {
    id: "neelkanth",
    name: "Neelkanth Blue (Shiva & Krishna)",
    primary: "#00B0FF",
    secondary: "#01579B",
    accent: "#FFD700",
    bgStart: "#030d1a",
    bgMid: "#061833",
    bgEnd: "#0c2b59",
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
      festival: "श्री सत्यनारायण पौर्णमासी — Sacred Full Moon",
      deityName: "Bhagavan Sri Satyanarayana & Maa Lalita Tripurasundari",
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
      festival: "पवित्र गुरुवासर — Day of the Supreme Preceptor",
      deityName: "Lord Dakshinamurthy, Dattatreya & Brihaspati",
      deitySanskrit: "जगद्गुरु दक्षिणामूर्ति एवं भगवान् दत्तात्रेय",
      deityTitle: "Embodiments of Highest Wisdom, Spiritual Realization and Grace",
      theme: "gold",
      mantra: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः । गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः ॥",
      quote: "Honor your Gurus and elders today; the grace of the Guru is the sovereign bridge that carries one across worldly suffering.",
      specialNote: "✨ Chana dal and yellow flower offerings auspicious"
    },
    // 5: Friday
    {
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
      festival: "पवित्र शनिवासर — Day of Shani Dev & Venkateswara",
      deityName: "Sri Venkateswara & Lord Shani Bhagavan",
      deitySanskrit: "कलियुग प्रत्यक्ष देव श्रीवेङ्कटेश्वर एवं शनिदेव",
      deityTitle: "Dispenser of Karmic Justice & Savior of Kali Yuga",
      theme: "neelkanth",
      mantra: "वेङ्कटेशो वासुदेवः प्रद्युम्नोऽमितविक्रमः । नीलाञ्जनसमाभासं रविपुत्रं यमाग्रजम् ॥",
      quote: "Chant the Govinda Nama and practice charity to the needy to dissolve the malefic effects of Saturn and attain peace.",
      specialNote: "👑 Sesame oil deepa offering to Shani Dev mitigates hardships"
    }
  ];

  return weekdayDeities[weekday] || weekdayDeities[0];
}

/**
 * Renders the High-DPI Devotional Postcard onto an HTML5 Canvas.
 */
export function drawDeityPostcardCanvas(canvas, panchangData, options = {}) {
  if (!canvas || !panchangData) return;

  const aspectRatioId = options.aspectRatio || "portrait";
  const themeId = options.theme || "gold";
  const userLang = options.lang || "sa";

  const arConfig = POSTER_ASPECT_RATIOS.find(a => a.id === aspectRatioId) || POSTER_ASPECT_RATIOS[1];
  const theme = POSTER_THEMES[themeId] || POSTER_THEMES.gold;
  const deityInfo = getDailyDeityInfo(panchangData);

  canvas.width = arConfig.width;
  canvas.height = arConfig.height;

  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;

  // 1. Background Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, W, H);
  bgGrad.addColorStop(0, theme.bgStart);
  bgGrad.addColorStop(0.5, theme.bgMid);
  bgGrad.addColorStop(1, theme.bgEnd);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // 2. Ornate Border Frame
  ctx.save();
  ctx.strokeStyle = theme.border;
  ctx.lineWidth = 14;
  ctx.strokeRect(30, 30, W - 60, H - 60);

  ctx.strokeStyle = "rgba(255, 215, 0, 0.4)";
  ctx.lineWidth = 3;
  ctx.strokeRect(48, 48, W - 96, H - 96);
  ctx.restore();

  // 3. Devotional Header (Portal Title & Om)
  ctx.fillStyle = theme.primary;
  ctx.font = "bold 60px 'Cinzel', serif";
  ctx.textAlign = "center";
  ctx.fillText("ॐ  G U R U K R I P A  ॐ", W / 2, 120);

  ctx.fillStyle = theme.textMuted;
  ctx.font = "700 28px 'Cinzel', serif";
  ctx.letterSpacing = "4px";
  ctx.fillText("SANATANA DHARMA DAILY PANCHANG ALMANAC", W / 2, 165);

  // 4. Festival / Sacred Day Banner
  ctx.fillStyle = "rgba(255, 215, 0, 0.12)";
  ctx.fillRect(70, 195, W - 140, 80);
  ctx.strokeStyle = theme.border;
  ctx.lineWidth = 2;
  ctx.strokeRect(70, 195, W - 140, 80);

  ctx.fillStyle = "#FFD700";
  ctx.font = "bold 38px 'Noto Serif Devanagari', 'Cinzel', serif";
  ctx.fillText(deityInfo.festival, W / 2, 248);

  // 5. Presiding Deity Badge & Subtitle
  ctx.fillStyle = theme.textLight;
  ctx.font = "bold 44px 'Noto Serif Devanagari', 'Cinzel', serif";
  ctx.fillText(deityInfo.deityName, W / 2, 335);

  ctx.fillStyle = theme.textMuted;
  ctx.font = "italic 26px 'Noto Sans', sans-serif";
  ctx.fillText(deityInfo.deityTitle, W / 2, 375);

  // 6. Panchang 5-Limbs Snapshot Card
  const cardY = 415;
  const cardH = 340;
  ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
  ctx.fillRect(70, cardY, W - 140, cardH);
  ctx.strokeStyle = "rgba(212, 175, 55, 0.5)";
  ctx.lineWidth = 2;
  ctx.strokeRect(70, cardY, W - 140, cardH);

  // Date and Location Header in Card
  ctx.fillStyle = theme.primary;
  ctx.font = "bold 32px 'Cinzel', serif";
  ctx.fillText(`📍 ${panchangData.city}, ${panchangData.country}  •  ${panchangData.date}`, W / 2, cardY + 45);

  // Grid for the 5 Daily Limbs
  ctx.textAlign = "left";
  const col1X = 110;
  const col2X = W / 2 + 30;
  const startRowY = cardY + 95;
  const lineSpacing = 44;

  const itemsCol1 = [
    { label: "Tithi (Lunar Day):", val: `${panchangData.tithi ? panchangData.tithi.name : ''}` },
    { label: "Nakshatra (Mansion):", val: `${panchangData.nakshatra ? panchangData.nakshatra.name : ''}` },
    { label: "Vedic Vaara (Day):", val: `${panchangData.vaar ? panchangData.vaar.sanskrit : ''} (${panchangData.vaar ? panchangData.vaar.english : ''})` }
  ];

  const itemsCol2 = [
    { label: "Yoga & Karana:", val: `${panchangData.yoga || ''} / ${panchangData.karana || ''}` },
    { label: "Sun & Moon Sign:", val: `Sun: ${panchangData.sunRashi || ''} • Moon: ${panchangData.moonRashi || ''}` },
    { label: "Sunrise / Sunset:", val: `${panchangData.sunrise} — ${panchangData.sunset}` }
  ];

  itemsCol1.forEach((it, i) => {
    ctx.fillStyle = theme.textMuted;
    ctx.font = "700 24px 'Noto Sans', sans-serif";
    ctx.fillText(it.label, col1X, startRowY + i * lineSpacing);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 26px 'Noto Sans', sans-serif";
    ctx.fillText(it.val, col1X, startRowY + i * lineSpacing + 26);
  });

  itemsCol2.forEach((it, i) => {
    ctx.fillStyle = theme.textMuted;
    ctx.font = "700 24px 'Noto Sans', sans-serif";
    ctx.fillText(it.label, col2X, startRowY + i * lineSpacing);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 26px 'Noto Sans', sans-serif";
    ctx.fillText(it.val, col2X, startRowY + i * lineSpacing + 26);
  });

  // 7. Auspicious & Inauspicious Muhurta Highlights
  const muhurtaY = cardY + cardH + 25;
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(46, 125, 50, 0.25)";
  ctx.fillRect(70, muhurtaY, (W - 160) / 2, 70);
  ctx.strokeStyle = "#4CAF50";
  ctx.strokeRect(70, muhurtaY, (W - 160) / 2, 70);

  ctx.fillStyle = "#81C784";
  ctx.font = "700 22px 'Noto Sans', sans-serif";
  ctx.fillText("✨ ABHIJIT / AMRIT KAAL (AUSPICIOUS)", 70 + (W - 160) / 4, muhurtaY + 28);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 26px 'Noto Sans', sans-serif";
  ctx.fillText(panchangData.muhurtas ? panchangData.muhurtas.abhijitMuhurta : "Midday", 70 + (W - 160) / 4, muhurtaY + 56);

  ctx.fillStyle = "rgba(198, 40, 40, 0.25)";
  ctx.fillRect(W / 2 + 10, muhurtaY, (W - 160) / 2, 70);
  ctx.strokeStyle = "#E57373";
  ctx.strokeRect(W / 2 + 10, muhurtaY, (W - 160) / 2, 70);

  ctx.fillStyle = "#EF9A9A";
  ctx.font = "700 22px 'Noto Sans', sans-serif";
  ctx.fillText("⚠️ RAHU KALAM (INAUSPICIOUS)", W / 2 + 10 + (W - 160) / 4, muhurtaY + 28);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 26px 'Noto Sans', sans-serif";
  ctx.fillText(panchangData.muhurtas ? panchangData.muhurtas.rahuKalam : "Check Local", W / 2 + 10 + (W - 160) / 4, muhurtaY + 56);

  // 8. Sacred Deity Invocation Mantra
  const mantraY = muhurtaY + 115;
  ctx.fillStyle = theme.primary;
  ctx.font = "bold 34px 'Noto Serif Devanagari', serif";
  ctx.fillText(deityInfo.mantra, W / 2, mantraY);

  // 9. Auspicious Blessing Quote (Word Wrapped)
  const quoteY = mantraY + 65;
  ctx.fillStyle = theme.textLight;
  ctx.font = "italic 28px 'Noto Serif Devanagari', serif";

  const words = deityInfo.quote.split(" ");
  let line = "";
  let currY = quoteY;
  const maxW = W - 180;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxW && n > 0) {
      ctx.fillText(line, W / 2, currY);
      line = words[n] + " ";
      currY += 40;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, W / 2, currY);

  // 10. Special Festival Note
  if (deityInfo.specialNote) {
    currY += 45;
    ctx.fillStyle = "#FFD700";
    ctx.font = "bold 26px 'Noto Sans', sans-serif";
    ctx.fillText(deityInfo.specialNote, W / 2, currY);
  }

  // 11. Footer Branding & Short URL
  ctx.fillStyle = theme.textMuted;
  ctx.font = "700 24px 'Cinzel', serif";
  ctx.fillText("Calculated with Lahiri Ayanamsa on GuruKripa • https://gurukripa.pages.dev", W / 2, H - 65);
}
