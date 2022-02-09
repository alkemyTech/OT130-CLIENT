import axios from "axios";
import { ErrorAlert } from "../Components/Alert";

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
  },
};

const instance = axios.create(config);

const getSlides = async () => {
  const response = {};
  try {
      const { data } = await instance.get(config.baseURL + 'slides');
      response.data = data;
  } catch (error) {
      response.error = error;
      ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
}

const addNewSlide = async (body) => {
  const response = {};
  try {
      const { data } = await instance.post(config.baseURL + 'slides', body);
      response.data = data;
  } catch (error) {
      response.error = error;
      ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
}

const editSlide = async (body, id) => {
  const response = {};
  try {
      const { data } = await instance.put(config.baseURL + 'slides' + `/${id}`, body);
      response.data = data;
  } catch (error) {
      response.error = error;
      ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
}

const deleteSlide = async (slideId) => {
  try {
    return await instance.delete(`slides/${slideId}`);
  } catch (error) {
    ErrorAlert("Error", "Error al comunicarse con el servidor");
    return { error: error.response?.data || error };
  }
};

export {
  addNewSlide,
  editSlide,
  getSlides,
  deleteSlide
};
