'use strict';

// Variables
let firstOperand = '';
let secondOperand = '';
let operatorSymbol;
let calculationResult;
const firstOperandScreen = document.getElementById('first-operand');
const secondOperandScreen = document.getElementById('second-operand');
const clearButton = document.getElementById('clear-btn');
const deleteButton = document.getElementById('delete-btn');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.getElementById('equals-btn');

// Operator function
const clickOperatorButton = function (operator) {
  if (
    !firstOperandScreen.textContent == '' ||
    secondOperandScreen.textContent == ''
  )
    return;

  firstOperand = secondOperandScreen.textContent;
  firstOperandScreen.textContent = `${secondOperandScreen.textContent}${operator}`;
  secondOperandScreen.textContent = '';
  operatorSymbol = operator;
};

// Evaluate function
const evaluate = function () {
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
    case '÷':
      calculationResult = firstOperantToNumber / secondOperantToNumber;
  }
  firstOperandScreen.textContent = `${firstOperand}${operatorSymbol}${secondOperand}=`;
  secondOperandScreen.textContent = calculationResult;
};
//
// Clear function
const clearAll = function () {
  firstOperand = '';
  secondOperand = '';
  firstOperandScreen.textContent = '';
  secondOperandScreen.textContent = '';
  operatorSymbol = '';
  calculationResult = '';
};

// Delete function
const deleteNumber = function () {
  secondOperandScreen.textContent = secondOperandScreen.textContent
    .toString()
    .slice(0, -1);
};
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

const appendNumber = function (num) {
  secondOperandScreen.textContent += num;
};
equalsButton.addEventListener('click', () => {
  evaluate();
});

clearButton.addEventListener('click', () => {
  clearAll();
});

deleteButton.addEventListener('click', () => {
  deleteNumber();
});
