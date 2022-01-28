import { Patch, Post } from "./privateApiService";

const response = { error: null, data: {} };

const sendNews = async (values) => {
  try {
    const { data } = await Post("/news", values);
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const updateNews = async (values) => {
  try {
    const { data } = await Patch(`/news/${values.id}`, values);
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

export {
  sendNews,
  updateNews
};
