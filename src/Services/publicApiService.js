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

const Get = async () => {
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users", config)
    console.log(resp.data);
  } catch (error) {
    console.log("Error:", error)
  }
};

const getSlide = async () => await instance.get(baseURL + '/slides');

export { Get, getSlide }

