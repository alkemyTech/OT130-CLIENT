import axios from 'axios';

export const getData = async () => {
  const response = {
    data: [],
    error: ''
  }
  try {
    const {data} = await axios.get('http://127.0.0.1:5500/ot130-client/src/Services/about.json');
    return response.data = data;
  } catch (error) {
    return response.error = 'Error al obtener los datos';
  }
};