import { CATEGORY_URL } from "../../config/imagePaths";
import { 
    patch, 
    post 
} from "../privateApiService";

const updateCategory = async ( id, data ) => {
    try {
        const res = await patch( `${CATEGORY_URL}/${id}`, data );
        return res;
    } catch ( error ) {
        return error;
    } 
};

const saveCategory = async ( data ) => {
    try {
        const res = await post( CATEGORY_URL, data );
        return res;
    } catch ( error ) {
        return error;
    }   
};

export{
    updateCategory,
    saveCategory
};