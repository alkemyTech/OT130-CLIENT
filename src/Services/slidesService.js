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

const addNewSlide = async (endpoint, body) => await instance.post(baseURL + endpoint, body);

const editSlide = async (endpoint, body, id) => await instance.put(baseURL + endpoint + `/${id}`, body);

const getSlides = async (endpoint) => await instance.get(baseURL + endpoint);

export {
  addNewSlide,
  editSlide,
  getSlides
};