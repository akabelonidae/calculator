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
  if (calculationResult) return;
  secondOperandScreen.textContent += num;
};

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

const evaluate = function () {
  if (operatorSymbol == '÷' && secondOperand == 0) {
    clearAll();
    return alert(`You can't divide with 0!`);
  } else if (calculationResult) return;

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

  secondOperandScreen.textContent = calculationResult.toFixed(2);
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
