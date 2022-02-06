import { Post, Put, Get } from './privateApiService';
import dataActivities from '../Services/mocks/activities.json'
//@TODO: Luego Cambiar Moock por request

const getActivities = async () => {
  const response = { error: null, data: {} };

  try {
    response.data = dataActivities;
    
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

export { getActivities };

export const getActivityDataById = async (id) => await Get(`activities/${id}`);

export const updateActivityDataById = async (id, body) => await Put(`activities/${id}`, body);

export const saveActivityData = async (body) => await Post('activities', body);
