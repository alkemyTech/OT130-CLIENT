import React from "react";
import {
  Redirect,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { putOrganization } from "../../Services/publicApiService";
import "./style.css";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { toBase64 } from "../../Helpers/base64";
import {
  yupImages,
  yupShortDesc,
  yupTitles,
} from "../../Helpers/yupValidations";

const Organization = () => {
  const initialValues = {
    name: "",
    description: "",
    logo: "",
  };
  const {
    push,
    location: { state },
  } = useHistory();
  const id = state ? state.id : null;

  const handleSubmit = async ({ logo, name, description }) => {
    const base64Img = await toBase64(logo);
    await putOrganization(
      { name, short_description: description, logo: base64Img },
      id
    );
    push("/backoffice/organization");
  };

  const validation = Yup.object().shape({
    name: yupTitles(),
    description: yupShortDesc(),
    logo: yupImages(),
  });

  const FormComponent = ({
    handleSubmit,
    setFieldValue,
    values,
    touched,
    handleChange,
  }) => (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-field">
        Logo:{" "}
        <input
          type="file"
          max={1}
          name="logo"
          accept="image/png, image/jpeg"
          onChange={(e) => setFieldValue("logo", e.currentTarget.files[0])}
        />
      </div>
      {touched.logo ? <ErrorMessage name="logo" /> : null}
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
      onSubmit={(values) => {
        handleSubmit(values);
      }}
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
