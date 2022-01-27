import { Get } from "./privateApiService";

const getSlides = async () => {
  const response = await Get("slides");
  return response.data;
};

export { getSlides };