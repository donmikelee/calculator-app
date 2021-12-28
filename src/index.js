const body = document.body;
const screen = document.getElementById('screen');

const deleteButton = document.querySelector('.calc-button[name="delete"]');
const resetButton = document.querySelector('.calc-button[name="reset"]');
const equalButton = document.querySelector('.calc-button[name="equal"]');

const inputs = document.querySelectorAll('input[name="toggle"]');
const buttons = document.querySelectorAll('.calc-button[name="cypher"]');
const operators = document.querySelectorAll('.calc-button[name="operator"]');

let checkedValue = '';

const checkedInputHandler = () => {
  setInterval(() => {
    checkedValue = document.querySelector('input[name="toggle"]:checked').value;
  }, 500);
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

const displayNumbers = () => {
  for (let button of buttons) {
    button.onclick = function () {
      let clickedNumber = this.innerHTML;

      if (screen.innerHTML.length > 13) {
        screen.innerHTML = 'error';
      } else {
        screen.innerHTML += clickedNumber;
      }

      if (screen.innerHTML === 'error') {
        screen.innerHTML = null;
        screen.innerHTML += clickedNumber;
      }
    };
  }
};

const displayOperator = () => {
  for (let operator of operators) {
    operator.onclick = function () {
      let clickedOperator = this.innerHTML;

      console.log(clickedOperator);

      screen.innerHTML += clickedOperator;
    };
  }
};

const clearScreen = () => {
  resetButton.onclick = () => {
    updateScreen(null);
  };
};

const doMathOperation = () => {
  equalButton.onclick = () => {
    const finalNumber = eval(screen.innerHTML);

    screen.innerHTML = finalNumber;
  };
};

const updateScreen = (value) => {
  screen.innerHTML = value;
};

window.onload = () => {
  checkedInputHandler();
  changeThemeHandler();
  displayNumbers();
  displayOperator();
  clearScreen();
  doMathOperation();
};
