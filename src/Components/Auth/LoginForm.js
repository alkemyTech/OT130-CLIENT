import React from "react";
import * as yup from "yup";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import "../FormStyles.css";
import "./loginForm.css";

const LoginForm = () => {

  const validationSchema = yup.object({
    email: yup
      .string("Ingrese su email")
      .email("Ingrese un email valido")
      .required("Email requerido"),

    password: yup
      .string("Ingrese su contraseña")
      .min(6, "La contraseña debe tener como minimo 6 caracteres")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        "La contraseña debe tener una longitud mínima de 6 caracteres, y contener al menos un número, una letra y un símbolo (por ejemplo: @#$%)."
      )
      .required("Contraseña requerida"),
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
