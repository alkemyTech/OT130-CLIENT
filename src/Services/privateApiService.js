import axios from "axios";

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
  },
};

const instance = axios.create( config ); 

const post = async ( url, data ) => { 
  try {
    const res = await instance.post( url, data );
    return res;
  } catch ( error ) {
    return error;
  }
};

const patch = async ( url, data ) => { 
  try {
    const res = await instance.patch( url, data );
    return res;
  } catch ( error ) {
    return error;   
  }
};

const get = async ( url, data ) => { 
  try {
    const res = await instance.get( url, data );
    return res;
  } catch ( error ) { 
    return error;
  }
};

export { 
  get,
  post,
  patch 
};
