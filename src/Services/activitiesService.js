import { Get, Post, Put, Delete } from "./privateApiService";

const getActivities = async () => {
  const { data } = await Get("/activities");
  return data;
};

const getActivityDataById = async (id) => {
  const { data } = await Get(`/activities/${id}`);
  return data;
};

const deleteActivity = async (id) => {
  const { data } = await Delete(`/activities/${id}`);
  return data;
};

const updateActivityDataById = async (id) => {
  const { data } = await Put(`/activities/${id}`);
  return data;
};

const saveActivityData = async () => {
  const { data } = await Post("/activities");
  return data;
};

export {
  getActivities,
  getActivityDataById,
  deleteActivity,
  updateActivityDataById,
  saveActivityData,
};

