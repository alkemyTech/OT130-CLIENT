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

const Post = async ( url, data ) =>  await instance.post( url, data );

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
};
