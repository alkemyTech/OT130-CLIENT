import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { getLogin } from '../../reducers/auth/actions';
import { postAuthLogin } from '../../Services/authService';
import { ErrorAlert, SuccessAlert } from '../Alert';
import { yupEmail, yupPasswordLogin } from '../../Helpers/formValidations';
import { API_ERROR, INCORRECT_DATA, LOGIN_SUCCESS, UNKNOWN_ERROR } from '../../Helpers/messagesText';
import '../FormStyles.css';
import './loginForm.css';


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
          const response = await postAuthLogin(values);
          if (response.data.data) {
            const { token } = response.data.data;
            const { user } = response.data.data;
            dispatch(getLogin({
              user: user,
              token: token
            }));
            SuccessAlert(`Bienvenid@ ${user.name} `, LOGIN_SUCCESS);
          } else {
            ErrorAlert(INCORRECT_DATA);
          }
        } catch (error) {
            ErrorAlert(UNKNOWN_ERROR, API_ERROR );
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
          type="email"
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
          type="password"
          label="Password"
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
