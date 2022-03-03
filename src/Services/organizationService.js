import { Get, Post } from "./privateApiService";

const endpoint = process.env.REACT_APP_ORGANIZATION_ENDPOINT;

const getOrganizationData = async () => {

    const response = {};
    try {
        const { data } = await Get(endpoint);
        response.data = data;
    } catch (error) {
        response.error = error;
    }
    return response;
  }

const updateOrganizationData = async (data) => {
  try {
    return await Post(endpoint, data);
  } catch (error) {
    return { error: error.response?.data || error };
  }
};

export { getOrganizationData, updateOrganizationData };
