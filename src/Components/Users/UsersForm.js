import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Spinner } from 'react-bootstrap';
import { ErrorMessage, Field, Form } from 'formik';
import '../FormStyles.css';
import { USER_ROLES } from '../../Helpers/userTypes';

const FormComponent = ({
  touched,
  handleSubmit,
  setFieldValue,
  success,
  requestError,
  isSubmitting,
  fileInputRef,
  imageMax,
  values,
}) => {
  return (
    <Form className="form-container">
      <input
        onChange={(e) => setFieldValue('name', e.target.value)}
        value={values.name}
        className="input-field"
        type="text"
        name="name"
        placeholder="Nombre"
      />

      {touched.name && <ErrorMessage name="name" />}

      <input
        onChange={(e) => setFieldValue('email', e.target.value)}
        value={values.email}
        className="input-field"
        type="text"
        name="email"
        placeholder="Email"
      />

      {touched.email && <ErrorMessage name="email" />}

      <input
        onChange={(e) => setFieldValue('description', e.target.value)}
        value={values.description}
        className="input-field"
        type="text"
        name="description"
        placeholder="Descripción"
      />

      {touched.description && <ErrorMessage name="description" />}

      <input
        onChange={(e) => setFieldValue('password', e.target.value)}
        value={values.password}
        className="input-field"
        type="password"
        name="password"
        placeholder="Password"
      />

      {touched.password && <ErrorMessage name="password" />}

      <select className="select-field" as="select" name="role_id">
        {Object.keys(USER_ROLES).map((key) => (
          <option key={key} value={key}>
            {USER_ROLES[key]}
          </option>
        ))}
      </select>
      <div>
        <label style={{ paddingRight: '10px' }}>Subir imagen de usuario</label>
        <input
          ref={fileInputRef}
          type="file"
          max={imageMax}
          name="image_file"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            setFieldValue('image_file', e.currentTarget.files[0]);
          }}
        />
        <div>
          <ErrorMessage name="image_file" />
        </div>
      </div>
      <button type="button" onClick={handleSubmit} className="submit-btn">
        Enviar
      </button>
      <Row className="justify-content-center">
        {isSubmitting && <Spinner animation="border" />}
        {success ? (
          <p className="message success text-center">Se ha guardado el usuario</p>
        ) : (
          <p className="message error text-center">{requestError}</p>
        )}
      </Row>
    </Form>
  );
};

export default FormComponent;
