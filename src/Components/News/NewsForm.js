import * as Yup from "yup";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import {ErrorMessage, Formik} from "formik";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import React, {useEffect, useState} from "react";

import "../FormStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {Get, Patch, Post} from "../../Services/privateApiService";
import {INPUT_REQUIRED, UNKNOWN_ERROR} from "../../Helpers/messagesText";
import {yupImages, yupTitles} from "../../Helpers/formValidations";

const emptyObject = {
  id: "",
  name: "",
  content: "",
  image: "",
  category_id: "",
};

const NewsForm = ({news}) => {
  const [initialValues, setInitialValues] = useState(news || emptyObject);
  const [categories, setCategories] = useState([]);
  const [success, setSuccess] = useState(false);

  const getCategories = async () => {
    const res = await Get("categories");

    if (res.data.success) {
      setCategories(res.data.data);
    } else {
      alert(res.data.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleChangeCKE = (editor, setFieldValue) => {
    setFieldValue("content", editor.getData());
  };

  const validation = Yup.object().shape({
    name: yupTitles(),
    content: Yup.string().required(INPUT_REQUIRED),
    image: yupImages(),
    category_id: Yup.number().required(INPUT_REQUIRED),
  });

  const handleSubmit = ({name, content, image, category_id}) => {
    setInitialValues({name, content, image: image.name, category_id});

    if (initialValues.id) {
      const res = Patch(`news/${initialValues.id}`, initialValues);

      if (res.data.success) {
        setSuccess(true);
      } else {
        alert(`${UNKNOWN_ERROR}: ${res.data.message}`);
      }
    } else {
      const res = Post("news", initialValues);

      if (res.data.success) {
        setSuccess(true);
        console.log(res.data.message);
      } else {
        setSuccess(`${UNKNOWN_ERROR}: ${res.data.message}`);
      }
    }
  };

  useEffect(() => {
    console.log(initialValues);
  }, [initialValues]);
  useEffect(() => {
    console.log(success);
  }, [success]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, {resetForm}) => {
        resetForm();
        handleSubmit(values);
      }}
      validationSchema={validation}
    >
      {({values, handleChange, handleSubmit, touched, setFieldValue}) => (
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="text"
            name="title"
            onChange={handleChange("name")}
            placeholder="Titulo de la noticia"
            value={values.name}
          />
          {touched.name ? <ErrorMessage name="name" /> : null}

          <CKEditor
            editor={ClassicEditor}
            data={initialValues?.content}
            onChange={(e, editor) => handleChangeCKE(editor, setFieldValue)}
          />

          {touched.content ? <ErrorMessage name="content" /> : null}
          <div className="input-field">
            <label>Imagen: </label>
            <input
              className=" px-2"
              type="file"
              name="img"
              accept="image/*"
              onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}
            />
            {values.id && (
              <p className=" mt-3">Ingrese nueva si desea cambiar</p>
            )}
          </div>
          {touched.image ? <ErrorMessage name="image" /> : null}
          <select
            className="select-field"
            name="category"
            value={values.category_id}
            onChange={handleChange("category_id")}
          >
            <option value="" disabled>
              Seleccionar categoria
            </option>
            {categories.map(({id, name}) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </select>
          {touched.category_id ? <ErrorMessage name="category_id" /> : null}
          <button className="submit-btn" type="submit">
            {values.id ? "Editar" : "Enviar"}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default NewsForm;
