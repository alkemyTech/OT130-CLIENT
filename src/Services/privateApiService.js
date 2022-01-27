import axios from "axios";

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
  },
};
const instance = axios.create(config); 
const post = async (url, data) => await instance.post(url, data);
const patch = async (url, data) => await instance.patch(url, data);
const get = async (url, data) => await instance.post(url, data);

export { 
  post, 
  patch, 
  get 
};