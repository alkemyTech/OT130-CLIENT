import React, {useState} from "react";
import "../FormStyles.css";
const emptyContact = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(emptyContact);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContact({...contact, name: e.target.value});
    }
    if (e.target.name === "email") {
      setContact({...contact, email: e.target.value});
    }
    if (e.target.name === "phone") {
      setContact({...contact, phone: e.target.value});
    }
    if (e.target.name === "message") {
      setContact({...contact, message: e.target.value});
    }
    console.log(contact);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const {name, email, phone, message} = contact;

    //Check Errors

    //sendForm
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="select-field"
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        className="select-field"
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        className="select-field"
        type="tel"
        name="phone"
        onChange={handleChange}
        placeholder="Phone"
      />
      <textarea
        className="select-field"
        name="message"
        cols="30"
        rows="10"
        style={{resize: "none"}}
        onChange={handleChange}
      />
      <button type="submit" className="submit-btn">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
