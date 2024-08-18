let currentInput = ""; // Stores the current number input
let previousInput = ""; // Stores the previous number input
let operation = null; // Stores the chosen operation

// Selecting all buttons and the screen
const buttons = document.querySelectorAll(".cell");
const result = document.querySelector(".screen");
const reset = document.querySelector(".reset");
const del = document.querySelector(".del");
const equals = document.querySelector(".equals");

// Function to update the screen
function updateScreen(value) {
  result.textContent = value;
}

// Handle number and operation button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    if ((buttonValue >= "0" && buttonValue <= "9") || buttonValue === ".") {
      currentInput += buttonValue;
      updateScreen(currentInput);
    } else if (["+", "-", "*", "/"].includes(buttonValue)) {
      operation = buttonValue;
      previousInput = currentInput;
      currentInput = "";
    }
  });
});

// Handle the equals button
equals.addEventListener("click", () => {
  if (previousInput && currentInput && operation) {
    const calculation = eval(`${previousInput} ${operation} ${currentInput}`);
    updateScreen(calculation);
    currentInput = calculation;
    previousInput = "";
    operation = null;
  }
});

// Handle the reset button
reset.addEventListener("click", () => {
  currentInput = "";
  previousInput = "";
  operation = null;
  updateScreen(0);
});

// Handle the delete button
del.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  updateScreen(currentInput || 0);
});
