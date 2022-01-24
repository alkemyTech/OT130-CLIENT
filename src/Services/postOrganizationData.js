import axios from "axios";

const postOrganizationData = async (data) => {
  await axios.post("http://ongapi.alkemy.org/api/organization", data);
};

export default postOrganizationData;