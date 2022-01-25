import React, { useRef, useState } from 'react';
import '../FormStyles.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { 
    categoryDescriptionSchema, 
    categoryFileSchema, 
    categoryNameSchema 
} from '../../Validations/CategoriesValidation';
import { 
    Patch, 
    Post 
} from '../../Services/privateApiService';

const date = new Date().toJSON()

const CategoriesForm = ({ category }) => {

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
    const [categorieValues, setCategorieValues] = useState( category || initialStateValuesInput );   

    const inputRefImage = useRef();

    const handleCkeditorChange = ( event, editor ) => {
        const data = editor.getData();
        setCategorieValues({ 
            ...categorieValues, 
            description: data 
        })
    };
    const handlePictureClick = () => {
        inputRefImage.current.click();
    };
    const handleChange = (e) => {
        if ( e.target.name === 'name' ) {
            setCategorieValues({ 
                ...categorieValues, 
                name: e.target.value 
            })
        } if ( e.target.name === 'image' ) {
            const file = e.target.files[0]
            if ({ file }) {
                setCategorieValues({ 
                    ...categorieValues, 
                    image: file 
                })          
            }}
    };
    const validateName = ()=>{
        setErrorName('');
        categoryNameSchema.validate( categorieValues )
        .catch( err => {
            const errorActive = err.errors[0];
            if ( errorActive === 'Minimo 4 caracteres' ) {               
                setErrorName( errorActive )
            } else if ( errorActive === 'Campo obligatorio' ) {                
                setErrorName( errorActive )                
            }
        });
    };
    const validateDescription = ()=>{        
        setErrorDescription('');
        categoryDescriptionSchema.validate( categorieValues )
        .catch( err => {
            const errorActive = err.errors[0];
            if ( errorActive === 'Campo obligatorio' ) {
                setErrorDescription( errorActive )
            }
        });
    };
    const validateFile = ()=>{
        setErrorFile('');  
        categoryFileSchema.validate( categorieValues )
        .catch(err => {
            const errorActive = err.errors[0];            
            if ( errorActive === 'El formato debe ser .png/.jpg' ) {
                setErrorFile( errorActive )
            }
        });
    };
    const validatateData = async()=>{
        validateName();
        validateDescription();
        validateFile();
        const validName = await categoryNameSchema.isValid( categorieValues );
        const validDescription = await categoryDescriptionSchema.isValid( categorieValues );
        const validFile = await categoryFileSchema.isValid( categorieValues );
              
        if ( validName && validDescription && validFile ) {    
            validateRequest();
        };   
    };
    const validateRequest = async() => {
        category        
        ? await Patch(`categories/${categorieValues.id}`, categorieValues)        
        : await Post(`categories`, categorieValues)       
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        validatateData();
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
            {errorName && <div className='text-danger'>{errorName}</div> }
            <CKEditor
                editor={ClassicEditor}
                onChange={handleCkeditorChange}
                data={categorieValues.description}
            />
           {errorDescription && <div className='text-danger'>{errorDescription}</div> }
            <input 
                type="file" 
                name="image" 
                onChange={handleChange} 
                className="hideElement" 
                ref={inputRefImage}
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
            {errorFile && <div className='text-danger'>{errorFile}</div> }
            <button 
                className="submit-btn" 
                type="submit"
            >Send</button>        
        </form>
    );
};

export default CategoriesForm;