import axios from "axios";

const getSlides = async () => {
  const response = await axios.get("http://ongapi.alkemy.org/api/slides");
  return response.data;
};

export { getSlides }