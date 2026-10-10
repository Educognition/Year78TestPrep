/**
 * NZ Phase 3 Mathematics & Statistics Engine
 * 40 Randomized Algorithmic Generators (20 for Year 7, 20 for Year 8)
 * Includes GEMA/JEMA Order of Operations and authentic NZ context pools.
 */

// Utility: Random Integer between min and max (inclusive)
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Utility: Shuffle an array
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Utility: Greatest Common Divisor
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// ==========================================
// YEAR 7 GENERATORS (20 DISTINCT CONCEPTS)
// ==========================================

const Y7_GENERATORS = [
  // 1. Fractions: Unlike Denominators
  function genY7Fractions() {
    const d1 = [2, 3, 4, 5][randInt(0, 3)];
    let d2 = [3, 4, 5, 6][randInt(0, 3)];
    while (d1 === d2) d2 = [3, 4, 5, 6][randInt(0, 3)];
    const n1 = 1;
    const n2 = 1;
    const commonD = (d1 * d2) / gcd(d1, d2);
    const sumN = (n1 * (commonD / d1)) + (n2 * (commonD / d2));
    const g = gcd(sumN, commonD);
    const correct = `${sumN / g}/${commonD / g}`;
    const w1 = `${n1 + n2}/${d1 + d2}`;
    const w2 = `${sumN}/${d1 * d2}`;
    const w3 = `${Math.abs(d1 - d2)}/${commonD}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Number: Fractions",
      question: `At the school gala, Maia drank ${n1}/${d1} of a bottle of juice and Rawiri drank ${n2}/${d2} of the same bottle. What fraction of the juice did they drink in total?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Find a common denominator for ${d1} and ${d2} before adding.`,
      explanation: `Common denominator is ${commonD}. (${n1}/${d1} = ${n1*(commonD/d1)}/${commonD}) + (${n2}/${d2} = ${n2*(commonD/d2)}/${commonD}) = ${sumN}/${commonD}, which simplifies to ${correct}.`
    };
  },

  // 2. Percentages: Sale Discounts
  function genY7Percentages() {
    const orig = randInt(4, 16) * 10;
    const discPct = [10, 20, 25, 50][randInt(0, 3)];
    const savings = (orig * discPct) / 100;
    const salePrice = orig - savings;
    const correct = `$${salePrice}`;
    const w1 = `$${savings}`;
    const w2 = `$${orig - (discPct / 10)}`;
    const w3 = `$${salePrice + 10}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Number: Percentages",
      question: `A hoodie at the local sports shop normally costs $${orig}. During a holiday sale, it is discounted by ${discPct}%. What is the sale price?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `First calculate ${discPct}% of $${orig}, then subtract that amount from the original price.`,
      explanation: `${discPct}% of $${orig} is $${savings}. Sale price = $${orig} - $${savings} = ${correct}.`
    };
  },

  // 3. Proportional Rates: Speed & Time
  function genY7Rates() {
    const speed = randInt(4, 7);
    const hours = randInt(3, 5);
    const dist = speed * hours;
    const correct = `${dist} km`;
    const w1 = `${speed + hours} km`;
    const w2 = `${dist - speed} km`;
    const w3 = `${dist + hours} km`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Proportional Thinking: Rates",
      question: `A class group tramps along an Abel Tasman track at a steady pace of ${speed} km/h for ${hours} hours. What total distance do they cover?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Distance equals speed multiplied by time.`,
      explanation: `${speed} km/h × ${hours} hours = ${correct}.`
    };
  },

  // 4. Linear Patterns & Sequences
  function genY7Patterns() {
    const step = randInt(3, 5);
    const start = randInt(2, 4);
    const n = randInt(10, 20);
    const ans = step * n + start;
    const correct = `${ans}`;
    const w1 = `${step * n}`;
    const w2 = `${ans - step}`;
    const w3 = `${ans + 2}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Algebra: Linear Patterns",
      question: `A pattern of matchstick squares follows the rule: Total Matches = ${step}n + ${start}, where n is the pattern number. How many matches are needed for Pattern ${n}?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Substitute n = ${n} directly into the rule.`,
      explanation: `Total = (${step} × ${n}) + ${start} = ${step * n} + ${start} = ${correct}.`
    };
  },

  // 5. Linear Equations
  function genY7Equations() {
    const x = randInt(3, 9);
    const a = randInt(2, 5);
    const b = randInt(3, 9);
    const c = a * x + b;
    const correct = `x = ${x}`;
    const w1 = `x = ${x + 1}`;
    const w2 = `x = ${Math.max(1, x - 2)}`;
    const w3 = `x = ${Math.round(c / a)}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Algebra: Solving Equations",
      question: `Solve for x:  ${a}x + ${b} = ${c}`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Subtract ${b} from both sides, then divide by ${a}.`,
      explanation: `${a}x = ${c} - ${b} = ${c - b}. Then x = ${c - b} ÷ ${a} = ${x}.`
    };
  },

  // 6. Measurement: Composite Area
  function genY7CompositeArea() {
    const w1 = randInt(4, 7);
    const h1 = randInt(5, 8);
    const w2 = randInt(3, 5);
    const h2 = randInt(2, 4);
    const totalArea = (w1 * h1) + (w2 * h2);
    const correct = `${totalArea} m²`;
    const fake1 = `${(w1 + w2) * (h1 + h2)} m²`;
    const fake2 = `${totalArea - (w2 * 2)} m²`;
    const fake3 = `${2 * (w1 + h1 + w2 + h2)} m²`;
    const opts = shuffleArray(Array.from(new Set([correct, fake1, fake2, fake3])).slice(0, 4));
    return {
      strand: "Measurement: Area",
      question: `A school māra kai (garden) is L-shaped. It can be split into two rectangles: one measuring ${w1} m by ${h1} m, and another measuring ${w2} m by ${h2} m. What is the total area?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Calculate the area of both rectangles separately, then add them together.`,
      explanation: `Area 1 = ${w1} × ${h1} = ${w1*h1} m². Area 2 = ${w2} × ${h2} = ${w2*h2} m². Total = ${w1*h1} + ${w2*h2} = ${correct}.`
    };
  },

  // 7. Measurement: Metric Capacity
  function genY7Capacity() {
    const totalL = randInt(2, 4);
    const cupMl = 250;
    const totalCups = (totalL * 1000) / cupMl;
    const correct = `${totalCups} cups`;
    const w1 = `${totalL * 2} cups`;
    const w2 = `${totalCups - 2} cups`;
    const w3 = `${totalL * 10} cups`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Measurement: Capacity",
      question: `A water jug holds ${totalL} litres of water. How many ${cupMl} mL cups can be completely filled from the jug?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Remember that 1 litre equals 1000 mL.`,
      explanation: `${totalL} L = ${totalL * 1000} mL. ${totalL * 1000} ÷ ${cupMl} = ${correct}.`
    };
  },

  // 8. Geometry: Triangle Angles
  function genY7TriangleAngles() {
    const a1 = randInt(40, 75);
    const a2 = randInt(35, 65);
    const missing = 180 - (a1 + a2);
    const correct = `${missing}°`;
    const w1 = `${missing + 10}°`;
    const w2 = `${180 - missing}°`;
    const w3 = `${90 - Math.min(a1, a2)}°`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Geometry: Angle Properties",
      question: `In triangle ABC, angle A is ${a1}° and angle B is ${a2}°. What is the size of angle C?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `The interior angles of any triangle always add up to 180°.`,
      explanation: `Angle C = 180° - (${a1}° + ${a2}°) = 180° - ${a1 + a2}° = ${correct}.`
    };
  },

  // 9. Statistics: Median Sprint Times
  function genY7Median() {
    const base = randInt(12, 14);
    const raw = [base, base + 0.3, base + 0.7, base + 1.1, base + 1.6].map(v => Number(v.toFixed(1)));
    const shuffled = shuffleArray([...raw]);
    const median = raw[2];
    const correct = `${median}s`;
    const w1 = `${raw[1]}s`;
    const w2 = `${raw[3]}s`;
    const w3 = `${raw[0]}s`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Statistics: Data Analysis",
      question: `Five intermediate sprinters recorded 100m times (in seconds): ${shuffled.join(', ')}. What is the median time?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `List the times in ascending order from fastest to slowest; the median is the middle value.`,
      explanation: `Ordered list: ${raw.join(', ')}. The middle value is ${correct}.`
    };
  },

  // 10. Probability: Simple Events
  function genY7Probability() {
    const blue = randInt(3, 6);
    const green = randInt(2, 5);
    const red = randInt(4, 7);
    const total = blue + green + red;
    const g = gcd(blue, total);
    const correct = `${blue / g}/${total / g}`;
    const w1 = `${blue}/${blue + red}`;
    const w2 = `1/${total}`;
    const w3 = `${green}/${total}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Probability: Simple Chance",
      question: `A kete (bag) contains ${blue} blue beads, ${green} green beads, and ${red} red beads. One bead is picked at random. What is the probability of picking a blue bead?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Write the number of blue beads over the total count, then simplify.`,
      explanation: `Total beads = ${blue} + ${green} + ${red} = ${total}. Probability = ${blue}/${total} = ${correct}.`
    };
  },

  // 11. GEMA / JEMA Order of Operations
  function genY7GEMA() {
    const p1 = randInt(4, 9);
    const p2 = randInt(2, 4);
    const mult = randInt(2, 4);
    const add = randInt(5, 12);
    const ans = ((p1 - p2) * mult) + add;
    const correct = `${ans}`;
    const w1 = `${(p1 - p2) * (mult + add)}`;
    const w2 = `${p1 - (p2 * mult) + add}`;
    const w3 = `${ans - 2}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Number: Order of Operations (GEMA / JEMA)",
      question: `Apply the GEMA / JEMA conventions for order of operations (Grouping, Exponents, Multiplication & Division, Addition & Subtraction) to evaluate:\n(${p1} - ${p2}) × ${mult} + ${add}`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Step 1: Grouping symbols (brackets). Step 2: Multiplication. Step 3: Addition.`,
      explanation: `Grouping: (${p1} - ${p2}) = ${p1 - p2}. Multiply: ${p1 - p2} × ${mult} = ${(p1 - p2) * mult}. Add: ${(p1 - p2) * mult} + ${add} = ${correct}.`
    };
  },

  // 12. Decimals & Money
  function genY7Money() {
    const price1 = 4.50;
    const qty1 = 2;
    const price2 = 3.20;
    const paid = 20;
    const cost = (price1 * qty1) + price2;
    const change = paid - cost;
    const correct = `$${change.toFixed(2)}`;
    const w1 = `$${cost.toFixed(2)}`;
    const w2 = `$${(change + 1).toFixed(2)}`;
    const w3 = `$${(change - 1.5).toFixed(2)}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Number: Decimals",
      question: `At the canteen, Liam buys ${qty1} sandwiches at $${price1.toFixed(2)} each and one drink for $${price2.toFixed(2)}. If he pays with a $${paid} note, how much change does he receive?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Find total cost first: (${qty1} × $${price1.toFixed(2)}) + $${price2.toFixed(2)}, then subtract from $${paid}.`,
      explanation: `Total cost = $${(price1 * qty1).toFixed(2)} + $${price2.toFixed(2)} = $${cost.toFixed(2)}. Change = $${paid} - $${cost.toFixed(2)} = ${correct}.`
    };
  },

  // 13. Measurement: L-Shape Perimeter
  function genY7Perimeter() {
    const w = randInt(8, 14);
    const h = randInt(6, 10);
    const perim = 2 * (w + h);
    const correct = `${perim} m`;
    const w1 = `${w * h} m`;
    const w2 = `${perim - 4} m`;
    const w3 = `${w + h} m`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Measurement: Perimeter",
      question: `An L-shaped court has overall bounding dimensions of ${w} m length and ${h} m width. What is the total perimeter around the outer boundary?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `The sum of the stepped horizontal sides equals the total width, and the stepped verticals equal the total height.`,
      explanation: `Perimeter of an orthogonal L-shape equals 2 × (Length + Width) = 2 × (${w} + ${h}) = ${correct}.`
    };
  },

  // 14. Geometry: Angles on a Straight Line
  function genY7StraightAngles() {
    const given = randInt(45, 135);
    const missing = 180 - given;
    const correct = `${missing}°`;
    const w1 = `${90 - (given % 45)}°`;
    const w2 = `${360 - given}°`;
    const w3 = `${missing + 10}°`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Geometry: Angle Properties",
      question: `Two adjacent angles lie on a straight line. One angle measures ${given}°. What is the size of the other angle?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Angles on a straight line always sum to 180°.`,
      explanation: `180° - ${given}° = ${correct}.`
    };
  },

  // 15. Coordinates: Translations
  function genY7Translations() {
    const x = randInt(1, 5);
    const y = randInt(2, 6);
    const dx = randInt(2, 4);
    const dy = randInt(1, 3);
    const nx = x + dx;
    const ny = y - dy;
    const correct = `(${nx}, ${ny})`;
    const w1 = `(${nx}, ${y + dy})`;
    const w2 = `(${x - dx}, ${ny})`;
    const w3 = `(${ny}, ${nx})`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Geometry: Coordinates & Transformations",
      question: `Point P is located at (${x}, ${y}). It is translated ${dx} units right and ${dy} units down. What are its new coordinates?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Right increases the x-coordinate (+); down decreases the y-coordinate (-).`,
      explanation: `New x = ${x} + ${dx} = ${nx}. New y = ${y} - ${dy} = ${ny}. Position = ${correct}.`
    };
  },

  // 16. Statistics: Graph Differentials
  function genY7GraphDiff() {
    const r1 = randInt(22, 35);
    const r2 = randInt(12, 19);
    const diff = r1 - r2;
    const correct = `${diff} books`;
    const w1 = `${r1 + r2} books`;
    const w2 = `${diff + 5} books`;
    const w3 = `${r1} books`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Statistics: Data Interpretation",
      question: `In a school reading challenge bar graph, Room 7 read ${r1} books and Room 8 read ${r2} books. How many more books did Room 7 read than Room 8?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Subtract Room 8's count from Room 7's count.`,
      explanation: `${r1} - ${r2} = ${correct}.`
    };
  },

  // 17. Number: Highest Common Factor (HCF)
  function genY7HCF() {
    const mult = randInt(3, 6);
    const n1 = mult * 2;
    const n2 = mult * 3;
    const correct = `${mult}`;
    const w1 = `${mult * 2}`;
    const w2 = `1`;
    const w3 = `${mult * 6}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Number: Factors & Multiples",
      question: `What is the Highest Common Factor (HCF) of ${n1} and ${n2}?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `List all factors for each number and find the largest number that divides into both.`,
      explanation: `Factors of ${n1}: 1, 2, ..., ${n1}. Factors of ${n2}: 1, 3, ..., ${n2}. The highest shared factor is ${correct}.`
    };
  },

  // 18. Algebra: Function Machines
  function genY7FunctionMachine() {
    const mult = randInt(3, 5);
    const sub = randInt(2, 6);
    const input = randInt(4, 8);
    const output = (input * mult) - sub;
    const correct = `${output}`;
    const w1 = `${(input - sub) * mult}`;
    const w2 = `${output + sub}`;
    const w3 = `${input * mult}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Algebra: Function Rules",
      question: `A number rule machine takes an input, multiplies it by ${mult}, and then subtracts ${sub}. If the input is ${input}, what is the output?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Multiply ${input} by ${mult} first, then subtract ${sub}.`,
      explanation: `(${input} × ${mult}) - ${sub} = ${input * mult} - ${sub} = ${correct}.`
    };
  },

  // 19. Measurement: Metric Conversion (km to m)
  function genY7MetricKm() {
    const km = (randInt(15, 45) / 10).toFixed(1);
    const m = Math.round(km * 1000);
    const correct = `${m} m`;
    const w1 = `${Math.round(km * 100)} m`;
    const w2 = `${Math.round(km * 10000)} m`;
    const w3 = `${m + 500} m`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Measurement: Metric Conversions",
      question: `A cross-country race course is ${km} kilometres long. What is this distance in metres?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `There are 1000 metres in 1 kilometre. Multiply by 1000.`,
      explanation: `${km} km × 1000 = ${correct}.`
    };
  },

  // 20. Probability: Qualitative Scales
  function genY7Likelihood() {
    return {
      strand: "Probability: Likelihood Scale",
      question: `A regular 6-sided die numbered 1 to 6 is rolled once. Which term best describes the likelihood of rolling a number less than 7?`,
      options: ["Certain", "Likely", "Even chance", "Impossible"],
      correctIndex: 0,
      hint: `Check which numbers on the die are less than 7.`,
      explanation: `All faces (1, 2, 3, 4, 5, 6) are less than 7, making the outcome Certain (probability of 1).`
    };
  }
];

// ==========================================
// YEAR 8 GENERATORS (20 DISTINCT CONCEPTS)
// ==========================================

const Y8_GENERATORS = [
  // 1. Proportional Ratios
  function genY8Ratios() {
    const p1 = randInt(2, 4);
    const p2 = randInt(3, 5);
    const totalParts = p1 + p2;
    const mult = randInt(4, 9) * 10;
    const totalAmount = totalParts * mult;
    const share1 = p1 * mult;
    const correct = `$${share1}`;
    const w1 = `$${p2 * mult}`;
    const w2 = `$${Math.round(totalAmount / 2)}`;
    const w3 = `$${mult}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Proportional Thinking: Ratios",
      question: `A sustainability grant of $${totalAmount} is shared between the Science Club and the Art Club in the ratio ${p1} : ${p2}. How much does the Science Club receive?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Find the total number of parts (${p1} + ${p2}), divide $${totalAmount} by that number to find 1 part, then multiply by ${p1}.`,
      explanation: `Total parts = ${totalParts}. One part = $${totalAmount} ÷ ${totalParts} = $${mult}. Science Club = ${p1} × $${mult} = ${correct}.`
    };
  },

  // 2. Reverse Percentages
  function genY8ReversePct() {
    const orig = randInt(4, 10) * 20;
    const discPct = 20; // 80% remaining
    const sale = Math.round(orig * 0.8);
    const correct = `$${orig}`;
    const w1 = `$${sale + (sale * 0.2)}`;
    const w2 = `$${sale + 20}`;
    const w3 = `$${orig + 10}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Number: Reverse Percentages",
      question: `A tent is on sale for $${sale} after a 20% discount. What was its original pre-sale price?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `The sale price of $${sale} represents 80% of the original price. Divide by 0.8 to find 100%.`,
      explanation: `80% of original = $${sale}. 1% = $${sale} ÷ 80 = $${sale/80}. 100% = $${sale/80} × 100 = ${correct}.`
    };
  },

  // 3. Integers: Temperature Fluctuation
  function genY8Integers() {
    const start = randInt(-6, -2);
    const rise = randInt(7, 12);
    const finalTemp = start + rise;
    const correct = `${finalTemp}°C`;
    const w1 = `${Math.abs(start) + rise}°C`;
    const w2 = `${start - rise}°C`;
    const w3 = `${finalTemp - 2}°C`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Number: Integers",
      question: `At dawn on Mt Ruapehu, the temperature was ${start}°C. By midday, it had risen by ${rise}°C. What was the midday temperature?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Start at ${start} on the number line and move ${rise} units in the positive direction.`,
      explanation: `${start} + ${rise} = ${correct}.`
    };
  },

  // 4. Algebra: Equations with Brackets
  function genY8Brackets() {
    const x = randInt(4, 9);
    const a = randInt(2, 4);
    const b = randInt(2, 5);
    const rhs = a * (x - b);
    const correct = `x = ${x}`;
    const w1 = `x = ${x + b}`;
    const w2 = `x = ${Math.round(rhs / a)}`;
    const w3 = `x = ${x - 1}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Algebra: Solving Linear Equations",
      question: `Solve for x:  ${a}(x - ${b}) = ${rhs}`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Divide both sides by ${a} first, or expand the bracket ${a}x - ${a * b}.`,
      explanation: `Divide by ${a}: x - ${b} = ${rhs / a}. Add ${b}: x = ${rhs / a} + ${b} = ${x}.`
    };
  },

  // 5. Linear Functions from Tables
  function genY8LinearFunctions() {
    const m = randInt(2, 4);
    const c = randInt(1, 3);
    const correct = `y = ${m}x + ${c}`;
    const w1 = `y = ${m}x - ${c}`;
    const w2 = `y = ${c}x + ${m}`;
    const w3 = `y = ${m + 1}x + ${c}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Algebra: Linear Relationships",
      question: `A table of values shows:\nWhen x = 1, y = ${m + c}\nWhen x = 2, y = ${2*m + c}\nWhen x = 3, y = ${3*m + c}\nWhich equation models this relationship?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Find how much y increases when x increases by 1 (the gradient m). Then find y when x = 0.`,
      explanation: `y increases by ${m} each time (m = ${m}). When x = 0, y = ${c}. Equation is ${correct}.`
    };
  },

  // 6. Measurement: Surface Area of Rectangular Prism
  function genY8SurfaceArea() {
    const l = randInt(3, 5);
    const w = randInt(2, 4);
    const h = randInt(4, 6);
    const sa = 2 * ((l * w) + (l * h) + (w * h));
    const correct = `${sa} cm²`;
    const vol = `${l * w * h} cm²`;
    const w2 = `${sa / 2} cm²`;
    const w3 = `${sa + 12} cm²`;
    const opts = shuffleArray(Array.from(new Set([correct, vol, w2, w3])).slice(0, 4));
    return {
      strand: "Measurement: Surface Area",
      question: `A rectangular wooden block measures ${l} cm long, ${w} cm wide, and ${h} cm high. What is its total surface area?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `A rectangular prism has 6 faces: 2(lw) + 2(lh) + 2(wh).`,
      explanation: `Faces: 2(${l}×${w}) + 2(${l}×${h}) + 2(${w}×${h}) = ${2*l*w} + ${2*l*h} + ${2*w*h} = ${correct}.`
    };
  },

  // 7. Measurement: Volume of Triangular Prism
  function genY8PrismVolume() {
    const b = randInt(4, 8);
    const h = randInt(3, 6);
    const l = randInt(8, 12);
    const vol = (0.5 * b * h) * l;
    const correct = `${vol} cm³`;
    const w1 = `${b * h * l} cm³`;
    const w2 = `${vol / 2} cm³`;
    const w3 = `${vol + 15} cm³`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Measurement: Volume",
      question: `A triangular prism tent has a triangular base with base ${b} m and vertical height ${h} m. The tent is ${l} m long. What is its volume?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Volume = Area of triangular cross-section (½ × base × height) multiplied by length.`,
      explanation: `Triangle area = ½ × ${b} × ${h} = ${0.5 * b * h} m². Volume = ${0.5 * b * h} × ${l} = ${correct}.`
    };
  },

  // 8. Geometry: Parallel Line Transversals
  function genY8Transversals() {
    const obtuse = randInt(110, 145);
    const interior = 180 - obtuse;
    const correct = `${interior}°`;
    const w1 = `${obtuse}°`;
    const w2 = `${90 - (interior % 30)}°`;
    const w3 = `${360 - obtuse}°`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Geometry: Angle Properties",
      question: `Two parallel fence rails are crossed by a diagonal brace. An interior angle on one side is ${obtuse}°. What is the size of its co-interior (consecutive interior) angle?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Co-interior angles between parallel lines add up to 180° (supplementary).`,
      explanation: `Co-interior angles sum to 180°. 180° - ${obtuse}° = ${correct}.`
    };
  },

  // 9. Statistics: Interquartile Range (IQR)
  function genY8IQR() {
    const q1 = randInt(18, 24);
    const iqr = randInt(8, 16);
    const q3 = q1 + iqr;
    const correct = `${iqr}`;
    const w1 = `${q3}`;
    const w2 = `${Math.round((q1 + q3) / 2)}`;
    const w3 = `${iqr + 4}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Statistics: Box Plots",
      question: `A box plot displaying student test scores shows a Lower Quartile (Q1) of ${q1} and an Upper Quartile (Q3) of ${q3}. What is the Interquartile Range (IQR)?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `The Interquartile Range is Upper Quartile minus Lower Quartile (Q3 - Q1).`,
      explanation: `IQR = Q3 - Q1 = ${q3} - ${q1} = ${correct}.`
    };
  },

  // 10. Probability: Compound Events
  function genY8CompoundProb() {
    const correct = "1/12";
    const w1 = "1/8";
    const w2 = "2/12";
    const w3 = "1/6";
    const opts = shuffleArray([correct, w1, w2, w3]);
    return {
      strand: "Probability: Compound Independent Events",
      question: `A fair coin is flipped and a standard 6-sided die is rolled. What is the probability of getting Tails on the coin AND rolling a 4 on the die?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Multiply the probability of the first event (1/2) by the probability of the second event (1/6).`,
      explanation: `P(Tails) = 1/2. P(4) = 1/6. Compound probability = 1/2 × 1/6 = 1/12.`
    };
  },

  // 11. Number: Index Laws (Powers of 10)
  function genY8IndexLaws() {
    const a = randInt(2, 4);
    const b = randInt(3, 5);
    const correct = `10^${a + b}`;
    const w1 = `10^${a * b}`;
    const w2 = `100^${a + b}`;
    const w3 = `10^${Math.abs(a - b)}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Number: Exponents & Indices",
      question: `Simplify using index rules:  10^${a} × 10^${b}`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `When multiplying terms with the same base, add their exponents together.`,
      explanation: `Base is 10. Exponents: ${a} + ${b} = ${a + b}. Result = ${correct}.`
    };
  },

  // 12. Percentages: Percentage Increase
  function genY8PercentageIncrease() {
    const orig = randInt(4, 8) * 10;
    const incPct = randInt(1, 3) * 10;
    const increase = (orig * incPct) / 100;
    const finalVal = orig + increase;
    const correct = `$${finalVal}`;
    const w1 = `$${increase}`;
    const w2 = `$${orig - increase}`;
    const w3 = `$${finalVal + 5}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Number: Percentage Increase",
      question: `The wholesale price of school camp equipment was $${orig}. It increased by ${incPct}%. What is the new price?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Calculate ${incPct}% of $${orig}, then add it to the original cost.`,
      explanation: `${incPct}% of $${orig} = $${increase}. New price = $${orig} + $${increase} = ${correct}.`
    };
  },

  // 13. Algebra: Expanding & Simplifying
  function genY8ExpandSimplify() {
    const a = randInt(2, 3);
    const b = randInt(2, 4);
    const c = randInt(3, 6);
    const d = randInt(1, 2);
    // a(bx + c) - dx  => (a*b - d)x + (a*c)
    const xCoeff = (a * b) - d;
    const constTerm = a * c;
    const correct = `${xCoeff}x + ${constTerm}`;
    const w1 = `${a * b}x + ${constTerm}`;
    const w2 = `${xCoeff}x - ${constTerm}`;
    const w3 = `${(a * b) + d}x + ${constTerm}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Algebra: Expanding & Simplifying",
      question: `Expand and simplify:  ${a}(${b}x + ${c}) - ${d}x`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Multiply ${a} by both terms inside the brackets first, then combine like x-terms.`,
      explanation: `Expand: ${a * b}x + ${constTerm}. Combine: (${a * b}x - ${d}x) + ${constTerm} = ${correct}.`
    };
  },

  // 14. Worded Linear Equations
  function genY8WordedEquation() {
    const fixed = randInt(15, 30);
    const perHour = randInt(8, 12);
    const hours = randInt(3, 6);
    const total = fixed + (perHour * hours);
    const correct = `${hours} hours`;
    const w1 = `${hours + 1} hours`;
    const w2 = `${hours - 1} hours`;
    const w3 = `${Math.round(total / perHour)} hours`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Algebra: Applied Equations",
      question: `Hiring a kayak costs a $${fixed} base booking fee plus $${perHour} per hour. If Tama paid $${total} in total, for how many hours did he hire the kayak?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Set up the equation: ${perHour}h + ${fixed} = ${total}. Subtract ${fixed}, then divide by ${perHour}.`,
      explanation: `${perHour}h = ${total} - ${fixed} = ${total - fixed}. h = ${total - fixed} ÷ ${perHour} = ${correct}.`
    };
  },

  // 15. Geometry: Circumference of a Circle
  function genY8Circumference() {
    const r = randInt(4, 10);
    const c = (2 * 3.14 * r).toFixed(1);
    const correct = `${c} cm`;
    const w1 = `${(3.14 * r * r).toFixed(1)} cm`;
    const w2 = `${(3.14 * r).toFixed(1)} cm`;
    const w3 = `${(2 * 3.14 * (r + 1)).toFixed(1)} cm`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Measurement: Circles",
      question: `A circular target has a radius of ${r} cm. Using π ≈ 3.14, calculate the circumference of the target (to 1 decimal place).`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Circumference = 2 × π × r.`,
      explanation: `C = 2 × 3.14 × ${r} = ${correct}.`
    };
  },

  // 16. Rates: Multi-Leg Average Speed
  function genY8AverageSpeed() {
    const d1 = 60;
    const t1 = 1; // hr
    const d2 = 80;
    const t2 = 1; // hr
    const totalD = d1 + d2;
    const totalT = t1 + t2;
    const avg = totalD / totalT;
    const correct = `${avg} km/h`;
    const w1 = `${(d1 + d2) / 1} km/h`;
    const w2 = `${avg + 10} km/h`;
    const w3 = `${d2 - d1} km/h`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Proportional Thinking: Rates",
      question: `A school bus travels ${d1} km in the first hour and ${d2} km in the second hour. What was the average speed across the entire 2-hour trip?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Average speed = Total distance divided by Total time.`,
      explanation: `Total distance = ${totalD} km. Total time = 2 hours. Average speed = ${totalD} ÷ 2 = ${correct}.`
    };
  },

  // 17. Geometry: Quadrilateral Angle Sum
  function genY8QuadAngles() {
    const a1 = randInt(85, 110);
    const a2 = randInt(70, 95);
    const a3 = randInt(80, 105);
    const missing = 360 - (a1 + a2 + a3);
    const correct = `${missing}°`;
    const w1 = `${180 - missing}°`;
    const w2 = `${missing + 15}°`;
    const w3 = `${missing - 10}°`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Geometry: Quadrilaterals",
      question: `Three interior angles of a quadrilateral measure ${a1}°, ${a2}°, and ${a3}°. What is the size of the fourth angle?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `The four interior angles of any quadrilateral always add up to 360°.`,
      explanation: `Sum = 360°. Fourth angle = 360° - (${a1}° + ${a2}° + ${a3}°) = 360° - ${a1 + a2 + a3}° = ${correct}.`
    };
  },

  // 18. Geometry: Pythagorean Triples
  function genY8Pythagoras() {
    const pairs = [
      { a: 3, b: 4, c: 5 },
      { a: 6, b: 8, c: 10 },
      { a: 5, b: 12, c: 13 }
    ];
    const pick = pairs[randInt(0, pairs.length - 1)];
    const correct = `${pick.c} cm`;
    const w1 = `${pick.a + pick.b} cm`;
    const w2 = `${pick.c + 2} cm`;
    const w3 = `${pick.b + 1} cm`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Geometry: Pythagoras' Theorem",
      question: `A right-angled triangle has shorter legs of length ${pick.a} cm and ${pick.b} cm. What is the length of the hypotenuse?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Use Pythagoras: a² + b² = c². Calculate ${pick.a}² + ${pick.b}², then find the square root.`,
      explanation: `${pick.a}² + ${pick.b}² = ${pick.a*pick.a} + ${pick.b*pick.b} = ${pick.c*pick.c}. √${pick.c*pick.c} = ${correct}.`
    };
  },

  // 19. Statistics: Frequency Tables
  function genY8FrequencyTable() {
    const count1 = randInt(4, 7);
    const count2 = randInt(5, 9);
    const totalStudents = count1 + count2;
    const totalSiblings = (count1 * 1) + (count2 * 2);
    const mean = (totalSiblings / totalStudents).toFixed(1);
    const correct = `${mean}`;
    const w1 = `1.5`;
    const w2 = `${(Number(mean) + 0.4).toFixed(1)}`;
    const w3 = `${(Number(mean) - 0.3).toFixed(1)}`;
    const opts = shuffleArray(Array.from(new Set([correct, w1, w2, w3])).slice(0, 4));
    return {
      strand: "Statistics: Weighted Mean",
      question: `In a survey of ${totalStudents} students: ${count1} students have 1 sibling, and ${count2} students have 2 siblings. What is the mean number of siblings per student (to 1 decimal place)?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Calculate total siblings: (${count1} × 1) + (${count2} × 2), then divide by ${totalStudents}.`,
      explanation: `Total siblings = ${totalSiblings}. Mean = ${totalSiblings} ÷ ${totalStudents} = ${correct}.`
    };
  },

  // 20. Probability: Two-Way Tables
  function genY8TwoWayTable() {
    const art = 14;
    const music = 16;
    const total = 30;
    const correct = "14/30 (7/15)";
    const w1 = "16/30 (8/15)";
    const w2 = "14/16 (7/8)";
    const w3 = "1/2";
    const opts = shuffleArray([correct, w1, w2, w3]);
    return {
      strand: "Probability: Two-Way Tables",
      question: `A class of 30 students selects one elective: 14 choose Art and 16 choose Music. What is the probability that a randomly chosen student is taking Art?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      hint: `Divide the number of students taking Art by the total number of students, then simplify.`,
      explanation: `P(Art) = 14/30 = 7/15.`
    };
  }
];

// ==========================================
// PUBLIC EXPORT FUNCTION
// ==========================================

/**
 * Returns 20 freshly calculated questions for Year 7 or Year 8.
 * @param {number} year - 7 or 8
 * @returns {Array} Array of question objects
 */
function getMathQuestions(year) {
  const generators = (year === 8) ? Y8_GENERATORS : Y7_GENERATORS;
  return generators.map((gen, idx) => {
    const q = gen();
    q.id = `math_y${year}_${idx + 1}`;
    q.year = year;
    q.subject = "math";
    q.passage = null;
    return q;
  });
}