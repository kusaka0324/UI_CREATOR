const API_URL = "http://54.249.130.95/controller/change-status";
const controller = document.title.slice(-1);

const button = ["Forward", "Reverse", "rightTurn", "leftTurn", "speedBoost"];
let buttonElements = [];
for (let i = 0; i < button.length; i++) {
  buttonElements.push(document.getElementById(button[i] + "Button"));
}
for (let i = 0; i < button.length; i++) {
  if (buttonElements[i] !== null) {
    switch (i) {
      case 0:
        buttonElements[i].addEventListener("touchstart", function () {
          toggleButton(controller, 0);
          toggleButton(controller, 2);
        });
        buttonElements[i].addEventListener("touchend", function () {
          toggleButton(controller, 0);
          toggleButton(controller, 2);
        });
        break;
      case 1:
        buttonElements[i].addEventListener("touchstart", function () {
          toggleButton(controller, 1);
          toggleButton(controller, 3);
        });
        buttonElements[i].addEventListener("touchend", function () {
          toggleButton(controller, 1);
          toggleButton(controller, 3);
        });
        break;
      case 2:
        buttonElements[i].addEventListener("touchstart", function () {
          toggleButton(controller, 0);
          toggleButton(controller, 3);
        });
        buttonElements[i].addEventListener("touchend", function () {
          toggleButton(controller, 0);
          toggleButton(controller, 3);
        });
        break;
      case 3:
        buttonElements[i].addEventListener("touchstart", function () {
          toggleButton(controller, 1);
          toggleButton(controller, 2);
        });
        buttonElements[i].addEventListener("touchend", function () {
          toggleButton(controller, 1);
          toggleButton(controller, 2);
        });
        break;
      case 4:
        buttonElements[i].addEventListener("touchstart", function () {
          toggleButton(controller, 4);
        });
        buttonElements[i].addEventListener("touchend", function () {
          toggleButton(controller, 4);
        });
        break;
    }
  }
}

function toggleButton(controller, button) {
  fetch(API_URL + "?controller=" + controller + "&button=" + button);
}
