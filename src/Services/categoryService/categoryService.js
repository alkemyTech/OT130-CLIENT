import { CATEGORY_URL } from "../../config/imagePaths";
import { 
    patch, 
    post 
} from "../privateApiService";

const updateCategory = async ( id, data ) => {
    const res = await patch( `${CATEGORY_URL}/${id}`, data );
    return res;
};

const saveCategory = async ( data ) => {
    const res = await post( CATEGORY_URL, data );
    return res;
};

export{
    updateCategory,
    saveCategory
};