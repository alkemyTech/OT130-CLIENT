import { Get } from './privateApiService';

const getActivities = async () => {
  const response = { error: null, data: {} };

  try {
    const { data } = await Get('/activities');
    response.data = data.data;
    
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

export { getActivities };
