/**
 * GuruKripa — Dvadasha Jyotirlinga Mahakshetra Repository
 * Comprehensive spiritual reference for the 12 sacred Jyotirlingas of Lord Shiva.
 * Includes: Authentic SVG icons, Parikaras (remedies), Dosha Nivarana,
 * Specific Pooja Practices, and Tri-Fold History (Puranic, Local Sthala, Folklore).
 * 100% Public Domain & Original Content.
 */

export const JYOTIRLINGAS = [
  {
    id: "somnath",
    name: "Somnath Mahadev",
    sanskritName: "सोमनाथ ज्योतिर्लिङ्ग",
    location: "Prabhas Patan, Veraval, Saurashtra, Gujarat",
    coordinates: "20.8880° N, 70.4012° E",
    deityForm: "Chandra-Mauli Swayambhu Jyotirlinga",
    riverOrSea: "Triveni Sangam (Hiran, Kapila, Saraswati) & Arabian Sea",
    stotramVerse: "सौराष्ट्रे सोमनाथं च श्रीशैले मल्लिकार्जुनम् ।",
    iconSvg: `<svg viewBox="0 0 100 100" class="gk-jyotir-icon-svg" aria-label="Somnath Shikhara and Crescent Moon">
      <defs>
        <linearGradient id="somnathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFD700" />
          <stop offset="100%" stop-color="#D4AF37" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="#1b0a2a" stroke="#d4af37" stroke-width="2"/>
      <path d="M50 14 L55 35 L62 35 L50 20 L38 35 L45 35 Z" fill="url(#somnathGrad)"/>
      <path d="M42 35 L58 35 L64 62 L36 62 Z" fill="#d4af37" opacity="0.85"/>
      <rect x="44" y="62" width="12" height="16" fill="#8b5a2b"/>
      <!-- Crescent Moon -->
      <path d="M72 22 A12 12 0 1 0 76 38 A9 9 0 1 1 72 22 Z" fill="#FFFAED"/>
      <!-- Waves -->
      <path d="M20 84 Q35 78 50 84 T80 84" fill="none" stroke="#4fc3f7" stroke-width="2"/>
      <path d="M50 8 L50 14" stroke="#FFD700" stroke-width="2"/>
      <circle cx="50" cy="8" r="2.5" fill="#FF5722"/>
    </svg>`,
    whatVisitDoes: {
      parikaras: "Chandra Graha Shanti (Moon afflictions), relief from psychological trauma, depression, anxiety, and psychosomatic ailments.",
      doshaNivarana: "Chandra Dosha, Kemadruma Yoga, Pitru Dosha, and eradication of debilitating physical curses (Kshaya Roga).",
      spiritualUpliftment: "Restores vitality (Ojas), mental clarity, tranquility of consciousness, and grants the bliss of immortality (Amritatva)."
    },
    specificPoojas: [
      { name: "Maha Somnath Rudrabhisheka", timing: "06:00 AM – 11:00 AM", details: "Performed with holy Triveni Sangam and sacred sea water, cow milk, honey, and Bilva leaves." },
      { name: "Sayam Sandhya Deepa Aarti", timing: "07:00 PM", details: "Majestic evening light offering with sounding of traditional conches, drums, and sea-wind chants." },
      { name: "Somvar Bilva Archana", timing: "All Mondays", details: "Offering of 108 or 1008 fresh trifoliate Bilva leaves inscribed with Chandan Om Namah Shivaya." },
      { name: "Mrityunjaya Homa", timing: "Pre-arranged", details: "Sacred fire oblations to conquer critical illnesses and fear of untimely demise." }
    ],
    history: {
      puranic: "According to the Shiva Purana (Koti Rudra Samhita, Ch. 14), Chandra Deva (the Moon God) married 27 daughters of Prajapati Daksha. Because Chandra showed favoritism toward Rohini, Daksha cursed him with consumption (tuberculosis/decay of light). Waning into darkness, Chandra performed intense penance for 4,000 years at Prabhas Kshetra. Lord Shiva appeared, restored his 16 divine kalas (waxing and waning cycle), and resided here as Somnath ('Lord of the Moon').",
      local: "Prabhas Patan has been a supreme pilgrimage hub since the Mahabharata era. It is situated at the sacred Triveni Sangam of rivers Hiran, Kapila, and Saraswati. Nearby lies Bhalka Teertha, where Lord Sri Krishna completed His earthly pastimes and returned to Vaikuntha.",
      folklore: "The famous Baan Stambh (Arrow Pillar) on the sea-facing wall contains an ancient Sanskrit inscription stating that there is no obstruction of land between Somnath and the South Pole (Antarctica) along that precise longitude—an astronomical marvel celebrated for millennia."
    }
  },
  {
    id: "mallikarjuna",
    name: "Mallikarjuna Swami",
    sanskritName: "मल्लिकार्जुन ज्योतिर्लिङ्ग",
    location: "Srisailam, Nallamala Hills, Andhra Pradesh",
    coordinates: "16.0743° N, 78.8682° E",
    deityForm: "Swayambhu Linga & Bhramaramba Devi (Shakti Peetha)",
    riverOrSea: "Krishna River (Patalaganga)",
    stotramVerse: "उज्जयिन्यां महाकालमोंकारममलेश्वरम् ।",
    iconSvg: `<svg viewBox="0 0 100 100" class="gk-jyotir-icon-svg" aria-label="Mallikarjuna Lingam with Jasmine Flower">
      <defs>
        <radialGradient id="malliGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff9c4" />
          <stop offset="100%" stop-color="#f57f17" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="#1e130c" stroke="#ffb300" stroke-width="2"/>
      <!-- Linga -->
      <path d="M38 65 C38 42 62 42 62 65 Z" fill="#424242"/>
      <ellipse cx="50" cy="65" rx="20" ry="6" fill="#616161"/>
      <path d="M50 67 L68 67 L68 70 L50 70 Z" fill="#616161"/>
      <!-- Tripundra & Bindi -->
      <rect x="45" y="48" width="10" height="1.5" fill="#ffffff"/>
      <rect x="45" y="51" width="10" height="1.5" fill="#ffffff"/>
      <rect x="45" y="54" width="10" height="1.5" fill="#ffffff"/>
      <circle cx="50" cy="52.5" r="1.2" fill="#d50000"/>
      <!-- Jasmine (Mallika) Blossom -->
      <circle cx="50" cy="30" r="6" fill="url(#malliGlow)"/>
      <circle cx="44" cy="28" r="4" fill="#ffffff" opacity="0.9"/>
      <circle cx="56" cy="28" r="4" fill="#ffffff" opacity="0.9"/>
      <circle cx="50" cy="23" r="4" fill="#ffffff" opacity="0.9"/>
    </svg>`,
    whatVisitDoes: {
      parikaras: "Mangala / Kuja Dosha, marital delays, family disputes, and relief from chronic penury.",
      doshaNivarana: "Kuja-Shani Shapa, Sarpa Dosha, and liberation from ancestral karmic entanglements.",
      spiritualUpliftment: "Awakening of Kundalini Shakti, harmonious integration of Shiva (Consciousness) and Shakti (Energy)."
    },
    specificPoojas: [
      { name: "Sparsha Darshanam", timing: "Morning & Afternoon", details: "Devotees enjoy the rare scriptural privilege of directly touching the sacred Jyotirlinga and offering abhishekam with their own hands." },
      { name: "Bhramaramba Kunkumarchana", timing: "Daily", details: "Sacred vermillion offering at the sanctum of the 18th Maha Shakti Peetha within the same temple compound." },
      { name: "Kalyanotsavam", timing: "Evening", details: "Celestial wedding ceremony of Lord Mallikarjuna and Goddess Bhramaramba." },
      { name: "Patalaganga Snanam", timing: "Pre-dawn", details: "Purificatory holy dip in the Krishna river descending deep through the Nallamala gorge." }
    ],
    history: {
      puranic: "When Kartikeya felt despondent after Lord Ganesha circumnavigated Shiva and Parvati as the embodiment of the universe, He retired to Mount Krauncha. Desiring to console Him, Shiva and Parvati followed. Parvati resided as 'Mallika' (jasmine flower) and Shiva as 'Arjuna', manifesting together at Srisailam.",
      local: "Revered as the 'Kailash of Southern India', Srisailam's monolithic stone walls were patronized by the Kakatiya rulers, Vijayanagara monarchs (especially Sri Krishna Deva Raya), and Chhatrapati Shivaji Maharaj, who built the temple's northern gopuram in 1677 CE.",
      folklore: "Local Chenchu tribes revere Shiva as 'Chenchu Malliah' and narrate songs of how Shiva manifested as a hunter to protect the hill forests. Adi Shankaracharya meditated here at Hatakeshwara caves and composed the devotional masterpiece *Sivanandalahari*."
    }
  },
  {
    id: "mahakaleshwar",
    name: "Mahakaleshwar Mahadev",
    sanskritName: "महाकालेश्वर ज्योतिर्लिङ्ग",
    location: "Ujjain (Avantika), Madhya Pradesh",
    coordinates: "23.1827° N, 75.7682° E",
    deityForm: "Dakshinamoorthi (South-Facing) Swayambhu Jyotirlinga",
    riverOrSea: "Shipra River (Holy Kshipra)",
    stotramVerse: "उज्जयिन्यां महाकालमोंकारममलेश्वरम् ।",
    iconSvg: `<svg viewBox="0 0 100 100" class="gk-jyotir-icon-svg" aria-label="Mahakaleshwar Bhasma Aarti Icon">
      <circle cx="50" cy="50" r="46" fill="#14070a" stroke="#e53935" stroke-width="2"/>
      <!-- Trishul -->
      <path d="M50 14 L50 82 M40 24 Q50 36 60 24 M40 18 L40 24 M60 18 L60 24" fill="none" stroke="#ffd54f" stroke-width="2.5"/>
      <circle cx="50" cy="14" r="2" fill="#ffd54f"/>
      <!-- Damru -->
      <polygon points="44,40 56,40 44,52 56,52" fill="#d7ccc8" stroke="#8d6e63" stroke-width="1.5"/>
      <!-- Bhasma Swirls -->
      <circle cx="50" cy="66" r="14" fill="#424242"/>
      <ellipse cx="50" cy="66" rx="10" ry="4" fill="#9e9e9e"/>
      <path d="M42 63 Q50 58 58 63" stroke="#eeeeee" stroke-width="1.5" fill="none"/>
    </svg>`,
    whatVisitDoes: {
      parikaras: "Akal Mrityu Nivarana (conquest over fear of premature death), critical medical recoveries, and court litigation protection.",
      doshaNivarana: "Kaal Sarp Dosha, Rahu-Ketu afflictions, Balarishta Dosha, and planetary malefic transitions.",
      spiritualUpliftment: "Transcending the illusion of mortal time (Kala), developing fearless detachment, and inner sovereign willpower."
    },
    specificPoojas: [
      { name: "World-Renowned Bhasma Aarti", timing: "04:00 AM – 06:00 AM", details: "A sacred pre-dawn rite where Lord Mahakal is bathed in sacred cow-dung ash accompanied by resounding drums, damru, and conch shells." },
      { name: "Panchamrit Abhishek", timing: "07:30 AM", details: "Ceremonial bathing using milk, curd, honey, ghee, and sugar candy accompanied by Rudra Prashna chanting." },
      { name: "Sandhya Shringar Darshan", timing: "07:00 PM", details: "Linga adorned in ornate silver masks resembling royal forms of Shiva." },
      { name: "Shri Nagchandreshwar Darshan", timing: "Nag Panchami only", details: "Third-tier sanctum opened for devotees strictly once a year on Shukla Panchami of Shravana." }
    ],
    history: {
      puranic: "In the Shiva Purana, an evil demon named Dushana terrorized the pious residents and sages of Avantika. Pushed to despair, devotees invoked Lord Shiva. Shiva erupted from the earth as Mahakala—the cosmic dissolution of Time—and reduced the demon to ashes with a solitary roar, choosing to reside here facing South (the direction of Yama) to protect His devotees forever.",
      local: "Ujjain is one of the seven holy Moksha Puris (Sapta Puri) and hosts the Simhastha Kumbh Mela every 12 years. Ancient Indian astronomers identified Ujjain as the Prime Meridian (Zero Longitude) and the center of the world's time calculations (Kala-Chakra).",
      folklore: "Royal folklore strictly forbids any reigning Prime Minister, President, or monarch from staying overnight inside the municipal limits of Ujjain, honoring Lord Mahakal as the sole living sovereign ruler of Avantika."
    }
  },
  {
    id: "omkareshwar",
    name: "Omkareshwar & Mamleshwar",
    sanskritName: "ओंकारेश्वर ज्योतिर्लिङ्ग",
    location: "Mandhata Island, Narmada River, Khandwa, Madhya Pradesh",
    coordinates: "22.2458° N, 76.1517° E",
    deityForm: "Pranava-Akara (Natural ॐ Shaped Holy Island)",
    riverOrSea: "Narmada River (Reva)",
    stotramVerse: "उज्जयिन्यां महाकालमोंकारममलेश्वरम् ।",
    iconSvg: `<svg viewBox="0 0 100 100" class="gk-jyotir-icon-svg" aria-label="Omkareshwar Pranava Om and Island">
      <circle cx="50" cy="50" r="46" fill="#0d1b2a" stroke="#e0a96d" stroke-width="2"/>
      <!-- Sacred Om Glyph -->
      <text x="50" y="60" font-family="'Cinzel', serif" font-size="44" fill="#ffd700" text-anchor="middle" font-weight="bold">ॐ</text>
      <!-- Narmada River Waves -->
      <path d="M15 80 Q32 72 50 80 T85 80" fill="none" stroke="#00b4d8" stroke-width="2.5"/>
    </svg>`,
    whatVisitDoes: {
      parikaras: "Guru Chandal Dosha, spiritual stagnation, lack of divine initiation, and dissolution of generational grief.",
      doshaNivarana: "Intellectual bewilderment, speech afflictions, and karmic burdens from disrespecting preceptors.",
      spiritualUpliftment: "Awakening to the cosmic Pranava sound vibration, inner peace, and profound yogic absorption."
    },
    specificPoojas: [
      { name: "Narmada Jalabhisheka", timing: "05:00 AM – 12:00 PM", details: "Pouring the crystal waters of holy Mother Narmada over both Omkareshwar and Mamleshwar Lingas." },
      { name: "Mandhata Island Parikrama", timing: "Morning / Sunset", details: "Sacred 7 km circumambulation around the sacred island contoured in the shape of Pranava ॐ." },
      { name: "Maha Shayan Aarti", timing: "08:30 PM", details: "Night slumber ritual where games of Chaupar are placed for Lord Shiva and Goddess Parvati." }
    ],
    history: {
      puranic: "King Mandhata of the Ikshvaku dynasty undertook arduous penance here until Lord Shiva granted him the boon of eternal residence. Furthermore, Vindhya Mountain prayed to Shiva to expiate its hubris and become comparable to Mount Meru, upon which Shiva split into two shrines: Omkareshwar on the island and Mamleshwar (Amareshwar) on the mainland.",
      local: "Narmada is considered the holiest river for circumambulation; every naturally rolled pebble from the riverbed is revered as a self-manifested Narmadeshwara Baana Linga.",
      folklore: "In the sacred river caves below the temple, Jagadguru Adi Shankaracharya met his guru Govinda Bhagavatpada and received formal Sannyasa Diksha, commencing his historic nationwide revival of Sanatana Dharma."
    }
  },
  {
    id: "kedarnath",
    name: "Kedarnath Mahadev",
    sanskritName: "केदारनाथ ज्योतिर्लिङ्ग",
    location: "Rudraprayag District, Garhwal Himalayas, Uttarakhand (3,583m)",
    coordinates: "30.7352° N, 79.0669° E",
    deityForm: "Triangular Natural Stone Hump (Swayambhu)",
    riverOrSea: "Mandakini River",
    stotramVerse: "परल्यां वैद्यनाथं च डाकिन्यां भीमशङ्करम् ।",
    iconSvg: `<svg viewBox="0 0 100 100" class="gk-jyotir-icon-svg" aria-label="Kedarnath Himalayan Sanctum">
      <circle cx="50" cy="50" r="46" fill="#0b1d28" stroke="#81d4fa" stroke-width="2"/>
      <!-- Snow Mountains -->
      <polygon points="15,65 35,32 55,65" fill="#eceff1" opacity="0.6"/>
      <polygon points="45,65 68,22 90,65" fill="#ffffff" opacity="0.9"/>
      <!-- Ancient Stone Shikhara -->
      <polygon points="40,55 50,38 60,55" fill="#78909c"/>
      <rect x="42" y="55" width="16" height="20" fill="#455a64"/>
      <!-- Mandakini Stream -->
      <path d="M25 85 Q50 78 75 85" stroke="#4fc3f7" stroke-width="3" fill="none"/>
    </svg>`,
    whatVisitDoes: {
      parikaras: "Moksha Prapti (liberation), eradication of severe Sanchita Karma (accumulated lifetimes of sins), and freedom from fear of death.",
      doshaNivarana: "Crucial life blocks, ancestral curses, and Saturnine karmic retributions.",
      spiritualUpliftment: "Ascension into higher spiritual dimensions, absolute surrender, and detachment from worldly illusions."
    },
    specificPoojas: [
      { name: "Maha Abhishek & Ghee Archana", timing: "04:00 AM", details: "Sacred bathing of the triangular hump using pure desi cow ghee, honey, and high-altitude holy herbs." },
      { name: "Brahma Kamal Arpan", timing: "Morning", details: "Devotional offering of the rare mystical Himalayan Brahma Kamal flower harvested from glacial altitudes." },
      { name: "Akhanda Deepa Darshan", timing: "Evening", details: "Darshan of the perpetual ghee lamp that stays illuminated even during the 6 months of freezing winter lock-in." }
    ],
    history: {
      puranic: "In the Mahabharata, the Pandavas sought redemption from Lord Shiva for the bloodshed of the Kurukshetra war. Shiva, eluding them, took the form of a celestial bull. When Bhima recognized Him, the bull dove into the earth. The triangular hump remained at Kedarnath, while other parts emerged across the Panch Kedar shrines.",
      local: "The temple is inaccessible in heavy snow from November to April, during which the Utsava Murti is ritually transported to Omkareshwar Temple at Ukhimath for regular winter worship.",
      folklore: "Adi Shankaracharya attained Mahasamadhi directly behind the Kedarnath temple at the young age of 32. Devotees believe that a pilgrim who passes away in the Kedarkhand territory attains instant Sayujya Mukti."
    }
  },
  {
    id: "bhimashankar",
    name: "Bhimashankar Mahadev",
    sanskritName: "भीमशङ्कर ज्योतिर्लिङ्ग",
    location: "Khed / Pune, Sahyadri Hills, Maharashtra",
    coordinates: "19.0720° N, 73.5358° E",
    deityForm: "Maha Linga (Swayambhu Pillar)",
    riverOrSea: "Bhima River (Origin)",
    stotramVerse: "परल्यां वैद्यनाथं च डाकिन्यां भीमशङ्करम् ।",
    iconSvg: `<svg viewBox="0 0 100 100" class="gk-jyotir-icon-svg" aria-label="Bhimashankar Forest Sanctuary">
      <circle cx="50" cy="50" r="46" fill="#0f2613" stroke="#81c784" stroke-width="2"/>
      <!-- Forest Canopy -->
      <path d="M25 65 Q35 35 50 65 Q65 35 75 65 Z" fill="#2e7d32" opacity="0.8"/>
      <!-- Nagara Shikhara -->
      <polygon points="45,45 50,30 55,45" fill="#a1887f"/>
      <rect x="46" y="45" width="8" height="25" fill="#5d4037"/>
      <!-- River Bhima origin trickle -->
      <path d="M50 70 Q45 78 50 85" stroke="#80deea" stroke-width="2.5" fill="none"/>
    </svg>`,
    whatVisitDoes: {
      parikaras: "Shani Sade Sati protection, courage against demonic energies, court triumphs, and removal of panic/anxiety disorders.",
      doshaNivarana: "Rakshasa Dosha, sudden reversals of fortune, and fear of hostile adversaries.",
      spiritualUpliftment: "Infuses immense physical and spiritual stamina (Bala), righteous tenacity, and unwavering devotion."
    },
    specificPoojas: [
      { name: "Prathama Jalabhishek", timing: "04:30 AM", details: "Holy abhisheka using fresh water collected directly from the pristine origins of River Bhima." },
      { name: "Rudrabhishekam with Bilva Patra", timing: "Morning & Afternoon", details: "Elaborate chanting of Sri Rudram with thousand bilva leaves offered to the massive Swayambhu lingam." },
      { name: "Pradosha Vrata Puja", timing: "Twice monthly", details: "Special evening lamp festival and archana performed on trayodashi tithis." }
    ],
    history: {
      puranic: "Demon Bhima, son of Kumbhakarna and Karkati, acquired boons from Brahma and terrorized the cosmos, imprisoning sage Kamrupeshwar who worshipped a clay linga. When the demon struck the linga with his sword, Lord Shiva erupted from it and reduced Bhima to ashes, agreeing to stay forever as Bhimashankar.",
      local: "Nestled in dense Sahyadri Western Ghat forests, this kshetra is a biodiversity hotspot and home to the giant flying squirrel (Shekru), the state animal of Maharashtra.",
      folklore: "The perspiration that flowed from Shiva's body during His ferocious duel with the demon formed the originating springs of the sacred Bhima River."
    }
  },
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath (Vishveshwara)",
    sanskritName: "काशी विश्वनाथ ज्योतिर्लिङ्ग",
    location: "Varanasi (Kashi / Banaras), Uttar Pradesh",
    coordinates: "25.3109° N, 83.0107° E",
    deityForm: "Vishwanatha (Golden Shikhara Swayambhu Linga)",
    riverOrSea: "Holy Ganga (Uttaravahini)",
    stotramVerse: "वाराणस्यां च विश्वेशं त्र्यम्बकं गौतमीतटे ।",
    iconSvg: `<svg viewBox="0 0 100 100" class="gk-jyotir-icon-svg" aria-label="Kashi Vishwanath Golden Shikhara">
      <circle cx="50" cy="50" r="46" fill="#1f1105" stroke="#ffb300" stroke-width="2"/>
      <!-- Golden Shikhara -->
      <polygon points="40,55 50,18 60,55" fill="#ffd700"/>
      <polygon points="45,55 50,22 55,55" fill="#ffe082"/>
      <!-- Kalasha -->
      <circle cx="50" cy="16" r="3" fill="#ff6f00"/>
      <!-- Ganga Waves -->
      <path d="M15 82 Q32 75 50 82 T85 82" stroke="#4fc3f7" stroke-width="3" fill="none"/>
      <!-- Crescent & Bindi -->
      <path d="M47 38 A4 4 0 0 0 53 38" stroke="#ffffff" stroke-width="1.5" fill="none"/>
    </svg>`,
    whatVisitDoes: {
      parikaras: "Ultimate liberation (Moksha), instant absolution of the heaviest karmic baggage, and peaceful crossing over (Taraka Upadesha).",
      doshaNivarana: "Brahmahatya Dosha, severe ancestral unrest, and fear of rebirth cycles.",
      spiritualUpliftment: "Bestows the highest Advaitic enlightenment; direct realization that the individual soul (Atman) is Shiva (Paramatman)."
    },
    specificPoojas: [
      { name: "Mangala Aarti", timing: "03:00 AM – 04:00 AM", details: "Exclusive mystical awakening ceremony with sacred chants, damru beats, and early morning Gangajal abhisheka." },
      { name: "Saptarishi Aarti", timing: "07:00 PM – 08:30 PM", details: "Ancient ritual conducted simultaneously by seven different Brahmin priests representing the Seven Saptarishis." },
      { name: "Shringar & Shayan Aarti", timing: "09:00 PM – 10:30 PM", details: "Grand floral adornment followed by cosmic lullaby chants before the temple closes." }
    ],
    history: {
      puranic: "Skanda Purana's Kashi Khanda reveals that Kashi rests not upon the mortal earth, but upon the three prongs of Lord Shiva's Trishul. At the hour of death in Kashi, Lord Vishveshwara Himself whispers the sacred Taraka Mantra into the right ear of the departed soul.",
      local: "Reconstructed by Queen Ahilyabai Holkar of Indore in 1780; Maharaja Ranjit Singh of Punjab donated 1,000 kilograms of pure gold in 1835 to plate the sanctum shikharas.",
      folklore: "When Sage Agastya had to travel south to tame the rising Vindhya mountains, he wept bitterly at being parted from Kashi Vishwanath, knowing that every single pebble in Kashi is a conscious manifestation of Shiva."
    }
  },
  {
    id: "trimbakeshwar",
    name: "Trimbakeshwar Mahadev",
    sanskritName: "त्र्यम्बकेश्वर ज्योतिर्लिङ्ग",
    location: "Trimbak, Nashik, Maharashtra",
    coordinates: "19.9324° N, 73.5308° E",
    deityForm: "Three-Faced Cavity Linga (Brahma, Vishnu, Maheshwara)",
    riverOrSea: "Godavari River Origin (Dakshina Ganga)",
    stotramVerse: "वाराणस्यां च विश्वेशं त्र्यम्बकं गौतमीतटे ।",
    iconSvg: `<svg viewBox="0 0 100 100" class="gk-jyotir-icon-svg" aria-label="Trimbakeshwar Three Lingam Crown">
      <circle cx="50" cy="50" r="46" fill="#1a1c23" stroke="#b0bec5" stroke-width="2"/>
      <!-- Black Basalt Temple Outline -->
      <polygon points="35,65 50,32 65,65" fill="#37474f"/>
      <!-- Cavity with 3 Thumbs (Brahma Vishnu Rudra) -->
      <ellipse cx="50" cy="62" rx="14" ry="5" fill="#212121"/>
      <circle cx="43" cy="60" r="2.5" fill="#ffd700"/>
      <circle cx="50" cy="59" r="2.5" fill="#ff9800"/>
      <circle cx="57" cy="60" r="2.5" fill="#e53935"/>
      <!-- Jeweled Mukut Outline -->
      <path d="M42 46 L50 38 L58 46 Z" fill="#ffc107"/>
    </svg>`,
    whatVisitDoes: {
      parikaras: "The premier global center for Narayan Nagbali, Kaal Sarp Shanti, Tripindi Shraddha, and neutralizing severe curses from ancestors.",
      doshaNivarana: "Pitru Dosha, Sarpa Shapa (curse of snakes), Kuja Dosha, and inability to maintain wealth or lineage continuity.",
      spiritualUpliftment: "Reconciles the tripartite energies of Creation (Brahma), Preservation (Vishnu), and Transformation (Rudra) within the aspirant."
    },
    specificPoojas: [
      { name: "Narayan Nagbali Puja", timing: "3-Day Vedic Ritual", details: "Conducted only at Trimbakeshwar to liberate souls of untimely-deceased ancestors and expiate unintentional snake killing." },
      { name: "Kaal Sarp Dosh Nivaran", timing: "Daily Mornings", details: "Vedic Hawan and silver snake offering to appease Rahu and Ketu planetary axes." },
      { name: "Kushavarta Kund Snanam", timing: "Pre-abhisheka", details: "Purification in the sacred water tank where Sage Gautama trapped the celestial river Godavari." },
      { name: "Suvarna Mukut Darshan", timing: "Mondays 04:00 PM – 05:00 PM", details: "Special display of the ancient diamond and emerald jewel-encrusted crown dating from the Pandavas." }
    ],
    history: {
      puranic: "Sage Gautama resided here during a 24-year severe drought. Sages jealous of his inexhaustible granary used an illusionary cow that died when Gautama tried to herd it away. Penitent, Gautama performed fierce austerities to Shiva, who released the river Godavari from His matted locks and established the Trimbakeshwar Jyotirlinga.",
      local: "The unique Jyotirlinga is not an upright pillar, but a natural depression containing three miniature lingas symbolizing Brahma, Vishnu, and Shiva.",
      folklore: "Water continuously oozes from the eye of the linga cavity, feeding the eternal flow of the Dakshina Ganga (Godavari)."
    }
  },
  {
    id: "vaidyanath",
    name: "Baidyanath / Vaidyanath",
    sanskritName: "वैद्यनाथ ज्योतिर्लिङ्ग",
    location: "Deoghar, Santhal Parganas, Jharkhand",
    coordinates: "24.4925° N, 86.7001° E",
    deityForm: "Kamada Linga (The Wish-Fulfilling Divine Healer)",
    riverOrSea: "Sultanganj Uttaravahini Ganga (Kanwar Route)",
    stotramVerse: "परल्यां वैद्यनाथं च डाकिन्यां भीमशङ्करम् ।",
    iconSvg: `<svg viewBox="0 0 100 100" class="gk-jyotir-icon-svg" aria-label="Baidyanath Temple with Gathbandhan Red Ribbon">
      <circle cx="50" cy="50" r="46" fill="#1f0a10" stroke="#f06292" stroke-width="2"/>
      <!-- Main Temple and Parvati Temple -->
      <polygon points="30,68 42,32 54,68" fill="#d81b60"/>
      <polygon points="56,68 66,40 76,68" fill="#ec407a"/>
      <!-- Red Holy Gathbandhan Streamer between tops -->
      <path d="M42 32 Q54 22 66 40" stroke="#ff1744" stroke-width="3" fill="none"/>
      <!-- Golden Pitcher -->
      <circle cx="42" cy="30" r="2.5" fill="#ffd700"/>
    </svg>`,
    whatVisitDoes: {
      parikaras: "Roga Nivarana (healing of incurable ailments, chronic paralysis, mental trauma, and physical debilities).",
      doshaNivarana: "Ayur Dosha (short life-span indicators), Maraka Graha afflictions, and psychological phobias.",
      spiritualUpliftment: "Awakening of inner cellular rejuvenation, pranic healing powers, and unconditional divine compassion."
    },
    specificPoojas: [
      { name: "Kanwar Jalabhisheka", timing: "Shravan Month (July–August)", details: "Millions of devotees walk 105 km barefoot carrying holy Ganga water in bamboo slings from Sultanganj to pour on the deity." },
      { name: "Sarkari Puja", timing: "04:00 AM", details: "Traditional state-sanctioned Vedic abhishekam performed first before general pilgrim entry." },
      { name: "Gathbandhan Ritual", timing: "Daily", details: "Tying a consecrated red cloth between the tops of Shiva's temple and Parvati's temple to bless couples with enduring marital harmony." }
    ],
    history: {
      puranic: "Demon king Ravana meditated fiercely in the Himalayas to attain the supreme Atma Linga. To prove his devotion, he severed nine of his ten heads. As he raised the sword for the tenth, Shiva appeared, acted as a divine physician (Vaidya) by restoring his severed heads, and granted the Atma Linga on the condition that it never touch the ground before reaching Lanka.",
      local: "Lord Varuna entered Ravana's stomach as pure water, inducing an urgent urge. Lord Vishnu disguised as a cowherd (Baiju) offered to hold the linga, but placed it on the ground at Deoghar, where it anchored eternally into the subterranean realm.",
      folklore: "The temple complex houses 22 temples dedicated to various divinities; the presiding deity is called 'Kamada Linga'—one that fulfills every legitimate earthly and spiritual desire."
    }
  },
  {
    id: "nageshwar",
    name: "Nageshwar Mahadev",
    sanskritName: "नागेश्वर ज्योतिर्लिङ्ग",
    location: "Daarukavanam, Near Dwarka, Gujarat",
    coordinates: "22.3347° N, 69.0538° E",
    deityForm: "Nagesha (Protector from all Serpents & Poisons)",
    riverOrSea: "Arabian Sea Coast (Dwarka Peninsula)",
    stotramVerse: "हिमवन्ते तु केदारं घुश्मेशं च शिवालये ।",
    iconSvg: `<svg viewBox="0 0 100 100" class="gk-jyotir-icon-svg" aria-label="Nageshwar Coiled Serpent and Shiva Linga">
      <circle cx="50" cy="50" r="46" fill="#081c15" stroke="#2d6a4f" stroke-width="2"/>
      <!-- Giant Serpentine Hood (Sheshanaag) -->
      <path d="M50 18 Q32 26 38 48 Q50 40 62 48 Q68 26 50 18 Z" fill="#52b788"/>
      <!-- Linga -->
      <ellipse cx="50" cy="58" rx="10" ry="16" fill="#1b4332"/>
      <!-- Serpent Eyes -->
      <circle cx="45" cy="28" r="1.5" fill="#d8f3dc"/>
      <circle cx="55" cy="28" r="1.5" fill="#d8f3dc"/>
    </svg>`,
    whatVisitDoes: {
      parikaras: "Sarpa Dosha, Kaal Sarp Yoga, venomous ailments, fear of betrayals, poisoning, and psychic disturbances.",
      doshaNivarana: "Rahu-Ketu transit afflictions, unexplained phobias of reptiles, and skin ailments (Kushtha).",
      spiritualUpliftment: "Complete purification of the mind from mental toxins (Kam, Krodh, Lobh, Moha, Mada, Matsarya)."
    },
    specificPoojas: [
      { name: "Naga Pratima Daan & Abhishekam", timing: "06:00 AM – 11:30 AM", details: "Consecration and offering of silver five-hooded serpents alongside milk and sugarcane juice." },
      { name: "Pashupata Astra Stotra Archana", timing: "Daily", details: "Recitation of the invincible protective armor hymns of Lord Shiva." },
      { name: "Sandhya Dhyana Aarti", timing: "07:30 PM", details: "Evening light offering surrounded by the colossal 80-foot seated statue of Lord Shiva." }
    ],
    history: {
      puranic: "Demon Daaruka and his wife Daaruki oppressed the virtuous hermits of Daarukavana forest, imprisoning an ardent Shiva devotee named Supriya. Supriya led prisoners in continuous chanting of Om Namah Shivaya. When the demon attacked Supriya, Shiva emerged from a luminous crevice, bestowed the Pashupata weapon, and established the Nageshwara shrine.",
      local: "Situated on the coastal road between Gomti Dwarka and Beyt Dwarka, ancient texts record this location as the ancient Daarukavanam forest.",
      folklore: "Saint Namdev visited the shrine to sing devotional bhajans. When orthodox temple priests chided him and forced him to sit at the rear of the sanctum, the entire stone temple is said to have miraculously rotated on its axis to face Namdev."
    }
  },
  {
    id: "ramanathaswamy",
    name: "Ramanathaswamy (Rameswaram)",
    sanskritName: "रामनाथस्वामी ज्योतिर्लिङ्ग",
    location: "Rameswaram Island, Ramanathapuram, Tamil Nadu",
    coordinates: "9.2881° N, 79.3174° E",
    deityForm: "Ramalingam (Sand Linga) & Vishwalingam (Hanuman Linga)",
    riverOrSea: "Agni Teertham (Bay of Bengal / Gulf of Mannar)",
    stotramVerse: "सेतुबन्धे तु रामेशं नागेशं दारुकावने ।",
    iconSvg: `<svg viewBox="0 0 100 100" class="gk-jyotir-icon-svg" aria-label="Ramanathaswamy Longest Corridor and Teerthams">
      <circle cx="50" cy="50" r="46" fill="#1b120c" stroke="#d4a373" stroke-width="2"/>
      <!-- Dravidian Raja Gopuram Outline -->
      <polygon points="35,70 42,20 58,20 65,70" fill="#a68a64"/>
      <!-- Tier horizontal lines -->
      <line x1="38" y1="35" x2="62" y2="35" stroke="#4a3b32" stroke-width="1.5"/>
      <line x1="36" y1="50" x2="64" y2="50" stroke="#4a3b32" stroke-width="1.5"/>
      <!-- Holy Water Drops (22 Teerthams) -->
      <circle cx="22" cy="78" r="3" fill="#00b4d8"/>
      <circle cx="50" cy="84" r="3" fill="#00b4d8"/>
      <circle cx="78" cy="78" r="3" fill="#00b4d8"/>
    </svg>`,
    whatVisitDoes: {
      parikaras: "Brahmahatya Dosha, Pitru Tarpana at Sethu Karai, marriage delays, childlessness, and resolving grave guilt from past transgressions.",
      doshaNivarana: "Crucial Shani Dosha, Sarpa Dosha, and karmic blocks in profession or lineage.",
      spiritualUpliftment: "Attaining the synthesis of Vaishnavism and Shaivism; understanding that Rama and Shiva dwell in each other's hearts."
    },
    specificPoojas: [
      { name: "22 Sacred Teertham Snanam", timing: "05:00 AM – 12:00 PM", details: "Bathing in the holy medicinal waters of all 22 freshwater wells located within the temple complex." },
      { name: "Spadika (Crystal) Linga Mani Darshan", timing: "05:00 AM – 06:00 AM", details: "Sacred darshan of the glowing clear crystal lingam illuminated with camphor before dawn." },
      { name: "Vishwalingam Prathama Puja", timing: "Daily", details: "Honoring Lord Rama's perpetual decree that the Kailash linga brought by Hanuman must always be worshipped before the Ramalingam." }
    ],
    history: {
      puranic: "After vanquishing Ravana (a scholar of Vedic scriptures and grandson of Sage Pulastya), Sri Rama desired to expiate the sin of slaying a Brahmin (Brahmahatya). He dispatched Hanuman to Mount Kailash to bring an authentic linga. As the auspicious Muhurta drew near and Hanuman was delayed, Sita crafted a linga of sea sand (Ramalingam) and consecrated it.",
      local: "The temple boasts the longest temple corridor in the world (the Third Corridor), spanning 197 meters east-to-west and 133 meters north-to-south, supported by 1,212 granite monolithic pillars carved with remarkable precision.",
      folklore: "When Hanuman returned and was sorrowful that his linga was not used, Rama comforted him by establishing his Vishwalingam right beside Sita's lingam, commanding all pilgrims to worship Hanuman's linga first."
    }
  },
  {
    id: "grishneshwar",
    name: "Grishneshwar (Ghushmeshwar)",
    sanskritName: "घृष्णेश्वर ज्योतिर्लिङ्ग",
    location: "Verul (Near Ellora Caves), Chhatrapati Sambhajinagar, Maharashtra",
    coordinates: "20.0249° N, 75.1793° E",
    deityForm: "Ghushmeshwar Swayambhu Linga (South-Facing)",
    riverOrSea: "Shivalaya Sarovar",
    stotramVerse: "हिमवन्ते तु केदारं घुश्मेशं च शिवालये ।",
    iconSvg: `<svg viewBox="0 0 100 100" class="gk-jyotir-icon-svg" aria-label="Grishneshwar Red Basalt Shikhara">
      <circle cx="50" cy="50" r="46" fill="#1c0f0a" stroke="#d32f2f" stroke-width="2"/>
      <!-- Red Basalt Shikhara -->
      <polygon points="35,68 50,22 65,68" fill="#c62828"/>
      <polygon points="42,68 50,28 58,68" fill="#e53935"/>
      <!-- Shivalaya Sarovar Pond ripples -->
      <path d="M20 80 Q35 74 50 80 T80 80" stroke="#ff8a80" stroke-width="2" fill="none"/>
      <!-- Clay Linga Offering icon -->
      <circle cx="50" cy="74" r="3.5" fill="#ffebee"/>
    </svg>`,
    whatVisitDoes: {
      parikaras: "Santana Prapti (blessings of virtuous progeny), cure for persistent infertility, and resolving toxic marital or familial envy.",
      doshaNivarana: "Santana Dosha, Putra Dosha, Nazar (evil eye), and malicious jealousy from close relatives.",
      spiritualUpliftment: "Infuses the unshakeable faith (Shraddha) and magnanimity exemplified by Mother Ghushma."
    },
    specificPoojas: [
      { name: "Ghushma Sarovar Pradakshina", timing: "Early morning", details: "Circumambulating the sacred Shivalaya pond where Ghushma immersed 101 clay lingas daily." },
      { name: "Panchamrit Abhishek & Kumkum Archana", timing: "05:30 AM – 12:00 PM", details: "Sacred bathing and vermillion offerings to the southern-facing Swayambhu Jyotirlinga." },
      { name: "Shodashopachara Shringar Aarti", timing: "08:00 PM", details: "Nighttime 16-step offering with silver ornamentation and Bilva garlands." }
    ],
    history: {
      puranic: "In the Shiva Purana, a devout woman named Ghushma worshipped Shiva with unblemished faith by creating and immersing 101 clay lingas daily in the local tank. Blessed with a virtuous son, her childless sister Sudeha killed the boy out of jealousy. Ghushma, unbroken in devotion, continued her worship. Pleased with her unshakeable surrender, Shiva resurrected her son and agreed to reside here eternally as Ghushmeshwar.",
      local: "Situated barely 1 km from the UNESCO World Heritage Ellora Caves (adjacent to the magnificent monolithic rock-cut Kailasa Temple Cave 16). Reconstructed by Queen Ahilyabai Holkar in the late 18th century using rich red basalt stone.",
      folklore: "Pilgrims believe that couples facing difficulties in bearing children who pray sincerely at Grishneshwar are blessed with devoted and noble offspring."
    }
  }
];
