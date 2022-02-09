import axios from "axios";
import { ErrorAlert } from "../Components/Alert";

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
  },
};

const baseURL = "http://ongapi.alkemy.org/api";
const instance = axios.create(config);

const getSlide = async () => {
  const response = {};
  try {
    const { data } = await instance.get(baseURL + '/slides');
    response.data = data;
  } catch (error) {
    response.error = error;
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response
}

export { getSlide }

