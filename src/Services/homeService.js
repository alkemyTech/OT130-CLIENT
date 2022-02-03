import { Patch, Post, Get } from './privateApiService';

//News methods

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

// Organization methods

const getOrganizationData = async () => {
  try {
    const { data } = await Get('organization');
    return data;
  } catch (error) {
    return { error: error.response?.data || error };
  }
};

const updateOrganizationData = async (data) => {
  try {
    return await Post('organization', data);
  } catch (error) {
    return { error: error.response?.data || error };
  }
};

// Slides methods

const getSlides = async () => {
  try {
    const { data } = await Get('slides');
    return data;
  } catch (error) {
    return { error: error.response?.data || error };
  }
};

// Categories methods

const CATEGORY_URL = '/categories';

const getCategories = async () => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Get(CATEGORY_URL);
    response.data = data.data;
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

const saveCategory = async (values) => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Post(CATEGORY_URL, values);
    response.data = data.data;
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

const updateCategory = async (id, values) => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Patch(`${CATEGORY_URL}/${id}`, values);
    response.data = data.data;
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

export {
  getOrganizationData,
  updateOrganizationData,
  saveNews,
  updateNews,
  getSlides,
  getCategories,
  saveCategory,
  updateCategory,
};
