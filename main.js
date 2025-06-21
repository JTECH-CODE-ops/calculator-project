let display = '';

function appendNumber(num) {
  displayValue += num.toString();
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function calculate(operator) {
  displayValue += operator;
  updateDisplay();
  console.log(calculate)
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'wrong';
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = ' ';
  updateDisplay();
  
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}