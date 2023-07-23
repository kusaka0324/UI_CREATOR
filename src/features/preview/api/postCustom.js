import axios from "axios";
import { CONTROLLER_API_URL } from "@/config";

export async function postCustom(data) {
  axios.post(CONTROLLER_API_URL, {data}, {
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