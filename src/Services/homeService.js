import { Get } from './privateApiService';

const getNews = async () => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Get(process.env.REACT_APP_NEWS_ENDPOINT);
    response.data = data;
  } catch (error) {
    response.error = error.message;
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
  }
  return response;
};

export { getNews, getTestimonials, getSlides };
