import React, { useState } from 'react';
import '../FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const SlidesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        image: ''
    });

    const handleChange = (e) => {
        console.log(e);
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } else if(e.target.name === 'image'){
            setInitialValues({...initialValues, image: e.target.value})
        }
    }

    const handleChangeDescription = (event, editor) => {
        const data = editor.getData();
        setInitialValues({...initialValues, description: data})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(initialValues);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Slide Title"></input>
            <CKEditor className="input-field" type="text" name="description" editor = { ClassicEditor } value={initialValues.description} onChange={handleChangeDescription} placeholder="Write the description"/>
            <input className='input-field' type="file" name='image' accept="image/png, image/jpeg" placeholder='Add image' value={initialValues.image} onChange={handleChange}></input>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default SlidesForm;