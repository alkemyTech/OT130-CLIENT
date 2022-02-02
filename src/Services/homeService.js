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
      const { data } = await Get("slides");
      return data;
    } catch (error) {
      return { error: error.response?.data || error };
    }
  };


// Categories methods

const getCategories = async () => {
    const response = { error: null, data: {} };
    try {
      const { data } = await Get('/categories');
      response.data = data.data;
    } catch (error) {
      response.error = error.message;
    }
    return response;
  };
  

export { getOrganizationData, updateOrganizationData, saveNews, updateNews, getSlides, getCategories };
