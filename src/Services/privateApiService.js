import axios from 'axios';

const config = {
  baseURL: 'http://ongapi.alkemy.org/api/',
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
  },
};
 
const instance = axios.create( config ); 

<<<<<<< HEAD
const Patch = async (endpoint, body) => {
  const response = {};
  try {
      const { data } = await instance.patch(config.baseURL + endpoint, body, getToken());
=======
const instance = axios.create( config ); 

const Patch = async (endpoint, body) => {
  const response = {};
  try {
      const { data } = await instance.patch(config.baseURL + endpoint, body, getHeaders())
>>>>>>> a34caef7b818e7179ca6b1682ac961baf41b461d
      response.data = data;
  } catch (error) {
      response.error = error;
  }
  return response;
}
<<<<<<< HEAD
 
const Post = async (url, body) => {
  const response = {};
  try {
    const { data } = await instance.post(url, body, getHeaders());
=======

const Post = async (url, body) => {
  const response = {};
  try {
    const { data } = await instance.post(url, body);
>>>>>>> a34caef7b818e7179ca6b1682ac961baf41b461d
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const Get = async (url, id = null) => {
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
    const { data } = await instance.delete( `${url}/${id}`, getHeaders());
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
