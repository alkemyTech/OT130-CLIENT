import * as Yup from 'yup';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ErrorMessage, Formik } from 'formik';
import React, { useEffect, useState } from 'react';

import { INPUT_REQUIRED } from '../../Helpers/messagesText';
import { getCategories, saveNews, updateNews } from '../../Services/homeService';
import { toBase64 } from '../../Helpers/base64';
import { yupImages, yupTitles } from '../../Helpers/formValidations';

import '../FormStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialValues = {
  id: null,
  name: '',
  content: '',
  image: '',
  category_id: '',
};

const NewsForm = ({ editNews }) => {
  const [news, setNews] = useState(editNews || initialValues);
  const [categories, setCategories] = useState([]);
  const [success, setSuccess] = useState(false);
  const [requestError, setRequestError] = useState();

  const updateCategories = async () => {
    const { data, error } = await getCategories();

    if (error) {
      setRequestError(error);
    } else {
      setCategories(data);
    }
  };

  useEffect(() => {
    updateCategories();
  }, []);

  const handleChangeCKE = (editor, setFieldValue) => {
    setFieldValue('content', editor.getData());
  };

  const validation = Yup.object().shape({
    name: yupTitles(),
    content: Yup.string().required(INPUT_REQUIRED),
    image: yupImages(),
    category_id: Yup.number().required(INPUT_REQUIRED),
  });

  const handleSubmit = async (values) => {
    const base64Image = await toBase64(values.image);

    values.image = base64Image;

    const { data, error } = news.id
      ? await updateNews(values)
      : await saveNews(values);

    if (error) {
      setRequestError(error);
    } else {
      setSuccess(true);
      setNews(initialValues);
    }
  };

  return (
    <Formik
      initialValues={news}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        handleSubmit(values);
      }}
      validationSchema={validation}
    >
      {({ values, handleChange, handleSubmit, touched, setFieldValue }) => (
        <form className='form-container' onSubmit={handleSubmit}>
          <input
            className='input-field'
            type='text'
            name='title'
            onChange={handleChange('name')}
            placeholder='Titulo de la noticia'
            value={values.name}
          />
          {touched.name && <ErrorMessage name='name' />}

          <CKEditor
            editor={ClassicEditor}
            data={news?.content}
            onChange={(e, editor) => handleChangeCKE(editor, setFieldValue)}
          />
          {touched.content && <ErrorMessage name='content' />}

          <div className='input-field'>
            <label>Imagen: </label>
            <input
              className=' px-2'
              type='file'
              name='image'
              accept='image/*'
              onChange={(e) => setFieldValue('image', e.currentTarget.files[0])}
            />
            {values.id && (
              <p className=' mt-3'>Ingrese nueva si desea cambiar</p>
            )}
          </div>
          {touched.image && <ErrorMessage name='image' />}

          <select
            className='select-field'
            name='category'
            value={values.category_id}
            onChange={handleChange('category_id')}
          >
            <option value='' disabled>
              Seleccionar categoria
            </option>
            {categories.map(({ id, name }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </select>
          {touched.category_id && <ErrorMessage name='category_id' />}

          <button className='submit-btn' type='submit'>
            {values.id ? 'Editar' : 'Enviar'}
          </button>
          {success ? (
            <p className='message success-message'>
              Noticia enviada correctamente
            </p>
          ) : (
            <p className='mssage error'>{requestError}</p>
          )}
        </form>
      )}
    </Formik>
  );
};

export default NewsForm;
