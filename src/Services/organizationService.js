import { Get, Post } from "./privateApiService";

const endpoint = process.env.REACT_APP_ORGANIZATION_ENDPOINT;

const getOrganizationData = async () => {
  const { data , error } = await Get(endpoint);
  return { data: data?.data, error };
};

const updateOrganizationData = async (data) => {
  try {
    return await Post(endpoint, data);
  } catch (error) {
    return { error: error.response?.data || error };
  }
};

export { getOrganizationData, updateOrganizationData };
