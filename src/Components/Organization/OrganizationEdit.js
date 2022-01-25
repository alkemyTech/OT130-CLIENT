import { Formik, ErrorMessage } from "formik";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as Yup from "yup";
import { updateOrganizationData } from "../../Services/publicApiService";
import { yupShortDesc, yupTitles } from "../../Helpers/formValidations";
import "./style.css";
import { LOGO } from "../../assets";
import { ORGANIZATION } from "../../rutas/config";

const initialValues = {
  name: "",
  description: "",
  logo: LOGO,
};

const Organization = () => {
  const {
    push,
    location: { state },
  } = useHistory();
  const id = state?.id || null;
  const [selectedImage, setSelectedImage] = useState({ image: LOGO });

  const handleSubmit = async ({ logo, name, description }) => {
    await updateOrganizationData({ name, short_description: description, logo: logo }, id);
    push(ORGANIZATION);
  };

  const validation = Yup.object().shape({
    name: yupTitles(),
    description: yupShortDesc(),
  });

  const handleSelectImage = (value, setFieldValue) => {
    setFieldValue("logo", value);
    setSelectedImage({ image: value });
  };

  const FormComponent = ({ handleSubmit, setFieldValue, values, touched, handleChange }) => (
    <form className="container" onSubmit={handleSubmit}>
      <div className="organization-fields-container">
        <div>
          Logo:{" "}
          <select
            onChange={({ target: { value } }) => handleSelectImage(value, setFieldValue)}
            name="logo"
            defaultValue={selectedImage.image}
          >
            <option value={LOGO}>Opción 1</option>
            <option value={LOGO}>Opción 3</option>
          </select>
        </div>
        <img src={selectedImage?.image} alt="logo" />
        <input
          className="input-field"
          type="text"
          name="name"
          onChange={({ target: { name } }) => handleChange(name)}
          placeholder="Organization title"
          value={values.name}
        />
        {touched.name && <ErrorMessage name="name" />}
        <input
          className="input-field"
          type="text"
          name="description"
          onChange={({ target: { name } }) => handleChange(name)}
          placeholder="Organization short description"
          value={values.description}
        />
        {touched.description && <ErrorMessage name="description" />}
        <button className="submit-btn" type="submit">
          Save
        </button>
      </div>
    </form>
  );

  return id ? (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={validation}
    >
      {({ values, handleChange, handleSubmit, touched, setFieldValue }) => {
        return (
          <FormComponent
            handleSubmit={handleSubmit}
            setFieldValue={setFieldValue}
            values={values}
            touched={touched}
            handleChange={handleChange}
          />
        );
      }}
    </Formik>
  ) : (
    <Redirect to="/backoffice/organization" />
  );
};

export default Organization;
