import axios from "axios";

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
<<<<<<< HEAD
    Group: 130, //Aqui va el ID del equipo!!
    'content-type': 'application/json',
=======
    //Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
>>>>>>> d658b3c88320535cd2da47d809665c23a084bd45
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

const Get = async (url) => {
  const response = {};
  try {
    const { data } = await instance.get(url);
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

const Delete = async (url, body) => {
  const response = {};
  try {
    const { data } = await instance.delete(url, body);
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

export { Get, Post, Patch, Put, Delete };
