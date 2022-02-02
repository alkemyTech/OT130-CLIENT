import dataMembers from '../Services/mocks/members.json'
// Luego Cambiar Moock por request

const getMembers = async () => {
  const response = { error: null, data: {} };

  try {
    response.data = dataMembers;
    
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

export { getMembers };