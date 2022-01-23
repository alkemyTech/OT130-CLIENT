import axios from 'axios';

const getOrganizationData = async () => {
    try {
        const response = await axios.get('http://ongapi.alkemy.org/api/organization');
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export default getOrganizationData;