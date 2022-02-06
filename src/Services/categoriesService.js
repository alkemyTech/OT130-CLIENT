import { 
  Get, 
  Patch, 
  Post 
} from './privateApiService';

const CATEGORY_URL = "/categories";

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
    const { data } = await Post( CATEGORY_URL, values );
    response.data = data.data;
  } catch (error) {
    response.error = error.message;
  };
  return response;
};

const updateCategory = async (id, values) => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Patch( `${CATEGORY_URL}/${id}`, values );
    response.data = data.data;
  } catch (error) {
    response.error = error.message;
  };
  return response;
};

export {
  getCategories,
  saveCategory,
  updateCategory
};



