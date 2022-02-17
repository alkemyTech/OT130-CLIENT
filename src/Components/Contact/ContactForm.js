import * as Yup from 'yup';
import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from '../Alert';
import { yupEmail, yupFirstName, yupShortDesc, yupPhone } from '../../Helpers/formValidations';
import { NETWORK_ERROR, UNKNOWN_ERROR } from '../../Helpers/messagesText';
import { addContact } from '../../Services/contactsService';
import '../FormStyles.css';

const initialContactValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm = () => {
  const validation = Yup.object().shape({
    name: yupFirstName(),
    email: yupEmail(),
    phone: yupPhone(),
    message: yupShortDesc(),
  });

  const sendForm = async (val) => {
    try {
        await addContact(val);
        SuccessAlert('Exitoso', 'Formulario enviado correctamente');
    } catch (error) {
      ErrorAlert(UNKNOWN_ERROR, NETWORK_ERROR);
    }
  };

  return (
    <Formik
      initialValues={initialContactValues}
      onSubmit={(val, { resetForm }) => {
        sendForm(val);
        resetForm();
      }}
      validationSchema={validation}
    >
      {({ touched, handleSubmit, handleChange }) => (
        <form className="form-container" onSubmit={handleSubmit}>
          <Field
            className="select-field"
            type="text"
            name="name"
            onChange={handleChange('name')}
            placeholder="Nombre"
          />
          {touched.name && <ErrorMessage name="name" />}
          <Field
            className="select-field"
            type="email"
            name="email"
            onChange={handleChange('email')}
            placeholder="Correo"
          />
          {touched.email && <ErrorMessage name="email" />}

          <Field
            className="select-field"
            type="tel"
            name="phone"
            onChange={handleChange('phone')}
            placeholder="Telefono"
          />
          {touched.phone && <ErrorMessage name="phone" />}

          <Field
            component="textarea"
            className="select-field"
            name="message"
            cols="30"
            rows="10"
            style={{ resize: 'none' }}
            onChange={handleChange('message')}
            placeholder="Escriba un mensaje"
          />
          {touched.message && <ErrorMessage name="message" />}
          <button type="submit" className="submit-btn">
            Enviar
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
