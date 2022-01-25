import { ErrorMessage, Field, Form, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useEffect, useState } from "react";

import "../FormStyles.css";

const MembersForm = () => {
  const [imgState, setImgState] = useState({ path: "" });
  const [imageState, setImageState] = useState({ image_member: "" });


  const validationSchema = Yup.object({
    name_member: Yup
      .string("Enter your name")
      .min(4, "Minimo 4 caracteres")
      .required("Name is required"),
    description_text: Yup
      .string("Write some description")
      .required("Description is required"),
    image_member: Yup
      .mixed()
      .required("Image is required")
      .test("fileFormat","Extensión inválida. Solo archivos jpg o png", (value) =>
      ["image/jpeg", "image/png"].includes(value?.type)),
    link_linkedin: Yup
    .string()
    .url()
    .required("Linkedin link is required"),
    link_facebook: Yup
    .string()
    .url()
    .required("Facebook link is required"),
  });

  const inputHandler = (event, editor) => {
    formik.setFieldValue("description_text", editor.getData());
  };

  useEffect(() => {
      formik.setFieldValue("image_member", imageState?.image_member);
    }, [imageState?.image_member]);

    const handleFileChange = (event) => {
      setImageState({
        image_member: event.target.files[0],
      });
      setImgState({
        ...imgState,
        path: URL.createObjectURL(event.target.files[0]),
      }
    );
  };

  const formik = useFormik({
    initialValues: {
      name_member: "",
      description_text: "",
      image_member: "",
      link_linkedin:"",
      link_facebook:"",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form className="form-container">
        <Field
          className="input-field"
          id="name_member"
          name="name_member"
          type="text"
          {...formik.getFieldProps("name_member")}
          placeholder="Enter name"
        />
        <ErrorMessage className="me-auto" name="name_member" />
        
        <CKEditor
          editor={ClassicEditor}
          id="description_text"
          onChange={inputHandler}
        />
        <ErrorMessage className="me-auto" name="description_text" />
        <div className="row row-cols-1 row-cols-md-2">
          <div className="d-flex flex-column ">
            <Field 
                className="input-field" 
                type="url" 
                id="link_linkedin" 
                name="link_linkedin" 
                placeholder="Facebook"
              {...formik.getFieldProps("link_linkedin")}
            />
            <ErrorMessage className="me-auto" name="link_linkedin" />
          </div>
          <div className="d-flex flex-column">
            <Field 
                className="input-field" 
                type="url" 
                id="link_facebook" 
                name="link_facebook" 
                placeholder="Linkedin"
              {...formik.getFieldProps("link_facebook")}
            />
            <ErrorMessage className="me-auto" name="link_facebook" />
          </div>
        </div>
        <div className="row row-cols-2 align-items-center justify-content-between">
          <input
            name="image_member"
            type="file"
            onChange={handleFileChange}
          />
            <img
              className="img-member img-fluid"
              src={imgState?.path}
              id="preview-image"
              alt="image_member"
            />
        </div>
        <ErrorMessage className="me-auto" name="image_member" />
        <button className="submit-btn" type="submit">
          Send
        </button>
      </Form>
    </FormikProvider>
  );
};

export default MembersForm;
