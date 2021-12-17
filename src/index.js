const body = document.body;
const inputs = document.querySelectorAll('input[name="toggle"]');
let checkedValue = "";

const checkedInputHandler = () => {
  setInterval(() => {
    checkedValue = document.querySelector('input[name="toggle"]:checked').value;
  }, 500);
};

window.addEventListener("load", checkedInputHandler());

window.addEventListener("load", () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", function () {
      let input = this.value;

      const elements = document.querySelectorAll(`.${checkedValue}`);

      for (element of elements) {
        element.classList.replace(checkedValue, input);
      }
    });
  }
});
