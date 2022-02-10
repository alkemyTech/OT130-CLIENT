import axios from 'axios';

const token = localStorage.getItem('token');
const config = {
  baseURL: 'http://ongapi.alkemy.org/api/',
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    Authorization: `${token}`,
    'content-type': 'application/json',
  },
};

const instance = axios.create(config);

const Post = async (url, body) => {
  const response = {};
  try {
    const { data } = await instance.post(url, body);
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const Patch = async (url, data) => await instance.patch(url, data);

const Get = async (url, id = null) => {
  const response = {};
  try {
    const { data } = await instance.get(`${url}/${id}`);
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const Delete = async (url, data) => await instance.delete(url, data);

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

const getToken = () => {
  const token = localStorage.getItem('token');
  return token || '';
};

const getAuthorization = () => {
  const token = getToken();
  return {
    Authorization: `Bearer ${token}`,
  };
};

export { Get, Post, Patch, Put, Delete };
