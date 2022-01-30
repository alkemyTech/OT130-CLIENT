import { CATEGORY_URL } from "../../config/imagePaths";
import { 
    patch, 
    post 
} from "../privateApiService";

const updateCategory = async ( id, data ) => {
    try {
        return await patch( `${CATEGORY_URL}/${id}`, data );         
    } catch ( error ) {
        return error;
    }; 
};

const saveCategory = async ( data ) => {
    try {
        return await post( CATEGORY_URL, data );         
    } catch ( error ) {
        return error;
    };   
};

export{
    updateCategory,
    saveCategory
};