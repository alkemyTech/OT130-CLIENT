import { Get, Delete } from "./privateApiService";

const getSlides = async () => {
  try {
    const { data } = await Get("slides");
    return data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    }
    return { error };
  }
};

const deleteSlide = async (slideId) => {
  try {
    return await Delete(`slides/${slideId}`);
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    }
    return { error };
  }
};

export { getSlides, deleteSlide };