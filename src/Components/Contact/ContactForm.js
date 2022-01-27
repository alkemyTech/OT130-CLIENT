import * as Yup from "yup";
import {ErrorMessage, Field, Formik} from "formik";
import React, {useState} from "react";
import "../FormStyles.css";
import {
  yupEmail,
  yupFirstName,
  yupShortDesc,
  yupPhone,
} from "../../Helpers/formValidations";
import {Post} from "../../Services/privateApiService";
import {UNKNOWN_ERROR} from "../../Helpers/messagesText";

const emptyContact = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const contactEmail = "carlosjbordon@gmail.com";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const validation = Yup.object().shape({
    name: yupFirstName(),
    email: yupEmail(),
    phone: yupPhone(),
    message: yupShortDesc(),
  });

  const sendForm = async (form) => {
    const res = await Post(`https://formsubmit.co/ajax/${contactEmail}`, form);
    if (res.data.success) {
      setSuccess(true);
    } else {
      alert(`${UNKNOWN_ERROR}: ${res.data.message}`);
    }
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <Formik
      initialValues={emptyContact}
      onSubmit={(val, {resetForm}) => {
        sendForm(val);
        resetForm();
      }}
      validationSchema={validation}
    >
      {({touched, handleSubmit, handleChange}) => (
        <form className="form-container" onSubmit={handleSubmit}>
          <Field
            className="select-field"
            type="text"
            name="name"
            onChange={handleChange("name")}
            placeholder="Nombre"
          />
          {touched.name ? <ErrorMessage name="name" /> : null}

          <Field
            className="select-field"
            type="email"
            name="email"
            onChange={handleChange("email")}
            placeholder="Correo"
          />
          {touched.email ? <ErrorMessage name="email" /> : null}

          <Field
            className="select-field"
            type="tel"
            name="phone"
            onChange={handleChange("phone")}
            placeholder="Telefono"
          />
          {touched.phone ? <ErrorMessage name="phone" /> : null}

          <Field
            component="textarea"
            className="select-field"
            name="message"
            cols="30"
            rows="10"
            style={{resize: "none"}}
            onChange={handleChange("message")}
          />
          {touched.message ? <ErrorMessage name="message" /> : null}
          <button type="submit" className="submit-btn">
            Enviar
          </button>
          {success && (
            <h2 className="message success-message">
              Formulario enviado correctamente
            </h2>
          )}
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
