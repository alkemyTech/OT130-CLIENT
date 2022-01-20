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
});

const UserForm = ({ user }) => {
  return (
    <Formik
      validationSchema={validation}
      initialValues={
        user || { Name: "", Email: "", Description: "", Role: "usuario" }
      }
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
        handleChange,
        values,
        errors,
        isValid,
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

            <Field className="select-field" as='select' name="Role">
              <option value='usuario'>Usuario</option>
              <option value='administrador'>Administrador</option>

            </Field>

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
