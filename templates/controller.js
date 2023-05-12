const API_URL = "http://54.249.130.95:81/change-status";
const controller = document.title.slice(-1);

button = [
  "leftForward",
  "rightForward",
  "leftReverse",
  "rightReverse",
  "speedBoost",
  "rightTurn",
  "leftTurn",
];
for (let i = 0; i < 7; i++) {
  button.push(document.getElementById(button[i] + "Button"));
}

for (let i = 0; i < button.length; i++) {
  if (i < 5) {
    button[i].addEventListener("click", function () {
      toggleButton(controller, i);
    });
    button[i].addEventListener("mouseup", function () {
      toggleButton(controller, i);
    });
  } else {
    button[i].addEventListener("click", function () {
      toggleButton(controller, i - 5);
      toggleButton(controller, i - 3);
    });
    button[i].addEventListener("mouseup", function () {
      toggleButton(controller, i - 5);
      toggleButton(controller, i - 3);
    });
  }
}

function toggleButton(controller, button) {
  fetch(API_URL + "?controller=" + controller + "&button=" + button);
}
