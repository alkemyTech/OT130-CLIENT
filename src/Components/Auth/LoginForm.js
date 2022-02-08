import React from "react";
import * as yup from "yup";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import "../FormStyles.css";
import "./loginForm.css";
import { yupEmail, yupPasswordLogin } from "../../Helpers/formValidations";

const LoginForm = () => {

  const validationSchema = yup.object({
    email: yupEmail(),
    password: yupPasswordLogin(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      
    },
  });

  return (
            <Container>
                <form
                    className="form-login d-flex flex-column "
                    onSubmit={formik.handleSubmit}
                >
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
                        <Button 
                            variant="contained"
                            className="form-button" 
                            type="submit">
                                Log In
                        </Button>
                </form>
            </Container>
  );
};

export default LoginForm;
