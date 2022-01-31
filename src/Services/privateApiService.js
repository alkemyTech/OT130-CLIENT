import axios from "axios";

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    "content-type": "application/json",
  },
};

const baseURL = "http://ongapi.alkemy.org/api";

const instance = axios.create(config);

const Post = async (url, data) => await instance.post(url, data);

const Patch = async (url, data) => await instance.patch(url, data);

const Get = async (url) => await instance.get(url);

const addNewSlide = (endpoint, body) => {
   return axios.post(baseURL + endpoint, body);
};

const editSlide = (endpoint, body, id) => {
   return axios.put(baseURL + endpoint + `/${id}`, body); 
}

const getSlide = async (endpoint) => {
    let response
    await axios.get(baseURL + endpoint)
        .then((res) => { response = res.data.data })
        .catch((error) => console.log("error:", error));
    return response
}

export {
  Get,
  Post,
  Patch,
  addNewSlide,
  editSlide,
  getSlide 
};
