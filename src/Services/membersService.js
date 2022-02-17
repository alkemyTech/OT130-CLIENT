import dataMembers from '../Services/mocks/members.json';
//@TODO: Luego Cambiar Moock por request

const endpoint = process.env.REACT_APP_MEMBERS_ENDPOINT;

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
