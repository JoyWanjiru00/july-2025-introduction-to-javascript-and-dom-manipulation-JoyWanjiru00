// -------------------------
// Part 1: Variables & Conditionals
// -------------------------
let userName = "Alice";
let userAge = 20;

if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// -------------------------
// Part 2: Functions
// -------------------------
function greetUser(name) {
  return `Hello, ${name}! Welcome to the site.`;
}

function calculateSum(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

// -------------------------
// Part 3: Loops
// -------------------------
// For loop
function showNumbersForLoop(limit) {
  let nums = [];
  for (let i = 1; i <= limit; i++) {
    nums.push(i);
  }
  return nums;
}

// While loop
function countdown(start) {
  let result = [];
  let i = start;
  while (i > 0) {
    result.push(i);
    i--;
  }
  return result;
}

// -------------------------
// Part 4: DOM Interactions
// -------------------------
document.getElementById("greetBtn").addEventListener("click", function () {
  document.getElementById("output").textContent = greetUser(userName);
});

document.getElementById("calcBtn").addEventListener("click", function () {
  let numbers = [5, 10, 15];
  document.getElementById("output").textContent = `Sum is ${calculateSum(numbers)}`;
});

document.getElementById("listBtn").addEventListener("click", function () {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear existing
  let nums = showNumbersForLoop(5);
  nums.forEach(num => {
    let li = document.createElement("li");
    li.textContent = num;
    list.appendChild(li);
  });
});

// Live Countdown (while loop + setInterval)
document.getElementById("countdownBtn").addEventListener("click", function () {
  let start = 5;
  let output = document.getElementById("output");
  let i = start;

  let timer = setInterval(() => {
    if (i > 0) {
      output.textContent = `Countdown: ${i}`;
      i--;
    } else {
      output.textContent = "🚀 Lift off!";
      clearInterval(timer);
    }
  }, 1000);
});
