import React from "react";
import "../FormStyles.css";
// Import Formik
import { useFormik } from "formik";
// Import Yup
import * as yup from "yup";
// Import material UI.
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Container } from "react-bootstrap";
// import css
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
        // console.log(values);
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
                            maxLength="35"
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
                            maxLength="15"
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
