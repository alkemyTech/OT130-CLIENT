import axios from 'axios';

const config = {
    headers: {
        Group: 1                //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const getOrganization = async () => {
    try {
        const response = await axios.get('http://ongapi.alkemy.org/api/organization')
        return response.data
    } catch (error) {
        return error
    }
    
}

export const putOrganization = async (body,id) => {
    try {
        const response = await axios.put(`http://ongapi.alkemy.org/api/organization/${id}`, body)
        return response.data
    } catch (error) {
        return error
    }
    
}

export default Get