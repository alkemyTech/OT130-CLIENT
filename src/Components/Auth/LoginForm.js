import React from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { yupEmail, yupPasswordLogin } from '../../Helpers/formValidations';
import { saveToLocalStorage } from '../../utils/localStorage';
import { LOGIN_SUCCESS } from '../../Helpers/messagesText';
import { ErrorAlert, SuccessAlert } from '../Alert';
import '../FormStyles.css';
import './loginForm.css';
import { postAuthLogin } from '../../Services/authService';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';

const LoginForm = () => {
  
const dispatch = useDispatch();


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
          const response = await postAuthLogin(values)
          console.log("🚀 ~ file: LoginForm.js ~ line 38 ~ submitFunction ~ response", response)
          if (response.data.data ) {
            const { token } = response.data.data;
            const userName = response.data.data.user.name
              saveToLocalStorage({ key: 'token', value: { token } });
              SuccessAlert(`Bienvenid@ ${userName} `, LOGIN_SUCCESS);
              dispatch(login({
                name: userName,
                email : values.email,
                password : values.password,
                token: token,
              }))
            } else {
              ErrorAlert('Datos incorrectos', '');
          }
        } catch (error) {
          console.error(error);
          if (error.response) {
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
