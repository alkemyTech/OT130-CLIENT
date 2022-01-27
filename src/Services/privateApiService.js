import axios from 'axios';

const config = {
    headers: {
        Group: 0o01                //Aqui va el ID del equipo!!
    }
}
const baseURL = "http://ongapi.alkemy.org/api";

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const addNewSlide = (endpoint, body) => {
    axios.post(baseURL + endpoint, body)
        .then((res) => { return res })
        .catch((error) => console.log("error:", error))
};

const editSlide = (endpoint, body) => {
    axios.patch(baseURL, endpoint, body)
        .then((res) => { return res })
        .catch((error) => console.log("error:", error))
}

const getSlide = async (endpoint) => {
    let response
    await axios.get(baseURL + endpoint)
        .then((res) => { response = res.data.data })
        .catch((error) => console.log("error:", error));
    return response
}

export { Get, addNewSlide, editSlide, getSlide }


