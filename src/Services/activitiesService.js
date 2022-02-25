import { Get, Post, Put, Delete } from './privateApiService';

const ACTIVITIES_ENDPOINT = process.env.REACT_APP_ACTIVITIES_ENDPOINT;

const getActivities = async () => {
  const { data, error } = await Get(ACTIVITIES_ENDPOINT);
  return { data: data?.data, error };
};

const getActivityDataById = async (id) => await Get(ACTIVITIES_ENDPOINT, id);

const deleteActivity = async (id) => await Delete(ACTIVITIES_ENDPOINT, id);

const updateActivityDataById = async (id, body) => await Put(`${ACTIVITIES_ENDPOINT}/${id}`, body);

const saveActivityData = async (body) => await Post(ACTIVITIES_ENDPOINT, body);

export {
  getActivities,
  getActivityDataById,
  deleteActivity,
  updateActivityDataById,
  saveActivityData,
};

