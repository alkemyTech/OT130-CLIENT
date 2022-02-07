import axios from "axios";

const token = localStorage.getItem("token");

const config = {
  baseURL: "http://ongapi.alkemy.org/api/",
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    Authorization: `Bearer ${token}`,
    "content-type": "application/json",
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
}

const Patch = async (url, data) => await instance.patch(url, data);

const Get = async (url) => await instance.get(url);

export { Get, Post, Patch };
