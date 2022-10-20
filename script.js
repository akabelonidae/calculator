// Welcome to my spaghetti js! Sorry for this messy code :()
'use strict';

// Variables
let firstOperand = '';
let secondOperand = '';
let operatorSymbol;
let calculationResult;
let operationEvaluated = false;

const firstOperandScreen = document.getElementById('first-operand');
const secondOperandScreen = document.getElementById('second-operand');
const clearButton = document.getElementById('clear-btn');
const deleteButton = document.getElementById('delete-btn');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.getElementById('equals-btn');
const pointButton = document.getElementById('point-button');

// Functions
function appendNumber(num) {
  secondOperandScreen.textContent += num;
}

function clickOperatorButton(operator) {
  if (secondOperandScreen.textContent == '') return;

  firstOperand = secondOperandScreen.textContent;
  firstOperandScreen.textContent = `${firstOperand}${operator}`;
  secondOperandScreen.textContent = '';
  operatorSymbol = operator;
}

function evaluate() {
  if (operatorSymbol == '/' && secondOperandScreen.textContent == 0) {
    clearAll();
    return alert(`You can't divide with 0!`);
  }
  secondOperand = secondOperandScreen.textContent;
  const firstOperantToNumber = Number(firstOperand);
  const secondOperantToNumber = Number(secondOperand);

  switch (operatorSymbol) {
    case '+':
      calculationResult = firstOperantToNumber + secondOperantToNumber;
      break;
    case '-':
      calculationResult = firstOperantToNumber - secondOperantToNumber;
      break;
    case '*':
      calculationResult = firstOperantToNumber * secondOperantToNumber;
      break;
    case '/':
      calculationResult = firstOperantToNumber / secondOperantToNumber;
  }
  operationEvaluated = true;
  firstOperandScreen.textContent = `${firstOperand}${operatorSymbol}${secondOperand}=`;

  secondOperandScreen.textContent = calculationResult.toFixed(2);

  if (secondOperandScreen.textContent.includes('.0')) {
    secondOperandScreen.textContent = calculationResult.toFixed(0);
  }
}

function clearAll() {
  firstOperand = '';
  secondOperand = '';
  firstOperandScreen.textContent = '';
  secondOperandScreen.textContent = '';
  operatorSymbol = '';
  calculationResult = '';
  operationEvaluated = false;
}
function deleteNumber() {
  secondOperandScreen.textContent = secondOperandScreen.textContent
    .toString()
    .slice(0, -1);
}
function appendPointSymbol() {
  if (secondOperandScreen.textContent.includes('.')) return;
  secondOperandScreen.textContent += '.';
}

// Button event listeners
numberButtons.forEach((btn) =>
  btn.addEventListener('click', () => {
    appendNumber(btn.textContent);
  })
);

operatorButtons.forEach((btn) =>
  btn.addEventListener('click', () => {
    clickOperatorButton(btn.textContent);
  })
);

equalsButton.addEventListener('click', () => {
  evaluate();
});

clearButton.addEventListener('click', () => {
  clearAll();
});

deleteButton.addEventListener('click', () => {
  if (operationEvaluated) clearAll();
  deleteNumber();
});
pointButton.addEventListener('click', appendPointSymbol);

// Keyboard functions
function keyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === 'Enter') evaluate();
  if (e.key === 'Escape') clearAll();
  if (e.key === 'Backspace') deleteNumber();
  if (e.key === '.') appendPointSymbol();
  if (e.key === '-') clickOperatorButton('-');
  if (e.key === '+') clickOperatorButton('+');
  if (e.key === '*') clickOperatorButton('*');
  if (e.key === '/') clickOperatorButton('/');
}

window.addEventListener('keydown', keyboardInput);
