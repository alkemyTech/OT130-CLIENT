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
    description_text: Yup.string()
      .required("Campo obligatorio"),
    image_member: Yup.mixed()
      .required("Campo obligatorio")
      .test(
        "fileFormat",
        "Extensión inválida. Solo archivos jpg o png",
        (value) => ["image/jpeg", "image/png"].includes(value?.type)
      ),
    link_linkedin: Yup.string().url()
      .required("Campo obligatorio"),
    link_facebook: Yup.string()
      .url()
      .required("Campo obligatorio"),
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
      alert(JSON.stringify(values, null, 2));
      console.log(values);
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
          placeholder="Nombre"
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
          <input name="image_member" type="file" onChange={handleFileChange} />
          <img
            className="img-member img-fluid"
            src={imgState?.path}
            id="image_member"
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
