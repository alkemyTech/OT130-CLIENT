import axios from "axios";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import React, {useEffect, useState} from "react";

import "../FormStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {Patch, Post} from "../../Services/privateApiService";

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
    await axios
      .get("http://ongapi.alkemy.org/api/categories")
      .then((res) => {
        const {data} = res.data;
        setCategories(data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setInitialValues({...initialValues, name: e.target.value});
    }
    if (e.target.name === "category") {
      setInitialValues({...initialValues, category_id: e.target.value});
    }
    if (e.target.name === "img") {
      setInitialValues({...initialValues, image: e.target.files[0].name});
    }
  };

  const handleChangeCKE = (event, editor) => {
    const data = editor.getData();

    setInitialValues({...initialValues, content: data});
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

    setInitialValues(emptyObject);
  };

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
        onChange={handleChange}
        placeholder="Enter News"
      ></input>

      <CKEditor
        editor={ClassicEditor}
        data={initialValues.content || ""}
        onChange={handleChangeCKE}
      />
      <div className="input-field">
        <label>Imagen: </label>
        <input
          className=" px-2"
          type="file"
          name="img"
          accept="image/*"
          onChange={handleChange}
        />
      </div>
      <select
        className="select-field"
        name="category"
        value={initialValues.category_id || ""}
        onChange={handleChange}
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
