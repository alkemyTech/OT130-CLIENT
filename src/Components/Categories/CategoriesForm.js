import React, { useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../FormStyles.css';
import { SUPPORTED_IMAGE_FORMATS } from '../../config/imagePaths';
import { 
    saveCategory, 
    updateCategory 
} from '../../Services/categoryService/categoryService';
import { 
    categoryDescriptionSchema, 
    categoryFileSchema, 
    categoryNameSchema 
} from '../../Validations/CategoriesValidation';

const currentDate = new Date().toJSON()

const CategoriesForm = ({ category }) => {

    const initialCategoryValues = {
        id: 0,
        name: "",
        description: "",
        image: "",
        parent_category_id: 0,
        created_at: currentDate,
        updated_at: currentDate,
        deleted_at: ""
    };   
    const [errorName, setErrorName] = useState('');
    const [errorDescription, setErrorDescription] = useState('');
    const [errorFile, setErrorFile] = useState('');
    const [categoryValues, setCategoryValues] = useState( category || initialCategoryValues );   

    const inputRefImage = useRef();

    const handleCkeditorChange = ( event, editor ) => {
        const data = editor.getData();
        setCategoryValues({ 
            ...categoryValues, 
            description: data, 
        })
    };

    const handlePictureClick = () => {
        inputRefImage.current.click();
    };

    const handleChange = ( e ) => {
        let { name, value } = e.target;
        setCategoryValues(( categoryValues ) => {
            if (name === 'image') {
                value = e.target.files[0];            
            }  
            return {
                ...categoryValues,
                [name]: value,
            };
        });  
    };

    const cleanErrorsMessages = () => {
        setErrorName('');
        setErrorDescription('');
        setErrorFile('');  
    };

    const validateInputName = async () => {
        const validName = await categoryNameSchema.isValid( categoryValues );
        categoryNameSchema.validate( categoryValues )
        .catch( err => {
            const errorActive = err.errors[0];                       
                setErrorName( errorActive );         
        });
        if ( validName  ) {    
            return true;       
        };           
    };

    const validateInputDescription = async () => { 
        const validDescription = await categoryDescriptionSchema.isValid( categoryValues );       
        categoryDescriptionSchema.validate( categoryValues )
        .catch( err => {
            const errorActive = err.errors[0];           
                setErrorDescription( errorActive );            
        });
        if ( validDescription ) {    
            return true;       
        }; 
    };

    const validateInputFile = async () => {
        const validFile = await categoryFileSchema.isValid( categoryValues );
        categoryFileSchema.validate( categoryValues )
        .catch(err => {
            const errorActive = err.errors[0];         
                setErrorFile( errorActive );      
        });
        if ( validFile ) {    
            return true;       
        }; 
    };  
   
    const formValidation = async () => {
        const validName = await validateInputName();
        const validDescription = await validateInputDescription();
        const validFile = await validateInputFile();
        if ( validName && validDescription && validFile ) {    
            return true;       
        };         
    };   

    const choiceTypeRequest = () => {        
     category        
        ? updateCategory( categoryValues.id, categoryValues )        
        : saveCategory( categoryValues );       
    };

    const handleSubmit = async ( e ) =>{
        e.preventDefault();
        cleanErrorsMessages();
        const validatedForm = await formValidation();
        validatedForm && choiceTypeRequest();        
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input 
                className="input-field" 
                type="text" name="name" 
                value={categoryValues.name} 
                onChange={handleChange} 
                placeholder="Title" 
            >
            </input>
            {errorName && <div className='text-danger'>{errorName}</div> }
            <CKEditor
                editor={ClassicEditor}
                onChange={handleCkeditorChange}
                data={categoryValues.description}
            />
           {errorDescription && <div className='text-danger'>{errorDescription}</div> }
            <input 
                type="file" 
                name="image" 
                onChange={handleChange} 
                className="hideElement" 
                ref={inputRefImage}
                accept={SUPPORTED_IMAGE_FORMATS}
            >
            </input>
            <button 
                className="submit-btn" 
                type='button' 
                onClick={handlePictureClick}
            >
                Selecciona una imagen
            </button>
            {errorFile && <div className='text-danger'>{errorFile}</div> }
            <button 
                className="submit-btn" 
                type="submit"
            >Enviar</button>        
        </form>
    );
};

export default CategoriesForm;