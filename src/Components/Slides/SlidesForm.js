import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import swal from 'sweetalert';

const SlidesForm = ({ slide }) => {

    const [getState, setGetState] = useState([]);

    const requestGet = async () => {
        await axios.get('http://ongapi.alkemy.org/api/slides')
            .then((res) => setGetState(res.data.data))
            .catch((error) => console.log("error:", error))
    }

    useEffect(() => {
        requestGet()
    }, []);

    useEffect(() => {

        if (slide !== undefined) {
            const { name, description, image } = slide;
            setInitialValues({ ...initialValues, name: name, description: description, image: image });
        }

    }, []);

    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        image: ''
    });

    const handleChange = (e) => {
        console.log(e);
        if (e.target.name === 'name') {
            setInitialValues({ ...initialValues, name: e.target.value })
        } else if (e.target.name === 'image') {
            let file = e.target.files[0];
            let reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => {
                let base64 = reader.result;
                setInitialValues({ ...initialValues, image: base64 })
            }

        }
    };

    const handleChangeDescription = (event, editor) => {
        const data = editor.getData();
        setInitialValues({ ...initialValues, description: data })
    };

    const requestPost = async () => {
        const body = {
            id: 0,
            name: initialValues.name,
            description: initialValues.description,
            image: initialValues.image,
            order: 0,
            user_id: 0,
            created_at: "2022-01-21T12:31:52.129Z",
            updated_at: "2022-01-21T12:31:52.129Z",
            deleted_at: "2022-01-21T12:31:52.129Z"
        }
        await axios.post('http://ongapi.alkemy.org/api/slides', body)
            .then((res) => console.log(res))
            .catch((error) => console.log("error:", error))
    };

    const requestPatch = async () => {
        const body = {
            name: initialValues.name,
            description: initialValues.description,
            image: initialValues.image,
            order: 0,
            user_id: 0,
            created_at: "2022-01-21T12:31:52.129Z",
            updated_at: "2022-01-21T12:31:52.129Z",
            deleted_at: "2022-01-21T12:31:52.129Z"
        }
        await axios.patch('http://ongapi.alkemy.org/api/slides', body)
            .then((res) => console.log(res))
            .catch((error) => console.log("error:", error))
    };



    const handleSubmit = (e) => {

        e.preventDefault();
        const { name, description, image } = initialValues;

        if ([name, description, image].includes("")) {
            swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor complete todos los campos!',
            })
        } else if (slide === undefined) {
            requestPost()
        } else {
            requestPatch()
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" minLength="4" name="name" value={initialValues.name} onChange={handleChange} placeholder="Slide Title"></input>
            <CKEditor className="input-field" type="text" name="description" editor={ClassicEditor} value={initialValues.description} onChange={handleChangeDescription} placeholder="Write the description" />
            <input className='input-field' type="file" name='image' id='file' accept="image/png, image/jpeg" placeholder='Add image' onChange={handleChange}></input>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}

export default SlidesForm;