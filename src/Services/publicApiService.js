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
      const { data } = await instance.post( baseURL + '/slides' );
      response.data = data;
  } catch ( error ) {
      response.error = error;
      ErrorAlert( error );
  }
  return response;
};

export { getSlide }