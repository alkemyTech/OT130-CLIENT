import dataAbout from '../Services/mocks/about.json';

export const getData = async () => {
  const response = {
    data: null,
    error: null
  }
  try {
    return response.data = dataAbout;
  } catch (error) {
    return response.error = 'Error al obtener los datos';
  }
};