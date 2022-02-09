import { Get, Post } from "./privateApiService";
import { ErrorAlert } from "../Components/Alert";

const getOrganizationData = async () => {
  try {
    const { data } = await Get("organization");
    return data;
  } catch (error) {
    ErrorAlert("Error", "Error al comunicarse con el servidor");
    return { error: error.response?.data || error };
  }
};

const updateOrganizationData = async (values) => {
  const response = {
    data:{},
    error: ''
  }
  try {
    const { data } = await Post("organization", values);
    response.data = data;
  } catch (error) {
    ErrorAlert("Error", "Error al comunicarse con el servidor");
    response.error = 'Error al actualizar la organización';
  }

  return response;
};

export { getOrganizationData, updateOrganizationData };
