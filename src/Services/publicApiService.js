import axios from "axios";

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
  },
};

const baseURL = "http://ongapi.alkemy.org/api";
const instance = axios.create(config);

const getSlide = async () => await instance.get(baseURL + '/slides');

export { getSlide }

