import axios from "axios";

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
  },
};

const instance = axios.create(config);
const slidesURL = process.env.REACT_APP_API_URL_SLIDES;

const getSlides = async () => {
  const response = {};
  try {
      const { data } = await instance.get(config.baseURL + slidesURL);
      response.data = data;
  } catch (error) {
      response.error = error;
  }
  return response;
}

const addNewSlide = async (body) => {
  const response = {};
  try {
      const { data } = await instance.post(config.baseURL + slidesURL);
      response.data = data;
  } catch (error) {
      response.error = error;
  }
  return response;
}

const editSlide = async (body, id) => {
  const response = {};
  try {
      const { data } = await instance.put(config.baseURL + slidesURL + `/${id}`, body);
      response.data = data;
  } catch (error) {
      response.error = error;
  }
  return response;
}

const deleteSlide = async (slideId) => {
  try {
    return await instance.delete(`${slidesURL}/${slideId}`);
  } catch (error) {
    return { error: error.response?.data || error };
  }
};

export {
  addNewSlide,
  editSlide,
  getSlides,
  deleteSlide
};
