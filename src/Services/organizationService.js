import { Get, Post } from "./privateApiService";

const getOrganizationData = async () => {
  try {
    const { data } = await Get("organization");
    return data;
  } catch (error) {
    return { error: error.response?.data || error };
  }
};

const updateOrganizationData = async (data) => {
  try {
    return await Post("organization", data);
  } catch (error) {
    return { error: error.response?.data || error };
  }
};

export { getOrganizationData, updateOrganizationData };