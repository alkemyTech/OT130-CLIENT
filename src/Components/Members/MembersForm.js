import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useState } from "react";

import "../FormStyles.css";

const MembersForm = () => {
  const validationSchema = Yup.object({
    name: Yup
      .string("Enter your name")
      .min(4, "Minimo 4 caracteres")
      .required("Name is required"),
    description_text: Yup
      .string("Write some description")
      .required("Description is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description_text: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <input
        className="input-field"
        id="name"
        name="name"
        type="text"
        {...formik.getFieldProps("name")}
        placeholder="Enter name"
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <CKEditor
        editor={ClassicEditor}
        id="description_text"
        data={formik.values.description_text}
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          formik.setFieldValue("description_text", data)
        }}
         value={formik.values.description_text} 
      />
      {formik.touched.description_text && formik.errors.description_text ? (
        <div>{formik.errors.description_text}</div>
      ) : null}
      {/* <div className="d-flex  justify-content-between mx-0 p-0">
      <input className="input-field w-50 me-1 " type="url" name="social-media-link" value={initialValues.name} onChange={handleChange} placeholder="Linkedin"></input>
      <input className="input-field w-50 " type="url" name="social-media-link" value={initialValues.name} onChange={handleChange} placeholder="Facebook"></input>
      </div> */}
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default MembersForm;
