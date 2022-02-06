import React, { useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2'
import '../FormStyles.css';
import { SUPPORTED_IMAGE_FORMATS } from '../../config/imagePaths';
import { 
    saveCategory, 
    updateCategory 
} from '../../Services/categoriesService';
import { 
    categoryDescriptionSchema, 
    categoryFileSchema, 
    categoryNameSchema 
} from '../../Helpers/categoryValidation';
import { 
    ALERT_ICON_ERROR, 
    ALERT_ICON_SUCCESS 
} from '../../Helpers/messagesText';

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

    const messageAlert = ( icon ) => {
        return(   
            Swal.fire({
            position: 'top-end',
            icon: icon,
            showConfirmButton: false,
            timer: 1000
          }) )
    };  
 
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
            if ( name === 'image' ) {
                value = e.target.files[0];            
            }  
            return {
                ...categoryValues,
                [ name ]: value,
            };
        });  
    };

    const cleanErrorsMessages = () => {
        setErrorName('');
        setErrorDescription('');
        setErrorFile(''); 
 
    };  
   
    const formValidation =  async () => {
        const validations = [
            await validateName( categoryValues ),
            await validateDescription( categoryValues ),
            await validateFile( categoryValues )
        ];
    
        const allValidationsAreOk = validations.every( validation => validation );
    
        return allValidationsAreOk;    
    };
    
    const validateName = async ( categoryValues ) => {
        try {
            return await categoryNameSchema.validate( categoryValues );
        } catch( err ) {
            const errorActive = err.errors[0];
            setErrorName( errorActive );    
            return false;
        };
    };
    
    const validateDescription = async ( categoryValues ) => {
        try {
            return await categoryDescriptionSchema.validate( categoryValues );
        } catch(err) {
            const errorActive = err.errors[0];
            setErrorDescription( errorActive );    
            return false;
        };
    };
    
    const validateFile = async ( categoryValues ) => {
        try {
            return await categoryFileSchema.validate( categoryValues );
        } catch( err ) {
            const errorActive = err.errors[0];
            setErrorFile( errorActive );    
            return false;
        };
    };

    const requestToDo = async ( request, id ) => {
        const {data}  = await request( categoryValues, id )       
        data
           ? messageAlert( ALERT_ICON_SUCCESS ) 
           : messageAlert( ALERT_ICON_ERROR )
                        
    };

    const choiceTypeRequest = () => {  
      category
            ? requestToDo( updateCategory, categoryValues.id )
            : requestToDo( saveCategory );          
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
            >
                Enviar
            </button>        
        </form>
    );
};

export default CategoriesForm;