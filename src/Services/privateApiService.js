import axios from "axios";

const token = localStorage.getItem("Token");

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
    Authorization: `Bearer ${token}`,
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
  },
};

const instance = axios.create( config ); 

const Patch = async (endpoint, body) => await instance.patch(config.baseURL + endpoint, body, config.headers);

const Post = async ( url, data ) =>  await instance.post( url, data );

const Patch = async ( url, data ) => await instance.patch( url, data );
 
const Get = async (url) => await instance.get(url);

export {
  Get,
  Post,
  Patch
};
