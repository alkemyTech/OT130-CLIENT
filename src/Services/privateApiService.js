import axios from "axios";

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
  },
};

const instance = axios.create( config ); 

const Post = async ( url, data ) =>  await instance.post( url, data );

const Patch = async ( url, data ) => await instance.patch( url, data );
 
const Get = async (url) => await instance.get(url);

const Put = async (url, data) => {
  const response = {}
  try {
    const { data } = await instance.put(url, data);
    response.data = data
  } catch (error) {
    response.error = error
  }
  return response
}

export {
  Get,
  Post,
  Patch
};
