import { inputs } from '../index';

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

      elements.forEach((element) => {
        element.classList.replace(checkedValue, inputValue);
      });
    });
  }
};

window.onload = () => {
  checkedInputHandler();
  changeThemeHandler();
};
