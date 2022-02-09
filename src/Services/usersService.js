import { Post, Patch } from "./privateApiService";
import { ErrorAlert } from "../Components/Alert";

const addUser = async (values) => {
  const response = { error: null, data: {} };

  try {
    const { data } = await Post("/users", values);
    response.data = data;
  } catch (error) {
    response.error = error;
    ErrorAlert("Error", "Error al comunicarse con el servidor");
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
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }

  return response;
};

export { addUser, updateUser };
