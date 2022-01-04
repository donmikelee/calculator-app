import Calculator from './Calculator';

import {
  currNumber,
  prevNumber,
  deleteButton,
  resetButton,
  equalButton,
  numberButtons,
  operators,
} from '../index';

const calculator = new Calculator(currNumber, prevNumber);

numberButtons.forEach((button) => {
  button.onclick = () => {
    calculator.displayNumber(button.innerText);
    calculator.updateDisplay();
  };
});

operators.forEach((button) => {
  button.onclick = () => {
    calculator.chooseOperator(button.innerText);
    calculator.updateDisplay();
  };
});

equalButton.onclick = () => {
  calculator.compute();
  calculator.updateDisplay();
};

resetButton.onclick = () => {
  calculator.clear();
  calculator.updateDisplay();
};

deleteButton.onclick = () => {
  calculator.delete();
  calculator.updateDisplay();
};
