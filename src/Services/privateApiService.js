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
    const { data } = await instance.post(url, body);
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const Get = async (url) => {
  const response = {};
  try {
    const { data } = await instance.post(url);
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

const Delete = async ( url, id ) => {
  const response = {};
  try {
      const { data } = await instance.delete( `${ url }/${ id }` );
      response.data = data;
  } catch ( error ) {
      response.error = error;
  };
  return response;
};

const Patch = async (url, data) => await instance.patch(url, data);

export { Get, Post, Patch, Put, Delete};
