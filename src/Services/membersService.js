import dataMembers from '../Services/mocks/members.json'
import { ErrorAlert } from "../Alert";
//@TODO: Luego Cambiar Moock por request

const getMembers = async () => {
  const response = { error: null, data: {} };

  try {
    response.data = dataMembers;
    
  } catch (error) {
    response.error = error.message;
    ErrorAlert("Error", "Error al comunicarse con el servidor");
  }
  return response;
};

export { getMembers };