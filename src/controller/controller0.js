const API_URL = "http://18.183.189.221:81/change-status?controller1=0&button=";

function PushButton(button) {
  fetch(API_URL + button);
}
