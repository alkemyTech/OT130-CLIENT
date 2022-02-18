import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { postAuthRegister } from '../../Services/authService';
import { ErrorAlert, SuccessAlert } from '../Alert';
import { useSelector } from 'react-redux';
import { selectTerms } from '../../reducers/termsAndConditionsReducer';
import TermsAndConditionModal from '../Modal/TermsAndConditionModal';
import {
  yupConfirmPass,
  yupEmail,
  yupFirstName,
  yupPassRegister,
  yupTermsAndConditions
} from '../../Helpers/formValidations';
import {
  PASSWORD_REGISTER_CONTAIN,
  PASSWORD_DONT_MATCH,
  PASSWORD_SHORT,
  REGISTER_SUCCESS,
  UNKNOWN_ERROR,
  API_ERROR,
} from '../../Helpers/messagesText';
import '../FormStyles.css';

const RegisterForm = () => {
  const [submitForm, setSubmitForm] = useState(false);
  const {termsAndConditions} = useSelector(selectTerms);

  const timerMessage = (time) => {
    setTimeout(() => {
      setSubmitForm(false);
    }, time);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsAndConditions: false,
    },
    validationSchema: Yup.object({
      name: yupFirstName(),
      email: yupEmail(),
      password: yupPassRegister(PASSWORD_SHORT, PASSWORD_REGISTER_CONTAIN),
      confirmPassword: yupConfirmPass('password', PASSWORD_DONT_MATCH),
      termsAndConditions: yupTermsAndConditions()
    }),
    onSubmit: (values) => {
      const registerSubmit = async () => {
        try {
          await postAuthRegister(values);
          setSubmitForm(true);
          timerMessage(3000);
          if(values.termsAndConditions && termsAndConditions.acept){
            SuccessAlert(REGISTER_SUCCESS);
            formik.resetForm();
        }
        } catch (error) {
          ErrorAlert(UNKNOWN_ERROR, API_ERROR);
        }
      };
      registerSubmit()
    },
  });

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <label htmlFor="name">First Name</label>
      <input id="name" type="text" className="input-field" {...formik.getFieldProps('name')} />
      {formik.touched.name && formik.errors.name && (
        <div className="error-message message">{formik.errors.name}</div>
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

      <label htmlFor='termsAndConditions' className='label'>Terminos y Condiciones</label>
      <input
          id="termsAndConditions"
          type="checkbox"
          className="input-field" 
          {...formik.getFieldProps('termsAndConditions')}
      />
      <TermsAndConditionModal/> 
      {formik.values.termsAndConditions === false ? <div className="message">Debes aceptar los terminos y condiciones</div> 
      : formik.values.termsAndConditions === true && termsAndConditions.acept === false ? <div className="error-message message">Leer y aceptar terminos y condiciones</div>    
      : null}
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
