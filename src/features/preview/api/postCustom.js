import axios from "axios";

export async function postCustom(data) {
  axios.post("/controller", {data}, {
    headers: {
      'Content-Type': 'application/json', 
    },
  })
  .then(response => {
		console.log(response);
  })
  .catch(error => {
    console.log(error);
		alert('通信エラー');
  });
};