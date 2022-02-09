import axios from 'axios';

const config = {
  baseURL: 'http://ongapi.alkemy.org/api/',
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    'content-type': 'application/json',
  },
};

const Get = async (route, id) => {
  const response = { data: {}, error: null };
  const url = route + `${id ? '/' + id : ''}`;

  try {
    const { data } = await axios.get(url, config);
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

const baseURL = 'http://ongapi.alkemy.org/api';
const instance = axios.create(config);

const getSlide = async () => await instance.get(baseURL + '/slides');

const Post = async (url, body) => {
  const response = {};
  try {
      const { data } = await instance.post(url, body);
      response.data = data;
  } catch (error) {
      response.error = error;
  }
  return response;
}

export {Post, getSlide, Get }

