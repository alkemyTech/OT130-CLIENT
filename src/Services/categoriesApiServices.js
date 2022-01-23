import axios from 'axios';


const url = 'http://ongapi.alkemy.org/api/categories'



export const categoriesPost = (data) => {  

    axios.post(url, data)
        .then(res => console.log(res))
        .catch(err => console.log(err))

}

export const categoriesPut = (data) => {
   

    axios.put(`${url}/${data.id}`, data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
};