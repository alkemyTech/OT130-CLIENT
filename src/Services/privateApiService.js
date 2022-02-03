import axios from "axios";

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
  },
};

const instance = axios.create(config);

const Post = async (url, data) => await instance.post(url, data);

const Patch = async (url, data) => await instance.patch(url, data);

const Get = async (url) => await instance.get(url);

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? token : "";
}

const getAuthorization = () => {
  const token = getToken();
  return {
    Authorization: `Bearer ${token}`,
  };
}

export {
  Get,
  Post,
  Patch,
  getToken,
  getAuthorization,
};
