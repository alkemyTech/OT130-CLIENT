import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { putOrganization } from "../../Services/publicApiService";
import "./style.css";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { yupShortDesc, yupTitles } from "../../Helpers/yupValidations";
import { LOGOS } from "../../assets/logos";

const initialValues = {
  name: "",
  description: "",
  logo: LOGOS[0].logo,
};

const Organization = () => {
  const {
    push,
    location: { state },
  } = useHistory();
  const id = state ? state.id : null;
  const [selectedImage, setSelectedImage] = useState({ image: LOGOS[0].logo });

  const handleSubmit = async ({ logo, name, description }) => {
    await putOrganization({ name, short_description: description, logo: logo }, id);
    push("/backoffice/organization");
  };

  const validation = Yup.object().shape({
    name: yupTitles(),
    description: yupShortDesc(),
  });

  const handleSelectImage = ({ target: { value } }, handleChange) => {
    handleChange("logo", value);
    setSelectedImage({ image: value });
  };

  const FormComponent = ({ handleSubmit, setFieldValue, values, touched, handleChange }) => (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="organization">
        Logo:{" "}
        <select
          onChange={(e) => handleSelectImage(e, setFieldValue)}
          name="logo"
          defaultValue={selectedImage.image}
        >
          {LOGOS.map(({ logo }, i) => (
            <option key={i} value={logo}>
              Opción {i + 1}
            </option>
          ))}
        </select>
        <img src={selectedImage?.image} alt="logo"/>
      </div>
      <input
        className="input-field"
        type="text"
        name="name"
        onChange={handleChange("name")}
        placeholder="Organization title"
        value={values.name}
      />
      {touched.name ? <ErrorMessage name="name" /> : null}
      <input
        className="input-field"
        type="text"
        name="description"
        onChange={handleChange("description")}
        placeholder="Organization short description"
        value={values.description}
      />
      {touched.description ? <ErrorMessage name="description" /> : null}
      <button className="submit-btn" type="submit">
        Save
      </button>
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
