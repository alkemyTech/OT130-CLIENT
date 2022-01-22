import axios from "axios";
import React, { useState } from "react";
import { Col, Row, Spinner} from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik,   } from "formik";
import * as Yup from "yup";

import { Patch, Post } from "../../Services/privateApiService";
import "../FormStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NETWORK_ERROR, UNKNOWN_ERROR } from "../../Helpers/messagesText";
import { yupTitles ,yupEmail, yupShortDesc, yupImages, yupUserRoles } from "../../Helpers/yupValidations";

const validation = Yup.object().shape({
  name: yupTitles(),
  email: yupEmail(),
  description: yupShortDesc(),
  profile_image: yupImages(),
  role_id: yupUserRoles()
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
  setRequestError("");

  values.role_id = Number(values.role_id);
  

  try {
    const response = user ? await Patch(`users/${user.id}`, values) : await Post(`users`, values);

    if (response.success) {
      setSuccess(true);
      resetForm();
    } else {
      setRequestError(UNKNOWN_ERROR);
    }

    setSubmitting(false);

  } catch (error) {

    if (error.message === "Network Error") {
      setRequestError(NETWORK_ERROR);
    } else {
      setRequestError(UNKNOWN_ERROR);
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

      {touched.name && <ErrorMessage name="name" />}

      <Field
        className="input-field"
        type="text"
        name="email"
        placeholder="Email"
      ></Field>

      {touched.email && <ErrorMessage name="email" />}

      <Field
        className="input-field"
        type="text"
        name="description"
        placeholder="Descripción"
      ></Field>

      {touched.description && <ErrorMessage name="description" />}

      <Field className="select-field" as="select" name="role_id">
        <option value='2'>Usuario Standard</option>
        <option value='1'>Administrador</option>
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
        {isSubmitting && <Spinner animation="border" />}
        {success ? (
          <p className="message success text-center">
            Se ha actualizado el usuario
          </p>
        ) : (
          <p className="message error text-center">{requestError}</p>
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
