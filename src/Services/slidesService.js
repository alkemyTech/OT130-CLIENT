import { Get, Delete } from "./privateApiService";

const getSlides = async () => {
  try {
    const { data } = await Get("slides");
    return data;
  } catch (error) {
    return { error: error.response?.data || error };
  }
};

const deleteSlide = async (slideId) => {
  try {
    return await Delete(`slides/${slideId}`);
  } catch (error) {
    return { error: error.response?.data || error };
  }
};

export { getSlides, deleteSlide };