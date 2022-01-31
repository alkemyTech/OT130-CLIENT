import axios from 'axios';

const config = {
    headers: {
        Group: 130                 //Aqui va el ID del equipo!!
    }
}

const baseURL = "http://ongapi.alkemy.org/api";

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const getSlide = (endpoint) => {
    return axios.get(baseURL + endpoint);
}

export { Get, getSlide }