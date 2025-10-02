// =============================
// Part 2: Functions, Scope, Return Values
// =============================

// Global variable
let base = 8;

// Function with parameters & return value
function multiplyNumbers(a, b) {
  let result = a * b; // local scope
  return result;
}

// Function showing calculation
function showCalculation() {
  let answer = multiplyNumbers(base, 9);
  document.getElementById("calcResult").innerText =
    `Result: ${base} × 9 = ${answer}`;
}

// =============================
// Part 3: Combining CSS + JS
// =============================

// Animate box with button
const animateBtn = document.getElementById("animateBtn");
const animatedBox = document.getElementById("animatedBox");

animateBtn.addEventListener("click", () => {
  animatedBox.classList.toggle("animate");
});

// Modal logic
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

toggleModalBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
