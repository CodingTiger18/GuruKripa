/**
 * GuruKripa — Hindu Moral Stories, Parables & Philosophical Tid-bits
 * 100% Public-Domain Ancient Indian Fables (Panchatantra, Hitopadesha, Tenali Raman, Upanishads)
 * with Vocabulary, Practical Moral Analysis, and Interactive Ethical Dilemma Quizzes.
 */

export const STORIES_DATA = [
  {
    id: "lion-and-hare",
    title: "The Lion and the Clever Hare",
    collection: "Panchatantra (Book 1: Mitra-bheda — The Loss of Friends)",
    author: "Pandit Vishnu Sharma (circa 300 BCE)",
    sanskritEpigraph: "बुद्धिर्यस्य बलं तस्य निर्बुद्धेस्तु कुतो बलम् ।\nवने सिंहो मदोन्मत्तः शशकेन निपातितः ॥",
    epigraphTranslation: "He who possesses intellect possesses true power; what strength does one without wisdom have? A mighty lion intoxicated with pride was slain in the forest by a humble hare.",
    summary: "Bhasuraka, a ferocious lion, slaughtered animals indiscriminately. The terrified animals agreed to send one prey daily. When it was the little hare's turn, he arrived late and claimed another lion had stopped him. Bhasuraka furiously demanded to see the rival. The hare led the lion to a deep well; seeing his own reflection and hearing his echo, the furious lion leaped in and perished.",
    vocabulary: [
      { term: "Bhasuraka (भासुरक)", meaning: "Shining or fierce; the name of the lion" },
      { term: "Yukti (युक्ति)", meaning: "Strategic resourcefulness; applying intellect over brute force" },
      { term: "Mada (मद)", meaning: "Blind arrogance, hubris arising from physical power" }
    ],
    moral: "Wisdom and presence of mind conquer brute physical force. Arrogance clouds perception, making even the mighty destroy themselves.",
    quiz: {
      question: "In situations where you face an overwhelming challenge against which you have no physical leverage, what is the core Vedic strategic response?",
      options: [
        "React in panic and despair",
        "Use calm discernment (Buddhi), self-control, and the adversary's own arrogance against them",
        "Surrender completely without thinking"
      ],
      correctIndex: 1,
      explanation: "Vedic statecraft (Niti Shastra) teaches that Buddhi (spiritual intellect) is superior to physical might (Bahu-bala). The hare did not fight the lion; he allowed the lion's own rage and illusion (Maya) to cause his downfall."
    }
  },
  {
    id: "monkey-and-crocodile",
    title: "The Monkey and the Crocodile",
    collection: "Panchatantra (Book 4: Labdhapranasham — Loss of Gains)",
    author: "Pandit Vishnu Sharma",
    sanskritEpigraph: "आपत्काले तु संप्राप्ते यस्य बुद्धिर्न हीयते ।\nस एव तरते दुर्गाणि जलबद्ध इव प्लवः ॥",
    epigraphTranslation: "When calamity strikes, he whose presence of mind does not waver crosses over treacherous perils, just like a sturdy raft upon tempestuous waters.",
    summary: "Raktamukha, a monkey living in a rose-apple tree by the river, befriended Karalamukha, a crocodile, sharing sweet fruits. The crocodile's greedy wife desired to eat the monkey's heart. Trapped mid-river on the crocodile's back, the monkey remained calm and claimed he had left his heart safe inside the hollow of the tree. The foolish crocodile swam back, allowing the monkey to leap to safety.",
    vocabulary: [
      { term: "Pratyutpannamati (प्रत्युत्पन्नमति)", meaning: "Instantaneous presence of mind during sudden peril" },
      { term: "Mitra-droha (मित्रद्रोह)", meaning: "Betrayal of trust between friends" }
    ],
    moral: "Presence of mind in moments of mortal danger saves life. Betrayal destroys friendship forever.",
    quiz: {
      question: "What saved the monkey when trapped in the middle of the river?",
      options: [
        "Physical fighting against the crocodile",
        "Retaining composure and using swift psychological wit",
        "Crying out for help to other animals"
      ],
      correctIndex: 1,
      explanation: "Panic paralyzes thinking. By remaining calm and fabricating a convincing story about leaving his heart on the tree, the monkey navigated a lethal situation peacefully."
    }
  },
  {
    id: "three-idols-tenali-raman",
    title: "Tenali Raman and the Three Idols",
    collection: "Tales of Tenali Ramakrishna",
    author: "Folkloric Heritage of Vijayanagara Empire",
    sanskritEpigraph: "श्रूयतां धर्मसर्वस्वं श्रुत्वा चैवावधार्यताम् ।\nआत्मनः प्रतिकूलानि परेषां न समाचरेत् ॥",
    epigraphTranslation: "Listen to the essence of Dharma, and having heard it, keep it firmly in your heart: That which is painful or detrimental to oneself, never inflict upon others.",
    summary: "A foreign scholar presented King Krishnadevaraya with three identical golden idols, challenging the court to determine which was superior. Tenali Raman inserted a thin straw into the ear of each idol. In the first, the straw emerged from the other ear (the person who hears and instantly forgets). In the second, the straw emerged from the mouth (the person who hears a secret and immediately gossips). In the third, the straw passed directly into the heart (the noble person who hears wisdom, reflects upon it, and preserves confidence). Raman declared the third idol the best.",
    vocabulary: [
      { term: "Shravana (श्रवण)", meaning: "The art of deep, attentive spiritual listening" },
      { term: "Manana (मनन)", meaning: "Internal reflection, assimilating knowledge into the heart" },
      { term: "Nididhyasana (निदिध्यासन)", meaning: "Living and manifesting truth in daily character" }
    ],
    moral: "A person's true character is revealed by how they handle what they hear: whether they leak it, gossip, or assimilate it into noble conduct.",
    quiz: {
      question: "Which type of listener did the third golden idol represent?",
      options: [
        "The gossip who repeats everything they hear",
        "The person who absorbs wisdom deeply into their heart and preserves trust",
        "The inattentive person who lets advice pass through one ear and out the other"
      ],
      correctIndex: 1,
      explanation: "True character (Sheela) lies in deep assimilation (Manana). Spiritual seekers must be like the third idol—absorbing truth into the heart rather than broadcasting idle speech."
    }
  },
  {
    id: "satyakama-jabala",
    title: "Satyakama Jabala and the Voice of Truth",
    collection: "Chandogya Upanishad (Chapter 4, Section 4)",
    author: "Ancient Vedic Sage Tradition",
    sanskritEpigraph: "सत्यमेव जयते नानृतं\nसत्येन पन्था विततो देवयानः ।",
    epigraphTranslation: "Truth alone triumphs, never falsehood. By truth is paved the divine pathway of spiritual liberation.",
    summary: "Young Satyakama wished to study Brahmavidya under Sage Gautama. When asked his lineage (gotra), his mother Jabala candidly told him she had served many masters in her youth and did not know his lineage. Satyakama truthfully repeated this to Gautama. Overjoyed by his uncompromising honesty, the sage declared: 'None but a true Brahmana could speak such unvarnished truth.' Gautama initiated him into the highest wisdom.",
    vocabulary: [
      { term: "Satya (सत्य)", meaning: "Unyielding adherence to truth in thought, word, and deed" },
      { term: "Brahmavidya (ब्रह्मविद्या)", meaning: "The supreme science of Ultimate Reality" },
      { term: "Acharya (आचार्य)", meaning: "A spiritual preceptor who teaches through their personal conduct" }
    ],
    moral: "Truthfulness is the highest pedigree. Nobility of character outweighs social circumstance or birth.",
    quiz: {
      question: "Why did Sage Gautama accept Satyakama as his prime disciple?",
      options: [
        "Because he was wealthy and powerful",
        "Because he displayed absolute truthfulness and courage about his origins",
        "Because he performed complex rituals"
      ],
      correctIndex: 1,
      explanation: "The Upanishads emphasize that true spiritual nobility is determined by Satya (Truth) and character, not by external privilege or birth status."
    }
  }
];
