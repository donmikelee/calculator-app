class Calculator {
  constructor(currNumber, prevNumber) {
    this.currentNumber = currNumber;
    this.previousNumber = prevNumber;
    this.clear();
  }

  clear() {
    this.currentNumber = '';
    this.previousNumber = '';
    this.operator = undefined;
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

const deleteButton = document.querySelector('.calc-button[name="delete"]');
const resetButton = document.querySelector('.calc-button[name="reset"]');
const equalButton = document.querySelector('.calc-button[name="equal"]');

const currNumber = document.querySelector('.current-number');
const prevNumber = document.querySelector('.previous-number');

const inputs = document.querySelectorAll('input[name="toggle"]');
const numberButtons = document.querySelectorAll('.calc-button[name="cypher"]');
const operators = document.querySelectorAll('.calc-button[name="operator"]');
const equal = document.querySelector('.calc-button[name="equal"]');

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

equal.onclick = () => {
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

let checkedValue = '';

const checkedInputHandler = () => {
  setInterval(() => {
    checkedValue = document.querySelector('input[name="toggle"]:checked').value;
  }, 100);
};

const changeThemeHandler = () => {
  for (let input of inputs) {
    input.addEventListener('change', function () {
      let inputValue = this.value;

      const elements = document.querySelectorAll(`.${checkedValue}`);

      for (element of elements) {
        element.classList.replace(checkedValue, inputValue);
      }
    });
  }
};

window.onload = () => {
  checkedInputHandler();
  changeThemeHandler();
};
