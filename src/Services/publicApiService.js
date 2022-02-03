import axios from 'axios';

const config = {
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
  },
};

const Get = async (route, id) => {
  const response = { data: {}, error: null };
  const url = route + `${id ? '/' + id : null}`;

  try {
    const { data } = await axios.get(url, config);
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

export default { Get };
