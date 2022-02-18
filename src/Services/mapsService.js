import axios from 'axios';

const url = process.env.REACT_APP_GEOCODE_URL;
const apiKey = process.env.REACT_APP_GEOCODE_API_KEY;

const getCoors = async (address) => {
  const response = {};
  try {
    const { data } = await axios.get(url, {
      params: {
        address: address,
        key: apiKey,
      },
    });
    response.data = data.data;
  } catch (error) {
    response.error = error;
  }
  return response;
};

const getMockCoords = async () => {};

export { getCoors };
