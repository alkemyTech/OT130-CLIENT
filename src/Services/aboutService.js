import axios from "axios";
const HOST = "http://ongapi.alkemy.org/api";

const response = {
    error: null,
    data: {}
};

// Service de prueba para el endpoint de about

export const getData = async () => {
    try {
      const {data} = await axios.get(`${HOST}/projects`);
      return response.data = data;
    } catch (error) {
      return response.error = error;
    }
};