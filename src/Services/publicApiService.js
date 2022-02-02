import axios from 'axios';
import { API_URL } from '../config/api';

const config = {
  baseURL: API_URL,
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    'Content-type': 'application/json',
  },
};

const instance = axios.create(config);

const Get = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/users', config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const Post = async (url, data) => await instance.post(url, data);


export {
  Get,
  Post,
};
