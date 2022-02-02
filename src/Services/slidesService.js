import { Get } from "./privateApiService";

const getSlides = async () => {
  try {
    const { data } = await Get("slides");
    return data;
  } catch (error) {
    return { error: error.response?.data || error };
  }
};

export { getSlides };