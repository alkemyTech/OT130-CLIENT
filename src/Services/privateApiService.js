import axios from 'axios';

const token = localStorage.getItem("Token");

const config = {
  baseURL: 'http://ongapi.alkemy.org/api/',
  headers: {
<<<<<<< HEAD
    Authorization: `Bearer ${token}`,
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
=======
    //Group: 130, //Aqui va el ID del equipo!!
    'content-type': 'application/json',
>>>>>>> 6ca2924b19e8ea5f22a25ed460ef53fd9926772b
  },
};

const instance = axios.create(config);

const Post = async (url, body) => {
  const response = {};
  try {
    const { data } = await instance.post(url, body);
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const Patch = async (url, data) => await instance.patch(url, data);

<<<<<<< HEAD
const Patch = async ( url, data ) => await instance.patch( url, data );

const Delete = async ( url, id ) => {
  const response = { error: null, data: {} };
  try {
      const { data } = await instance.delete( `${ url }/${ id }` );
      response.data = data;
  } catch ( error ) {
      response.error = error;
  };
  return response;
};
 
const Get = async ( url ) => await instance.get( url );

export {
  Get,
  Post,
  Patch,
  Delete
=======
const Get = async (url) => {
  const response = {};
  try {
    const { data } = await instance.post(url);
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const Put = async (url, body) => {
  const response = {};
  try {
    const { data } = await instance.put(url, body);
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
>>>>>>> 6ca2924b19e8ea5f22a25ed460ef53fd9926772b
};

export { Get, Post, Patch, Put };
