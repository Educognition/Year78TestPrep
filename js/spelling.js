/**
 * NZ Phase 3 The Code / Spelling & Morphology Bank
 * Full Combined Year 7 & 8 Curriculum Bank (50 Questions)
 * Accessible vocabulary leveled for intermediate learners.
 * Features complete coverage of Latin and Greek roots and structured literacy rules.
 * Automatically shuffles into randomized order on each launch.
 */

// Utility: Fisher-Yates array shuffler
function shuffleSpellingArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const SPELLING_QUESTION_BANK = [
  // ==========================================
  // LATIN ROOTS (FROM CURRICULUM LIST)
  // ==========================================
  {
    strand: "Etymology: Latin Roots (port)",
    question: "The Latin root 'port' means 'to carry'. Which word literally means 'to carry or send goods out of a country'?",
    options: ["Export", "Import", "Transport", "Report"],
    correctIndex: 0,
    hint: "Think about the prefix 'ex-' which means 'out of'.",
    explanation: "'Ex-' (out of) + 'port' (to carry) = export (to send goods out of a country)."
  },
  {
    strand: "Etymology: Latin Roots (dict)",
    question: "The Latin root 'dict' means 'to say' or 'speak'. What does it mean to 'contradict' someone?",
    options: [
      "To say the opposite of what someone else said",
      "To announce a formal decision in a court",
      "To guess what will happen in the future",
      "To write down someone's words neatly"
    ],
    correctIndex: 0,
    hint: "The prefix 'contra-' means 'against'.",
    explanation: "'Contra-' (against) + 'dict' (to say) means to speak against or argue the opposite."
  },
  {
    strand: "Etymology: Latin Roots (dict)",
    question: "The Latin root 'dict' means 'to say'. When a jury in court makes its final decision, it announces a:",
    options: ["Verdict", "Dictation", "Dictionary", "Prediction"],
    correctIndex: 0,
    hint: "'Ver' means 'truth' and 'dict' means 'to say'.",
    explanation: "'Ver' (truth) + 'dict' (say) = verdict (speaking the final truth or decision)."
  },
  {
    strand: "Etymology: Latin Roots (rupt)",
    question: "The Latin root 'rupt' means 'break' or 'burst'. Which word best completes this sentence?\n'A loud fire alarm threatened to _______ the school speech finals.'",
    options: ["disrupt", "corrupt", "rupture", "bankrupt"],
    correctIndex: 0,
    hint: "Pick the word that means to break into the middle of an event.",
    explanation: "'Dis-' (apart) + 'rupt' (break) = disrupt (to interrupt or break up an activity)."
  },
  {
    strand: "Etymology: Latin Roots (rupt)",
    question: "The Latin root 'rupt' means 'break' or 'burst'. What happens if a garden hose suffers a 'rupture'?",
    options: [
      "It splits open and bursts",
      "It gets clogged with dirt",
      "It gets turned off at the tap",
      "It gets coiled up neatly"
    ],
    correctIndex: 0,
    hint: "'Rupt' directly means to break or burst.",
    explanation: "A 'rupture' is a tear, crack, or burst in something."
  },
  {
    strand: "Etymology: Latin Roots (scribe / script)",
    question: "The Latin root 'scribe' or 'script' means 'to write'. What do we call an author's original written work before it becomes a printed book?",
    options: ["A manuscript", "A prescription", "A transcript", "A subscription"],
    correctIndex: 0,
    hint: "The root 'manu' means 'hand' and 'script' means 'written'.",
    explanation: "'Manu' (hand) + 'script' (written) = manuscript (originally written by hand)."
  },
  {
    strand: "Etymology: Latin Roots (scribe / script)",
    question: "The Latin root 'scribe' or 'script' means 'to write'. To sign up and pay for a monthly magazine or streaming service is to:",
    options: ["Subscribe", "Transcribe", "Inscribe", "Describe"],
    correctIndex: 0,
    hint: "'Sub-' means 'under' (signing your name at the bottom).",
    explanation: "'Sub-' (under) + 'scribe' (to write) = subscribe (to sign your name under an agreement)."
  },
  {
    strand: "Etymology: Latin Roots (struct)",
    question: "The Latin root 'struct' means 'to build'. Which word describes helpful feedback meant to build up your skills?",
    options: ["Constructive", "Destructive", "Obstructive", "Structural"],
    correctIndex: 0,
    hint: "The prefix 'con-' means 'together' or 'with'.",
    explanation: "'Constructive' feedback helps you build and improve your work."
  },
  {
    strand: "Etymology: Latin Roots (spect)",
    question: "The Latin root 'spect' means 'to look'. What does it mean to 'inspect' a bicycle?",
    options: [
      "To look closely at it to check for problems",
      "To ride it down a steep hill",
      "To build it from new parts",
      "To clean off all the dirt and mud"
    ],
    correctIndex: 0,
    hint: "The prefix 'in-' means 'into'.",
    explanation: "'In-' (into) + 'spect' (look) = to look carefully into something."
  },
  {
    strand: "Etymology: Latin Roots (circum)",
    question: "The Latin root 'circum' means 'around'. What is the name for the distance all the way around the outside edge of a circle?",
    options: ["Circumference", "Circumstance", "Circumnavigate", "Circuit"],
    correctIndex: 0,
    hint: "Think of the perimeter of a circle.",
    explanation: "'Circumference' is the boundary line or distance around a circle."
  },
  {
    strand: "Etymology: Latin Roots (aud)",
    question: "The Latin root 'aud' means 'to hear'. If a teacher's voice is barely 'audible' across the noisy field, it means:",
    options: [
      "It can barely be heard",
      "It is loud and clear",
      "It is recorded on a phone",
      "It is shouting instructions"
    ],
    correctIndex: 0,
    hint: "The suffix '-ible' means 'able to be'.",
    explanation: "'Aud' (hear) + '-ible' (able to be) = able to be heard."
  },
  {
    strand: "Etymology: Latin Roots (ambi)",
    question: "The Latin root 'ambi' means 'both'. A person who can write just as easily with both hands is:",
    options: ["Ambidextrous", "Ambivalent", "Ambiguous", "Ambient"],
    correctIndex: 0,
    hint: "'Ambi' means 'both'.",
    explanation: "'Ambidextrous' means able to use both hands with equal ease."
  },
  {
    strand: "Etymology: Latin Roots (ambi)",
    question: "The Latin root 'ambi' means 'both'. If an instruction from your coach is 'ambiguous', what does that mean?",
    options: [
      "It is unclear and could mean two different things",
      "It is very simple and easy to follow",
      "It is spoken loudly for everyone to hear",
      "It has been written down step-by-step"
    ],
    correctIndex: 0,
    hint: "Think about an idea that points in two directions at the same time.",
    explanation: "'Ambiguous' means open to more than one meaning, making it confusing."
  },
  {
    strand: "Etymology: Latin Roots (mort)",
    question: "The Latin root 'mort' means 'death'. Which word describes a living creature that will not live forever?",
    options: ["Mortal", "Mortuary", "Mortified", "Immortality"],
    correctIndex: 0,
    hint: "Think about the opposite of 'immortal'.",
    explanation: "'Mortal' comes from 'mort' (death) and means bound to die one day."
  },
  {
    strand: "Etymology: Latin Roots (aqua)",
    question: "The Latin root 'aqua' means 'water'. Which word refers to an underground layer of rock that holds freshwater?",
    options: ["Aquifer", "Aquarium", "Aqueduct", "Aquaculture"],
    correctIndex: 0,
    hint: "'Aqua' (water) combined with 'fer' (to bear or carry).",
    explanation: "An 'aquifer' is an underground layer of rock or gravel that stores water."
  },
  {
    strand: "Etymology: Latin Roots (aqua)",
    question: "The Latin root 'aqua' means 'water'. A long bridge built by the Romans to carry fresh water into towns is an:",
    options: ["Aqueduct", "Aquarium", "Aquifer", "Aquaculture"],
    correctIndex: 0,
    hint: "'Aqua' (water) + 'duct' (to lead).",
    explanation: "'Aqua' (water) + 'duct' (lead) = aqueduct (a bridge built to carry water)."
  },
  {
    strand: "Etymology: Latin Roots (cent)",
    question: "The Latin root 'cent' means 'one hundred'. How many years are in a 'century'?",
    options: ["100 years", "10 years", "50 years", "1,000 years"],
    correctIndex: 0,
    hint: "Think of how many cents are in one dollar.",
    explanation: "'Century' comes from 'cent' (one hundred) and means 100 years."
  },
  {
    strand: "Etymology: Latin Roots (fort)",
    question: "The Latin root 'fort' means 'strength'. To strengthen a wooden fort before an attack is to:",
    options: ["Fortify", "Comfort", "Effort", "Fortress"],
    correctIndex: 0,
    hint: "The suffix '-ify' means 'to make'.",
    explanation: "'Fortify' means to make stronger or reinforce against danger."
  },
  {
    strand: "Etymology: Latin Roots (ject)",
    question: "The Latin root 'ject' means 'throw'. To turn down, dismiss, or throw out an idea is to:",
    options: ["Reject", "Project", "Inject", "Subject"],
    correctIndex: 0,
    hint: "'Re-' (back) + 'ject' (throw).",
    explanation: "'Re-' (back) + 'ject' (throw) = reject (to throw back or refuse)."
  },
  {
    strand: "Etymology: Latin Roots (ject)",
    question: "The Latin root 'ject' means 'throw'. When a doctor gives medicine through a needle into the body, they give an:",
    options: ["Injection", "Rejection", "Projection", "Objection"],
    correctIndex: 0,
    hint: "'In-' (into) + 'ject' (throw).",
    explanation: "'In-' (into) + 'ject' (throw) = injection (pushing medicine into the body)."
  },
  {
    strand: "Etymology: Latin Roots (vis)",
    question: "The Latin root 'vis' means 'to see'. Something that can be seen clearly with your eyes is:",
    options: ["Visible", "Visual", "Vision", "Advise"],
    correctIndex: 0,
    hint: "'Vis' (see) + suffix '-ible' (able to be).",
    explanation: "'Vis' (see) + '-ible' (able to be) = visible (able to be seen)."
  },

  // ==========================================
  // GREEK ROOTS (FROM CURRICULUM LIST)
  // ==========================================
  {
    strand: "Etymology: Greek Roots (chron)",
    question: "The Greek root 'chron' means 'time'. If you put events into 'chronological' order, how are you arranging them?",
    options: [
      "In the order of when they happened",
      "From most important to least important",
      "By sorting them into different topics",
      "In alphabetical order from A to Z"
    ],
    correctIndex: 0,
    hint: "'Chron' means time.",
    explanation: "'Chronological' order means putting events in time order from first to last."
  },
  {
    strand: "Etymology: Greek Roots (chron)",
    question: "The Greek root 'chron' means 'time'. To make two timers or watches match up to show the exact same second is to:",
    options: ["Synchronize", "Chronicle", "Chronic", "Chronology"],
    correctIndex: 0,
    hint: "'Syn-' means 'together' + 'chron' (time).",
    explanation: "'Syn-' (together) + 'chron' (time) = synchronize (to make things happen at the same time)."
  },
  {
    strand: "Etymology: Greek Roots (auto)",
    question: "The Greek root 'auto' means 'self'. A famous person's signature written with their own hand is an:",
    options: ["Autograph", "Autonomy", "Automobile", "Automatic"],
    correctIndex: 0,
    hint: "'Auto' (self) + 'graph' (written).",
    explanation: "'Auto' (self) + 'graph' (writing) = autograph (signed by the person themselves)."
  },
  {
    strand: "Etymology: Greek Roots (auto)",
    question: "The Greek root 'auto' means 'self'. A machine that works completely on its own without needing a person to run it is:",
    options: ["Automatic", "Autonomy", "Author", "Autograph"],
    correctIndex: 0,
    hint: "Think about an automatic door opening by itself.",
    explanation: "'Automatic' describes something that operates by itself."
  },
  {
    strand: "Etymology: Greek Roots (bio / graph)",
    question: "Using the Greek roots 'bio' (life) and 'graph' (writing), what is a 'biography'?",
    options: [
      "A written book about a person's life",
      "A book a person writes about their own life",
      "A science book about plant cells",
      "A drawing of a living animal"
    ],
    correctIndex: 0,
    hint: "'Bio' = life, 'graph' = writing.",
    explanation: "'Bio' (life) + 'graph' (writing) = a book written about a person's life."
  },
  {
    strand: "Etymology: Greek Roots (bio / logy)",
    question: "The Greek root 'bio' means 'life' and 'logy' means 'the study of'. What is 'biology'?",
    options: [
      "The science of living plants and animals",
      "The study of rocks, soil, and volcanoes",
      "The study of stars, planets, and space",
      "The study of maps and land shapes"
    ],
    correctIndex: 0,
    hint: "'Bio' (life) + 'logy' (study of).",
    explanation: "'Biology' is the study of living organisms."
  },
  {
    strand: "Etymology: Greek Roots (dyna)",
    question: "The Greek root 'dyna' means 'power'. An explosive invented to blast rock using sudden power is:",
    options: ["Dynamite", "Dynamo", "Dynasty", "Dynamic"],
    correctIndex: 0,
    hint: "Named directly from the Greek root for power.",
    explanation: "'Dynamite' comes from 'dyna' (power)."
  },
  {
    strand: "Etymology: Greek Roots (hydr)",
    question: "The Greek root 'hydr' means 'water'. What happens to your body during 'dehydration' on a hot day?",
    options: [
      "Your body loses too much water",
      "Your body drinks too much cold water",
      "Your muscles cool down too fast",
      "Your skin gets sunburned"
    ],
    correctIndex: 0,
    hint: "The prefix 'de-' means 'loss of' or 'removal'.",
    explanation: "'De-' (loss of) + 'hydr' (water) = dehydration (losing too much water)."
  },
  {
    strand: "Etymology: Greek Roots (meter)",
    question: "The Greek root 'meter' means 'measure'. What is the straight line measured across a circle through its center called?",
    options: ["Diameter", "Perimeter", "Kilometer", "Thermometer"],
    correctIndex: 0,
    hint: "'Dia-' means 'across' + 'meter' (measure).",
    explanation: "'Dia-' (across) + 'meter' (measure) = diameter."
  },
  {
    strand: "Etymology: Greek Roots (morph)",
    question: "The Greek root 'morph' means 'shape' or 'form'. What word describes the total change in body shape from a caterpillar into a butterfly?",
    options: ["Metamorphosis", "Morphology", "Amorphous", "Polymorphism"],
    correctIndex: 0,
    hint: "'Meta-' means 'change' + 'morph' means 'shape'.",
    explanation: "'Metamorphosis' means a complete transformation of body shape."
  },
  {
    strand: "Etymology: Greek Roots (morph)",
    question: "The Greek root 'morph' means 'shape'. If a cloud or a puddle is described as 'amorphous', it means:",
    options: [
      "It has no clear or definite shape",
      "It has a neat, round shape",
      "It is split into three equal parts",
      "It stays the exact same shape forever"
    ],
    correctIndex: 0,
    hint: "The prefix 'a-' means 'without'.",
    explanation: "'A-' (without) + 'morph' (shape) = having no fixed shape."
  },
  {
    strand: "Etymology: Greek Roots (phobia)",
    question: "The Greek root 'phobia' means 'fear'. What does a person with 'claustrophobia' fear?",
    options: [
      "Small, enclosed spaces",
      "Creepy-crawly spiders",
      "Deep water in the ocean",
      "Tall buildings and heights"
    ],
    correctIndex: 0,
    hint: "Think about being trapped in a tiny cupboard or elevator.",
    explanation: "'Claustrophobia' is the fear of tight, closed spaces."
  },
  {
    strand: "Etymology: Greek Roots (phon)",
    question: "The Greek root 'phon' means 'sound'. A piece of equipment that picks up quiet sounds and makes them louder is a:",
    options: ["Microphone", "Headphone", "Symphony", "Telephone"],
    correctIndex: 0,
    hint: "'Micro-' (small) + 'phon' (sound).",
    explanation: "'Micro-' (small) + 'phon' (sound) = microphone."
  },
  {
    strand: "Etymology: Greek Roots (photo)",
    question: "The Greek root 'photo' means 'light'. How do green plants use 'photosynthesis'?",
    options: [
      "They use sunlight to make food and grow",
      "They store rainwater inside their roots",
      "They glow faintly in the dark",
      "They shed their leaves before winter"
    ],
    correctIndex: 0,
    hint: "'Photo' means light.",
    explanation: "'Photo' (light) + 'synthesis' (putting together) = plants making food from light."
  },
  {
    strand: "Etymology: Greek Roots (scope)",
    question: "The Greek root 'scope' means 'to look' or 'view'. Which scientific tool helps you see tiny cells that are invisible to your eyes?",
    options: ["Microscope", "Telescope", "Periscope", "Stethoscope"],
    correctIndex: 0,
    hint: "'Micro-' (tiny) + 'scope' (tool for viewing).",
    explanation: "'Micro-' (small) + 'scope' (viewing) = microscope."
  },
  {
    strand: "Etymology: Greek Roots (tele)",
    question: "The Greek root 'tele' means 'far off'. Which tool lets you view stars and planets located far off in space?",
    options: ["Telescope", "Periscope", "Microscope", "Stethoscope"],
    correctIndex: 0,
    hint: "'Tele' (far away) + 'scope' (viewing).",
    explanation: "'Tele' (far off) + 'scope' (viewing) = telescope."
  },
  {
    strand: "Etymology: Greek Roots (therm)",
    question: "The Greek root 'therm' means 'heat'. An insulated bottle that keeps soup or hot chocolate warm is a:",
    options: ["Thermos", "Thermostat", "Thermometer", "Thermal"],
    correctIndex: 0,
    hint: "Named directly from the root meaning heat.",
    explanation: "A 'thermos' flask traps thermal energy (heat) inside."
  },

  // ==========================================
  // THE CODE: MORPHOLOGY & SUFFIX RULES
  // ==========================================
  {
    strand: "Morphology: Suffix Rules (Soft C Sound)",
    question: "When we add '-able' to 'notice', why do we keep the 'e' in 'noticeable'?",
    options: [
      "To keep the soft /s/ sound of the letter 'c'",
      "Because '-able' only attaches to long words",
      "To make the word easier to pronounce fast",
      "Because 'notice' has two vowels at the end"
    ],
    correctIndex: 0,
    hint: "Think about how 'c' sounds before 'a' (like in 'cat') versus before 'e' (like in 'cent').",
    explanation: "Without the 'e', 'c' before 'a' would make a hard /k/ sound ('notic-able'). We keep the 'e' so 'c' keeps its soft /s/ sound."
  },
  {
    strand: "Morphology: Suffix Rules (Soft G Sound)",
    question: "Why does the word 'courageous' keep the letter 'e' when adding '-ous' to 'courage'?",
    options: [
      "To keep the soft /j/ sound of the letter 'g'",
      "Because 'courage' comes from French",
      "Because '-ous' cannot be added to consonants",
      "To show that the word is an adjective"
    ],
    correctIndex: 0,
    hint: "Think about how 'g' sounds before 'o' (like in 'go') versus before 'e' (like in 'gem').",
    explanation: "The silent 'e' is kept so the 'g' keeps its soft /j/ sound instead of sounding like 'g' in 'goat'."
  },
  {
    strand: "Morphology: Suffix Rules (Drop Silent -e)",
    question: "Which word correctly follows the rule: 'Drop the final silent -e before adding a suffix starting with a vowel'?",
    options: ["Navigating", "Navigateing", "Navigaiting", "Naviggating"],
    correctIndex: 0,
    hint: "The base word is 'navigate' and the suffix is '-ing'.",
    explanation: "Drop the silent 'e' from 'navigate' before adding '-ing': 'navigating'."
  },
  {
    strand: "Morphology: Suffix Rules (Change y to i)",
    question: "Follow the rule: 'When a word ends in a consonant + y, change y to i before adding a suffix'. Which spelling is correct?",
    options: ["Reliable", "Relyable", "Rellyable", "Relieable"],
    correctIndex: 0,
    hint: "The base word is 'rely' + suffix '-able'.",
    explanation: "In 'rely', 'y' comes after the consonant 'l'. Change 'y' to 'i' and add '-able' = 'reliable'."
  },
  {
    strand: "Morphology: Suffix Rules (Keep y after a Vowel)",
    question: "When adding '-ed' to 'annoy', why do we NOT change the 'y' to 'i' in 'annoyed'?",
    options: [
      "Because the letter before 'y' is a vowel ('o')",
      "Because 'annoy' already has two syllables",
      "Because '-ed' begins with an 'e'",
      "Because 'annoy' is an action verb"
    ],
    correctIndex: 0,
    hint: "Look at the vowel right before the 'y' in 'annoy'.",
    explanation: "When 'y' follows a vowel (like 'oy' or 'ay'), keep the 'y': 'annoyed', 'played', 'enjoyed'."
  },
  {
    strand: "Morphology: Suffix Rules (Doubling the Final Letter)",
    question: "In words with two syllables, we only double the final consonant if the emphasis (stress) is on the second syllable. Which spelling is correct?",
    options: ["Referring", "Refering", "Reffering", "Referrr-ing"],
    correctIndex: 0,
    hint: "Say 're-FER'. The beat falls on the second syllable.",
    explanation: "In 'refer', the emphasis is on the end ('re-FER'), so we double the 'r' before adding '-ing': 'referring'."
  },
  {
    strand: "Orthography: -able vs. -ible",
    question: "Which sentence uses the correct spelling of the missing word?",
    options: [
      "Running near the swimming pool is not permissible.",
      "Running near the swimming pool is not permissable.",
      "Running near the swimming pool is not permiscible.",
      "Running near the swimming pool is not permiseable."
    ],
    correctIndex: 0,
    hint: "Words linked to an 's' or 'ss' sound often take the '-ible' ending.",
    explanation: "The word comes from 'permission', so it takes the '-ible' ending: 'permissible'."
  },

  // ==========================================
  // THE CODE: CHAMELEON PREFIXES
  // ==========================================
  {
    strand: "Morphology: Chameleon Prefixes (in- to im-)",
    question: "The prefix 'in-' (meaning 'not') changes to 'im-' when the root word starts with 'p', 'b', or 'm'. Which word shows this rule?",
    options: ["Impossible", "Illogical", "Irresponsible", "Incomplete"],
    correctIndex: 0,
    hint: "Look for the root word that starts with the letter 'p'.",
    explanation: "'In-' changes to 'im-' before 'p': 'im-' + 'possible' = 'impossible' because it is much easier to say with your lips."
  },
  {
    strand: "Morphology: Chameleon Prefixes (con- to col-)",
    question: "The prefix 'con-' (meaning 'together') changes to 'col-' when the root word starts with 'l'. Which word shows this rule?",
    options: ["Collaborate", "Concur", "Combine", "Correlate"],
    correctIndex: 0,
    hint: "The root 'labor' means 'work'.",
    explanation: "'Con-' changes to 'col-' before 'l': 'col-' + 'labor' + '-ate' = 'collaborate' (to work together)."
  },

  // ==========================================
  // ORTHOGRAPHY & COMMONLY CONFUSED WORDS
  // ==========================================
  {
    strand: "Orthography: NZ English (practice vs practise)",
    question: "In New Zealand spelling, which sentence correctly uses 'practice' as a noun (a thing)?",
    options: [
      "She went to netball practice after school on Thursday.",
      "She went to netball practise after school on Thursday.",
      "He practises his guitar every night after dinner.",
      "You need to practise taking free kicks."
    ],
    correctIndex: 0,
    hint: "Remember: 'practice' with a 'c' is the thing (noun); 'practise' with an 's' is the action (doing verb).",
    explanation: "In NZ English, 'practice' (noun with a 'c') is the session or event: 'netball practice'."
  },
  {
    strand: "Orthography: Confused Words (affect vs effect)",
    question: "Which sentence correctly uses 'affect' as a doing word (verb)?",
    options: [
      "Skipping breakfast can negatively affect your concentration in class.",
      "Skipping breakfast can negatively effect your concentration in class.",
      "The movie had some amazing special affects.",
      "The new classroom rule had an immediate affect on noise."
    ],
    correctIndex: 0,
    hint: "'Affect' is an Action (verb); 'Effect' is the End result (noun).",
    explanation: "'Affect' is the verb (to change or influence): 'can affect your concentration'."
  },
  {
    strand: "Orthography: Commonly Misspelled Words",
    question: "Which sentence spells both tricky words correctly?",
    options: [
      "The camp has enough tents to accommodate everyone separately.",
      "The camp has enough tents to accomodate everyone separately.",
      "The camp has enough tents to accommodate everyone seperately.",
      "The camp has enough tents to accomodate everyone seperately."
    ],
    correctIndex: 0,
    hint: "'Accommodate' has double-c and double-m; 'separate' has 'a rat' in the middle (sep-a-rate).",
    explanation: "'Accommodate' has two 'c's and two 'm's. 'Separate' has an 'a' in the middle: 'sep-a-rate'."
  },
  {
    strand: "Orthography: Academic Vocabulary",
    question: "Which option shows the correct spelling of the word meaning 'working hard, carefully, and doing your duty'?",
    options: ["Conscientious", "Consciencious", "Consentious", "Conscensious"],
    correctIndex: 0,
    hint: "It comes from the word 'conscience'.",
    explanation: "'Conscientious' is spelled c-o-n-s-c-i-e-n-t-i-o-u-s."
  },
  {
    strand: "Orthography: Homophones (principal vs principle)",
    question: "Choose the correct words to complete the sentence:\n'Our school _______ explained the _______ of showing respect to others.'",
    options: [
      "principal / principle",
      "principle / principal",
      "principal / principal",
      "principle / principle"
    ],
    correctIndex: 0,
    hint: "The head of the school is your 'pal' (principal); a core rule or value is a 'principle'.",
    explanation: "'Principal' is the school leader. 'Principle' is an important rule or moral value."
  }
];

// ==========================================
// PUBLIC EXPORT FUNCTION
// ==========================================

/**
 * Returns the complete Phase 3 Spelling & Morphology question set.
 * Returns all 50 items in a randomized order each time called.
 * @param {number} year - 7 or 8
 * @returns {Array} Array of randomized question objects
 */
function getSpellingQuestions(year) {
  const shuffledBank = shuffleSpellingArray(SPELLING_QUESTION_BANK);

  return shuffledBank.map((item, idx) => {
    return {
      id: `spelling_${idx + 1}`,
      year: year,
      subject: "spelling",
      strand: item.strand,
      passage: null,
      question: item.question,
      options: item.options,
      correctIndex: item.correctIndex,
      hint: item.hint,
      explanation: item.explanation
    };
  });
}