import axios from "axios";

export async function postCustom(data) {
  axios.post("http://54.249.130.95/controller/", {data}, {
    headers: {
      'Content-Type': 'application/json', 
    },
  })
  .then(response => {
		console.log(response);
  })
  .catch(error => {
		alert('通信エラー');
  });
};