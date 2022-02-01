import { Patch, Post } from './privateApiService';

const saveNews = async (values) => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Post('/news', values);
    response.data = data.data;
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

const updateNews = async (values) => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Patch(`/news/${values.id}`, values);
    response.data = data.data;
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

export {
  saveNews,
  updateNews
};
