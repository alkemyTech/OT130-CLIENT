import axios from 'axios';

const config = {
    headers: {
        Group: 130                //Aqui va el ID del equipo!!
    }
}
const baseURL = "http://ongapi.alkemy.org/api";

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const addNewSlide = (endpoint, body) => {
   return axios.post(baseURL + endpoint, body);
};

const editSlide = (endpoint, body, id) => {
   return axios.put(baseURL + endpoint + `/${id}`, body); 
}

const getSlide = async (endpoint) => {
    let response
    await axios.get(baseURL + endpoint)
        .then((res) => { response = res.data.data })
        .catch((error) => console.log("error:", error));
    return response
}

export { Get, addNewSlide, editSlide, getSlide }


