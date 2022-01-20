import React, { useState } from "react";
import "../FormStyles.css";
import { Formik } from "formik";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";

const validation = Yup.object().shape({
  Name: Yup.string()
    .min(4, "Mínimo 4 caracteres")
    .max(200, "Nombre muy largo")
    .required("Campo obligatorio"),
  Email: Yup.string().email("Mail inválido").required("Campo obligatorio"),
  Description: Yup.string()
    .min(10, "Mínimo 10 caracteres")
    .max(1000, "Descripción demasiado larga")
    .required("Campo obligatorio"),
  Role: Yup.string()
    .required('Campo obligatorio')
});

const UserForm = ({ user }) => {
  return (
    <Container>
      <Formik
        validationSchema={validation}
        initialValues={{ Name: "", Email: "", Description: "",Role:"usuario" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          handleSubmit, isSubmitting, handleChange, values, errors, isValid, touched
        }) => {
          return (
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  name="Name"
                  onChange={handleChange}
                  placeholder="Escriba el nombre"
                />
                <Form.Text className="text-muted">{touched.Name ? errors.Name : null}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="Email"
                  onChange={handleChange}
                  placeholder="Escriba el email"
                />
                <Form.Text className="text-muted">{touched.Email ? errors.Email : null}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  name="Description"
                  onChange={handleChange}
                  placeholder="Escriba la descripción"
                />
                <Form.Text className="text-muted">
                  {touched.Description ? errors.Description:null}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Descripción</Form.Label>
                <Form.Select
                  name="Role"
                  onChange={handleChange}
                >
                  <option value='usuario'>Usuario</option>
                  <option value='administrador'>Administrador</option>

                </Form.Select>
                <Form.Text className="text-muted">
                  {touched.Role ? errors.Role:null}
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default UserForm;
