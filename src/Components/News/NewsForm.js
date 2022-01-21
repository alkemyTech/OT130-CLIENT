import React, {useEffect, useState} from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../../Components/FormStyles.css";
import axios from "axios";

const NewsForm = ({news}) => {
  const iVal = news || {
    id: "",
    name: "",
    content: "",
    image: "",
    category_id: "",
  };

  const [initialValues, setInitialValues] = useState(iVal);
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

  const findCategoryId = async (id) => {
    await axios
      .get(`http://ongapi.alkemy.org/api/categories/${id}`)
      .then((res) => {
        const {data} = res;
        console.log(data);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setInitialValues({...initialValues, name: e.target.value});
    }
    if (e.target.name === "category") {
      setInitialValues({...initialValues, category_id: e.target.value});
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
      axios.patch(
        `http://ongapi.alkemy.org/api/news/${initialValues.id}`,
        initialValues
      );
      console.log("patch");
    } else {
      axios.post("http://ongapi.alkemy.org/api/news", initialValues);
      console.log("post");
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
