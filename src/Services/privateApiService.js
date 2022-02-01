import axios from 'axios';
import { API_URL } from '../config/api';

const config = {
  baseURL: API_URL,
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
    'content-type': 'application/json',
  },
};

const instance = axios.create(config);

const Post = async (url, data) => await instance.post(url, data);

const Patch = async (url, data) => await instance.patch(url, data);

const Get = async (url) => await instance.get(url);

export { Get, Post, Patch };
