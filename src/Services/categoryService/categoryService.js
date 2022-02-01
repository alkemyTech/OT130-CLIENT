import { CATEGORY_URL } from "../../config/imagePaths";
import { 
    Patch, 
    Post 
} from "../privateApiService";

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
    saveCategory,
    updateCategory
};


