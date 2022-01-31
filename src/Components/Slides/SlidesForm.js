import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { addNewSlide, editSlide, getSlide } from "../../Services/privateApiService";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

const SlidesForm = ({ slide }) => {

  const [getState, setGetState] = useState([]);
  const [order, setOrder] = useState("Este campo es obligatorio");
  const [requiredName, setRequiredName] = useState(false);
  const [requiredDescription, setRequiredDescription] = useState(false);
  const [requiredImage, setRequiredImage] = useState(false);
  const [requiredOrder, setRequiredOrder] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: '',
    description: '',
    image: '',
    order: ''
  });

  useEffect(() => {
    getSlide('/slides')
      .then((response) => setGetState(response.data.data))
      .catch((err) => alert("Error:", err));
  }, []);

  const isOrderAlreadyUsed = getState.some(state => state.order === parseInt(initialValues.order));

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
    setInitialValues({ ...initialValues, description: data });
  };

  const addSlide = () => {
    const body = {
      name: initialValues.name,
      description: initialValues.description,
      image: initialValues.image,
      order: initialValues.order,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date()
    };

    addNewSlide("/slides", body)
      .then((response) => alert(response.data.message))
      .catch((err) => alert("Error:", err))
      .finally(() => setLoading(false));
  };

  const updateSlide = (id) => {
    const body = {
      name: initialValues.name,
      description: initialValues.description,
      image: initialValues.image,
      order: initialValues.order,
      created_at: "2022-01-21T12:31:52.129Z",
      updated_at: "2022-01-21T12:31:52.129Z",
      deleted_at: "2022-01-21T12:31:52.129Z"
    };

    editSlide("/slides", body)
      .then((response) => alert(response.data.message))
      .catch((err) => alert("Error:", err))
      .finally(() => setLoading(false));
  };

  const validateFormData = (e) => {

    e.preventDefault();
    setLoading(true);

    const { name, description, image, order } = initialValues;
    name === "" ? setRequiredName(true) : setRequiredName(false);
    description === "" ? setRequiredDescription(true) : setRequiredDescription(false);
    image === "" ? setRequiredImage(true) : setRequiredImage(false);

    if (order === "" ) {
      setRequiredOrder(true);
    } else if ( isOrderAlreadyUsed ){
      setRequiredOrder(true);
      setOrder('Elija otro número que no haya sido usado');
    }  else {
      setRequiredOrder(false);
    }

    if (![name, description, image, order].includes("") && !isOrderAlreadyUsed ) {
      handleSubmit(e);
    } else {
      setLoading(false);
    }

  }

  const handleSubmit = (e) => {
    if (!slide) {
      addSlide()
    } else if (slide && slide.id) {
      updateSlide(slide.id)
    }

    clearForm()
    e.target.reset()
  };

  const clearForm = () => {
    setInitialValues({
      name: '',
      description: '',
      image: '',
      order: ''
    })
  }

  return (

    <form className="form-container" onSubmit={validateFormData}>

      <input className={requiredName ? "input-field input-required" : "input-field "} type="text" minLength="4" name="name" value={initialValues.name} onChange={handleChange} placeholder="Slide Title"></input>
      {requiredName ? <span className='span-required'>Este campo es obligatorio</span> : ""}

      <div className={requiredDescription ? 'input-required' : ''}>
        <CKEditor type="text" name="description" id="editor" value={initialValues.description} editor={ClassicEditor} onChange={handleChangeDescription} placeholder="Write the description" />
      </div>
      {requiredDescription ? <span className='span-required'>Este campo es obligatorio</span> : ""}

      <input className={requiredImage ? "input-field input-required" : "input-field"} type="file" name='image' files={[initialValues.image]} id='file' accept="image/png, image/jpeg" placeholder='Add image' onChange={handleChange}></input>
      {requiredImage ? <span className='span-required'>Este campo es obligatorio</span> : ""}

      <input className={requiredOrder ? 'input-field input-required' : 'input-field'} type="number" name='order' value={initialValues.order} placeholder='Slide order number' onChange={handleChange}></input>
      {requiredOrder ? <span className='span-required' id='order'>{order}</span> : ""}

      <button className="submit-btn" type="submit">
        {loading ?
          <Spinner animation="border" style={{ width: "30px", height: "30px" }} />
          :
          "SEND"}
      </button>

    </form>
  );
}

export default SlidesForm;