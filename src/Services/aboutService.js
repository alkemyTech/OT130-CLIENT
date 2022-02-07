import dataAbout from '../Services/mocks/about.json';

export const getData = async () => {
  const response = {
    data: null,
    error: null
  }
  try {
    response.data = dataAbout;
  } catch (error) {
    response.error = 'Error al obtener los datos';
  }
  return response;
};