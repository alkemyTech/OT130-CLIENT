import axios from "axios";
import { HOST } from "./config";

export const getActivityDataById = async (id) => {
  try {
    const response = await axios.get(`${HOST}/activities/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateActivityDataById = async (id, body) => {
  try {
    const response = await axios.put(`${HOST}/activities/${id}`, body);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const saveActivityData = async (body) => {
  try {
    const response = await axios.post(`${HOST}/activities`, body);
    return response.data;
  } catch (error) {
    return error;
  }
};
