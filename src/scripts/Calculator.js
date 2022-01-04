import { currNumber, prevNumber } from '../index';

export default class Calculator {
  constructor(currNumber, prevNumber) {
    this.currentNumber = currNumber;
    this.previousNumber = prevNumber;
    this.clear();
  }

  clear() {
    this.currentNumber = '';
    this.previousNumber = '';
    this.operator = '';
  }

  delete() {
    this.currentNumber = this.currentNumber.toString().slice(0, -1);
  }

  displayNumber(number) {
    if (number === '.' && this.currentNumber.includes('.')) return;

    this.currentNumber = this.currentNumber.toString() + number.toString();
  }

  chooseOperator(operator) {
    if (this.currentNumber === '') return;
    if (this.previousNumber !== '') {
      this.compute();
    }

    this.operator = operator;
    this.previousNumber = this.currentNumber;
    this.currentNumber = '';
  }

  compute() {
    let computation;

    const prev = parseFloat(this.previousNumber);
    const current = parseFloat(this.currentNumber);

    if (isNaN(prev) || isNaN(current)) return;

    computation = eval(`${prev} ${this.operator} ${current}`);

    this.currentNumber = computation;
    this.operator = '';
    this.previousNumber = '';
  }

  updateDisplay() {
    currNumber.innerText = this.currentNumber;
    if (this.operator != null) {
      prevNumber.innerText = `${this.previousNumber} ${this.operator}`;
    }
  }
}
