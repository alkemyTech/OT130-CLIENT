import { Get, Post } from "./privateApiService";

const getOrganizationData = async () => {
  try {
    const { data } = await Get("organization");
    return data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    }
    return { error };
  }
};

const updateOrganizationData = async (data) => {
    try {
        return await Post("organization", data)
    } catch (error) {
        if (error.response) {
        return { error: error.response.data };
        }
        return { error };
    }
}

export { getOrganizationData, updateOrganizationData };