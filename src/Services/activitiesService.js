import { Post, Put, Get } from './privateApiService';
import dataActivities from '../Services/mocks/activities.json'
import { ErrorAlert } from "../Components/Alert";

//@TODO: Luego Cambiar Moock por request

const getActivities = async () => {
  const response = { error: null, data: {} };

  try {
    response.data = dataActivities;

  } catch (error) {
    response.error = error.message;
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
};


const getActivityDataById = async (id) => {
  const response = {};
  try {
    const { data } = await Get(`activities/${id}`);
    response.data = data;
  } catch (error) {
    response.error = error;
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
}

const updateActivityDataById = async (id, body) => {
  const response = {};
  try {
    const { data } = await Put(`activities/${id}`, body);
    response.data = data;
  } catch (error) {
    response.error = error;
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
}

const saveActivityData = async (body) => {
  const response = {};
  try {
    const { data } = await Post('activities', body);
    response.data = data;
  } catch (error) {
    response.error = error;
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
}

export {
  getActivities,
  getActivityDataById,
  updateActivityDataById,
  saveActivityData
};