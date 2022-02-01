import { ErrorMessage } from 'formik';
import React from 'react';
import './styles.css';
import { LOGO } from '../../assets';

const OrganizationEditForm = ({
  handleSubmit,
  setFieldValue,
  values,
  touched,
  handleChange,
  selectedImage,
  handleSelectImage,
}) => {
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="organization-fields-container">
        <div>
          Logo:{' '}
          <select
            onChange={({ target: { value } }) => handleSelectImage(value, setFieldValue)}
            name="logo"
            defaultValue={selectedImage.image}
          >
            <option value={LOGO}>Logo 1</option>
          </select>
        </div>
        <img src={selectedImage?.image} alt="logo" />
        <input
          className="input-field"
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Organization title"
          value={values.name}
        />
        {touched.name && <ErrorMessage name="name" />}
        <input
          className="input-field"
          type="text"
          name="description"
          onChange={handleChange}
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
};

export default OrganizationEditForm;
