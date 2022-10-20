'use strict';

// Variables
let firstOperand = '';
let secondOperand = '';
let operatorSymbol;
const firstOperandScreen = document.getElementById('first-operand');
const secondOperandScreen = document.getElementById('second-operand');
const clearButton = document.querySelector('.clear-btn');
const deleteButton = document.querySelector('.delete-btn');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.getElementById('equals-btn');

// Number buttons eventListener
numberButtons.forEach((btn) =>
  btn.addEventListener('click', () => {
    appendNumber(btn.textContent);
  })
);

// Operator buttons eventListener
operatorButtons.forEach((btn) =>
  btn.addEventListener('click', () => {
    clickOperatorButton(btn.textContent);
  })
);

// Equals button eventListener
equalsButton.addEventListener('click', () => {
  setOperation();
});

// Append number function
const appendNumber = function (num) {
  secondOperandScreen.textContent += num;
};

// Click operator symbols
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
