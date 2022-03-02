import { Get, Post } from "./privateApiService";

const baseURL = process.env.REACT_APP_BASE_URL;
const endpoint = process.env.REACT_APP_ORGANIZATION_ENDPOINT;
``
const getOrganizationData = async () => {
  try {
    const { data } = await Get(endpoint);
    return data;
  } catch (error) {
    return { error: error.response?.data || error };
  }
};

const updateOrganizationData = async (data) => {
  try {
    return await Post(endpoint, data);
  } catch (error) {
    return { error: error.response?.data || error };
  }
};

export { getOrganizationData, updateOrganizationData };
