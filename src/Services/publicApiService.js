import axios from 'axios';

const config = {
  baseURL: 'http://ongapi.alkemy.org/api',
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    'Content-type': 'application/json',
  },
};

const instance = axios.create(config);

const Post = async (url, body) => await instance.post(url, body);


export {
  Post,
};
