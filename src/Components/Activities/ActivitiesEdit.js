import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../FormStyles.css";

const ActivitiesEdit = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === "description") {
      setInitialValues({ ...initialValues, description: e.target.value });
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
        name="name"
        value={initialValues.name}
        onChange={handleChange}
        placeholder="Activity Title"
      ></input>
      <input
        className="input-field"
        type="text"
        name="description"
        value={initialValues.description}
        onChange={handleChange}
        placeholder="Write some activity description"
      ></input>
      <CKEditor
        editor={ClassicEditor}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      <input
        className="submit-btn"
        type="file"
        max={1}
        name="logo"
        accept="image/png, image/jpeg"
      />
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default ActivitiesEdit;
