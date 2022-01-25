import {Field, Formik} from "formik";
import "../FormStyles.css";
const emptyContact = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  return (
    <Formik
      initialValues={emptyContact}
      onSubmit={(val, {resetForm}) => {
        resetForm();

        console.log({
          name: val.name,
          email: val.email,
          phone: val.phone,
          message: val.message,
        });
      }}
      validate={(val) => {}}
    >
      {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
        <form className="form-container" onSubmit={handleSubmit}>
          <Field
            className="select-field"
            type="text"
            name="name"
            onChange={handleChange("name")}
            placeholder="Name"
          />
          <Field
            className="select-field"
            type="email"
            name="email"
            onChange={handleChange("email")}
            placeholder="Email"
          />
          <Field
            className="select-field"
            type="tel"
            name="phone"
            onChange={handleChange("phone")}
            placeholder="Phone"
          />
          <Field
            component="textarea"
            className="select-field"
            name="message"
            cols="30"
            rows="10"
            style={{resize: "none"}}
            onChange={handleChange("message")}
          />
          <button type="submit" className="submit-btn">
            Enviar
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
