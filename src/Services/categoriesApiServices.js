import axios from 'axios';


const url = 'http://ongapi.alkemy.org/api/categories'



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