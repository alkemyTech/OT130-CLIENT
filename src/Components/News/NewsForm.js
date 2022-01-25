import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import React, {useEffect, useState} from "react";

import "../FormStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {Get, Patch, Post} from "../../Services/privateApiService";

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

  const handleChange = (val, field) => {
    setInitialValues({...initialValues, [field]: val});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {name, content, category_id} = initialValues;

    if ([name, content, category_id].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    } else if (name.length < 4) {
      alert("El titulo debe tener minimo 4 caracteres");
      return;
    }

    setError(false);

    if (initialValues.id) {
      Patch(`news/${initialValues.id}`, initialValues);
    } else {
      Post(`news`, initialValues);
    }

    setInitialValues({
      id: "",
      name: "",
      content: "",
      image: "",
      category_id: "",
    });
    console.log(initialValues);
  };

  useEffect(() => {
    console.log(initialValues);
  }, [initialValues]);

  return (
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
        value={initialValues.name || ""}
        onChange={(e) => handleChange(e.target.value, "name")}
        placeholder="Enter News"
      />
      <CKEditor
        editor={ClassicEditor}
        data={initialValues.content || ""}
        onChange={(event, editor) => handleChange(editor.getData(), "content")}
      />
      <div className="input-field">
        <label>Imagen: </label>
        <input
          className=" px-2"
          type="file"
          name="img"
          accept="image/*"
          onChange={(e) => handleChange(e.target.value, "image")}
        />
      </div>
      <select
        className="select-field"
        name="category"
        value={initialValues.category_id || ""}
        onChange={(e) => handleChange(e.target.value, "category_id")}
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
  );
};

export default NewsForm;
