import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { addNewSlide, editSlide, getSlide } from "../../Services/privateApiService";

const SlidesForm = ({ slide }) => {

    const [getState, setGetState] = useState([]);
    const [order, setOrder] = useState("Este campo es obligatorio")
    const [requiredName, setRequiredName] = useState(false)
    const [requiredDescription, setRequiredDescription] = useState(false)
    const [requiredImage, setRequiredImage] = useState(false)
    const [requiredOrder, setRequiredOrder] = useState(false)


    const bringSlide = async () => {
        let data = await getSlide('/slides');
        setGetState(data)
    }

    useEffect(() => {
        bringSlide()
    }, []);

    const uniqueOrder = () => {
        let isUnique = true;
        for (let i = 0; i < getState.length; i++) {
            if (getState[i].order == initialValues.order) {
                setRequiredOrder(true)
                setOrder('Elija otro número que no haya sido usado');
                isUnique = false;
                break
            }
        }
        return isUnique
    }

    useEffect(() => {
        if (slide) {
            const { name, description, image } = slide;
            setInitialValues({
                ...initialValues,
                name,
                description,
                image
            });
        }
    }, []);

    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        image: '',
        order: ''
    });

    const handleChange = (e) => {

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

        } else if (e.target.name === 'order') {
            setInitialValues({ ...initialValues, order: e.target.value })
        }
    };

    const handleChangeDescription = (event, editor) => {
        const data = editor.getData();
        setInitialValues({ ...initialValues, description: data })
    };

    const addSlide = () => {
        const body = {
            id: 0,
            name: initialValues.name,
            description: initialValues.description,
            image: initialValues.image,
            order: initialValues.order,
            created_at: "2022-01-21T12:31:52.129Z",
            updated_at: "2022-01-21T12:31:52.129Z",
            deleted_at: "2022-01-21T12:31:52.129Z"
        }
        addNewSlide("/slides", body)
    };

    const updateSlide = () => {
        const body = {
            name: initialValues.name,
            description: initialValues.description,
            image: initialValues.image,
            order: initialValues.order,
            created_at: "2022-01-21T12:31:52.129Z",
            updated_at: "2022-01-21T12:31:52.129Z",
            deleted_at: "2022-01-21T12:31:52.129Z"
        }
        editSlide("/slides", body)
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const { name, description, image, order } = initialValues;

        name === "" ? setRequiredName(true) : setRequiredName(false);
        description === "" ? setRequiredDescription(true) : setRequiredDescription(false);
        image === "" ? setRequiredImage(true) : setRequiredImage(false);

        if (order === "") {
            setRequiredOrder(true)
        } else {
            setRequiredOrder(false);
            uniqueOrder();
        }

        if (!slide && ![name, description, image, order].includes("") && uniqueOrder()) {
            addSlide();
        } else if (slide && ![name, description, image, order].includes("") && uniqueOrder()) {
            updateSlide();
        }
        clearForm()
    };

    const clearForm = () => {
        setInitialValues({
            name: '',
            description: '',
            image: '',
            order: ''
        })
        document.getElementById('form').reset()
    }

    return (

        <form className="form-container" id='form' onSubmit={handleSubmit}>

            <input className={requiredName ? "input-field requerido" : "input-field "} type="text" minLength="4" name="name" value={initialValues.name} onChange={handleChange} placeholder="Slide Title"></input>
            {requiredName ? <span className='span-requerido'>Este campo es obligatorio</span> : ""}

            <div className={requiredDescription ? 'requerido' : ''}>
                <CKEditor type="text" name="description" id="editor" value={initialValues.description} editor={ClassicEditor} onChange={handleChangeDescription} placeholder="Write the description" />
            </div>
            {requiredDescription ? <span className='span-requerido'>Este campo es obligatorio</span> : ""}

            <input className={requiredImage ? "input-field requerido" : "input-field"} type="file" name='image' files={[initialValues.image]} id='file' accept="image/png, image/jpeg" placeholder='Add image' onChange={handleChange}></input>
            {requiredImage ? <span className='span-requerido'>Este campo es obligatorio</span> : ""}

            <input className={requiredOrder ? 'input-field requerido' : 'input-field'} type="number" name='order' value={initialValues.order} placeholder='Slide order number' onChange={handleChange}></input>
            {requiredOrder ? <span className='span-requerido' id='order'>{order}</span> : ""}

            <button className="submit-btn" type="submit">Send</button>

        </form>
    );
}

export default SlidesForm;