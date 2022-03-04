import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { postAuthRegister } from '../../Services/authService';
import { ErrorAlert, SuccessAlert } from '../Alert';
import { selectTerms } from '../../reducers/termsAndConditionsReducer';
import TermsAndConditionModal from '../Modal/TermsAndConditionModal';
import MapContainer from '../Map/MapContainer';
import '../FormStyles.css';
import {
  yupAddress,
  yupConfirmPass,
  yupEmail,
  yupPassRegister,
  yupTermsAndConditions,
  yupTitles,
} from '../../Helpers/formValidations';
import {
  PASSWORD_REGISTER_CONTAIN,
  PASSWORD_DONT_MATCH,
  PASSWORD_SHORT,
  REGISTER_SUCCESS,
  UNKNOWN_ERROR,
  API_ERROR,
} from '../../Helpers/messagesText';
import { getLogin } from '../../reducers/auth/actions';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { termsAndConditions } = useSelector(selectTerms);
  const [checkCheckbox, setcheckCheckbox] = useState(false);
  const [sendAddress, setSendAddress] = useState('');

  const registerSubmit = async (values) => {
    const { data } = await postAuthRegister(values);

    if (data?.success) {
      SuccessAlert(REGISTER_SUCCESS);
      dispatch(
        getLogin({
          user: data.user,
          token: data.token,
        }),
      );
    } else {
      ErrorAlert(UNKNOWN_ERROR, API_ERROR);
    }
  };

  const disableStyleBtn = () => {
    return !(checkCheckbox && termsAndConditions.agree);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsAndConditions: false,
      address: '',
    },
    validationSchema: Yup.object({
      name: yupTitles(),
      email: yupEmail(),
      password: yupPassRegister(PASSWORD_SHORT, PASSWORD_REGISTER_CONTAIN),
      confirmPassword: yupConfirmPass('password', PASSWORD_DONT_MATCH),
      termsAndConditions: yupTermsAndConditions(),
      address: yupAddress('Minimo 6 caracteres, sea preciso.'),
    }),
    onSubmit: (values) => {
      registerSubmit(values);
      formik.resetForm();
    },
  });

  const mapSubmit = () => {
    if (!formik?.errors.address) setSendAddress(formik?.values.address);
  };

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <h1>Registrate</h1>

      <label htmlFor="name">Full name</label>
      <input
        id="name"
        placeholder="Nombre completo"
        type="text"
        className="input-field"
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
        placeholder="Correo electrónico"
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
        placeholder="Contraseña"
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
        placeholder="Confirmar contraseña"
        {...formik.getFieldProps('confirmPassword')}
      />
      {formik.touched?.confirmPassword && formik.errors?.confirmPassword && (
        <div className="error-message message">{formik.errors?.confirmPassword}</div>
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

      {formik.touched?.address && formik.errors?.address && (
        <div className="error-message message">{formik.errors.address}</div>
      )}
      <MapContainer address={sendAddress} />

      <label htmlFor="termsAndConditions" className="label">
        Terminos y Condiciones
      </label>
      <input
        id="termsAndConditions"
        type="checkbox"
        className="input-field"
        onClick={(e) => {
          setcheckCheckbox(e.target.checked);
        }}
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
