import React, { useState } from "react";
import { ErrorMessage, Field, Form, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../FormStyles.css";

const MembersForm = () => {
  const [imgState, setImgState] = useState({ path: "" });

  const validationSchema = Yup.object({
    name_member: Yup.string()
      .min(4, "Minimo 4 caracteres")
      .required("Campo obligatorio"),
    description_text: Yup.string().required("Campo obligatorio"),
    image_member: Yup.mixed()
      .required("Campo obligatorio")
      .test(
        "fileFormat",
        "Extensión inválida. Solo archivos jpg o png",
        (value) => ["image/jpeg", "image/png"].includes(value?.type)
      ),
    link_linkedin: Yup.string().url().required("Campo obligatorio"),
    link_facebook: Yup.string().url().required("Campo obligatorio"),
  });

  const inputHandler = (event, editor) => {
    formik.setFieldValue("description_text", editor.getData());
  };

  const handleFileChange = (event) => {
    formik.setFieldValue("image_member", event.currentTarget.files[0]);
    setImgState({
      ...imgState,
      path: URL.createObjectURL(event.currentTarget.files[0]),
    });
  };

  const formik = useFormik({
    initialValues: {
      name_member: "",
      description_text: "",
      image_member: "",
      link_linkedin: "",
      link_facebook: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Quitar el siguiente console.log cuando se realice la petición a API 
      console.log(values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form className="form-container">
        <div className="row-cols-1">
          <Field
            className="input-field"
            id="name_member"
            name="name_member"
            type="text"
            {...formik.getFieldProps("name_member")}
            placeholder="Nombre"
          />
          <div className="error-message message">
            <ErrorMessage className="me-auto" name="name_member" />
          </div>
        </div>
        <div>
          <CKEditor
            editor={ClassicEditor}
            id="description_text"
            onChange={inputHandler}
          />
          <div className="error-message message">
            <ErrorMessage className="me-auto" name="description_text" />
          </div>
        </div>
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
            <div className="error-message message">
              <ErrorMessage className="me-auto" name="link_linkedin" />
            </div>
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
            <div className="error-message message">
              <ErrorMessage className="me-auto" name="link_facebook" />
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 align-items-center justify-content-between">
          <input name="image_member" type="file" onChange={handleFileChange} />
          <img
            className=" mx-auto my-2 img-member img-fluid"
            src={imgState?.path}
            id="image_member"
            alt="image_member"
          />
        <div className="error-message message">
          <ErrorMessage className="me-auto" name="image_member" />
        </div>
        </div>
        <button className="submit-btn" type="submit">
          Send
        </button>
      </Form>
    </FormikProvider>
  );
};

export default MembersForm;
