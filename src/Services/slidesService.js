import axios from "axios";

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
  }
  return response;
}

export {
  addNewSlide,
  editSlide,
  getSlides
};

