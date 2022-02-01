import axios from "axios";
import { HOST } from "./config";

export const getOrganizationData = async () => {
  const response = {
    data: {},
    error: '',
  }
  try {
    const { data } = await axios.get(`${HOST}/organization`);
    response.data = data;
  } catch (error) {
    response.error = 'Error al obtener los datos de la organización';
  }
  return response;
};

export const updateOrganizationData = async (body, id) => {
  const response = {
    data: {},
    error: ''
  }
  try {
    const { data } = await axios.put(`${HOST}/organization/${id}`, body);
    response.data = data;
  } catch (error) {
    response.error = 'Error al actualizar la organización';
  } 
  return response;
};

export const getOrganizationDataById = async (id) => {
  const response = {
    data: {},
    error: ''
  }
  try {
    const { data } = await axios.get(`${HOST}/organization/${id}`);
    response.data = data;
  } catch (error) {
    response.error = 'Error al obtener los datos de la organización';
  }
  return response;
};
