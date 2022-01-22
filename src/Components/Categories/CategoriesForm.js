import React, { useState } from 'react';
import '../FormStyles.css';
import axios from 'axios';


import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { categoryDescriptionSchema, categoryFileSchema, categoryNameSchema } from '../../Validations/CategoriesValidation';





 



const CategoriesForm = () => {


    

    const initialStateValuesInput = {
        name: '',
        description: '',
        file: ''
    }
    
    const [errorName, setErrorName] = useState('');
    const [errorDescription, setErrorDescription] = useState('');
    const [errorFile, setErrorFile] = useState('');

    const [categorieValues, setCategorieValues] = useState(initialStateValuesInput)






    const  validationEdicion = (data, newCategorie)=> {

        console.log(data);
        console.log(newCategorie);
         
        const {id, name, description, file } = newCategorie
        const categoryUpdate = data?.find( categorie => categorie?.name === newCategorie.name)
      
         console.log(categoryUpdate);
     
         if (!categoryUpdate === true) {
          
             console.log('POST', {id, name, description, file});
             
             //categoriesPost(id, name, description, image)
             setCategorieValues({...categorieValues, description: ''})
             setCategorieValues(initialStateValuesInput)
                
              
            

         } else {
                console.log('PUT', {id, name, description, file});
                setCategorieValues({...categorieValues, description: categoryUpdate.description, })
              
                console.log(categorieValues);
                console.log(categoryUpdate.description);
            // categoriesPut(id, name, description, image)
         }
         console.log(categorieValues);
     
     }
    

    const url = 'http://ongapi.alkemy.org/api/categories'

     const categoriesGet = (categorieValues) => {
        axios.get(url)
        .then(res => {
    
            const {data} = res.data
           
            validationEdicion(data, categorieValues)   
        })
    
        .catch(err => console.log(err))
       
    }
    
   


    const handleChange = (e) => {

        if (e.target.name === 'name') {
            setCategorieValues({ ...categorieValues, name: e.target.value })
        } if (e.target.name === 'file') {
            const file = e.target.files[0]
           
            if (file) {
                setCategorieValues({ ...categorieValues, file })
            }
        }
    }

    const handleSubmit =  async (e) => { 
          

        e.preventDefault();         
        setErrorName('')
        setErrorDescription('')
        setErrorFile('')

      categoryNameSchema.validate(categorieValues).catch(err => {

            const errorActive = err.errors[0];

          
            if (errorActive === 'Minimo 4 caracteres') {
                setErrorName(errorActive )

            } else if (errorActive === "Campo obligatorio") {
                setErrorName(errorActive )   
                
            }  

        })
       categoryDescriptionSchema.validate(categorieValues).catch(err => {

            const errorActive = err.errors[0];
          

            if (errorActive === 'Campo obligatorio') {
                setErrorDescription(errorActive )
             
            } 

        })
    categoryFileSchema.validate(categorieValues).catch(err => {

            const errorActive = err.errors[0];
           
            if (errorActive === 'Campo obligatorio') {
                setErrorFile( errorActive )
            } else if (errorActive === 'El formato debe ser .png/.jpg') {
                setErrorFile( errorActive )              
            }
        })
  
        const respN = await categoryNameSchema.isValid(categorieValues)
        const respD = await categoryDescriptionSchema.isValid(categorieValues)
        const respF = await categoryFileSchema.isValid(categorieValues)


        if (respN === true && respD === true && respF === true ) {
        
           
            categoriesGet(categorieValues)
               
        } else {
            console.log('fracaso');
     }

   
      
       
    
       
      
      
    }

    const handleCkeditorChange = (event, editor) => {
        const data = editor.getData();
        setCategorieValues({ ...categorieValues, description: data })

    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }


    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={categorieValues.name} onChange={handleChange} placeholder="Title" ></input>
            <div>{errorName}</div>

            <CKEditor
                editor={ClassicEditor}
                onChange={handleCkeditorChange}
                data={categorieValues.description}
                
            />        
         <div>{errorDescription}</div>

            <input type="file" name="file" onChange={handleChange} className="imputImage" id="fileSelector" accept='image/png,image/jpeg'></input>   
            <button className="submit-btn" type='button' onClick={handlePictureClick}>Select image</button>
            <div>{errorFile}</div>

            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}

export default CategoriesForm;