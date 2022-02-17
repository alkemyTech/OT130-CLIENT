import { Patch, Post } from './privateApiService';
import { ErrorAlert } from '../Components/Alert/index';

const saveNews = async (values) => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Post(process.env.REACT_APP_NEWS_ENDPOINT, values);
    response.data = data.data;
  } catch (error) {
    response.error = error.message;
    ErrorAlert('Error', 'Error al comunicarce con el servidor')
  } finally {

  }
  return response;
};

const updateNews = async (values) => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Patch(`${process.env.REACT_APP_NEWS_ENDPOINT}/${values.id}`, values);
    response.data = data.data;
  } catch (error) {
    response.error = error.message;
    ErrorAlert('Error', 'Error al comunicarce con el servidor')
  }
  return response;
};

export {
  saveNews,
  updateNews
};
