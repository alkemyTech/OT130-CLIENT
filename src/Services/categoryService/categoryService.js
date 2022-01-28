import { CATEGORY_URL } from "../../Validations/CategoriesValidation";
import { 
    patch, 
    post 
} from "../privateApiService";

const updateCategory = async ( id, data ) => {
    const res = await patch( `${CATEGORY_URL}/${id}`, data );
    console.log( res ); // Retirar
    return res;
};
const saveCategory = async ( data ) => {
    const res = await post( CATEGORY_URL, data );
    console.log( res ); // Retirar
    return res;
};

export{
    updateCategory,
    saveCategory
};