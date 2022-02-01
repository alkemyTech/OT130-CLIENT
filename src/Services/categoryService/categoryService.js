import { CATEGORY_URL } from "../../config/imagePaths";
import { 
    Patch, 
    Post 
} from "../privateApiService";

const updateCategory = async ( id, data ) => {
    try {
        return await Patch( `${CATEGORY_URL}/${id}`, data );         
    } catch ( error ) {
        return error;
    }; 
};

const saveCategory = async ( data ) => {
    try {
        return await Post( CATEGORY_URL, data );         
    } catch ( error ) {
        return error;
    };   
};

export{
    updateCategory,
    saveCategory
};