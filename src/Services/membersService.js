import { Get } from './privateApiService';

const getMembers = async () => {
  const response = { error: null, data: {} };

  try {
    const { data } = await Get('/members');
    response.data = data.data;
    
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

export { getMembers };