const body = document.body;
const screen = document.getElementById("screen");
const deleteButton = document.querySelector('.calc-button[name="delete"]');

const inputs = document.querySelectorAll('input[name="toggle"]');
const buttons = document.querySelectorAll('.calc-button[name="cypher"]');

let checkedValue = "";

const checkedInputHandler = () => {
  setInterval(() => {
    checkedValue = document.querySelector('input[name="toggle"]:checked').value;
  }, 500);
};

const changeThemeHandler = () => {
  for (let input of inputs) {
    input.addEventListener("change", function () {
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

      screen.innerHTML += clickedNumber;
    };
  }
};

const clearScreen = () => {
  deleteButton.onclick = () => {
    screen.innerHTML = null;

    console.log("Klick");
  };
};

window.onload = () => {
  checkedInputHandler();
  changeThemeHandler();
  displayNumbers();
  clearScreen();
};
