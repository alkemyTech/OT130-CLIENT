import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Form as BootstrapForm, FloatingLabel } from "react-bootstrap";

import { Post } from "../../Services/privateApiService";

const validationSchema = Yup.object({
  welcomeText: Yup.string()
    .min(20, "Mínimo 20 caracteres")
    .required("Campo obligatorio"),
});

const WelcomeTextForm = ({ welcomeText }) => {
  const updateOrganizationData = async (values, { setErrors }) => {
    try {
      return await Post("organization", {
        welcome_text: values.welcomeText,
        name: "string",
      });
    } catch (error) {
      if (error.response) {
        return setErrors({
          welcomeText: `Error: ${error.response.data?.message}`,
        });
      }
      setErrors({ welcomeText: `Error: ${error.message}` });
    }
  };

  return (
    <Formik
      initialValues={{ welcomeText }}
      validationSchema={validationSchema}
      onSubmit={updateOrganizationData}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        status,
        isSubmitting,
      }) => (
        <Form>
          <FloatingLabel
            controlId="welcomeTextTextarea"
            label="Escriba el texto de bienvenida para el home"
          >
            <BootstrapForm.Control
              as="textarea"
              className={
                errors.welcomeText && touched.welcomeText ? "is-invalid" : ""
              }
              style={{ height: "150px" }}
              onChange={handleChange}
              onBlur={handleBlur}
              name="welcomeText"
              value={values.welcomeText}
            />
            <BootstrapForm.Control.Feedback type="invalid">
              {errors.welcomeText && touched.welcomeText && errors.welcomeText}
            </BootstrapForm.Control.Feedback>
          </FloatingLabel>
          <Button type="submit" className="w-100 my-3" disabled={isSubmitting}>
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default WelcomeTextForm;