import axios from "axios";
import { API_URL } from "@/config";

export const postCustom = async ({data}) => {
    axios.post(API_URL, {data})
    .then(response => {
			console.log(response);
    })
    .catch(error => {
			alert('通信エラー');
    });
};