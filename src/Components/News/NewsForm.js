import React, {useState} from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../../Components/FormStyles.css";
import axios from "axios";

const NewsForm = ({news}) => {
  const iVal = news || {
    id: "",
    title: "",
    content: "",
    image: "",
    category: "",
  };

  const [initialValues, setInitialValues] = useState(iVal);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setInitialValues({...initialValues, title: e.target.value});
    }
    if (e.target.name === "category") {
      setInitialValues({...initialValues, category: e.target.value});
    }
    if (e.target.name === "img") {
      console.log(e.target.files[0].name);
      setInitialValues({...initialValues, image: e.target.files[0].name});
    }
    console.log(initialValues);
  };

  const handleChangeCKE = (event, editor) => {
    const data = editor.getData();

    setInitialValues({...initialValues, content: data});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {title, content, category} = initialValues;

    if ([title, content, category].includes("")) {
      setError(true);
      return;
    } else if (title.length < 4) {
      alert("El titulo debe tener minimo 4 caracteres");
      return;
    }

    setError(false);

    if (initialValues.id) {
      axios.patch(
        `http://ongapi.alkemy.org/api/news/${initialValues.id}`,
        initialValues
      );
      console.log("patch");
    } else {
      axios.post("http://ongapi.alkemy.org/api/news", initialValues);
      console.log("post");
    }

    setInitialValues({id: "", title: "", content: "", image: "", category: ""});

    console.log(initialValues);
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
        value={initialValues.title || ""}
        onChange={handleChange}
        placeholder="Enter News"
      ></input>

      <CKEditor
        editor={ClassicEditor}
        data={initialValues.content || ""}
        onChange={handleChangeCKE}
      />

      <input
        className="select-field"
        type="file"
        name="img"
        accept="image/*"
        onChange={handleChange}
      />
      <select
        className="select-field"
        name="category"
        value={initialValues.category || ""}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select category
        </option>
        <option value="1">Demo option 1</option>
        <option value="2">Demo option 2</option>
        <option value="3">Demo option 3</option>
      </select>
      <button className="submit-btn" type="submit">
        {initialValues.id ? "Edit" : "Send"}
      </button>
    </form>
  );
};

export default NewsForm;
