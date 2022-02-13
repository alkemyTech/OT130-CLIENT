import axios from 'axios';

const token = localStorage.getItem("Token");

const config = {
  baseURL: 'http://ongapi.alkemy.org/api/',
  headers: {
    Authorization: `Bearer ${token}`,
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
  },
};

const instance = axios.create(config);

const Post = async (url, body) => {
  const response = {};
  try {
    const { data } = await instance.post(url, body, getHeaders());
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const Patch = async (url, body) => {
  const response = {};
  try {
    const { data } = await instance.patch(url, body);
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

<<<<<<< HEAD

const Get = async (url, id = null) => {
=======
const Get = async (url) => {
>>>>>>> OT130-73-Crear-método-reutilizable-que-realice-petición-DELETE-a-endpoints-privados
  const response = {};
  try {
    const { data } = await instance.get(`${url}${id ? '/' + id : ''}`, getHeaders());
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const Put = async (url, body) => {
  const response = {};
  try {
    const { data } = await instance.put(url, body);
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const Delete = async (url, id) => {
  const response = {};
  try {
    const { data } = await instance.delete( `${url}/${id}` );
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const getToken = () => {
  const token = localStorage.getItem('token');
  return token || '';
};

const getAuthorization = () => {
  const token = getToken();
  return `Bearer ${token}`;
};

const getHeaders = () => {
  return {
    headers: {
      Authorization: getAuthorization(),
    },
  };
};

export { Get, Post, Patch, Put, Delete };
