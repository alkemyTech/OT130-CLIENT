import axios from "./baseAxios";

const getOrganizationData = async () => {
  const response = await axios.get("organization");
  return response.data;
};

const updateOrganizationData = async (data) => {
  await axios.post("organization", data);
};

export { getOrganizationData, updateOrganizationData };