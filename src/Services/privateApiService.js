import axios from "axios";

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
  },
};

const getToken = () => {
  return localStorage.getItem("Token");
}
 
const instance = axios.create( config ); 

const Patch = async (endpoint, body) => {
  const response = {};
  try {
      const { data } = await instance.patch(config.baseURL + endpoint, body, getToken());
      response.data = data;
  } catch (error) {
      response.error = error;
  }
  return response;
}
 
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

export { Get, Post, Patch, Put, Delete };
