// ============================
// Protein calculator
// ============================

function calculateNutrition() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if (!weight || !height) {
    alert("Enter weight and height");
    return;
  }

  let protein = (weight * 1.6).toFixed(1);
  let carbs = (weight * 3).toFixed(1);
  let fiber = (weight * 0.4).toFixed(1);

  document.getElementById("protein").innerText =
    "Protein: " + protein + " g/day";
  document.getElementById("carbs").innerText = "Carbs: " + carbs + " g/day";
  document.getElementById("fiber").innerText = "Fiber: " + fiber + " g/day";
}

// ============================
// FOOD DATABASE
// ============================

// ============================
// FOOD DATABASE (per 100g)
// ============================

const foodDB = {
  egg: { per: 100, protein: 13, carbs: 1.1, fiber: 0, calories: 155 },

  banana: { per: 100, protein: 1.1, carbs: 23, fiber: 2.6, calories: 96 },

  apple: { per: 100, protein: 0.3, carbs: 14, fiber: 2.4, calories: 52 },

  chicken: { per: 100, protein: 27, carbs: 0, fiber: 0, calories: 239 },

  rice: { per: 100, protein: 2.7, carbs: 28, fiber: 0.4, calories: 130 },

  bread: { per: 100, protein: 9, carbs: 49, fiber: 2.7, calories: 265 },

  milk: { per: 100, protein: 3.4, carbs: 5, fiber: 0, calories: 42 },

  paneer: { per: 100, protein: 18, carbs: 3, fiber: 0, calories: 265 },

  dal: { per: 100, protein: 9, carbs: 20, fiber: 8, calories: 230 },

  oats: { per: 100, protein: 17, carbs: 66, fiber: 10, calories: 389 },

  almonds: { per: 100, protein: 21, carbs: 22, fiber: 12, calories: 579 },

  peanut: { per: 100, protein: 26, carbs: 16, fiber: 8, calories: 567 },

  cashew: { per: 100, protein: 18, carbs: 30, fiber: 3, calories: 553 },

  walnut: { per: 100, protein: 15, carbs: 14, fiber: 7, calories: 654 },

  soybean: { per: 100, protein: 36, carbs: 30, fiber: 9, calories: 446 },

  tofu: { per: 100, protein: 8, carbs: 2, fiber: 1, calories: 76 },

  cheese: { per: 100, protein: 25, carbs: 1.3, fiber: 0, calories: 402 },

  yogurt: { per: 100, protein: 10, carbs: 3.6, fiber: 0, calories: 59 },

  potato: { per: 100, protein: 2, carbs: 17, fiber: 2.2, calories: 77 },

  sweet_potato: { per: 100, protein: 1.6, carbs: 20, fiber: 3, calories: 86 },

  tomato: { per: 100, protein: 0.9, carbs: 3.9, fiber: 1.2, calories: 18 },

  onion: { per: 100, protein: 1.1, carbs: 9.3, fiber: 1.7, calories: 40 },

  carrot: { per: 100, protein: 0.9, carbs: 10, fiber: 2.8, calories: 41 },

  broccoli: { per: 100, protein: 2.8, carbs: 7, fiber: 2.6, calories: 34 },

  spinach: { per: 100, protein: 2.9, carbs: 3.6, fiber: 2.2, calories: 23 },

  cabbage: { per: 100, protein: 1.3, carbs: 6, fiber: 2.5, calories: 25 },

  cauliflower: { per: 100, protein: 1.9, carbs: 5, fiber: 2, calories: 25 },

  mushroom: { per: 100, protein: 3.1, carbs: 3.3, fiber: 1, calories: 22 },

  corn: { per: 100, protein: 3.4, carbs: 19, fiber: 2.7, calories: 96 },

  peas: { per: 100, protein: 5.4, carbs: 14, fiber: 5, calories: 81 },

  lentils: { per: 100, protein: 9, carbs: 20, fiber: 8, calories: 230 },

  chickpeas: { per: 100, protein: 19, carbs: 61, fiber: 17, calories: 364 },

  kidney_beans: { per: 100, protein: 24, carbs: 60, fiber: 25, calories: 333 },

  black_beans: { per: 100, protein: 21, carbs: 63, fiber: 16, calories: 339 },

  pasta: { per: 100, protein: 5, carbs: 25, fiber: 1.3, calories: 131 },

  noodles: { per: 100, protein: 4.5, carbs: 25, fiber: 1.2, calories: 138 },

  burger: { per: 100, protein: 17, carbs: 30, fiber: 2, calories: 295 },

  pizza: { per: 100, protein: 11, carbs: 33, fiber: 2.3, calories: 266 },

  sandwich: { per: 100, protein: 12, carbs: 30, fiber: 3, calories: 250 },

  chocolate: { per: 100, protein: 7.8, carbs: 59, fiber: 11, calories: 546 },

  icecream: { per: 100, protein: 3.5, carbs: 24, fiber: 0, calories: 207 },
};

// ============================
// FOOD ANALYZER (MANUAL)
// ============================

function analyzeFood() {
  let food = document.getElementById("foodName").value.toLowerCase();

  if (!food) {
    alert("Enter food name");
    return;
  }

  let data = foodDB[food];

  if (!data) {
    document.getElementById("foodResult").innerHTML = `
<h3>Food not found</h3>
<p>Try: egg, rice, banana, apple, oats etc</p>
`;

    return;
  }

  // RESULT SHOW

  document.getElementById("foodResult").innerHTML = `

<h3>${food.toUpperCase()}</h3>

<p>Protein: ${data.protein} g</p>

<p>Carbs: ${data.carbs} g</p>

<p>Fiber: ${data.fiber} g</p>

<p>Calories: ${data.calories} kcal</p>

`;

  addProtein(data.protein);
}
function analyzeFoodManual() {
  let food = document.getElementById("foodName").value.toLowerCase();
  let grams = document.getElementById("foodGram").value;

  if (!foodDB[food]) {
    alert("Food not found");
    return;
  }

  let data = foodDB[food];

  let factor = grams / data.per;

  let protein = (data.protein * factor).toFixed(1);
  let carbs = (data.carbs * factor).toFixed(1);
  let fiber = (data.fiber * factor).toFixed(1);
  let calories = (data.calories * factor).toFixed(1);

  document.getElementById("foodResult").innerHTML = `
<h3>${grams}g ${food}</h3>
Protein: ${protein} g <br>
Carbs: ${carbs} g <br>
Fiber: ${fiber} g <br>
Calories: ${calories} kcal
`;
}

// ============================
// GAMIFICATION SYSTEM
// ============================

let todayProtein = 0;
let xp = 0;
let goal = 100;

function addProtein(amount) {
  todayProtein += amount;

  document.getElementById("todayProtein").innerText = todayProtein;

  if (todayProtein >= goal) {
    xp += 50;

    alert("🎉 Protein Goal Completed! +50 XP");
  }

  document.getElementById("xp").innerText = xp;
}
