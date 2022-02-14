import { Get } from './privateApiService';
import { ErrorAlert } from "../Alert";

const getNews = async () => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Get('/news');
    response.data = data;
  } catch (error) {
    response.error = error.message;
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
};

const getTestimonials = async () => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Get('/testimonials');
    response.data = data;
  } catch (error) {
    response.error = error.message;
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
};

const getSlides = async () => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Get('/slides');
    response.data = data;
  } catch (error) {
    response.error = error.message;
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
};

export { getNews, getTestimonials, getSlides };
