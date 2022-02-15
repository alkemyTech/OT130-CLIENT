import { Get } from './privateApiService';

const url = process.env.REACT_APP_GEOCODE_URL;
const apiKey = process.env.REACT_APP_GEOCODE_API_KEY;

const getCoors = async (address) => {
  return await Get(`${url}address=${address}&key=${apiKey}`);
};

export { getCoors };
