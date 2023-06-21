const API_URL = "http://54.249.130.95/controller/change-status";
const controller = document.title.slice(-1);

button = [
  "leftForward",
  "leftReverse",
  "rightForward",
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
    button[i] + "Button".addEventListener("click", function () {
      toggleButton(controller, i);
    });
    button[i] + "Button".addEventListener("mouseup", function () {
      toggleButton(controller, i);
    });
  } else {
    button[i] + "Button".addEventListener("click", function () {
      toggleButton(controller, i - 5);
      toggleButton(controller, i - 3);
    });
    button[i] + "Button".addEventListener("mouseup", function () {
      toggleButton(controller, i - 5);
      toggleButton(controller, i - 3);
    });
  }
}

function toggleButton(controller, button) {
  fetch(API_URL + "?controller=" + controller + "&button=" + button);
}
