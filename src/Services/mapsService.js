import axios from 'axios';
import { ZERO_RESULTS } from '../Helpers/messagesText';
import mockData from '../Services/mocks/geocode.json';

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
    if (data.status === 'OK') response.data = data.data;
    if (data.status === 'REQUEST_DENIED') {
      response.data = mockData;
    }
    if (data.status === 'ZERO_RESULTS') {
      response.error = ZERO_RESULTS;
    }
  } catch (error) {
    response.error = error.message;
  }
  return response;
};

export { getCoors };
