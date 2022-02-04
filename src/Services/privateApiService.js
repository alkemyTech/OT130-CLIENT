import axios from "axios";

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
  },
};

const getToken = () => {
  return localStorage.getItem("Token");
}
 
const instance = axios.create( config ); 

const Patch = async (endpoint, body) => {
  const response = {};
  try {
      const { data } = await instance.patch(config.baseURL + endpoint, body, getToken());
      response.data = data;
  } catch (error) {
      response.error = error;
  }
  return response;
}

const Post = async ( url, data ) =>  await instance.post( url, data );
 
const Get = async (url) => await instance.get(url);

export {
  Get,
  Post,
  Patch
};
