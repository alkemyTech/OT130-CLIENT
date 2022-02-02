import dataActivities from '../Services/mocks/activities.json'
// Luego Cambiar Moock por request

const getActivities = async () => {
  const response = { error: null, data: {} };

  try {
    response.data = dataActivities;
    
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

export { getActivities };
