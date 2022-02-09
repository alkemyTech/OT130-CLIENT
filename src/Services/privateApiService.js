import axios from "axios";
import { ErrorAlert } from "../Components/Alert";

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
    //Group: 130, //Aqui va el ID del equipo!!
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
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
};

const Patch = async (url, data) => {
  const response = {};
  try {
    const { data } = await instance.patch(url, data);
    response.data = data;
  } catch (error) {
    response.error = error;
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
}

const Get = async (url) => {
  const response = {};
  try {
    const { data } = await instance.get(url);
    response.data = data;
  } catch (error) {
    response.error = error;
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
};

const Delete = async (url, data) => {
  const response = {};
  try {
    const { data } = await instance.delete(url, data);
    response.data = data;
  } catch (error) {
    response.error = error;
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
}

const Put = async (url, body) => {
  const response = {};
  try {
    const { data } = await instance.put(url, body);
    response.data = data;
  } catch (error) {
    response.error = error;
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
};

const getToken = () => {
  const token = localStorage.getItem("token");
  return token || '';
}

const getAuthorization = () => {
  const token = getToken();
  return {
    Authorization: `Bearer ${token}`,
  };
}

export { Get, Post, Patch, Put, Delete };
