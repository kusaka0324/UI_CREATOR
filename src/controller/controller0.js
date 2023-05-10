const API_URL = "http://18.183.189.221:81/change-status?controller1=0&button=";

function pushButton(button) {
  fetch(API_URL + button);
}
