import React, { useState } from 'react';
import '../FormStyles.css';


import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { categorySchema } from '../../Validations/CategoriesValidation';

const CategoriesForm = () => {
const initialStateErros = {
   
}

const [errors, setErrors] = useState(initialStateErros);
    
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        file: {}
    })

    const handleChange = (e) => {

    
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'file'){
            const file = e.target.files[0]

            if(file){
                
                setInitialValues({...initialValues, file})
            }

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
        setErrors(initialStateErros)

        categorySchema.validate(initialValues).catch(err =>{

          


            const errorActive = err.errors[0];

            if (errorActive === 'You need to provide a description') {
                
                setErrors({errorDescription: errorActive})
            } else if (errorActive === 'You need to provide a name/ min 4 caracter') {
        
                setErrors({errorName: errorActive})

            } else if (errorActive === 'name must be at least 4 characters') {
               
                setErrors({errorName: errorActive})

            } else if (errorActive === 'You need to provide a file') {
                
                setErrors({ errorFile: errorActive})
            }
            
           
            console.log(errorActive);
            
        })
        
        console.log(errors);
    }


    const handleCkeditorChange = ( event, editor ) => {
        const data = editor.getData();
        setInitialValues({...initialValues, description: data})

    }

    const handlePictureClick = ()=>{
        document.querySelector('#fileSelector').click();
    }



    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Title" ></input>
    
             <div>{errors?.errorName}</div> 

    
        
            <CKEditor
                  editor={ ClassicEditor }
                
                  onChange={handleCkeditorChange}
               
            />
 <div>{errors?.errorDescription}</div>
            <input type="file" name="file" onChange={handleChange} className="imputImage" id="fileSelector" accept='image/png,image/jpeg'></input>
      
            <button className="submit-btn" type='button' onClick={handlePictureClick}>Select image</button>
            <div>{errors?.errorFile}</div>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default CategoriesForm;