import { Get } from "./privateApiService";

const getCategories = async () => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Get("/categories");
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

export { getCategories };
