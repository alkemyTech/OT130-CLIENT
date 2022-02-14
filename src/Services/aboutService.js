import dataAbout from '../Services/mocks/about.json';
import { ErrorAlert } from "../Alert";

export const getData = async () => {
  const response = {
    data: null,
    error: null
  }
  try {
    response.data = dataAbout;
  } catch (error) {
    response.error = 'Error al obtener los datos';
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
};