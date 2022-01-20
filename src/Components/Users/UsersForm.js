import React, { useState } from "react";
import "../FormStyles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validation = Yup.object().shape({
  Name: Yup.string()
    .min(4, "Mínimo 4 caracteres")
    .max(200, "Nombre muy largo")
    .required("Campo obligatorio"),
  Email: Yup.string().email("Mail inválido").required("Campo obligatorio"),
  Description: Yup.string()
    .min(10, "Mínimo 10 caracteres")
    .max(1000, "Descripción demasiado larga")
    .required("Campo obligatorio"),
  Role: Yup.string().required("Campo obligatorio"),
  Image: Yup.mixed().test(
    "fileType",
    "Suba una imagen con extensión .jpg o .png",
    (value) => {
      if (value) return ["image/jpeg", "image/png"].includes(value.type); 
      //Assuming image is not required 
      else return true
    }
  ),
});

const UserForm = ({ user }) => {
  return (
    <Formik
      validationSchema={validation}
      initialValues={
        user || {
          Name: "",
          Email: "",
          Description: "",
          Role: "usuario",
          Image: null,
        }
      }
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        if (user) {
          // post and handle
        } else {
          // update and handle 
        }
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
        validateField,
        errors,
        isValid,
        setFieldValue,
        touched,
      }) => {
        return (
          <Form onSubmit={handleSubmit} className="form-container">
            <Field
              className="input-field"
              type="text"
              name="Name"
              placeholder="Nombre"
            ></Field>

            {touched.Name ? <ErrorMessage name="Name" /> : null}

            <Field
              className="input-field"
              type="text"
              name="Email"
              placeholder="Email"
            ></Field>

            {touched.Email ? <ErrorMessage name="Email" /> : null}

            <Field
              className="input-field"
              type="text"
              name="Description"
              placeholder="Descripción"
            ></Field>

            {touched.Description ? <ErrorMessage name="Description" /> : null}

            <Field className="select-field" as="select" name="Role">
              <option value="usuario">Usuario</option>
              <option value="administrador">Administrador</option>
            </Field>
            <div>
              <label style={{ paddingRight: "10px" }}>
                Subir imagen de usuario
              </label>
              <input
                type="file"
                max={1}
                name="Image"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  setFieldValue("Image", e.currentTarget.files[0]);
                }}
              />
              <div>
                <ErrorMessage name="Image" />
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Enviar
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default UserForm;
