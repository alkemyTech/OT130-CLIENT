import axios from "axios";
import { HOST } from "./config";

export const getOrganizationData = async () => {
  try {
    const response = await axios.get(`${HOST}/organization`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateOrganizationData = async (body, id) => {
  try {
    const response = await axios.put(`${HOST}/organization/${id}`, body);
    return response.data;
  } catch (error) {
    return error;
  }
};
