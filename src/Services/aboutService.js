import dataAbout from '../Services/mocks/about.json';

export const getData = async () => {
  const response = {
    data: dataAbout,
    error: null
  }
  try {
    return response;
  } catch (error) {
    return response.error = 'Error al obtener los datos';
  }
};