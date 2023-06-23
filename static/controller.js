const API_URL = "http://54.249.130.95/controller/change-status";
const controller = document.title.slice(-1);

const button = [
  "leftForward",
  "leftReverse",
  "rightForward",
  "rightReverse",
  "speedBoost",
  "rightTurn",
  "leftTurn",
];
let buttonElements = [];
for (let i = 0; i < button.length; i++) {
  buttonElements.push(document.getElementById(button[i] + "Button"));
}
for (let i = 0; i < button.length; i++) {
  if (buttonElements[i] !== null) {
    if (i < 5) {
      buttonElements[i].addEventListener("touchstart", function () {
        toggleButton(controller, i);
      });
      buttonElements[i].addEventListener("touchend", function () {
        toggleButton(controller, i);
      });
    } else {
      buttonElements[i].addEventListener("touchstart", function () {
        toggleButton(controller, i - 5);
        toggleButton(controller, -1 * i + 8);
      });
      buttonElements[i].addEventListener("touchend", function () {
        toggleButton(controller, i - 5);
        toggleButton(controller, -1 * i + 8);
      });
    }
  }
}

function toggleButton(controller, button) {
  fetch(API_URL + "?controller=" + controller + "&button=" + button);
}
