import axios from "./baseAxios";

const getSlides = async () => {
  const response = await axios.get("slides");
  return response.data;
};

export { getSlides };