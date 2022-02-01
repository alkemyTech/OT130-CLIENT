import axios from "axios";
import { API_URL } from '../config/api';

const config = {
  baseURL: API_URL,
};

const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default Get;
