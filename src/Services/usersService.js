import { Get, Post, Patch, Delete } from "./privateApiService";

const addUser = async (values) => {
  const response = { error: null, data: {} };

  try {
    const { data } = await Post("/users", values);
    response.data = data;
  } catch (error) {
    response.error = error;
  }
  
  return response;
};

const updateUser = async (values, user) => {
  const response = { error: null, data: {} };

  try {
    const { data } = await Patch(`/users/${user.id}`, values);
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

const getUser = async () => {
  const response = { error: null, data: {} };

  try {
    const { data } = await Get("/users");
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

const deleteUser = async (id) => {
  const response = { error: null, data: {} };
  try {
    const { data } = await Delete(`/users/${id}`);
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

export { 
  addUser,
  deleteUser,
  updateUser,
  getUser
 };
