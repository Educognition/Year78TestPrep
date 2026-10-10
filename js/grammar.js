/**
 * NZ Phase 3 Punctuation & Grammar Bank
 * Combined Year 7 & 8 Curriculum Set (30 Questions)
 * Leveled with accessible vocabulary for intermediate learners.
 * Automatically shuffles into randomized order on each launch.
 */

// Utility: Fisher-Yates array shuffler
function shuffleGrammarArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const GRAMMAR_QUESTION_BANK = [
  // ==========================================
  // PUNCTUATION: APOSTROPHES
  // ==========================================
  {
    strand: "Punctuation: Plural Ownership",
    question: "Which sentence correctly places the apostrophe to show that the changing room belongs to all of the players?",
    options: [
      "The players' changing room was locked after the rugby game.",
      "The player's changing room was locked after the rugby game.",
      "The players changing room was locked after the rugby game.",
      "The players's changing room was locked after the rugby game."
    ],
    correctIndex: 0,
    hint: "The word 'players' means more than one player. For a plural word that already ends in 's', where do we put the apostrophe?",
    explanation: "Because 'players' is plural and ends in 's', add only the apostrophe after the 's': players'."
  },
  {
    strand: "Punctuation: Singular Ownership",
    question: "Which sentence correctly shows that the whistle belongs to one teacher?",
    options: [
      "The teacher's whistle echoed across the entire court.",
      "The teachers whistle echoed across the entire court.",
      "The teachers' whistle echoed across the entire court.",
      "The teachers's whistle echoed across the entire court."
    ],
    correctIndex: 0,
    hint: "There is only one teacher. Add an apostrophe followed by 's'.",
    explanation: "For one person (singular), add 's to show ownership: teacher's."
  },
  {
    strand: "Punctuation: Its vs It's",
    question: "Which sentence uses 'its' or 'it's' correctly?",
    options: [
      "The tūī puffed out its white throat feathers before singing.",
      "The tūī puffed out it's white throat feathers before singing.",
      "Its going to be a hot day at athletics tomorrow.",
      "The dog chased it's own tail in the yard."
    ],
    correctIndex: 0,
    hint: "'It's' with an apostrophe always means 'it is'. If 'it is' does not make sense, use 'its'.",
    explanation: "'Its' means belonging to it. 'It's' means 'it is'. You would not say 'puffed out it is white throat feathers'."
  },
  {
    strand: "Punctuation: Irregular Plural Ownership",
    question: "Which sentence correctly shows ownership for a group of children?",
    options: [
      "The children's backpacks were stacked neatly outside the cabin.",
      "The childrens' backpacks were stacked neatly outside the cabin.",
      "The childrens backpacks were stacked neatly outside the cabin.",
      "The childrens's backpacks were stacked neatly outside the cabin."
    ],
    correctIndex: 0,
    hint: "'Children' already means more than one child and does not end in 's'. Treat it like a singular word when adding an apostrophe.",
    explanation: "For words that mean more than one but do not end in 's' (like children, men, mice), add 's: children's."
  },
  {
    strand: "Punctuation: Shortened Words vs Ownership",
    question: "Identify the sentence that has NO apostrophe mistakes:",
    options: [
      "They're going to collect their gear once the bell rings.",
      "Their going to collect they're gear once the bell rings.",
      "There going to collect their gear once the bell rings.",
      "They're going to collect there gear once the bell rings."
    ],
    correctIndex: 0,
    hint: "'They're' = they are; 'their' = belonging to them; 'there' = a place.",
    explanation: "'They're' is short for 'they are', and 'their' shows ownership of the gear."
  },

  // ==========================================
  // PUNCTUATION: TALKING MARKS & SPEECH
  // ==========================================
  {
    strand: "Punctuation: Speech Marks & Commas",
    question: "Which sentence is punctuated correctly for direct speech?",
    options: [
      "\"Don't forget your water bottles,\" reminded Mr Walker.",
      "\"Don't forget your water bottles\", reminded Mr Walker.",
      "\"Don't forget your water bottles\" reminded Mr Walker.",
      "\"Don't forget your water bottles.\" reminded Mr Walker."
    ],
    correctIndex: 0,
    hint: "The comma stays inside the closing speech marks before the speaker tag.",
    explanation: "The comma must go inside the speech marks before telling who spoke: \"Don't forget your water bottles,\" reminded..."
  },
  {
    strand: "Punctuation: Split Speech",
    question: "Which sentence correctly punctuates spoken words that are split in half by the speaker?",
    options: [
      "\"If the rain stops,\" whispered Aroha, \"we can head down to the beach.\"",
      "\"If the rain stops\" whispered Aroha, \"we can head down to the beach.\"",
      "\"If the rain stops,\" whispered Aroha. \"We can head down to the beach.\"",
      "\"If the rain stops,\" whispered Aroha, \"We can head down to the beach.\""
    ],
    correctIndex: 0,
    hint: "Because the speaker is saying one continuous sentence, use a comma after the speaker's name and start the second part with a lower-case letter.",
    explanation: "The sentence keeps going after the pause, so put a comma after 'Aroha' and keep 'we' in lower case."
  },
  {
    strand: "Punctuation: Questions in Speech",
    question: "Which sentence correctly punctuates a spoken question?",
    options: [
      "\"Where did you leave the hockey sticks?\" asked Liam.",
      "\"Where did you leave the hockey sticks\"? asked Liam.",
      "\"Where did you leave the hockey sticks?,\" asked Liam.",
      "\"Where did you leave the hockey sticks?\" Asked Liam."
    ],
    correctIndex: 0,
    hint: "The question mark stays inside the speech marks.",
    explanation: "The question mark takes the place of a comma inside the speech marks."
  },

  // ==========================================
  // PUNCTUATION: COMMAS, COLONS & SEMICOLONS
  // ==========================================
  {
    strand: "Punctuation: Opening Sentence Commas",
    question: "Where should a comma be added in this sentence?\n'Before the bell rang for morning tea the class packed away their maths books.'",
    options: [
      "After 'morning tea'",
      "After 'rang'",
      "After 'class'",
      "After 'packed'"
    ],
    correctIndex: 0,
    hint: "'Before the bell rang for morning tea' is an opening phrase that tells when the action happened.",
    explanation: "Use a comma to separate the opening phrase from the main sentence: 'Before the bell rang for morning tea, the class packed away...'"
  },
  {
    strand: "Punctuation: Extra Information Between Commas",
    question: "Which sentence correctly uses commas around extra information about the person?",
    options: [
      "Tama, the captain of our touch rugby team, scored the winning try.",
      "Tama the captain of our touch rugby team, scored the winning try.",
      "Tama, the captain of our touch rugby team scored the winning try.",
      "Tama the captain, of our touch rugby team scored the winning try."
    ],
    correctIndex: 0,
    hint: "When extra information is dropped into the middle of a sentence, put commas on both sides of it (like a pair of brackets).",
    explanation: "'The captain of our touch rugby team' is extra detail, so it needs a comma before it and after it."
  },
  {
    strand: "Punctuation: Commas in Lists",
    question: "Which sentence punctuates the list of items correctly?",
    options: [
      "For the science project, we need cardboard, PVA glue, masking tape, and scissors.",
      "For the science project, we need cardboard PVA glue masking tape, and scissors.",
      "For the science project we need, cardboard, PVA glue, masking tape and scissors.",
      "For the science project, we need, cardboard, PVA glue, masking tape, and scissors."
    ],
    correctIndex: 0,
    hint: "Use commas to separate each item in the list.",
    explanation: "Commas cleanly separate items in a list of three or more things."
  },
  {
    strand: "Punctuation: Semicolons Between Sentences",
    question: "Which sentence uses a semicolon correctly to connect two closely linked sentences?",
    options: [
      "The wind howled through the camp cabins; nobody could fall asleep.",
      "The wind howled; through the camp cabins nobody could fall asleep.",
      "The wind howled through the camp cabins; because nobody could fall asleep.",
      "The wind howled through the camp cabins; and nobody could fall asleep."
    ],
    correctIndex: 0,
    hint: "A semicolon can join two complete sentences without needing a joining word like 'and' or 'because'.",
    explanation: "'The wind howled through the camp cabins' and 'nobody could fall asleep' are both complete sentences on their own. A semicolon joins them neatly without extra words."
  },
  {
    strand: "Punctuation: Semicolons with Linking Words",
    question: "Which sentence correctly uses punctuation with the linking word 'however'?",
    options: [
      "We trained hard all week; however, the final match was postponed.",
      "We trained hard all week, however; the final match was postponed.",
      "We trained hard all week; however the final match was postponed.",
      "We trained hard all week, however, the final match was postponed."
    ],
    correctIndex: 0,
    hint: "Put a semicolon BEFORE the word 'however' and a comma AFTER it.",
    explanation: "When linking two full sentences with 'however', put a semicolon before 'however' and a comma after it."
  },
  {
    strand: "Punctuation: Colons Before Lists",
    question: "Which sentence uses a colon correctly to introduce a list?",
    options: [
      "Make sure you pack the following items: a raincoat, sturdy boots, and a warm hat.",
      "Make sure you pack: a raincoat, sturdy boots, and a warm hat.",
      "The items you must bring are: a raincoat, sturdy boots, and a warm hat.",
      "You need: a raincoat, sturdy boots, and a warm hat for camp."
    ],
    correctIndex: 0,
    hint: "The words before the colon must make a full, complete sentence on their own.",
    explanation: "'Make sure you pack the following items' is a full, complete sentence stem. Put a colon after it before listing the items."
  },

  // ==========================================
  // CLAUSE STRUCTURE & SENTENCE TYPES
  // ==========================================
  {
    strand: "Sentence Craft: Main Clauses",
    question: "Which part of this sentence can stand completely on its own as a full sentence?\n'Although it was freezing outside, the swimmers jumped straight into the pool.'",
    options: [
      "the swimmers jumped straight into the pool",
      "Although it was freezing outside",
      "it was freezing outside",
      "jumped straight into the pool"
    ],
    correctIndex: 0,
    hint: "Look for the part of the sentence that makes complete sense by itself without leaving you hanging.",
    explanation: "'The swimmers jumped straight into the pool' makes complete sense on its own as a full sentence."
  },
  {
    strand: "Sentence Craft: Incomplete Clauses",
    question: "Which group of words cannot stand alone as a full sentence?",
    options: [
      "until the heavy rain stopped",
      "we stayed under the large shelter",
      "everyone packed their bags quickly",
      "the bus arrived on time"
    ],
    correctIndex: 0,
    hint: "It starts with the word 'until' and leaves you waiting for the rest of the thought.",
    explanation: "'Until the heavy rain stopped' leaves the thought unfinished, so it cannot stand alone as a sentence."
  },
  {
    strand: "Sentence Craft: Simple Sentences",
    question: "Which of the following is a simple sentence (has only one main action/clause)?",
    options: [
      "The energetic puppy chased the yellow tennis ball across the lawn.",
      "The puppy chased the ball, and it barked excitedly.",
      "Because the puppy was energetic, it ran across the lawn.",
      "The puppy chased the ball while the cat watched quietly."
    ],
    correctIndex: 0,
    hint: "A simple sentence has only one main subject and one main action, even if it has extra descriptive words.",
    explanation: "'The energetic puppy chased the yellow tennis ball across the lawn' has one subject ('puppy') and one action ('chased')."
  },
  {
    strand: "Sentence Craft: Compound Sentences",
    question: "Which of the following is a compound sentence (two full sentences joined by a word like 'and', 'but', or 'so')?",
    options: [
      "Rawiri wanted to practice his speech, but the hall was too noisy.",
      "Although Rawiri wanted to practice, the hall was too noisy.",
      "Rawiri practiced his speech in the noisy hall during lunchtime.",
      "After school finished, Rawiri walked quietly over to the hall."
    ],
    correctIndex: 0,
    hint: "Look for two complete sentences joined together with the word 'but'.",
    explanation: "'Rawiri wanted to practice his speech' and 'the hall was too noisy' are two full sentences joined by 'but'."
  },
  {
    strand: "Sentence Craft: Complex Sentences",
    question: "Which of the following is a complex sentence (a main sentence with an extra clause starting with words like 'since', 'because', or 'when')?",
    options: [
      "Since we finished our inquiry project early, we helped clean the classroom.",
      "We finished our project early, so we helped clean the classroom.",
      "We finished our project early and cleaned the entire classroom.",
      "Our inquiry project was finished right before lunchtime."
    ],
    correctIndex: 0,
    hint: "Look for the sentence that starts with the joining word 'Since'.",
    explanation: "'Since we finished our inquiry project early' is an incomplete thought attached to a full main sentence, making it a complex sentence."
  },
  {
    strand: "Sentence Craft: Fixing Run-on Sentences",
    question: "How can this run-on sentence be fixed so it does not just join two sentences with a comma?\n'The bell rang for lunch, everyone rushed out to the field.'",
    options: [
      "The bell rang for lunch, and everyone rushed out to the field.",
      "The bell rang for lunch everyone rushed out to the field.",
      "The bell rang, for lunch everyone rushed out to the field.",
      "The bell rang for lunch, but everyone rushed out to the field."
    ],
    correctIndex: 0,
    hint: "You cannot join two complete sentences with only a comma. You need a comma PLUS a joining word like 'and'.",
    explanation: "Two complete sentences cannot be glued together by just a comma. Adding the joining word 'and' fixes the sentence."
  },

  // ==========================================
  // GRAMMAR: SUBJECT-VERB AGREEMENT
  // ==========================================
  {
    strand: "Grammar: Matching Subjects and Verbs",
    question: "Choose the correct word to fill the gap:\n'Neither of the two netball courts _______ ready for the tournament.'",
    options: ["is", "are", "were", "have been"],
    correctIndex: 0,
    hint: "'Neither' means 'not one' (it refers to a single court at a time).",
    explanation: "'Neither' is treated as singular, so it uses 'is': 'Neither of the two netball courts is ready.'"
  },
  {
    strand: "Grammar: Group Nouns and Verbs",
    question: "Which word correctly completes the sentence?\n'The class of Year 8 students _______ listening quietly to the guest speaker.'",
    options: ["was", "were", "are", "have been"],
    correctIndex: 0,
    hint: "The main subject is the single group: 'class'.",
    explanation: "'Class' is one single group, so it takes the singular verb 'was'."
  },
  {
    strand: "Grammar: Subjects with Extra Details",
    question: "Which word correctly fills the gap in this sentence?\n'The basket of fresh apples and oranges _______ placed on the staffroom table.'",
    options: ["was", "were", "are", "have been"],
    correctIndex: 0,
    hint: "Do not let 'apples and oranges' trick you. What is the one thing being placed on the table?",
    explanation: "The subject is 'basket' (one thing). The words 'of fresh apples and oranges' just describe what is inside. Use 'was placed'."
  },
  {
    strand: "Grammar: Two Subjects Joined by 'And'",
    question: "Which sentence matches its subject and verb correctly?",
    options: [
      "Both the captain and the coach are confident about the game.",
      "Both the captain and the coach is confident about the game.",
      "The captain with the coach are confident about the game.",
      "Either the captain or the players is responsible for the gear."
    ],
    correctIndex: 0,
    hint: "Two people joined by 'and' count as more than one person (plural).",
    explanation: "Two people joined by 'and' ('captain and coach') make a plural group, so use 'are'."
  },

  // ==========================================
  // GRAMMAR: VERB TENSE CONSISTENCY
  // ==========================================
  {
    strand: "Grammar: Consistent Verb Tense",
    question: "Identify the sentence that stays in the past tense the whole way through:",
    options: [
      "She opened her notebook, picked up her pencil, and began to write.",
      "She opened her notebook, picks up her pencil, and began to write.",
      "She opens her notebook, picked up her pencil, and begins to write.",
      "She opened her notebook, picked up her pencil, and begins to write."
    ],
    correctIndex: 0,
    hint: "All three actions happened in the past. Look for verbs that all end in past tense forms.",
    explanation: "'Opened', 'picked', and 'began' are all past tense words, keeping the sentence consistent."
  },
  {
    strand: "Grammar: Fixing Mixed Tenses",
    question: "Which change fixes the mixed tenses in this sentence?\n'We arrived at the campsite and unpack our tents immediately.'",
    options: [
      "Change 'unpack' to 'unpacked'",
      "Change 'arrived' to 'arrive'",
      "Change 'unpack' to 'will unpack'",
      "Change 'arrived' to 'had been arriving'"
    ],
    correctIndex: 0,
    hint: "The first action happened in the past ('arrived'). The second action should match it.",
    explanation: "'Arrived' is in the past, so 'unpack' must become 'unpacked' so both actions match."
  },

  // ==========================================
  // GRAMMAR: ACTIVE VS PASSIVE WRITING
  // ==========================================
  {
    strand: "Grammar: Identifying Passive Sentences",
    question: "Which sentence is written in the passive voice (the subject has the action done to it)?",
    options: [
      "The trophy was presented to our school by the Mayor.",
      "The Mayor presented the trophy to our school.",
      "Our school celebrated winning the championship trophy.",
      "Students cheered loudly as the Mayor walked onto the stage."
    ],
    correctIndex: 0,
    hint: "Look for the sentence where the object at the start has something done to it ('was presented by').",
    explanation: "'The trophy was presented... by the Mayor' is passive because the trophy is receiving the action rather than doing it."
  },
  {
    strand: "Grammar: Writing in Active Voice",
    question: "Which sentence rewrites this passive sentence into clear, direct active voice?\n'The winning goal was kicked by Kahu in the final minute.'",
    options: [
      "Kahu kicked the winning goal in the final minute.",
      "In the final minute, the winning goal was kicked by Kahu.",
      "The ball was kicked by Kahu to score the winning goal.",
      "A goal had been kicked by Kahu before the final whistle."
    ],
    correctIndex: 0,
    hint: "Start the sentence with the person who actually did the action (Kahu).",
    explanation: "In active voice, the person doing the action comes first: 'Kahu kicked the winning goal...'"
  },

  // ==========================================
  // GRAMMAR: PRONOUNS & CLEAR SENTENCES
  // ==========================================
  {
    strand: "Grammar: Choosing the Right Pronoun",
    question: "Which word correctly completes this sentence?\n'The teacher handed the art supplies to Maya and _______.'",
    options: ["me", "I", "myself", "mine"],
    correctIndex: 0,
    hint: "Say the sentence without 'Maya and'. Would you say 'handed the supplies to I' or 'handed the supplies to me'?",
    explanation: "Take away 'Maya and' to test it: 'The teacher handed the supplies to me'. So use 'me'."
  },
  {
    strand: "Grammar: Clear Sentence Meaning",
    question: "Which sentence is written clearly without any confusing word order?",
    options: [
      "Walking along the beach, Mia spotted a pod of dolphins.",
      "Walking along the beach, a pod of dolphins was spotted by Mia.",
      "Mia spotted a pod of dolphins walking along the beach.",
      "A pod of dolphins spotted Mia walking along the beach."
    ],
    correctIndex: 0,
    hint: "Mia is the one walking, so her name needs to come directly after 'Walking along the beach'.",
    explanation: "In 'Walking along the beach, Mia spotted...', it is clear that Mia is doing the walking, not the dolphins."
  }
];

// ==========================================
// PUBLIC EXPORT FUNCTION
// ==========================================

/**
 * Returns the complete Phase 3 Punctuation & Grammar question set.
 * Returns all 30 items in a randomized order each time called.
 * @param {number} year - 7 or 8
 * @returns {Array} Array of randomized question objects
 */
function getGrammarQuestions(year) {
  const shuffledBank = shuffleGrammarArray(GRAMMAR_QUESTION_BANK);

  return shuffledBank.map((item, idx) => {
    return {
      id: `grammar_${idx + 1}`,
      year: year,
      subject: "grammar",
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