import axios from "axios";

const getOrganizationData = async () => {
  const response = await axios.get("http://ongapi.alkemy.org/api/organization");
  return response.data;
};

const postOrganizationData = async (data) => {
  await axios.post("http://ongapi.alkemy.org/api/organization", data);
};

export { getOrganizationData, postOrganizationData };