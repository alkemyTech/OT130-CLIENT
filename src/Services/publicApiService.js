import axios from 'axios';

const config = {
  baseURL: 'http://ongapi.alkemy.org/api',
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    'Content-type': 'application/json',
  },
};
<<<<<<< HEAD
=======
const baseURL = "http://ongapi.alkemy.org/api";
>>>>>>> cd6cbe7c9391bc634ca829556900276e26aa68df

const instance = axios.create(config);

const Get = async (url) => {
  const response = {};
  try {
    const { data } = await instance.get(url);
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

<<<<<<< HEAD
export { 
  Get 
};
=======
const Post = async (url, body) => {
  const response = {};
  try {
      const { data } = await instance.post(url, body);
      response.data = data;
  } catch (error) {
      response.error = error;
  }
  return response;
}

export {Post, getSlide }
>>>>>>> cd6cbe7c9391bc634ca829556900276e26aa68df

