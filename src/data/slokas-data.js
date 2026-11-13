/**
 * GuruKripa — Sacred Slokas, Mantras & Stotras Repository
 * 100% Public-Domain Canonical Sanskrit Texts + Original Word-by-Word Breakdown (Sabdartha)
 * and Practical Contemporary Commentary.
 * Organized across the 12 Sacred Deity Hubs.
 */

export const DEITY_HUBS = [
  { id: "all", name: "All Shrines", sanskrit: "सर्वदेवाः", icon: "🕉️" },
  { id: "ganesha", name: "Sri Ganesha", sanskrit: "श्रीगणेशः", icon: "🐘" },
  { id: "shiva", name: "Lord Shiva", sanskrit: "श्रीमहादेवः", icon: "🔱" },
  { id: "vishnu", name: "Lord Vishnu", sanskrit: "श्रीमहाविष्णुः", icon: "🪷" },
  { id: "krishna", name: "Sri Krishna", sanskrit: "श्रीकृष्णः", icon: "🦚" },
  { id: "rama", name: "Sri Rama", sanskrit: "श्रीरामचन्द्रः", icon: "🏹" },
  { id: "hanuman", name: "Sri Hanuman", sanskrit: "श्रीहनुमान्", icon: "🚩" },
  { id: "lakshmi", name: "Maa Lakshmi", sanskrit: "महालक्ष्मीः", icon: "🪙" },
  { id: "durga", name: "Maa Durga", sanskrit: "दुर्गाभवानी", icon: "🦁" },
  { id: "saraswati", name: "Maa Saraswati", sanskrit: "भगवती सरस्वती", icon: "🪕" },
  { id: "murugan", name: "Lord Murugan", sanskrit: "सुब्रह्मण्यः", icon: "🪶" },
  { id: "venkateswara", name: "Sri Venkateswara", sanskrit: "श्रीवेङ्कटेश्वरः", icon: "👑" },
  { id: "ayyappan", name: "Lord Ayyappan", sanskrit: "धर्मशास्ता", icon: "🔔" }
];

export const SLOKAS_DATA = [
  // 1. Sri Ganesha
  {
    id: "ganesha-pancharatnam",
    title: "Ganesha Pancharatnam (Verse 1)",
    deityId: "ganesha",
    deity: "Sri Ganesha",
    category: "Stotra",
    source: "Adi Shankaracharya Stotraavali",
    meter: "Malini",
    devanagari: "मुदाकरात्तमोदकं सदा विमुक्तिसाधकं\nकलाधरावतंसकं विलासिलोकरक्षकम् ।\nअनायकैकनायकं विनाशितेभदैत्यकं\nनताशुभाशूनाशकं नमामि तं विनायकम् ॥",
    iast: "mudākarātta-modakaṃ sadā vimukti-sādhakaṃ\nkalādharāvataṃsakaṃ vilāsi-loka-rakṣakam ।\nanāyakaika-nāyakaṃ vināśitebha-daityakaṃ\nnatāśubhāśūnāśakaṃ namāmi taṃ vināyakam ॥",
    sabdartha: [
      { word: "मुदाकरात्तमोदकम्", meaning: "Holding the sweet modaka with joyous grace" },
      { word: "सदा विमुक्तिसाधकम्", meaning: "Who constantly bestows ultimate spiritual liberation" },
      { word: "कलाधरावतंसकम्", meaning: "Adorned with the crescent moon on His crown" },
      { word: "विलासिलोकरक्षकम्", meaning: "The compassionate protector of the whole creation" },
      { word: "अनायकैकनायकम्", meaning: "The supreme leader of those who have no protector" },
      { word: "विनाशितेभदैत्यकम्", meaning: "The destroyer of the arrogant demon Gajasura" },
      { word: "नताशुभाशूनाशकम्", meaning: "Who swiftly dissolves the misfortunes of surrendered devotees" },
      { word: "नमामि तं विनायकम्", meaning: "I bow before that supreme remover of obstacles, Sri Vinayaka" }
    ],
    translation: "Holding a delightful sweet modaka in His hand, ever bestowing liberation, wearing the crescent moon upon His crown, protecting the manifested universe, the supreme refuge of the helpless, the destroyer of the demon Gajasura, who swiftly dissolves the inauspicious obstacles of those who surrender to Him — to that supreme Lord Vinayaka, I bow with deep reverence.",
    purport: "Composed by Jagadguru Adi Shankaracharya, the Ganesha Pancharatnam invokes Lord Ganesha not merely as an elephant-headed deity of fortune, but as the cosmic archetype of supreme intellect and compassion."
  },
  {
    id: "vakratunda-mahakaya",
    title: "Vakratunda Mahakaya (Prarthana)",
    deityId: "ganesha",
    deity: "Sri Ganesha",
    category: "Mantra",
    source: "Mudgala Purana & Brahma Vaivarta Purana",
    meter: "Anushtubh",
    devanagari: "वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    iast: "vakratuṇḍa mahākāya sūryakoṭi-samaprabha ।\nnirvighnaṃ kuru me deva sarva-kāryeṣu sarvadā ॥",
    sabdartha: [
      { word: "वक्रतुण्ड", meaning: "O Lord with the gracefully curved trunk" },
      { word: "महाकाय", meaning: "Possessor of the vast, cosmic form" },
      { word: "सूर्यकोटिसमप्रभ", meaning: "Whose radiance equals ten million blazing suns" },
      { word: "निर्विघ्नम्", meaning: "Free of hindrances, impediments, or obstacles" },
      { word: "कुरु", meaning: "Please make / render" },
      { word: "मे", meaning: "My" },
      { word: "देव", meaning: "O Divine Lord" },
      { word: "सर्वकार्येषु", meaning: "In all endeavors and righteous duties" },
      { word: "सर्वदा", meaning: "At all times and across all paths" }
    ],
    translation: "O Lord of the curved trunk and immense cosmic form, whose divine brilliance equals ten million suns: please remove all obstacles from all my endeavors, always and in every step.",
    purport: "The universal opening invocation of Sanatana Dharma. The curved trunk (Vakra-tunda) symbolizes the primordial sound Pranava Om, capable of breaking through the densest material and karmic blockages."
  },

  // 2. Lord Shiva
  {
    id: "maha-mrityunjaya",
    title: "Maha Mrityunjaya Mantra (Rudra Mantra)",
    deityId: "shiva",
    deity: "Lord Shiva",
    category: "Mantra",
    source: "Rigveda Samhita (Mandala 7, Sukta 59, Mantra 12)",
    meter: "Anushtubh",
    devanagari: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्मृत्यchainsोर्मुक्षीय माऽमृतात् ॥".replace("chains", ""),
    iast: "oṃ tryambakaṃ yajāmahe sugandhiṃ puṣṭi-vardhanam ।\nurvārukam iva bandhanān mṛtyor mukṣīya mā'mṛtāt ॥",
    sabdartha: [
      { word: "त्र्यम्बकम्", meaning: "The Three-Eyed Lord Shiva, perceiver of past, present, and future" },
      { word: "यजामहे", meaning: "We worship, revere, and adore" },
      { word: "सुगन्धिम्", meaning: "The fragrant one, emitting divine virtue and wisdom" },
      { word: "पुष्टिवर्धनम्", meaning: "The nourisher of all life, who enhances vitality" },
      { word: "उर्वारुकम् इव", meaning: "Just like a fully ripened melon" },
      { word: "बन्धनात्", meaning: "From its stem and the bondage of attachment" },
      { word: "मृत्योः मुक्षीय", meaning: "May You liberate us from physical mortality and suffering" },
      { word: "मा अमृतात्", meaning: "Never separating us from the nectar of divine truth" }
    ],
    translation: "We worship the Three-Eyed Lord Shiva, who is fragrant with transcendental virtue and nourishes all living beings. Just as a ripe melon effortlessly detaches from its vine, may He liberate us from the bondage of death and mortality, without separating us from Immortality.",
    purport: "Revealed by Rishi Markandeya, this profound healing mantra conquers fear of death and bodily decay. Devotees chant it 108 times daily to neutralize afflictions and cultivate fearless detachment."
  },

  // 3. Lord Vishnu
  {
    id: "vishnu-sahasranama-dhyanam",
    title: "Sri Vishnu Sahasranama (Dhyana Sloka)",
    deityId: "vishnu",
    deity: "Lord Vishnu",
    category: "Stotra",
    source: "Mahabharata (Anushasana Parva, Section 149)",
    meter: "Anushtubh",
    devanagari: "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं\nविश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम् ।\nलक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं\nवन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम् ॥",
    iast: "śāntākāraṃ bhujaga-śayanaṃ padma-nābhaṃ sureśaṃ\nviśvādhāraṃ gagana-sadṛśaṃ megha-varṇaṃ śubhāṅgam ।\nlakṣmī-kāntaṃ kamala-nayanaṃ yogibhir-dhyāna-gamyaṃ\nvande viṣṇuṃ bhava-bhaya-haraṃ sarva-lokaika-nātham ॥",
    sabdartha: [
      { word: "शान्ताकारम्", meaning: "Embodiment of serenity and unshakable tranquility" },
      { word: "भुजगशयनम्", meaning: "Resting upon the serpent Ananta Sesha" },
      { word: "पद्मनाभम्", meaning: "From whose navel blossoms the cosmic lotus of creation" },
      { word: "सुरेशम्", meaning: "Lord of the celestials and gods" },
      { word: "विश्वाधारम्", meaning: "The ultimate foundation and support of the entire universe" },
      { word: "गगनसदृशम्", meaning: "Infinite, unbounded, and all-pervading like space" },
      { word: "मेघवर्णम्", meaning: "Having the soothing, merciful hue of rain-bearing clouds" },
      { word: "लक्ष्मीकान्तम्", meaning: "The beloved consort of Goddess Lakshmi" },
      { word: "भवभयहरम्", meaning: "The dispeller of fears of samsara" }
    ],
    translation: "I bow to Lord Vishnu, the embodiment of peace, reclining upon the cosmic serpent Ananta, whose navel produces the creator Brahma upon a lotus. The bedrock of creation, vast as the sky, dark as a rain-cloud, consort of Lakshmi, realized through meditation by yogis: I revere Vishnu, who banishes the fears of mortal existence.",
    purport: "Composed by Bhishma Pitamaha upon the arrow bed in the presence of Lord Krishna. Reciting this dhyana sloka aligns the mind with the all-sustaining preservation energy of the cosmos."
  },

  // 4. Sri Krishna
  {
    id: "gita-2-47",
    title: "Nishkama Karma (Gita 2.47)",
    deityId: "krishna",
    deity: "Sri Krishna",
    category: "Mantra",
    source: "Srimad Bhagavad Gita (Chapter 2, Verse 47)",
    meter: "Anushtubh",
    devanagari: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    iast: "karmaṇy-evādhikāras-te mā phaleṣu kadācana ।\nmā karma-phala-hetur-bhūr-mā te saṅgo'stv-akarmaṇi ॥",
    sabdartha: [
      { word: "कर्मणि एव", meaning: "In action alone lies your rightful domain" },
      { word: "अधिकारः ते", meaning: "Your prerogative and moral responsibility" },
      { word: "मा फलेषु कदाचन", meaning: "Never in the fruits or outcomes" },
      { word: "मा कर्मफलहेतुः भूः", meaning: "Do not let the outcome be your sole motive" },
      { word: "मा ते सङ्गः अस्तु अकर्मणि", meaning: "Nor let your heart become attached to inaction" }
    ],
    translation: "You have a right only to perform your prescribed duty, but never to the fruits of action. Let not the fruit of action be your motive, nor let your attachment be toward inaction.",
    purport: "The cardinal formula for liberation in everyday modern life. By decoupling one's emotional well-being from uncontrollable external results, one attains boundless focus, resilience, and joyful mastery."
  },

  // 5. Sri Rama
  {
    id: "rama-raksha-opening",
    title: "Sri Rama Raksha Stotram (Opening)",
    deityId: "rama",
    deity: "Sri Rama",
    category: "Stotra",
    source: "Padma Purana (Revealed by Sage Budha Kaushika)",
    meter: "Anushtubh",
    devanagari: "चरितं रघुनाथस्य शतकोटिप्रविस्तरम् ।\nएकैकमक्षरं पुंसां महापातकनाशनम् ॥\nध्यात्वा नीलोत्पलश्यामं रामं राजीवलोचनम् ।\nजानकीलक्ष्मणोपेतं जटामुकुटमण्डितम् ॥",
    iast: "caritaṃ raghunāthasya śatakoṭi-pravistaram ।\nekaikam akṣaraṃ puṃsāṃ mahāpātaka-nāśanam ॥\ndhyātvā nīlotpala-śyāmaṃ rāmaṃ rājīva-locanam ।\njānakī-lakṣmaṇopetaṃ jaṭā-mukuṭa-maṇḍitam ॥",
    sabdartha: [
      { word: "चरितम् रघुनाथस्य", meaning: "The divine life story of Sri Raghunatha (Lord Rama)" },
      { word: "शतकोटिप्रविस्तरम्", meaning: "Extending across a billion verses in scope" },
      { word: "एकैकम् अक्षरम्", meaning: "Every single syllable of which" },
      { word: "महापातकनाशनम्", meaning: "Has the power to eradicate the gravest sins and karmas" },
      { word: "नीलोत्पलश्यामम्", meaning: "Having the radiant hue of a blue water lily" },
      { word: "राजीवलोचनम्", meaning: "Endowed with gentle lotus eyes" },
      { word: "जानकीलक्ष्मणोपेतम्", meaning: "Accompanied by Mother Sita and faithful Lakshmana" }
    ],
    translation: "The holy deeds of Sri Rama span a billion verses; every single syllable destroys the gravest karmic misdeeds. Meditating on Rama, dark-complexioned like the blue lotus, lotus-eyed, wearing crowns of matted locks, accompanied by Sita and Lakshmana — we seek His celestial shield.",
    purport: "Sage Budha Kaushika received this armour of protection in a sacred dream from Lord Shiva Himself. It surrounds the chanter's physical body, aura, and mind with an impenetrable circle of divine protection."
  },

  // 6. Sri Hanuman
  {
    id: "hanuman-chalisa-opening",
    title: "Sri Hanuman Chalisa (Doha & Chaupai 1)",
    deityId: "hanuman",
    deity: "Sri Hanuman",
    category: "Chalisa",
    source: "Goswami Tulsidas (Awadhi / Sanskrit Tradition)",
    meter: "Doha & Chaupai",
    devanagari: "श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि ।\nबरनउँ रघुबर बिमल जसु जो दायकु फल चारि ॥\nबुद्धिहीन तनु जानिके सुमिरौ पवन-कुमार ।\nबल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार ॥\nजय हनुमान ज्ञान गुन सागर ।\nजय कपीस तिहुँ लोक उजागर ॥",
    iast: "śrī-guru carana saroja raja nija manu mukuru sudhāri ।\nbaranauṃ raghubara bimala jasu jo dāyaku phala cāri ॥\nbuddhi-hīna tanu jānike sumirau pavana-kumāra ।\nbala budhi bidyā dehu mohiṃ harahu kalesa bikāra ॥\njaya hanumāna jñāna guna sāgara ।\njaya kapīsa tihuṃ loka ujāgara ॥",
    sabdartha: [
      { word: "श्रीगुरु चरन सरोज रज", meaning: "With the sacred dust of the Guru's lotus feet" },
      { word: "निज मनु मुकुरु सुधारि", meaning: "Cleansing the mirror of my heart and mind" },
      { word: "बरनउँ रघुबर बिमल जसु", meaning: "I celebrate the pure glory of Sri Rama" },
      { word: "जो दायकु फल चारि", meaning: "Which grants the four life aims: Dharma, Artha, Kama, Moksha" },
      { word: "जय हनुमान", meaning: "Victory to Lord Hanuman" },
      { word: "ज्ञान गुन सागर", meaning: "Ocean of transcendental wisdom and supreme virtues" }
    ],
    translation: "Cleansing the mirror of my mind with the dust from my Guru's lotus feet, I sing the unblemished glory of Sri Rama, which grants the four fruits of life. Knowing myself to be deficient in strength and wisdom, I meditate upon the Son of the Wind: grant me physical vigor, intellectual clarity, and divine knowledge, and vanquish my sorrows and mental impurities. Hail Hanuman, vast ocean of wisdom and virtues; hail the king of monkeys, who illumines the three cosmic worlds!",
    purport: "Chanted by hundreds of millions daily across the globe. Tulsidas wrote this while imprisoned, proving the power of pure devotion to dissolve mortal entrapment and mental distress."
  },

  // 7. Maa Lakshmi
  {
    id: "mahalakshmi-ashtakam",
    title: "Sri Mahalakshmi Ashtakam (Verse 1)",
    deityId: "lakshmi",
    deity: "Maa Lakshmi",
    category: "Ashtakam",
    source: "Padma Purana (Uttered by Lord Indra)",
    meter: "Anushtubh",
    devanagari: "नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते ।\nशङ्खचक्रगदाहस्ते महालक्ष्मि नमोऽस्तु ते ॥",
    iast: "namas-te'stu mahāmāye śrī-pīṭhe sura-pūjite ।\nśaṅkha-cakra-gadā-haste mahālakṣmi namo'stu te ॥",
    sabdartha: [
      { word: "नमस्ते अस्तु", meaning: "Salutations unto You" },
      { word: "महामाये", meaning: "O Divine Mother of supreme cosmic power (Mahamaya)" },
      { word: "श्रीपीठे", meaning: "Dweller upon the sacred seat of fortune (Shri Peetha)" },
      { word: "सुरपूजिते", meaning: "Revered and adored by all the devas" },
      { word: "शङ्खचक्रगदाहस्ते", meaning: "Holding the conch, discus, and mace in Your hands" },
      { word: "महालक्ष्मि", meaning: "O Supreme Mother Lakshmi" },
      { word: "नमोऽस्तु ते", meaning: "I offer my humble prostrations unto You" }
    ],
    translation: "Salutations unto You, O Supreme Mother, sovereign of all cosmic illusion, seated upon the seat of prosperity, worshipped by all the celestials! Adorned with the divine conch, discus, and mace in Your hands — O Mother Mahalakshmi, I bow before You in adoration.",
    purport: "When Lord Indra lost all prosperity due to ego, he sang this eight-verse hymn to invoke Mother Lakshmi. She represents not merely financial currency, but the eightfold wealth (Ashta Lakshmi): courage, progeny, knowledge, food, spiritual sovereignty, and inner joy."
  },

  // 8. Maa Durga
  {
    id: "mahishasura-mardini-opening",
    title: "Aigiri Nandini (Mahishasura Mardini Stotram)",
    deityId: "durga",
    deity: "Maa Durga",
    category: "Stotra",
    source: "Adi Shankaracharya Tradition",
    meter: "Matra-chandas (Dynamic rhythm)",
    devanagari: "अयि गिरिनन्दिनि नन्दितमेदिनि विश्वविनोदिनि नन्दसुते\nगिरिवरविन्ध्यशिरोऽधिनिवासिनि विष्णुविलासिनि जिष्णुनुते ।\nभगवति हे शितिकण्ठकुटुम्बिनि भूरिकुटुम्बिनि भूरिकृते\nजय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते ॥",
    iast: "ayi giri-nandini nandita-medini viśva-vinodini nanda-sute\ngirivara-vindhya-śiro'dhinivāsini viṣṇu-vilāsini jiṣṇu-nute ।\nbhagavati he śitikaṇṭha-kuṭumbini bhūri-kuṭumbini bhūri-kṛte\njaya jaya he mahiṣāsura-mardini ramya-kapardini śaila-sute ॥",
    sabdartha: [
      { word: "अयि गिरिनन्दिनि", meaning: "O Daughter of the sacred Mountain (Himavan)" },
      { word: "नन्दितमेदिनि", meaning: "Who brings joy and delight to the Mother Earth" },
      { word: "विश्वविनोदिनि", meaning: "Who rejoices in the play of the universe" },
      { word: "विष्णुविलासिनि", meaning: "Beloved sister of Lord Vishnu" },
      { word: "महिषासुरमर्दिनि", meaning: "Destroyer of the demon of delusion, Mahishasura" },
      { word: "रम्यकपर्दिनि", meaning: "Adorned with gorgeous braided locks of hair" },
      { word: "शैलसुते", meaning: "O Divine Daughter of the Mountain!" }
    ],
    translation: "O Daughter of the Mountain, who gladdens the earth, who delights the cosmos, sister of Nanda, dwelling on the peaks of the Vindhya range, beloved of Vishnu, praised by Indra! O Consort of Shiva, Mother of all cosmic beings, who accomplishes great deeds — victory, victory unto You, O destroyer of Mahishasura, with exquisitely braided locks!",
    purport: "The sonic thunder of this hymn elevates the vitality of the chanter. Mahishasura represents dullness (Tamas), sloth, and destructive arrogance; Mother Durga's trident awakens radiant courage (Rajas purified by Sattva)."
  },

  // 9. Maa Saraswati
  {
    id: "saraswati-namastubhyam",
    title: "Saraswati Namastubhyam (Vidya Prarthana)",
    deityId: "saraswati",
    deity: "Maa Saraswati",
    category: "Mantra",
    source: "Saraswati Rahasya Upanishad",
    meter: "Anushtubh",
    devanagari: "सरस्वति नमस्तुभ्यं वरदे कामरूपिणि ।\nविद्यारम्भं करिष्यामि सिद्धिर्भवतु मे सदा ॥",
    iast: "sarasvati namas-tubhyaṃ varade kāma-rūpiṇi ।\nvidyārambhaṃ kariṣyāmi siddhir-bhavatu me sadā ॥",
    sabdartha: [
      { word: "सरस्वति", meaning: "O Goddess Saraswati, embodiment of flow and knowledge" },
      { word: "नमस्तुभ्यम्", meaning: "My humble prostrations unto You" },
      { word: "वरदे", meaning: "Giver of righteous boons and spiritual clarity" },
      { word: "कामरूपिणि", meaning: "Who fulfills pure auspicious aspirations" },
      { word: "विद्यारम्भम्", meaning: "Commencement of studies and learning" },
      { word: "करिष्यामि", meaning: "I am about to undertake" },
      { word: "सिद्धिः भवतु मे सदा", meaning: "May mastery, fulfillment, and illumination be mine always" }
    ],
    translation: "O Goddess Saraswati, giver of blessings, fulfiller of all pure aspirations! As I begin my quest for wisdom, grant me unfailing success, mastery, and spiritual insight at all times.",
    purport: "The quintessential prayer for students, writers, and spiritual seekers. It establishes a sacred orientation to education: studying not just for career vanity, but for the blossoming of spiritual consciousness."
  },

  // 10. Lord Murugan / Subrahmanya
  {
    id: "subrahmanya-bhujangam-verse1",
    title: "Subrahmanya Bhujangam (Opening Dhyana)",
    deityId: "murugan",
    deity: "Lord Murugan",
    category: "Stotra",
    source: "Adi Shankaracharya (Tiruchendur Kshetram)",
    meter: "Bhujangaprayata",
    devanagari: "सदा बालरूपाऽपि विघ्नाद्रिहन्त्री\nमहादन्तिवक्त्राऽपि पञ्चास्यमान्या ।\nविधीन्द्रादिमृग्या गणेषाभिधा मे\nविधत्तां श्रियं काऽपि कल्याणमूर्तिः ॥",
    iast: "sadā bālarūpā'pi vighnādri-hantrī\nmahā-danti-vaktrā'pi pañcāsya-mānyā ।\nvidhīndrādi-mṛgyā gaṇeṣābhidhā me\nvidhattāṃ śriyaṃ kā'pi kalyāṇa-mūrtiḥ ॥",
    sabdartha: [
      { word: "सदा बालरूपा अपि", meaning: "Though ever appearing in the sweet form of a divine child" },
      { word: "विघ्नाद्रिहन्त्री", meaning: "Smasher of mountains of obstacles" },
      { word: "कल्याणमूर्तिः", meaning: "Embodiment of supreme auspiciousness and grace" },
      { word: "विधत्तां श्रियम्", meaning: "May He bestow boundless divine welfare and wisdom" }
    ],
    translation: "Though appearing ever as a youthful child, He smashes mountains of obstacles; sought after by Brahma, Indra, and the gods, embodiment of eternal auspiciousness: may Lord Subrahmanya bestow divine grace, courage, and prosperity upon me.",
    purport: "Composed by Adi Shankaracharya at the seashore temple of Tiruchendur. Lord Murugan represents the sharp spear of spiritual discernment (Vel), cutting through the six inner enemies (Arishadvargas)."
  },

  // 11. Sri Venkateswara
  {
    id: "venkateswara-suprabhatam-verse1",
    title: "Sri Venkateswara Suprabhatam (Verse 1)",
    deityId: "venkateswara",
    deity: "Sri Venkateswara",
    category: "Suprabhatam",
    source: "Sri Prativadi Bhayankaram Annan (Tirumala Kshetram)",
    meter: "Vasantatilaka",
    devanagari: "कौसल्या सुप्रजा राम पूर्वा सन्ध्या प्रवर्तते ।\nउत्तिष्ठ नरशार्दूल कर्तव्यं दैवमाह्निकम् ॥",
    iast: "kausalyā supra-jā rāma pūrvā sandhyā pravartate ।\nuttiṣṭha nara-śārdūla kartavyaṃ daivam āhnikam ॥",
    sabdartha: [
      { word: "कौसल्या सुप्रजा", meaning: "O noble son of mother Kausalya" },
      { word: "राम", meaning: "O Lord Rama (invoked as Lord of Seven Hills)" },
      { word: "पूर्वा सन्ध्या प्रवर्तते", meaning: "The auspicious eastern dawn has broken across the sky" },
      { word: "उत्तिष्ठ", meaning: "Please awaken from Your divine slumber" },
      { word: "नरशार्दूल", meaning: "O lion among human beings / sovereign Lord" },
      { word: "कर्तव्यम् दैवम् आह्निकम्", meaning: "The divine morning prayers and daily duties await Your presence" }
    ],
    translation: "O noble son of Kausalya! The sacred eastern dawn has arrived. Awaken, O lion among leaders of men; the divine morning duties must now be performed for the welfare of the cosmos.",
    purport: "Sung every dawn at Tirumala Tirupati Devasthanam to gently awaken Lord Srinivasa. Listening to this suprabhatam at dawn aligns the human biological clock with the cosmic rhythms of light and devotion."
  },

  // 12. Lord Ayyappan
  {
    id: "harivarasanam-verse1",
    title: "Harivarasanam (Viswamohanam - Verse 1)",
    deityId: "ayyappan",
    deity: "Lord Ayyappan",
    category: "Stotra",
    source: "Sri Kumbakudi Kulathur Iyer (Sabarimala Tradition)",
    meter: "Sanskrit Devotional Padam",
    devanagari: "हरिवरासनं विश्वमोहनं\nहरिदधीश्वरं आराध्यपादुकम् ।\nअरिविमर्दनं नित्यनर्तनं\nहरिहरात्मजं देवमाश्रये ॥\nशरणं अय्यप्पा स्वामि शरणं अय्यप्पा ।\nशरणं अय्यप्पा स्वामि शरणं अय्यप्पा ॥",
    iast: "hari-varāsanaṃ viśva-mohanaṃ\nhari-dadhīśvaraṃ ārādhya-pādukam ।\nari-vimardanaṃ nitya-nartanaṃ\nhari-harātmajaṃ devam āśraye ॥\nśaraṇaṃ ayyappā svāmi śaraṇaṃ ayyappā ।\nśaraṇaṃ ayyappā svāmi śaraṇaṃ ayyappā ॥",
    sabdartha: [
      { word: "हरिवरासनम्", meaning: "Seated upon the glorious throne of Lord Hari" },
      { word: "विश्वमोहनम्", meaning: "Whose divine enchantment mesmerizes the entire cosmos" },
      { word: "आराध्यपादुकम्", meaning: "Whose sacred sandals are adored by yogis and ascetics" },
      { word: "अरिविमर्दनम्", meaning: "Destroyer of demonic enemies and inner delusion" },
      { word: "हरिहरात्मजम्", meaning: "Born of the holy union of Hari (Vishnu) and Hara (Shiva)" },
      { word: "देवम् आश्रये", meaning: "I surrender unto that supreme Divine Lord" }
    ],
    translation: "Seated on the throne of Hari, the charmer of the universe, whose sacred sandals are worshipped by all, who vanquishes all enemies and dances eternally in blissful truth: born of Hari and Hara, in that Divine Lord Ayyappa I take refuge! Swamiye Saranam Ayyappa!",
    purport: "The celestial lullaby of Sabarimala. Chanted every night before the sanctum sanctorum doors close. It unifies the Vaishnava and Shaiva traditions into pure non-dual surrender."
  },

  // Universal Invocations
  {
    id: "gayatri-mantra",
    title: "Gayatri Mantra",
    deityId: "all",
    deity: "Universal (Savitr)",
    category: "Mantra",
    source: "Rigveda Samhita (Mandala 3, Sukta 62, Mantra 10)",
    meter: "Gayatri (24 syllables)",
    devanagari: "ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥",
    iast: "oṃ bhūr bhuvaḥ svaḥ ।\ntat savitur vareṇyaṃ bhargo devasya dhīmahi ।\ndhiyo yo naḥ pracodayāt ॥",
    sabdartha: [
      { word: "ॐ (Om)", meaning: "The primordial sound, supreme cosmic reality" },
      { word: "भूः भुवः स्वः", meaning: "The physical, astral, and celestial planes" },
      { word: "तत् सवितुः वरेण्यम्", meaning: "That most adorable Light of the Divine Sun" },
      { word: "भर्गः देवस्य धीमहि", meaning: "We meditate upon the spiritual radiance of the Creator" },
      { word: "धियो यो नः प्रचोदयात्", meaning: "May that effulgence illuminate and guide our intellect" }
    ],
    translation: "We meditate upon the supreme, most adorable radiance of that Divine Creator, the Sun of consciousness. May that effulgent Light illuminate, guide, and inspire our spiritual intellect and discernment.",
    purport: "The crown jewel of Vedic revelation. It is a sacred invocation for the awakening of higher intellect (Buddhi), clearing mental fog and aligning the human nervous system with cosmic intelligence."
  },
  {
    id: "shanti-mantra",
    title: "Sarve Bhavantu Sukhinah (Universal Peace)",
    deityId: "all",
    deity: "Universal (Paramatman)",
    category: "Prayer",
    source: "Brihadaranyaka Upanishad Tradition",
    meter: "Anushtubh",
    devanagari: "ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥\nॐ शान्तिः शान्तिः शान्तिः ॥",
    iast: "oṃ sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ ।\nsarve bhadrāṇi paśyantu mā kaścid duḥkha-bhāg bhavet ॥\noṃ śāntiḥ śāntiḥ śāntiḥ ॥",
    sabdartha: [
      { word: "सर्वे भवन्तु सुखिनः", meaning: "May all beings everywhere be happy and peaceful" },
      { word: "सर्वे सन्तु निरामयाः", meaning: "May all beings be free from sickness and disease" },
      { word: "सर्वे भद्राणि पश्यन्तु", meaning: "May all behold goodness and nobility in each other" },
      { word: "मा कश्चित् दुःखभाग् भवेत्", meaning: "May no one be a partaker of grief or suffering" },
      { word: "शान्तिः", meaning: "Peace across body, mind, and soul" }
    ],
    translation: "May all beings everywhere be happy. May all beings be free from disease and illness. May all behold only auspiciousness and goodness in one another. May no one suffer or be partaker of sorrow. Om Peace, Peace, Peace.",
    purport: "The living motto of Sanatana Dharma: Vasudhaiva Kutumbakam. It blesses humans, animals, nature, and every realm in existence with peace and wellness."
  }
];
