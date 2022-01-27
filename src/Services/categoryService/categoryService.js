import { CATEGORY_URL } from "../../Validations/CategoriesValidation";
import { patch, post } from "../privateApiService";

const updateCategory = (id, data) => {
    patch(`${CATEGORY_URL}/${id}`,data)
};
const saveCategory = (data) => {
    post(CATEGORY_URL, data)
};

export{
    updateCategory,
    saveCategory
};