import axios from "axios";

const config = {
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
  },
};

const baseURL = "http://ongapi.alkemy.org/api";

const Get = async () => {
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users", config)
    console.log(resp.data);
  } catch (error) {
    console.log("Error:", error)
  }
};

const getSlide = async (endpoint) => await axios.get(baseURL + endpoint);

export { Get, getSlide }

