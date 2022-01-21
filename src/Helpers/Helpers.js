import { categoriesPost, categoriesPut } from "../Services/categoriesApiServices"

export const  validation01 = (data, newCategorie)=> {

   

    const {id, name, description, image } = newCategorie
    const categoryUpdate = data?.find( categorie => categorie?.name === newCategorie.name)

    if (categoryUpdate) {

        categoriesPut(id, name, description, image)
        
    } else {
        categoriesPost(id, name, description, image)
    }




}