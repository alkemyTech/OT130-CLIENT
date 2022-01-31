import axios from "axios";
import { HOST } from "./config";

export const getOrganizationData = async () => {
  const response = {
    data: {},
    error: null,
  }
  try {
    const { data } = await axios.get(`${HOST}/organization`);
    return response.data = data;
  } catch (error) {
    return response.error = error;
  }
};

export const updateOrganizationData = async (body, id) => {
  const response = {
    data: {},
    error:''
  }
  try {
    const { data } = await axios.put(`${HOST}/organization/${id}`, body);
    return response.data = data;
  } catch (error) {
    return response.error = 'Error al actualizar la organización';
  } 
};

export const getOrganizationDataById = async (id) => {
  const response = {
    data: {},
    error: null
  }
  try {
    const { data } = await axios.get(`${HOST}/organization/${id}`);
    return response.data = data;
  } catch (error) {
    return  error;
  }
};
