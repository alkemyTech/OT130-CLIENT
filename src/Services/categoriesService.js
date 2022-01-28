import { Get } from "./privateApiService";

const response = { error: null, data: {} };

const getCategories = async () => {
  try {
    const { data } = await Get("/categories");
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

export { getCategories };
