import React, { useState, useRef } from "react";
import { Row, Spinner} from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik,   } from "formik";
import * as Yup from "yup";
import { toBase64 } from "../../Helpers/base64";
import { Patch, Post } from "../../Services/privateApiService";
import "../FormStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NETWORK_ERROR, UNKNOWN_ERROR, EMAIL_TAKEN } from "../../Helpers/messagesText";
import { yupTitles ,yupEmail, yupShortDesc, yupImages, yupUserRoles, yupPassword,  } from "../../Helpers/yupValidations";

const validation = Yup.object().shape({
  name: yupTitles(),
  email: yupEmail(),
  description: yupShortDesc(),
  image_file: yupImages(),
  role_id: yupUserRoles(),
  password: yupPassword()
});

const initialValues = {
  name: "",
  email: "",
  description: "",
  role_id: 2,
  image_file: null,
  profile_image:'',
  password: ""
};

const submit = async (
  values,
  setSubmitting,
  user,
  setSuccess,
  setRequestError,
  resetForm,
  fileInputRef
) => {
  console.log(values)
  setRequestError("");
  values.role_id = Number(values.role_id);
  
  values.profile_image = await toBase64(values.image_file)

  try {
    const response = user ? await Patch(`users/${user.id}`, values) : await Post(`users`, values);
    
    if (response.data.success) {
      setSuccess(true);
      resetForm();
      fileInputRef.current.value = null
    } else {
      setRequestError(UNKNOWN_ERROR);
    }

    setSubmitting(false);

  } catch (error) {
    console.log(error.response.data)
    if (error.message === "Network Error") {
      setRequestError(NETWORK_ERROR);
    } else if (error.response.data.errors.email) {
      setRequestError(EMAIL_TAKEN)
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
  fileInputRef
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

      <Field
        className="input-field"
        type="password"
        name="password"
        placeholder="Password"
      ></Field>

      {touched.password && <ErrorMessage name="password" />}

      <Field className="select-field" as="select" name="role_id">
        <option value='2'>Usuario Standard</option>
        <option value='1'>Administrador</option>
      </Field>
      <div>
        <label style={{ paddingRight: "10px" }}>Subir imagen de usuario</label>
        <input
          ref={fileInputRef}
          type="file"
          max={1}
          name="image_file"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            setFieldValue("image_file", e.currentTarget.files[0]);
          }}
        />
        <div>
          <ErrorMessage name="image_file" />
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

  const fileInputRef = useRef()

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
          resetForm,
          fileInputRef
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
            fileInputRef={fileInputRef}
          />
        );
      }}
    </Formik>
  );
};

export default UserForm;
