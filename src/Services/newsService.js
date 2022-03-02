import { Patch, Post, Get } from './privateApiService';

const saveNews = async (values) => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Post(process.env.REACT_APP_NEWS_ENDPOINT, values);
    response.data = data.data;
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

const updateNews = async (values) => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Patch(`${process.env.REACT_APP_NEWS_ENDPOINT}/${values.id}`, values);
    response.data = data.data;
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

const getNews = async () => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Get(process.env.REACT_APP_NEWS_ENDPOINT);
    response.data = data.data;
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

const getNewsByParams = async (searchParam) => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Get(`${process.env.REACT_APP_NEWS_ENDPOINT}?search=${searchParam}`);
    response.data = data.data;
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

export {
  saveNews,
  updateNews,
  getNews,
  getNewsByParams
};
