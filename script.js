'use strict';

// Variables
let firstOperand = '';
let secondOperand = '';
let operatorSymbol;
let calculationResult;
const firstOperandScreen = document.getElementById('first-operand');
const secondOperandScreen = document.getElementById('second-operand');
const clearButton = document.querySelector('.clear-btn');
const deleteButton = document.querySelector('.delete-btn');
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
  firstOperandScreen.textContent = `${firstOperand}${operatorSymbol}${secondOperand}`;
  secondOperandScreen.textContent = calculationResult;
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

const appendNumber = function (num) {
  secondOperandScreen.textContent += num;
};
