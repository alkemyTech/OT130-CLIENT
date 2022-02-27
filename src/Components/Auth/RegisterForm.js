import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../FormStyles.css';
import {
  PASSWORD_REGISTER_CONTAIN,
  PASSWORD_DONT_MATCH,
  PASSWORD_SHORT,
  REGISTER_SUCCESS,
  UNKNOWN_ERROR,
  API_ERROR,
} from '../../Helpers/messagesText';
import {
  yupAddress,
  yupConfirmPass,
  yupEmail,
  yupFirstName,
  yupLastName,
  yupPassRegister,
} from '../../Helpers/formValidations';
import MapContainer from '../Map/MapContainer';
import { ErrorAlert, SuccessAlert } from '../Alert';
import { postAuthRegister } from '../../Services/authService';

const RegisterForm = () => {
  const [submitForm, setSubmitForm] = useState(false);
  const [sendAddress, setSendAddress] = useState('');
  const history = useHistory();

  const timerMessage = (time) => {
    setTimeout(() => {
      setSubmitForm(false);
    }, time);
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
    },
    validationSchema: Yup.object({
      firstName: yupFirstName(),
      lastName: yupLastName(),
      email: yupEmail(),
      password: yupPassRegister(PASSWORD_SHORT, PASSWORD_REGISTER_CONTAIN),
      confirmPassword: yupConfirmPass('password', PASSWORD_DONT_MATCH),
      address: yupAddress('Minimo 6 caracteres, sea preciso.'),
    }),
    onSubmit: (values) => {
      const registerSubmit = async () => {
        try {
          await postAuthRegister(values);
          setSubmitForm(true);
          timerMessage(3000);
          formik.resetForm();
          SuccessAlert(REGISTER_SUCCESS);
          history.push('/login');
        } catch (error) {
          ErrorAlert(UNKNOWN_ERROR, API_ERROR);
        }
      };
      registerSubmit();
    },
  });

  const mapSubmit = () => {
    if (!formik?.errors.address) setSendAddress(formik?.values.address);
  };

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        className="input-field"
        {...formik.getFieldProps('firstName')}
      />
      {formik.touched.firstName && formik.errors.firstName && (
        <div className="error-message message">{formik.errors.firstName}</div>
      )}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        className="input-field"
        {...formik.getFieldProps('lastName')}
      />
      {formik.touched.lastName && formik.errors.lastName && (
        <div className="error-message message">{formik.errors.lastName}</div>
      )}

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" className="input-field" {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email && (
        <div className="error-message message">{formik.errors.email}</div>
      )}

      <label htmlFor="pass">Password</label>
      <input
        id="pass"
        type="password"
        className="input-field"
        {...formik.getFieldProps('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <div className="error-message message">{formik.errors.password}</div>
      )}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        className="input-field"
        {...formik.getFieldProps('confirmPassword')}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <div className="error-message message">{formik.errors.confirmPassword}</div>
      )}

      <label htmlFor="address">Direccion</label>
      <div className=" d-flex">
        <input
          id="address"
          type="text"
          className="input-field"
          style={{ width: '100%' }}
          {...formik.getFieldProps('address')}
        />
        <button type="button" className="submit-btn" style={{ width: 'auto' }} onClick={mapSubmit}>
          Buscar
        </button>
      </div>

      {formik.touched.address && formik.errors.address && (
        <div className="error-message message">{formik.errors.address}</div>
      )}

      <MapContainer address={sendAddress} />

      <button className="submit-btn" type="submit">
        Submit
      </button>
      {submitForm && <div className="success-message message">Form submitted successfully</div>}
    </form>
  );
};

export default RegisterForm;
