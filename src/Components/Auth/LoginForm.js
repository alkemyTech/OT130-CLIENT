import React, { useState } from 'react';
import * as yup from 'yup';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { yupEmail, yupPasswordLogin } from '../../Helpers/formValidations';
import '../FormStyles.css';
import './loginForm.css';
import axios from 'axios';
import { saveToLocalStorage } from '../../utils/localStorage';
import { LOGIN_SUCCESS } from '../../Helpers/messagesText';
import { ErrorAlert, SuccessAlert } from '../Alert';
import { postAuthLogin } from '../../Services/authService';

const LoginForm = () => {
  
  const validationSchema = yup.object({
    email: yupEmail(),
    password: yupPasswordLogin(),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      const submitFunction = async (e) => {
        try {
          // const response = await axios.post('http://ongapi.alkemy.org/api/login', values);
          postAuthLogin(values);
          // saveToLocalStorage({ key: 'token', value: { token } });
          // SuccessAlert(`Bienvenid@ ${response?.data.data.user.name}`, LOGIN_SUCCESS);
        } catch (error) {
          console.error(error);
          if (error.response) {
            ErrorAlert('Datos incorrectos', '');
          } else {
            ErrorAlert('Error de conexcion', 'hubo un problema en la aplicación');
          }
        }
      };

      submitFunction();
    },
  });

  return (
    <Container>
      <form className="form-login d-flex flex-column " onSubmit={formik.handleSubmit}>
        <TextField
          className="input-login"
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className="input-login"
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button variant="contained" className="form-button" type="submit">
          Log In
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
