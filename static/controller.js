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
for (let i = 0; i < 7; i++) {
  buttonElements.push(document.getElementById(button[i] + "Button"));
}
for (let i = 0; i < button.length; i++) {
  if (buttonElements[i] !== null) {
    if (i < 5) {
      buttonElements[i].addEventListener("click", function () {
        toggleButton(controller, i);
        let now = new Date();
        console.log(now.getSeconds() + " click")
        event.stopPropagation();
      });
      buttonElements[i].addEventListener("mouseup", function () {
        toggleButton(controller, i);
        let now = new Date();
        console.log(now.getSeconds() + " mouseup")
        event.stopPropagation();
      });
    } else {
      buttonElements[i].addEventListener("click", function () {
        toggleButton(controller, i - 5);
        toggleButton(controller, i - 3);
      });
      buttonElements[i].addEventListener("mouseup", function () {
        toggleButton(controller, i - 5);
        toggleButton(controller, i - 3);
      });
    }
  }
}

function toggleButton(controller, button) {
  fetch(API_URL + "?controller=" + controller + "&button=" + button);
}
