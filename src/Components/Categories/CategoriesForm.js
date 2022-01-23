import React, { useState } from 'react';
import '../FormStyles.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { categoryDescriptionSchema, categoryFileSchema, categoryNameSchema } from '../../Validations/CategoriesValidation';
import { categoriesPost, categoriesPut } from '../../Services/categoriesApiServices';

const date = new Date().toJSON()


const CategoriesForm = ({ categorie }) => {

    const initialStateValuesInput = {
        id: 0,
        name: "",
        description: "",
        image: "",
        parent_category_id: 0,
        created_at: date,
        updated_at: date,
        deleted_at: ""
    };

    const [errorName, setErrorName] = useState('');
    const [errorDescription, setErrorDescription] = useState('');
    const [errorFile, setErrorFile] = useState('');

    //Valido si recibo una categoria por las props, si no establesco los valores iniciales de los imput vacios  

    const [categorieValues, setCategorieValues] = useState(categorie || initialStateValuesInput);

    //si recibo el objeto categorie realizo una peticion POST / de lo contratio una peticion PUT

    const validationEdicion = () => {

        if (categorie) {            
            categoriesPost({
                ...categorieValues,
                updated_at:date,
            })
            
        } else {          
            categoriesPut(categorieValues)
            console.log(categorieValues);
        }
    };

    const handleCkeditorChange = (event, editor) => {

        const data = editor.getData();
        setCategorieValues({ ...categorieValues, description: data })

    };

    const handlePictureClick = () => {

        document.querySelector('#fileSelector').click();

    };

    const handleChange = (e) => {

        if (e.target.name === 'name') {

            setCategorieValues({ ...categorieValues, name: e.target.value })

        } if (e.target.name === 'image') {

            const file = e.target.files[0]

            if ({ file }) {

                setCategorieValues({ ...categorieValues, image: file })            
               
            }
        }
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        setErrorName('');
        setErrorDescription('');
        setErrorFile('');
        
    //Valido de manera individual cada input retornando un mesaje de erros a la vista   

        categoryNameSchema.validate(categorieValues).catch(err => {

            const errorActive = err.errors[0];

            if (errorActive === 'Minimo 4 caracteres') {
               
                setErrorName(errorActive)

            } else if (errorActive === "Campo obligatorio") {
                
                setErrorName(errorActive)
                
            }
        });

        categoryDescriptionSchema.validate(categorieValues).catch(err => {

            const errorActive = err.errors[0];

            if (errorActive === 'Campo obligatorio') {

                setErrorDescription(errorActive)

            }
        });
        
        categoryFileSchema.validate(categorieValues).catch(err => {

            const errorActive = err.errors[0];
            
            if (errorActive === 'El formato debe ser .png/.jpg') {

                setErrorFile(errorActive)

            }
        });

        const respN = await categoryNameSchema.isValid(categorieValues);
        const respD = await categoryDescriptionSchema.isValid(categorieValues);
        const respF = await categoryFileSchema.isValid(categorieValues);

        //Si todos los input me regresan un true a su validacion ejecuto la funcion que realiza la llamada a la API     
              
        if (respN === true && respD === true && respF === true) {    

            validationEdicion();
        };
    };

   


    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input 
                className="input-field" 
                type="text" name="name" 
                value={categorieValues.name} 
                onChange={handleChange} 
                placeholder="Title" 
            >
            </input>
            <div className='text-danger'>{errorName}</div>

            <CKEditor
                editor={ClassicEditor}
                onChange={handleCkeditorChange}
                data={categorieValues.description}

            />
            <div className='text-danger'>{errorDescription}</div>

            <input 
                type="file" 
                name="image" 
                onChange={handleChange} 
                className="imputImage" 
                id="fileSelector" 
                accept='image/png,image/jpeg'
            >
            </input>

            <button 
                className="submit-btn" 
                type='button' 
                onClick={handlePictureClick}
            >
                Select image
            </button>
            <div className='text-danger'>{errorFile}</div>

            <button 
                className="submit-btn" 
                type="submit"
            >Send</button>
        
        </form>
    );
}

export default CategoriesForm;