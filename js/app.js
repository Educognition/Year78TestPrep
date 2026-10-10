/**
 * NZ Intermediate Practice Hub - Application Controller
 * Handles UI navigation, test runner, scoring, and writing workspace.
 * Features automatic genre-based writing scaffolds:
 * - PEEL for Persuasive
 * - TEAL for Explanatory
 * - Narrative Arc with Dialogue & Figurative Language for Narrative / Entertain
 * Includes 3 distinct prompts per genre and saved draft persistence.
 */

// Global State
const STATE = {
  currentCohort: 7,            // 7 or 8 (Global application cohort)
  readingCohortFilter: 7,      // 7 or 8 (Cohort filter for the reading passage picker)
  activeSubject: null,
  selectedReadingGenre: 'all', // 'all', 'Informational', 'Persuasive', 'Narrative', 'Poetry'
  selectedPassageId: null,     // null or specific passage key
  questions: [],
  currentIndex: 0,
  userAnswers: {},             // { [index]: selectedOptionIndex }
  flagged: new Set(),
  calcInput: '0',
  currentWritingGenre: 'persuasive', // 'persuasive', 'entertain', 'explain'
  currentPromptIndex: 0,             // 0, 1, or 2 (3 choices per genre)
  writingDrafts: {
    7: {
      persuasive: ['', '', ''],
      entertain: ['', '', ''],
      explain: ['', '', '']
    },
    8: {
      persuasive: ['', '', ''],
      entertain: ['', '', ''],
      explain: ['', '', '']
    }
  }
};

// ==========================================
// 18 CURRICULUM WRITING PROMPTS (3 PER GENRE / YEAR)
// ==========================================
const WRITING_DATA = {
  persuasive: {
    7: [
      {
        badge: "Persuasive Argument",
        title: "Banning Single-Use Plastic Bottles in Intermediate Schools",
        desc: "Argue whether New Zealand intermediate schools should ban single-use plastic drink bottles on campus. Use evidence, logical reasoning, and persuasive techniques to convince your school principal.",
        rubric: [
          "Clear thesis statement stating your position in the opening paragraph",
          "Structured body paragraphs with focused topic sentences",
          "Persuasive devices (rhetorical questions, statistics, emotive words)",
          "Counter-argument acknowledged and effectively rebutted",
          "Varied sentence structures (simple, compound, and complex)"
        ]
      },
      {
        badge: "Persuasive Argument",
        title: "Should Daily Homework Be Replaced with Free Reading?",
        desc: "Argue whether traditional daily homework should be scrapped in favour of 30 minutes of self-chosen leisure reading. Consider academic focus, family time, and reading comprehension benefits.",
        rubric: [
          "Clear thesis statement stating your position",
          "Logical arguments backed by real-world student examples",
          "Persuasive vocabulary and connective transition phrases",
          "Rebuttal of the opposing view (why homework might be defended)",
          "Memorable, decisive concluding call to action"
        ]
      },
      {
        badge: "Persuasive Argument",
        title: "Should Intermediate Students Have a Four-Day School Week?",
        desc: "Debate the proposal of extending school days slightly to allow a three-day weekend every week. Explore student wellbeing, academic fatigue, and family schedules.",
        rubric: [
          "Definite point of view established early",
          "Evidence comparing energy levels and student workload",
          "Strategic use of rhetorical appeals (logos, ethos, and pathos)",
          "Balanced response addressing parents' work schedules",
          "Sophisticated punctuation craft (colons, semicolons, and dashes)"
        ]
      }
    ],
    8: [
      {
        badge: "Persuasive Argument",
        title: "Artificial Intelligence in School Assessments",
        desc: "Debate whether Year 8 students should be permitted to use generative AI tools when completing school projects and homework. Construct a rigorous persuasive argument considering fairness, ethics, and independent thinking.",
        rubric: [
          "Sophisticated introduction defining the debate and stance",
          "Logical paragraph progression with evidence and digital ethics examples",
          "Rhetorical balance (appeals to logic, credibility, and impact)",
          "Well-developed counter-argument and strong refutation",
          "High-level academic vocabulary and deliberate punctuation craft"
        ]
      },
      {
        badge: "Persuasive Argument",
        title: "Lowering the Voting Age to 16 in New Zealand",
        desc: "Argue whether 16- and 17-year-olds in Aotearoa should be granted the right to vote in local and national elections. Consider civic responsibility, education, and taxation without representation.",
        rubric: [
          "Compelling opening hook introducing democratic rights",
          "Cohesive paragraphs exploring youth engagement and future policy",
          "Nuanced rebuttal addressing critics who claim teenagers lack maturity",
          "Formal persuasive tone suitable for a parliamentary submission",
          "Emphatic closing synthesis summarizing core democratic principles"
        ]
      },
      {
        badge: "Persuasive Argument",
        title: "Commercial Sponsorship in Youth Sports",
        desc: "Argue whether fast food, sugary drink, or commercial betting brands should be prohibited from sponsoring junior sports teams and school tournaments.",
        rubric: [
          "Firm stance regarding adolescent health versus team funding needs",
          "Detailed supporting examples examining advertising exposure",
          "Persuasive devices used deliberately to provoke ethical reflection",
          "Constructive alternative funding models proposed",
          "Precise vocabulary and advanced sentence structures"
        ]
      }
    ]
  },
  entertain: {
    7: [
      {
        badge: "Narrative (Entertain)",
        title: "The Locked Door at the Edge of Camp",
        desc: "Write an engaging mystery narrative about a student who discovers an old, padlocked door hidden behind the equipment shed at school camp. Focus on building sensory atmosphere and suspense.",
        rubric: [
          "Engaging narrative hook that captures reader interest",
          "Sensory imagery (sight, sound, atmosphere of the camp setting)",
          "Character thoughts, emotions, and dialogue punctuated accurately",
          "Clear rising tension leading toward a climax",
          "Purposeful ending (resolved or cliffhanger)"
        ]
      },
      {
        badge: "Narrative (Entertain)",
        title: "The Clock That Ran Backwards",
        desc: "Craft a story about discovering an antique brass pocket watch in an op-shop that rewinds time by ten minutes every time the dial is pressed.",
        rubric: [
          "Clear orientation establishing the ordinary setting before the magic begins",
          "Creative character reactions when the supernatural event occurs",
          "Tight pacing that builds urgency as the character tests the watch",
          "Dialogue that reveals distinct character personalities",
          "Satisfying resolution that resolves the time consequence"
        ]
      },
      {
        badge: "Narrative (Entertain)",
        title: "Lost in the Mangrove Estuary",
        desc: "Write a suspenseful outdoor story about two friends who paddle their kayaks deep into a coastal estuary as the fog rolls in and the tide begins to turn.",
        rubric: [
          "Rich environmental description featuring New Zealand coastal elements",
          "Rising internal and external obstacles (fog, mudflats, fading light)",
          "Accurately punctuated dialogue under high stress",
          "Deliberate sentence length variation to speed up the climax",
          "Compelling, earned resolution"
        ]
      }
    ],
    8: [
      {
        badge: "Narrative (Entertain)",
        title: "Echoes in the Coastal Sea Cave",
        desc: "Craft an atmospheric story set along a rugged New Zealand coastline as the tide turns faster than expected. Develop complex character tension, environmental hazard, and strong pacing.",
        rubric: [
          "Atmospheric description using figurative language (metaphors, similes)",
          "Effective dialogue revealing character dynamic under pressure",
          "Pacing that speeds up and slows down deliberately to build tension",
          "Complex sentence construction and sophisticated vocabulary",
          "Punctuation used for effect (dashes, semicolons, short sentences)"
        ]
      },
      {
        badge: "Narrative (Entertain)",
        title: "The Ghost Broadcast of 1942",
        desc: "Write an intriguing narrative about an amateur radio enthusiast who tunes into an old valve receiver during a lightning storm and hears an urgent broadcast from eighty years ago asking for help.",
        rubric: [
          "Immersive historical/mechanical imagery and sound descriptions",
          "Engaging dialogue across the radio static",
          "Careful handling of mystery and rising investigative tension",
          "Sophisticated interior monologue revealing character dilemma",
          "Eerie, resonant conclusion"
        ]
      },
      {
        badge: "Narrative (Entertain)",
        title: "The Shadow at Midwinter",
        desc: "Write a moody winter tale exploring an eerie encounter in an alpine hut during a heavy blizzard on the Central Plateau. Focus on psychological tension rather than monsters.",
        rubric: [
          "Vivid sensory contrasts (freezing wind vs glowing woodstove)",
          "Deep character development revealing hidden fears or secrets",
          "Subtle clues foreshadowing the unusual event",
          "Control of narrative pacing through complex sentences and fragments",
          "Poignant, thought-provoking conclusion"
        ]
      }
    ]
  },
  explain: {
    7: [
      {
        badge: "Explanatory / Informative",
        title: "How Earthquakes Shape the Landscapes of New Zealand",
        desc: "Explain why New Zealand experiences frequent earthquakes and how tectonic plate collisions build mountain ranges, alter riverways, and raise new coastal terraces.",
        rubric: [
          "Clear opening statement identifying the geological phenomenon",
          "Sequential explanation using causal conjunctions (because, consequently, as a result)",
          "Accurate scientific vocabulary (plates, faults, tectonic, crust)",
          "Impersonal, informative tone suited for an explanation",
          "Concluding summary summarizing long-term landscape impacts"
        ]
      },
      {
        badge: "Explanatory / Informative",
        title: "How the Human Eye Translates Light into Vision",
        desc: "Explain the physiological process of how light waves enter the cornea, pass through the lens, focus on the retina, and convert into signals sent via the optic nerve to the brain.",
        rubric: [
          "Clear introduction defining the sensory purpose of the eye",
          "Step-by-step sequential structure detailing light transfer",
          "Domain-specific biological terminology (cornea, retina, photoreceptors, nerve)",
          "Cause-and-effect transitions connecting optical steps",
          "Concise, accurate explanatory summary"
        ]
      },
      {
        badge: "Explanatory / Informative",
        title: "Why Native Birds in New Zealand Evolved to Be Flightless",
        desc: "Explain how millions of years without terrestrial mammalian predators led birds like the kiwi, kākāpō, and moa to lose flight, and why this made them vulnerable to introduced pests.",
        rubric: [
          "Introduction establishing New Zealand's unique island isolation",
          "Logical explanation of evolutionary energy saving and ground feeding",
          "Scientific vocabulary (adaptation, ecological niche, flightless, predation)",
          "Clear cause-and-effect structure detailing the sudden arrival of predators",
          "Analytical conclusion outlining conservation significance"
        ]
      }
    ],
    8: [
      {
        badge: "Explanatory / Informative",
        title: "How Renewable Energy Powers New Zealand's National Grid",
        desc: "Explain how renewable sources—such as hydroelectric dams, geothermal steam fields, and wind turbines—generate electricity and maintain stability across the national power network.",
        rubric: [
          "Technical introduction explaining the concept of renewable energy",
          "Detailed breakdown of energy transfer mechanisms (kinetic to electrical)",
          "Domain-specific terminology (megawatts, turbines, national grid, base load)",
          "Cohesive paragraph links and logical structural sequencing",
          "Objective, analytical conclusion evaluating future sustainability"
        ]
      },
      {
        badge: "Explanatory / Informative",
        title: "The Science of Ocean Currents and Global Climate",
        desc: "Explain the mechanism of thermohaline circulation (the global ocean conveyor belt) and how differences in water temperature and salinity regulate global weather patterns.",
        rubric: [
          "Comprehensive overview of oceanic circulation and atmospheric heat transfer",
          "Detailed scientific explanation of density, temperature, and salinity drives",
          "Domain-specific vocabulary (salinity, thermohaline, convection, equator)",
          "Logical paragraph flow linking oceanic flow to continental climates",
          "Forward-looking evaluation of how melting polar ice impacts the current"
        ]
      },
      {
        badge: "Explanatory / Informative",
        title: "How Vaccines Train the Human Adaptive Immune System",
        desc: "Explain how vaccines introduce harmless antigens to stimulate antibody production, how memory B-cells form, and how herd immunity protects vulnerable community members.",
        rubric: [
          "Precise scientific introduction defining vaccination and immune defense",
          "Sequential explanation of primary response, memory cells, and pathogen recognition",
          "High-level medical terminology (antigens, pathogens, antibodies, lymphocytes)",
          "Impersonal, analytical, and authoritative scientific tone",
          "Synthesizing conclusion evaluating public health outcomes"
        ]
      }
    ]
  }
};

// ==========================================
// INITIALIZATION
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  updateCohortUI();
  updatePassagePicker();
  setDashboardWritingGenre(STATE.currentWritingGenre || 'persuasive');
  setWritingPromptIndex(STATE.currentPromptIndex || 0);
  updateBadgeCounts();
});

// Update dashboard question counts based on loaded data
function updateBadgeCounts() {
  const badgeGrammar = document.getElementById('badge-count-grammar');
  if (badgeGrammar) {
    if (typeof getGrammarQuestions === 'function') {
      badgeGrammar.textContent = `${getGrammarQuestions(STATE.currentCohort).length} Questions`;
    } else {
      badgeGrammar.textContent = 'Coming Soon';
    }
  }

  const badgeSpelling = document.getElementById('badge-count-spelling');
  if (badgeSpelling) {
    if (typeof getSpellingQuestions === 'function') {
      badgeSpelling.textContent = `${getSpellingQuestions(STATE.currentCohort).length} Questions`;
    } else {
      badgeSpelling.textContent = 'Coming Soon';
    }
  }

  const badgeReading = document.getElementById('badge-count-reading');
  if (badgeReading) {
    if (typeof getReadingQuestions === 'function') {
      const activeCohort = STATE.readingCohortFilter || STATE.currentCohort;
      const count = getReadingQuestions(activeCohort, STATE.selectedReadingGenre, STATE.selectedPassageId).length;
      badgeReading.textContent = `${count} Questions`;
    } else {
      badgeReading.textContent = 'Coming Soon';
    }
  }
}

// ==========================================
// READING MODULE CONTROLS
// ==========================================
function setReadingGenre(genre) {
  STATE.selectedReadingGenre = genre;
  STATE.selectedPassageId = null;

  const container = document.getElementById('reading-genre-buttons');
  if (container) {
    const buttons = container.querySelectorAll('.genre-btn');
    buttons.forEach(btn => {
      const isMatch = btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${genre}'`);
      if (isMatch) {
        btn.className = "genre-btn py-1 px-2 text-[11px] font-bold rounded-lg border border-brand-600 bg-brand-50 text-brand-800 transition-all text-center";
      } else {
        btn.className = "genre-btn py-1 px-2 text-[11px] font-bold rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-all text-center";
      }
    });
  }

  updatePassagePicker();
  updateBadgeCounts();
}

function setReadingCohort(year) {
  STATE.readingCohortFilter = year;
  STATE.selectedPassageId = null;

  const btnY7 = document.getElementById('btn-read-y7');
  const btnY8 = document.getElementById('btn-read-y8');
  if (btnY7 && btnY8) {
    if (year === 7) {
      btnY7.className = "px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-white text-slate-900 shadow-xs transition-all";
      btnY8.className = "px-2.5 py-0.5 text-[11px] font-bold rounded-md text-slate-600 hover:text-slate-900 transition-all";
    } else {
      btnY8.className = "px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-white text-slate-900 shadow-xs transition-all";
      btnY7.className = "px-2.5 py-0.5 text-[11px] font-bold rounded-md text-slate-600 hover:text-slate-900 transition-all";
    }
  }

  updatePassagePicker();
  updateBadgeCounts();
}

function updatePassagePicker() {
  const container = document.getElementById('reading-passage-buttons');
  if (!container || typeof READING_PASSAGES === 'undefined') return;

  container.innerHTML = '';
  const y = STATE.readingCohortFilter || STATE.currentCohort;
  const g = (STATE.selectedReadingGenre || 'all').toLowerCase();

  const availablePassages = Object.keys(READING_PASSAGES).filter(id => {
    const p = READING_PASSAGES[id];
    const isYear = p.year === y || (y === 8 && (id === 'y7_space_junk' || id === 'y7_animal_rights'));
    const isGenre = (g === 'all') || (p.genre.toLowerCase() === g);
    return isYear && isGenre;
  });

  if (availablePassages.length === 0) {
    container.innerHTML = '<span class="text-xs text-slate-400 italic">No passages available for Year ' + y + '.</span>';
    return;
  }

  availablePassages.forEach(id => {
    const p = READING_PASSAGES[id];
    const isSelected = STATE.selectedPassageId === id;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `w-full text-left px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all flex items-center justify-between ${
      isSelected 
        ? 'border-brand-600 bg-brand-50 text-brand-900 font-bold ring-1 ring-brand-600 shadow-xs' 
        : 'border-slate-200 bg-slate-50 hover:bg-white text-slate-700'
    }`;
    btn.innerHTML = `
      <span class="truncate">${p.title}</span>
      <span class="text-[10px] text-slate-400 font-normal ml-2 shrink-0">Y${y} • ${p.genre}</span>
    `;
    btn.onclick = () => selectSpecificPassage(id);
    container.appendChild(btn);
  });
}

function selectSpecificPassage(id) {
  STATE.selectedPassageId = (STATE.selectedPassageId === id) ? null : id;
  updatePassagePicker();
  updateBadgeCounts();
}

// ==========================================
// WRITING CONTROLS (GENRES & 3 PROMPTS)
// ==========================================
function setDashboardWritingGenre(genre) {
  saveCurrentDraft();
  STATE.currentWritingGenre = genre;

  const container = document.getElementById('dash-writing-genre-buttons');
  if (container) {
    const buttons = container.querySelectorAll('button');
    buttons.forEach(btn => {
      const clickAttr = btn.getAttribute('onclick') || '';
      if (clickAttr.includes(`'${genre}'`)) {
        btn.className = "dash-wbtn py-1.5 px-2 text-[11px] font-bold rounded-lg border border-brand-600 bg-brand-50 text-brand-800 transition-all text-center";
      } else {
        btn.className = "dash-wbtn py-1.5 px-2 text-[11px] font-bold rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-all text-center";
      }
    });
  }

  const badge = document.getElementById('badge-writing-genre');
  const labelMap = { persuasive: 'Persuasive', entertain: 'Narrative', explain: 'Explanatory' };
  if (badge) badge.textContent = labelMap[genre] || 'Persuasive';

  updateWritingDashboardPreview();
}

function setWritingPromptIndex(idx) {
  saveCurrentDraft();
  STATE.currentPromptIndex = idx;

  [0, 1, 2].forEach(i => {
    const dashPill = document.getElementById(`dash-prompt-pill-${i}`);
    if (dashPill) {
      if (i === idx) {
        dashPill.className = "dash-prompt-pill py-1 px-2 text-[11px] font-bold rounded-lg border border-brand-600 bg-brand-50 text-brand-800 transition-all text-center";
      } else {
        dashPill.className = "dash-prompt-pill py-1 px-2 text-[11px] font-bold rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-all text-center";
      }
    }

    const studioPill = document.getElementById(`tab-prompt-${i}`);
    if (studioPill) {
      if (i === idx) {
        studioPill.className = "px-2.5 py-1 text-xs font-bold rounded-md bg-white text-slate-900 shadow-xs";
      } else {
        studioPill.className = "px-2.5 py-1 text-xs font-bold rounded-md text-slate-600 hover:text-slate-900";
      }
    }
  });

  updateWritingDashboardPreview();

  const viewWriting = document.getElementById('view-writing');
  if (viewWriting && !viewWriting.classList.contains('hidden')) {
    renderWritingPrompt();
  }
}

function updateWritingDashboardPreview() {
  const preview = document.getElementById('dash-writing-prompt-preview');
  if (!preview) return;

  const genre = STATE.currentWritingGenre || 'persuasive';
  const cohort = STATE.currentCohort || 7;
  const pIdx = STATE.currentPromptIndex || 0;

  if (WRITING_DATA[genre] && WRITING_DATA[genre][cohort] && WRITING_DATA[genre][cohort][pIdx]) {
    const prompt = WRITING_DATA[genre][cohort][pIdx];
    preview.textContent = `"${prompt.title}"`;
  } else {
    preview.textContent = "Select a writing genre to view prompt.";
  }
}

function saveCurrentDraft() {
  const textarea = document.getElementById('writing-textarea');
  if (textarea) {
    const y = STATE.currentCohort;
    const g = STATE.currentWritingGenre;
    const pIdx = STATE.currentPromptIndex;
    if (STATE.writingDrafts[y] && STATE.writingDrafts[y][g]) {
      STATE.writingDrafts[y][g][pIdx] = textarea.value;
    }
  }
}

// ==========================================
// NAVIGATION & MODALITY
// ==========================================
function setCohort(year) {
  saveCurrentDraft();
  STATE.currentCohort = year;
  STATE.readingCohortFilter = year;
  STATE.selectedPassageId = null;
  updateCohortUI();
  setReadingCohort(year);
  updateWritingDashboardPreview();
  updateBadgeCounts();
}

function updateCohortUI() {
  const y = STATE.currentCohort;
  const btnY7 = document.getElementById('nav-btn-y7');
  const btnY8 = document.getElementById('nav-btn-y8');
  if (btnY7 && btnY8) {
    if (y === 7) {
      btnY7.className = "px-3 py-1 text-xs font-bold rounded-md bg-white text-slate-900 shadow-xs transition-all";
      btnY8.className = "px-3 py-1 text-xs font-bold rounded-md text-slate-600 hover:text-slate-900 transition-all";
    } else {
      btnY8.className = "px-3 py-1 text-xs font-bold rounded-md bg-white text-slate-900 shadow-xs transition-all";
      btnY7.className = "px-3 py-1 text-xs font-bold rounded-md text-slate-600 hover:text-slate-900 transition-all";
    }
  }
}

function navigateHome() {
  saveCurrentDraft();
  document.getElementById('view-dashboard').classList.remove('hidden');
  document.getElementById('view-runner').classList.add('hidden');
  document.getElementById('view-results').classList.add('hidden');
  document.getElementById('view-writing').classList.add('hidden');
  updateWritingDashboardPreview();
  updateBadgeCounts();
}

function confirmExitTest() {
  if (confirm("Are you sure you want to exit? Your current test progress will be lost.")) {
    navigateHome();
  }
}

// ==========================================
// TEST ENGINE / RUNNER
// ==========================================
function startSubject(subject, year) {
  STATE.activeSubject = subject;
  STATE.currentCohort = year;
  STATE.currentIndex = 0;
  STATE.userAnswers = {};
  STATE.flagged.clear();

  if (subject === 'math') {
    if (typeof getMathQuestions !== 'function') {
      alert("Error: math.js file not found or not loaded properly.");
      return;
    }
    STATE.questions = getMathQuestions(year);
  } else if (subject === 'grammar') {
    if (typeof getGrammarQuestions !== 'function') {
      alert("Grammar questions are still being built!");
      return;
    }
    STATE.questions = getGrammarQuestions(year);
  } else if (subject === 'spelling') {
    if (typeof getSpellingQuestions !== 'function') {
      alert("Spelling questions are still being built!");
      return;
    }
    STATE.questions = getSpellingQuestions(year);
  } else if (subject === 'reading') {
    if (typeof getReadingQuestions !== 'function') {
      alert("Reading questions are still being built!");
      return;
    }
    STATE.questions = getReadingQuestions(year, STATE.selectedReadingGenre, STATE.selectedPassageId);
  }

  if (!STATE.questions || STATE.questions.length === 0) {
    alert("No questions found for this selection.");
    return;
  }

  document.getElementById('view-dashboard').classList.add('hidden');
  document.getElementById('view-results').classList.add('hidden');
  document.getElementById('view-writing').classList.add('hidden');
  document.getElementById('view-runner').classList.remove('hidden');

  const titleMap = { 
    math: 'Maths and Statistics', 
    grammar: 'Punctuation & Grammar', 
    spelling: 'The Code / Spelling', 
    reading: 'Reading Comprehension' 
  };
  document.getElementById('runner-title').textContent = titleMap[subject] || subject;
  document.getElementById('runner-year-badge').textContent = `Year ${year}`;

  const btnReroll = document.getElementById('btn-reroll-math');
  if (subject === 'math') {
    btnReroll.classList.remove('hidden');
  } else {
    btnReroll.classList.add('hidden');
  }

  renderQuestion();
}

function renderQuestion() {
  const q = STATE.questions[STATE.currentIndex];
  const total = STATE.questions.length;
  const idx = STATE.currentIndex;

  document.getElementById('runner-q-progress').textContent = `Question ${idx + 1} of ${total}`;
  document.getElementById('runner-q-strand').textContent = q.strand || "Core Strand";
  document.getElementById('runner-q-text').textContent = q.question;

  const passagePanel = document.getElementById('runner-passage-panel');
  const contentLayout = document.getElementById('runner-content-layout');
  if (q.passage) {
    passagePanel.classList.remove('hidden');
    
    const authorCredit = q.passage.attribution 
      ? `<p class="text-xs text-slate-500 italic mt-0.5">${q.passage.attribution}</p>` 
      : '';
    document.getElementById('runner-passage-title').innerHTML = `${q.passage.title}${authorCredit}`;
    document.getElementById('runner-passage-body').innerHTML = q.passage.body;
    
    contentLayout.className = "grid grid-cols-1 lg:grid-cols-2 gap-6";
  } else {
    passagePanel.classList.add('hidden');
    contentLayout.className = "grid grid-cols-1 gap-6 max-w-3xl mx-auto";
  }

  const container = document.getElementById('runner-q-options');
  container.innerHTML = '';
  const selected = STATE.userAnswers[idx];

  q.options.forEach((optText, optIdx) => {
    const isSelected = selected === optIdx;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${
      isSelected 
        ? 'border-brand-600 bg-brand-50 text-brand-900 font-bold ring-1 ring-brand-600' 
        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800'
    }`;
    btn.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold ${
          isSelected ? 'bg-brand-600 text-white border-brand-600' : 'border-slate-300 text-slate-500'
        }">${String.fromCharCode(65 + optIdx)}</span>
        <span>${optText}</span>
      </div>
    `;
    btn.onclick = () => selectOption(optIdx);
    container.appendChild(btn);
  });

  const feedbackBox = document.getElementById('runner-practice-feedback');
  if (selected !== undefined) {
    feedbackBox.classList.remove('hidden');
    const isCorrect = selected === q.correctIndex;
    if (isCorrect) {
      feedbackBox.className = "mt-6 p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900 text-xs";
      feedbackBox.innerHTML = `
        <div class="font-bold flex items-center gap-1.5 text-emerald-800 mb-1">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          Correct!
        </div>
        <p class="leading-relaxed">${q.explanation}</p>
      `;
    } else {
      feedbackBox.className = "mt-6 p-4 rounded-xl border border-rose-200 bg-rose-50 text-rose-900 text-xs";
      feedbackBox.innerHTML = `
        <div class="font-bold flex items-center gap-1.5 text-rose-800 mb-1">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
          Not quite
        </div>
        <p class="leading-relaxed">${q.explanation}</p>
      `;
    }
  } else {
    feedbackBox.classList.add('hidden');
  }

  const hintBtn = document.getElementById('btn-show-hint');
  if (q.hint) {
    hintBtn.classList.remove('hidden');
  } else {
    hintBtn.classList.add('hidden');
  }

  const flagBtn = document.getElementById('btn-flag-q');
  if (STATE.flagged.has(idx)) {
    flagBtn.className = "px-2.5 py-1 rounded-lg border text-xs font-bold border-amber-400 bg-amber-50 text-amber-800 transition-all flex items-center gap-1";
  } else {
    flagBtn.className = "px-2.5 py-1 rounded-lg border text-xs font-semibold border-slate-200 bg-white text-slate-600 transition-all flex items-center gap-1";
  }

  const prevBtn = document.getElementById('btn-prev-q');
  const nextBtn = document.getElementById('btn-next-q');
  const finishBtn = document.getElementById('btn-finish-q');
  
  prevBtn.disabled = idx === 0;
  prevBtn.classList.toggle('opacity-40', idx === 0);

  if (idx === total - 1) {
    nextBtn.classList.add('hidden');
    finishBtn.classList.remove('hidden');
  } else {
    nextBtn.classList.remove('hidden');
    finishBtn.classList.add('hidden');
  }

  renderPillsBar();
}

function renderPillsBar() {
  const bar = document.getElementById('runner-pills-bar');
  bar.innerHTML = '';
  
  STATE.questions.forEach((_, i) => {
    const isCurrent = i === STATE.currentIndex;
    const isAnswered = STATE.userAnswers[i] !== undefined;
    const isFlagged = STATE.flagged.has(i);

    const pill = document.createElement('button');
    pill.className = `w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-all relative ${
      isCurrent
        ? 'bg-slate-900 text-white shadow-xs'
        : isAnswered
          ? 'bg-brand-100 text-brand-800 border border-brand-300'
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
    }`;
    pill.textContent = i + 1;
    if (isFlagged) {
      const dot = document.createElement('span');
      dot.className = "w-2 h-2 rounded-full bg-amber-500 absolute -top-0.5 -right-0.5 border border-white";
      pill.appendChild(dot);
    }
    pill.onclick = () => {
      STATE.currentIndex = i;
      renderQuestion();
    };
    bar.appendChild(pill);

    if (isCurrent) {
      setTimeout(() => {
        pill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }, 50);
    }
  });
}

function selectOption(optIndex) {
  STATE.userAnswers[STATE.currentIndex] = optIndex;
  renderQuestion();
}

function nextQuestion() {
  if (STATE.currentIndex < STATE.questions.length - 1) {
    STATE.currentIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (STATE.currentIndex > 0) {
    STATE.currentIndex--;
    renderQuestion();
  }
}

function toggleFlagCurrentQuestion() {
  const idx = STATE.currentIndex;
  if (STATE.flagged.has(idx)) {
    STATE.flagged.delete(idx);
  } else {
    STATE.flagged.add(idx);
  }
  renderQuestion();
}

function toggleHint() {
  const q = STATE.questions[STATE.currentIndex];
  if (q && q.hint) {
    alert(`Hint: ${q.hint}`);
  }
}

function rerollCurrentMathQuestion() {
  if (STATE.activeSubject !== 'math') return;
  const generators = (STATE.currentCohort === 8) ? Y8_GENERATORS : Y7_GENERATORS;
  const gen = generators[STATE.currentIndex % generators.length];
  const newQ = gen();
  newQ.id = `math_y${STATE.currentCohort}_${STATE.currentIndex + 1}`;
  newQ.year = STATE.currentCohort;
  newQ.subject = "math";
  newQ.passage = null;

  STATE.questions[STATE.currentIndex] = newQ;
  delete STATE.userAnswers[STATE.currentIndex];
  renderQuestion();
}

// ==========================================
// RESULTS & SCORING
// ==========================================
function submitAssessment() {
  let correctCount = 0;
  const strandScores = {};

  STATE.questions.forEach((q, i) => {
    const strand = q.strand || "General";
    if (!strandScores[strand]) {
      strandScores[strand] = { correct: 0, total: 0 };
    }
    strandScores[strand].total++;

    const isCorrect = STATE.userAnswers[i] === q.correctIndex;
    if (isCorrect) {
      correctCount++;
      strandScores[strand].correct++;
    }
  });

  const total = STATE.questions.length;
  const pct = Math.round((correctCount / total) * 100);

  document.getElementById('view-runner').classList.add('hidden');
  document.getElementById('view-results').classList.remove('hidden');

  document.getElementById('results-meta').textContent = `Year ${STATE.currentCohort} | ${document.getElementById('runner-title').textContent}`;
  document.getElementById('results-score').textContent = `${correctCount}/${total}`;
  document.getElementById('results-pct').textContent = `${pct}%`;

  const list = document.getElementById('results-strands-list');
  list.innerHTML = '';
  Object.keys(strandScores).forEach(strand => {
    const s = strandScores[strand];
    const sPct = Math.round((s.correct / s.total) * 100);
    const row = document.createElement('div');
    row.className = "p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs";
    row.innerHTML = `
      <div>
        <span class="font-bold text-slate-800">${strand}</span>
        <span class="text-slate-400 block">${s.correct} of ${s.total} correct</span>
      </div>
      <span class="font-black ${sPct >= 75 ? 'text-emerald-600' : sPct >= 50 ? 'text-amber-600' : 'text-rose-600'}">${sPct}%</span>
    `;
    list.appendChild(row);
  });
}

function retakeCurrentSubject() {
  startSubject(STATE.activeSubject, STATE.currentCohort);
}

// ==========================================
// WRITING WORKSPACE & DYNAMIC SCAFFOLDING
// ==========================================
function openWritingWorkspace() {
  document.getElementById('view-dashboard').classList.add('hidden');
  document.getElementById('view-runner').classList.add('hidden');
  document.getElementById('view-results').classList.add('hidden');
  document.getElementById('view-writing').classList.remove('hidden');

  document.getElementById('writing-year-badge').textContent = `Year ${STATE.currentCohort}`;
  
  setWritingGenre(STATE.currentWritingGenre);
  setWritingPromptIndex(STATE.currentPromptIndex);
}

function setWritingGenre(genre) {
  saveCurrentDraft();
  STATE.currentWritingGenre = genre;

  ['persuasive', 'entertain', 'explain'].forEach(g => {
    const tab = document.getElementById(`tab-genre-${g}`);
    if (tab) {
      if (g === genre) {
        tab.className = "px-3 py-1 text-xs font-bold rounded-md bg-white text-slate-900 shadow-xs";
      } else {
        tab.className = "px-3 py-1 text-xs font-bold rounded-md text-slate-600 hover:text-slate-900";
      }
    }
  });

  renderWritingPrompt();
}

function renderWritingPrompt() {
  const y = STATE.currentCohort;
  const g = STATE.currentWritingGenre;
  const pIdx = STATE.currentPromptIndex;
  const promptList = (WRITING_DATA[g] && WRITING_DATA[g][y]) ? WRITING_DATA[g][y] : [];
  const data = promptList[pIdx] || promptList[0];

  if (!data) return;

  document.getElementById('writing-prompt-badge').textContent = data.badge;
  document.getElementById('writing-prompt-number').textContent = `Option ${pIdx + 1} of 3`;
  document.getElementById('writing-prompt-title').textContent = data.title;
  document.getElementById('writing-prompt-desc').textContent = data.desc;

  // Restore draft
  const savedDraft = (STATE.writingDrafts[y] && STATE.writingDrafts[y][g]) ? STATE.writingDrafts[y][g][pIdx] : '';
  document.getElementById('writing-textarea').value = savedDraft || '';
  updateWritingWordCount();

  // Render Checkbox Rubric
  const rubricContainer = document.getElementById('writing-rubric-items');
  if (rubricContainer) {
    rubricContainer.innerHTML = '';
    data.rubric.forEach((crit) => {
      const item = document.createElement('label');
      item.className = "flex items-start gap-2.5 p-2.5 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer text-xs text-slate-700";
      item.innerHTML = `
        <input type="checkbox" class="rounded text-brand-600 focus:ring-0 mt-0.5">
        <span>${crit}</span>
      `;
      rubricContainer.appendChild(item);
    });
  }

  // Automatically render PEEL (Persuasive), TEAL (Explanatory), or Narrative Arc with Dialogue & Imagery
  renderStructureGuide(g);
}

// Automatically configures the sidebar paragraph helper and frame labels based strictly on genre
function renderStructureGuide(genre) {
  const header = document.getElementById('writing-structure-header');
  const body = document.getElementById('writing-structure-body');
  const introGuide = document.getElementById('writing-intro-guide');
  const conclusionGuide = document.getElementById('writing-conclusion-guide');
  const introLabel = document.getElementById('writing-intro-label');
  const conclusionLabel = document.getElementById('writing-conclusion-label');

  if (!header || !body) return;

  if (genre === 'persuasive') {
    if (introLabel) introLabel.textContent = "🚀 Introduction:";
    if (conclusionLabel) conclusionLabel.textContent = "🏁 Conclusion:";
    header.textContent = "Body Paragraph Helper: PEEL Structure";
    if (introGuide) introGuide.textContent = "Hook the reader with a strong statement, state your opinion clearly, and name your 2–3 big reasons.";
    if (conclusionGuide) conclusionGuide.textContent = "Restate your opinion using fresh words, sum up your strongest arguments, and end with a call to action.";

    body.innerHTML = `
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
        <strong class="text-brand-700 block text-xs">P – Point:</strong>
        <span class="text-slate-600">State your main argument for this paragraph clearly.</span>
        <div class="mt-1.5 text-[10px] text-slate-500 italic bg-white p-1.5 rounded-lg border border-slate-100">
          Try: "First of all, many Kiwi students...", "One clear reason is...", "To begin with, we must realize that..."
        </div>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
        <strong class="text-brand-700 block text-xs">E – Evidence / Example:</strong>
        <span class="text-slate-600">Support your point with a realistic fact, statistic, or example.</span>
        <div class="mt-1.5 text-[10px] text-slate-500 italic bg-white p-1.5 rounded-lg border border-slate-100">
          Try: "For instance, at our school...", "A clear example of this is...", "Research from New Zealand shows..."
        </div>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
        <strong class="text-brand-700 block text-xs">E – Explain:</strong>
        <span class="text-slate-600">Explain why this matters and how it proves your argument.</span>
        <div class="mt-1.5 text-[10px] text-slate-500 italic bg-white p-1.5 rounded-lg border border-slate-100">
          Try: "This shows that...", "Because of this, it is obvious that...", "This means our schools can..."
        </div>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
        <strong class="text-brand-700 block text-xs">L – Link:</strong>
        <span class="text-slate-600">Link back to your big opinion or prepare the reader for the next point.</span>
        <div class="mt-1.5 text-[10px] text-slate-500 italic bg-white p-1.5 rounded-lg border border-slate-100">
          Try: "Therefore, it makes total sense that...", "This is why we need to...", "Clearly, this proves that..."
        </div>
      </div>
    `;
  } else if (genre === 'explain') {
    if (introLabel) introLabel.textContent = "🚀 Introduction:";
    if (conclusionLabel) conclusionLabel.textContent = "🏁 Conclusion:";
    header.textContent = "Body Paragraph Helper: TEAL Structure";
    if (introGuide) introGuide.textContent = "Introduce the topic or science phenomenon, define key terms simply, and preview the stages of your explanation.";
    if (conclusionGuide) conclusionGuide.textContent = "Summarize the key causes and effects, and explain why this phenomenon is important in the real world.";

    body.innerHTML = `
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
        <strong class="text-brand-700 block text-xs">T – Topic Sentence:</strong>
        <span class="text-slate-600">Name the specific step, cause, or part you are explaining.</span>
        <div class="mt-1.5 text-[10px] text-slate-500 italic bg-white p-1.5 rounded-lg border border-slate-100">
          Try: "The first step in this process is...", "A key cause of this phenomenon is...", "When we look closely at..."
        </div>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
        <strong class="text-brand-700 block text-xs">E – Explanation:</strong>
        <span class="text-slate-600">Explain the cause and effect clearly so anyone can understand.</span>
        <div class="mt-1.5 text-[10px] text-slate-500 italic bg-white p-1.5 rounded-lg border border-slate-100">
          Try: "This happens because...", "As a result of this pressure...", "In other words, the energy changes into..."
        </div>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
        <strong class="text-brand-700 block text-xs">A – Apply / Example:</strong>
        <span class="text-slate-600">Give a real-world example or describe where we see this in action.</span>
        <div class="mt-1.5 text-[10px] text-slate-500 italic bg-white p-1.5 rounded-lg border border-slate-100">
          Try: "We can see this in action when...", "For example, in New Zealand's geothermal areas...", "A practical example is..."
        </div>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
        <strong class="text-brand-700 block text-xs">L – Link:</strong>
        <span class="text-slate-600">Connect this stage to the next phase of the explanation.</span>
        <div class="mt-1.5 text-[10px] text-slate-500 italic bg-white p-1.5 rounded-lg border border-slate-100">
          Try: "Consequently, this leads directly to...", "This stage is essential because...", "This allows the next step to happen..."
        </div>
      </div>
    `;
  } else {
    // Narrative (Entertain)
    if (introLabel) introLabel.textContent = "🚀 Orientation (Hook):";
    if (conclusionLabel) conclusionLabel.textContent = "🏁 Resolution (Ending):";
    header.textContent = "Story Crafting: Structure, Dialogue & Imagery";
    if (introGuide) introGuide.textContent = "Orientation: Drop your reader into the scene with weather, sounds, or action. Introduce characters naturally.";
    if (conclusionGuide) conclusionGuide.textContent = "Resolution: Tie up the central dilemma, reveal what was learned, or leave an intentional cliffhanger.";

    body.innerHTML = `
      <!-- 1. Plot Flow -->
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
        <strong class="text-brand-700 block text-xs">1. Rising Tension & Climax:</strong>
        <span class="text-slate-600">Start with a small problem, make it tougher with obstacles, then hit the peak choice.</span>
        <div class="mt-1.5 text-[10px] text-slate-500 italic bg-white p-1.5 rounded-lg border border-slate-100">
          Starters: "Without warning...", "The silence shattered when...", "In that split second, I had to choose..."
        </div>
      </div>

      <!-- 2. Punctuating Dialogue -->
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
        <strong class="text-brand-700 block text-xs">2. Punchy Dialogue (New Speaker = New Line):</strong>
        <span class="text-slate-600">Put speech marks around spoken words. Keep punctuation inside the quotation marks.</span>
        <div class="mt-1.5 text-[10px] text-slate-700 bg-white p-2 rounded-lg border border-slate-100 font-mono space-y-1">
          <div><span class="text-emerald-700">"Did you hear that?"</span> whispered Tama, shining his torch.</div>
          <div><span class="text-emerald-700">"Quiet,"</span> I hissed. <span class="text-emerald-700">"Whatever it is, it's getting closer."</span></div>
        </div>
      </div>

      <!-- 3. Figurative Language -->
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
        <strong class="text-brand-700 block text-xs">3. Figurative Language (Paint the Picture):</strong>
        <div class="mt-1 space-y-1 text-[10px] text-slate-600">
          <div>• <strong class="text-slate-800">Simile (like / as):</strong> <em>"The dark cave breathed like an ancient animal."</em></div>
          <div>• <strong class="text-slate-800">Metaphor (is / was):</strong> <em>"Her panic was a rising wave in her chest."</em></div>
          <div>• <strong class="text-slate-800">Personification:</strong> <em>"The freezing southerly gnawed at our jackets."</em></div>
        </div>
      </div>
    `;
  }
}

function updateWritingWordCount() {
  const text = document.getElementById('writing-textarea').value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  document.getElementById('writing-word-count').textContent = words;
}

function copyWritingText() {
  const text = document.getElementById('writing-textarea').value;
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    alert("Draft copied to clipboard!");
  });
}

// ==========================================
// CALCULATOR & SCRATCHPAD
// ==========================================
function toggleCalculator() {
  const m = document.getElementById('modal-calc');
  m.classList.toggle('hidden');
}

function calcClear() {
  STATE.calcInput = '0';
  document.getElementById('calc-display').textContent = '0';
}

function calcPress(val) {
  if (STATE.calcInput === '0' && val !== '.') {
    STATE.calcInput = val;
  } else {
    STATE.calcInput += val;
  }
  document.getElementById('calc-display').textContent = STATE.calcInput;
}

function calcEquals() {
  try {
    const sanitized = STATE.calcInput.replace(/[^0-9+\-*/.]/g, '');
    const res = Function(`'use strict'; return (${sanitized})`)();
    STATE.calcInput = Number(res.toFixed(4)).toString();
    document.getElementById('calc-display').textContent = STATE.calcInput;
  } catch (e) {
    document.getElementById('calc-display').textContent = 'Error';
    STATE.calcInput = '0';
  }
}

function toggleScratchpad() {
  const m = document.getElementById('modal-scratchpad');
  m.classList.toggle('hidden');
}