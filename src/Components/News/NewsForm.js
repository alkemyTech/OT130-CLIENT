import {CKEditor} from "@ckeditor/ckeditor5-react";
import {Formik} from "formik";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import React, {useEffect, useState} from "react";

import "../FormStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {Get} from "../../Services/privateApiService";

const emptyObject = {
  id: "",
  name: "",
  content: "",
  image: "",
  category_id: "",
};

const NewsForm = ({news}) => {
  const [initialValues, setInitialValues] = useState(news || emptyObject);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);

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

  const handleSubmit = ({name, content, image, category_id}) => {
    console.log(name, content, image, category_id);
  };

  useEffect(() => {
    console.log(initialValues);
  }, [initialValues]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({values, handleChange, handleSubmit, touched, setFieldValue}) => (
        <form className="form-container" onSubmit={handleSubmit}>
          {error && (
            <div className="">
              <p>Todos los campos son obligatorios</p>
            </div>
          )}
          <input
            className="input-field"
            type="text"
            name="title"
            onChange={handleChange("name")}
            placeholder="Enter News"
            value={values.name}
          />
          <CKEditor
            editor={ClassicEditor}
            data={initialValues?.content}
            onChange={(e, editor) => handleChangeCKE(editor, setFieldValue)}
          />
          <div className="input-field">
            <label>Imagen: </label>
            <input
              className=" px-2"
              type="file"
              name="img"
              accept="image/*"
              onChange={handleChange("image")}
            />
          </div>
          <select
            className="select-field"
            name="category"
            value={values.category_id}
            onChange={handleChange("category_id")}
          >
            <option value="" disabled>
              Select category
            </option>
            {categories.map(({id, name}) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </select>
          <button className="submit-btn" type="submit">
            {initialValues.id ? "Edit" : "Send"}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default NewsForm;
