import axios from 'axios';

const postOrganizationData = async (data) => {
    try {
        await axios.post('http://ongapi.alkemy.org/api/organization', data);
    } catch (error) {
        console.log(error.response)
    }
}

export default postOrganizationData;