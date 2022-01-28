import { Post, Patch } from "./privateApiService";

const response = { error: null, data: {} };

const postUser = async (values) => {
  try {
    const {data} = await Post("/users", values);
    response.data = data 
  } catch (error) {
    response.error = error
  }
  return response
};

const updateUser = async (values, user) => {
  try {
    const {data} = await Post("/users", values);
    response.data = data
  } catch (error) {
    response.error = error
  }
  return response
};

export { postUser, updateUser };
