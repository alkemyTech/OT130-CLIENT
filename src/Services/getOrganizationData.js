import axios from "axios";

const getOrganizationData = async () => {
  const response = await axios.get("http://ongapi.alkemy.org/api/organization");
  return response.data;
};

export default getOrganizationData;