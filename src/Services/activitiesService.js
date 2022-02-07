import { Get, Post, Put, Delete } from "./privateApiService";

const getActivities = async () => {
  try {
    const { data } = await Get("/activities");
    return data;
  } catch (error) {
    return { error };
  }
};

const getActivityDataById = async (id) => {
  try {
    const { data } = await Get(`/activities/${id}`);
    return data;
  } catch (error) {
    return { error };
  }
};

const deleteActivity = async (id) => {
  try {
    const { data } = await Delete(`/activities/${id}`);
    return data;
  } catch (error) {
    return { error };
  }
};

const updateActivityDataById = async (id) => {
  try {
    const { data } = await Put(`/activities/${id}`);
    return data;
  } catch (error) {
    return { error };
  }
};

const saveActivityData = async () => {
  try {
    const { data } = await Post("/activities");
    return data;
  } catch (error) {
    return { error };
  }
};

export {
  getActivities,
  getActivityDataById,
  deleteActivity,
  updateActivityDataById,
  saveActivityData,
};
