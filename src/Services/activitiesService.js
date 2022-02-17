import { Get, Post, Put, Delete } from "./privateApiService";

const  ACTIVITIES_ENDPOINT = process.env.REACT_APP_ACTIVITIES_ENDPOINT

const getActivities = async () => {
  const { data } = await Get(ACTIVITIES_ENDPOINT);
  return data;
};

const getActivityDataById = async (id) => {
  const { data } = await Get(ACTIVITIES_ENDPOINT, id);
  return data;
};

const deleteActivity = async (id) => {
  const { data } = await Delete(ACTIVITIES_ENDPOINT, id);
  return data;
};

const updateActivityDataById = async (id) => {
  const { data } = await Put(`${ACTIVITIES_ENDPOINT}/${id}`);
  return data;
};

const saveActivityData = async () => {
  const { data } = await Post(ACTIVITIES_ENDPOINT);
  return data;
};

export {
  getActivities,
  getActivityDataById,
  deleteActivity,
  updateActivityDataById,
  saveActivityData,
};

