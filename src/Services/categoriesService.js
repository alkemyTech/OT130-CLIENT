import { Get } from './privateApiService';

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

export { getCategories };
