import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Spinner } from "react-bootstrap";
import { ErrorMessage, Field, Form } from "formik";
import "../FormStyles.css";
import userTypes from "../../Helpers/userTypes";


const FormComponent = ({
  touched,
  handleSubmit,
  setFieldValue,
  success,
  requestError,
  isSubmitting,
  fileInputRef,
  imageMax
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
        {Object.keys(userTypes).map((key)=>{
          return <option value={key}>{userTypes[key]}</option>
        })}
      </Field>
      <div>
        <label style={{ paddingRight: "10px" }}>Subir imagen de usuario</label>
        <input
          ref={fileInputRef}
          type="file"
          max={imageMax}
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
            Se ha guardado el usuario
          </p>
        ) : (
          <p className="message error text-center">{requestError}</p>
        )}
      </Row>
    </Form>
  );
};

export default FormComponent
