import axios from "axios";

const API_URL = "http://ongapi.alkemy.org/api/";

const axe = axios.create({
  baseURL: API_URL,
});

export default axe;