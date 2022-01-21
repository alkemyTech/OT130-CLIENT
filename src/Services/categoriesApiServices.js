import axios from 'axios';
import { validation01 } from '../Helpers/Helpers';


const url = 'http://ongapi.alkemy.org/api/categories'

export const categoriesGet = (categorieValues) => {
    axios.get(url)
    .then(res => {

        const {data} = res.data
        console.log(data);
        validation01(data,categorieValues)   
    })

    .catch(err => console.log(err))
   
}

export const categoriesPost = (id, name, description, image )=>{

    const date = new Date().toJSON()

    const data = {
        id: id,
        name: name,
        description: description,
        image: image,
        parent_category_id: id,
        created_at:date,
        updated_at:date ,
        deleted_at:date ,
    }

    axios.post(url, data)
    .then(res => console.log(res))
    .catch(err => console.log(err))

}

export const categoriesPut = (id, name, description, image)=>{
    const date = new Date().toJSON()

    const data = {
        id: id,
        name: name,
        description: description,
        image: image,
        parent_category_id: id,
        created_at:date,
        updated_at:date ,
        deleted_at:date ,
    }

    axios.put(url, data)
    .then(res => console.log(res))
    .catch(err => console.log(err))
};