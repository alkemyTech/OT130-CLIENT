import axios from 'axios';

const getSlides = async () => {
    try {
        const response = await axios.get("http://ongapi.alkemy.org/api/slides");
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export default getSlides;