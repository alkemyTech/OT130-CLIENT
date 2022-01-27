import { Get, Post } from "./privateApiService";

const getOrganizationData = async () => {
  const response = await Get("organization");
  return response.data;
};

const updateOrganizationData = async (data) => {
  await Post("organization", data);
};

export { getOrganizationData, updateOrganizationData };
