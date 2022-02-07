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

export { Get, getSlide };
