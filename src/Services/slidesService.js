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

const addNewSlide = async (body) => await instance.post(baseURL + '/slides', body);

const editSlide = async (body, id) => await instance.put(baseURL + '/slides' + `/${id}`, body);

const getSlides = async () => await instance.get(baseURL + '/slides');

export {
  addNewSlide,
  editSlide,
  getSlides
};