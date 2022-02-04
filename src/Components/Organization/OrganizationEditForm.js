import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ErrorMessage } from 'formik';
import React from 'react';
import './styles.css';

const OrganizationEditForm = ({
  handleSubmit,
  setFieldValue,
  values,
  touched,
  handleChange,
  organizationData,
  CKEditorHandleOnChange,
}) => (
  <form className="container" onSubmit={handleSubmit}>
    <div className="organization-fields-container">
      <h2>Editar Organizacíon</h2>  
      <label htmlFor="name  mt-3 mb-3">Nombre de la organizacíon:</label>
      <input
        className="input-field mb-3"
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Organization title"
        value={values.name}
      />
      {touched.name && <ErrorMessage name="name" />}
      <label className="mt-3 mb-3" htmlFor="description">Descripcíon Corta:</label>
      <CKEditor
      editor={ClassicEditor}
      data={organizationData?.description}
      onChange={(e, editor) => CKEditorHandleOnChange(editor, setFieldValue)}
    />
     {touched.description && <ErrorMessage name="description" />}

     <label className="mt-3 mb-3" htmlFor="logo">Descripcíon Larga:</label>
     <input
        className="input-field mb-3"
        type="text"
        name="long"
        onChange={handleChange}
        placeholder="Organization short description"
        value={values.long}
      />
      {touched.description && <ErrorMessage name="long"/>}
      <label className="mt-3 mb-3" htmlFor="logo">Logo:</label>
      <input
        className="form-control mb-3"
        type="file"
        max={1}
        name="logo"
        accept="image/png, image/jpeg"
        onChange={(e) => setFieldValue("logo", e.currentTarget.files[0])}
      />
      {touched.logo && <ErrorMessage name="logo" />}
      <button className="submit-btn mt-3" type="submit">
        Save
      </button>
    </div>
  </form>
);

export default OrganizationEditForm;
