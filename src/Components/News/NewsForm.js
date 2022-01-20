import React, {useState} from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../../Components/FormStyles.css";

const NewsForm = () => {
  const [initialValues, setInitialValues] = useState({
    title: "",
    content: "",
    category: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setInitialValues({...initialValues, title: e.target.value});
    }
    if (e.target.name === "content") {
      setInitialValues({...initialValues, content: e.target.value});
    }
    if (e.target.name === "category") {
      setInitialValues({...initialValues, category: e.target.value});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialValues);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
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
        data="<p>Aca algo de data para mostrar</p>"
      />

      <input className="input-field" type="file" accept="image/*" />
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
        Send
      </button>
    </form>
  );
};

export default NewsForm;
