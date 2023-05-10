const API_URL = "http://54.249.130.95:81/change-status";
const controller = document.title.slice(-1);

button = [];
for (let i = 0; i < 5; i++) {
  button.push(document.getElementById("button" + i));
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    toggleButton(controller, i);
  });
  button[i].addEventListener("mouseup", function () {
    toggleButton(controller, i);
  });
}

function toggleButton(controller, button) {
  fetch(API_URL + "?controller=" + controller + "&button=" + button);
}
