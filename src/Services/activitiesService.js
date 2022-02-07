import { Post, Put, Get } from './privateApiService';
import dataActivities from '../Services/mocks/activities.json'

const  ACTIVITIES_ENDPOINT = process.env.REACT_APP_ACTIVITIES_ENDPOINT

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


export const getActivityDataById = async (id) => await Get(`${ACTIVITIES_ENDPOINT}/${id}`);

export const updateActivityDataById = async (id, body) => await Put(`${ACTIVITIES_ENDPOINT}/${id}`, body);

export const saveActivityData = async (body) => await Post(ACTIVITIES_ENDPOINT, body);
