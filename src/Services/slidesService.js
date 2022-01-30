import { Get } from "./privateApiService";

const getSlides = async () => {
  try {
    const { data } = await Get("slides");
    return data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data?.message };
    }
    return { error: error.message };
  }
};

export { getSlides };