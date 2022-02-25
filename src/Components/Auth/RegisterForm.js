import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { postAuthRegister } from '../../Services/authService';
import { ErrorAlert, SuccessAlert } from '../Alert';
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
  const { termsAndConditions } = useSelector(selectTerms);
  const [checkCheckbox, setcheckCheckbox] = useState(false);
  
  const registerSubmit = async (values) => {
    try {
      await postAuthRegister(values);
      SuccessAlert(REGISTER_SUCCESS);
    } catch (error) {
      ErrorAlert(UNKNOWN_ERROR, API_ERROR);
    } 
  };

  const disableStyleBtn = () => {
    return !(checkCheckbox && termsAndConditions.agree);
  }

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
      registerSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <h1>Registrate</h1>
      
      <label htmlFor="name">First Name</label>
      <input 
        id="name" 
        type="text" 
        className="input-field" 
        placeholder='Nombre' 
        {...formik.getFieldProps('name')} 
      />
      {formik.touched?.name && formik.errors?.name && (
        <div className="error-message message">{formik.errors.name}</div>
      )}
      
      <label htmlFor="email">Email Address</label>
      <input 
        id="email" 
        type="email" 
        className="input-field" 
        placeholder='Correo electrónico'
        {...formik.getFieldProps('email')} 
      />
      {formik.touched?.email && formik.errors?.email && (
        <div className="error-message message">{formik.errors.email}</div>
      )}

      <label htmlFor="pass">Password</label>
      <input
        id="pass"
        type="password"
        className="input-field"
        placeholder='Contraseña'
        {...formik.getFieldProps('password')}
      />
      {formik.touched?.password && formik.errors?.password && (
        <div className="error-message message">{formik.errors.password}</div>
      )}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        className="input-field"
        placeholder='Confirmar contraseña'
        {...formik.getFieldProps('confirmPassword')}
      />
      {formik.touched?.confirmPassword && formik.errors?.confirmPassword && (
        <div className="error-message message">{formik.errors?.confirmPassword}</div>
      )}

      <label htmlFor='termsAndConditions' className='label'>Terminos y Condiciones</label>
      <input
          id="termsAndConditions"
          type="checkbox"
          className="input-field" 
          onClick={(e)=>{setcheckCheckbox(e.target.checked)}}
          {...formik.getFieldProps('termsAndConditions')}
      />

      {formik.errors?.termsAndConditions && formik.touched?.termsAndConditions && (
        <div className="error-message message">{formik.errors.termsAndConditions}</div>
      )}
      <TermsAndConditionModal />
      <button type="submit" className="btn btn-primary" disabled={disableStyleBtn()}>
        Registrar
      </button>
    </form>
  );
};

export default RegisterForm;
