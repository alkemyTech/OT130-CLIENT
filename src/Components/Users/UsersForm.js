import React, { useState } from "react";
import "../FormStyles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Spinner, Row, Col } from "react-bootstrap";

const validation = Yup.object().shape({
  name: Yup.string()
    .min(4, "Mínimo 4 caracteres")
    .max(200, "Nombre muy largo")
    .required("Campo obligatorio"),
  email: Yup.string().email("Mail inválido").required("Campo obligatorio"),
  description: Yup.string()
    .min(10, "Mínimo 10 caracteres")
    .max(1000, "Descripción demasiado larga")
    .required("Campo obligatorio"),
  role_id: Yup.number().required("Campo obligatorio"),
  profile_image: Yup.mixed().test(
    "fileType",
    "Extensión inválida. Solo archivos jpg o png",
    (value) => {
      if (value) return ["image/jpeg", "image/png"].includes(value.type);
      //Assuming image is not required
      else return true;
    }
  ),
});

const initialValues = {
  name: "",
  email: "",
  description: "",
  role_id: 2,
  profile_image: null,
};

const submit = async (
  values,
  setSubmitting,
  user,
  setSuccess,
  setRequestError,
  resetForm
) => {
  //ideally, import an axios instance.
  setRequestError('')
  values.role_id = Number(values.role_id)

  try {
    const response = await axios.request({
      method: user ? "PATCH" : "POST",
      headers: { "content-type": "application/json" },
      //La tarea espeficica la ruta '/users/create' para crear usuario, pero no existe en la api. En la documentación aparece la petición POST a '/users/'
      url: `http://ongapi.alkemy.org/api/users/${user ? user.id : ""}`,
      data: values,
    });

    if (response.success === true) {
      setSuccess(true);
      resetForm();
    } else setRequestError("Ha ocurrido un error");

    setSubmitting(false);
  } catch (error) {
    if (error.message === "Network Error") {
      setRequestError("Error de red. Asegurate de estar conectado a internet.");
    } else {
      setRequestError("Ha ocurrido un error");
    }
    setSubmitting(false);
  }
};

const FormComponent = ({
  touched,
  handleSubmit,
  setFieldValue,
  success,
  requestError,
  isSubmitting,
}) => {
  return (
    <Form onSubmit={handleSubmit} className="form-container">
      <Field
        className="input-field"
        type="text"
        name="name"
        placeholder="Nombre"
      ></Field>

      {touched.name ? <ErrorMessage name="name" /> : null}

      <Field
        className="input-field"
        type="text"
        name="email"
        placeholder="Email"
      ></Field>

      {touched.email ? <ErrorMessage name="email" /> : null}

      <Field
        className="input-field"
        type="text"
        name="description"
        placeholder="Descripción"
      ></Field>

      {touched.description ? <ErrorMessage name="description" /> : null}

      <Field className="select-field" as="select" name="role_id">
        <option value={2}>Usuario Standard</option>
        <option value={1}>Administrador</option>
      </Field>
      <div>
        <label style={{ paddingRight: "10px" }}>Subir imagen de usuario</label>
        <input
          type="file"
          max={1}
          name="profile_image"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            setFieldValue("profile_image", e.currentTarget.files[0]);
          }}
        />
        <div>
          <ErrorMessage name="profile_image" />
        </div>
      </div>
      <button type="submit" className="submit-btn">
        Enviar
      </button>
      <Row className="justify-content-center">
        {isSubmitting === true ? <Spinner animation="border"/> : null}
        {success ? (
          <p className="message-success text-center">Se ha actualizado el usuario</p>
        ) : (
          <p className="message-error text-center">{requestError}</p>
        )}
      </Row>
    </Form>
  );
};

const UserForm = ({ user }) => {
  const [success, setSuccess] = useState(false);
  const [requestError, setRequestError] = useState();

  return (
    <Formik
      validationSchema={validation}
      initialValues={user || initialValues}
      onSubmit={(values, { setSubmitting, resetForm }) =>
        submit(
          values,
          setSubmitting,
          user,
          setSuccess,
          setRequestError,
          resetForm
        )
      }
    >
      {({ handleSubmit, setFieldValue, touched, isSubmitting }) => {
        return (
          <FormComponent
            touched={touched}
            handleSubmit={handleSubmit}
            setFieldValue={setFieldValue}
            success={success}
            requestError={requestError}
            isSubmitting={isSubmitting}
          />
        );
      }}
    </Formik>
  );
};

export default UserForm;
