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
const appendNumber = function (num) {
  secondOperandScreen.textContent += num;
};

const clickOperatorButton = function (operator) {
  if (secondOperandScreen.textContent == '') return;
  if (calculationResult) {
    firstOperand = calculationResult;
  }

  firstOperand = secondOperandScreen.textContent;
  firstOperandScreen.textContent = `${firstOperand}${operator}`;
  secondOperandScreen.textContent = '';
  operatorSymbol = operator;
};

const evaluate = function () {
  if (operatorSymbol == '÷' && secondOperandScreen.textContent == 0) {
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
    case '÷':
      calculationResult = firstOperantToNumber / secondOperantToNumber;
  }
  operationEvaluated = true;
  firstOperandScreen.textContent = `${firstOperand}${operatorSymbol}${secondOperand}=`;

  secondOperandScreen.textContent = calculationResult.toFixed(1);

  if (secondOperandScreen.textContent.includes('.0')) {
    secondOperandScreen.textContent = calculationResult.toFixed(0);
  }
};

const clearAll = function () {
  firstOperand = '';
  secondOperand = '';
  firstOperandScreen.textContent = '';
  secondOperandScreen.textContent = '';
  operatorSymbol = '';
  calculationResult = '';
  operationEvaluated = false;
};

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
pointButton.addEventListener('click', () => {
  if (secondOperandScreen.textContent.includes('.')) return;
  secondOperandScreen.textContent += '.';
});
