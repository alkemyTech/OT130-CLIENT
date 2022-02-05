import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ErrorMessage } from 'formik';
import React from 'react';

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
      <h2>Editar Organización</h2>  
      <label htmlFor="name  mt-3 mb-3">Nombre de la Organización:</label>
      <input
        className="input-field mb-3"
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Nombre de la Organización"
        value={values?.name}
      />
      {touched.name && <ErrorMessage name="name" />}
      
      <label className="mt-3 mb-3" htmlFor="description">Descripción Corta:</label>
      <CKEditor
        editor={ClassicEditor}
        data={organizationData?.description}
        onChange={(e, editor) => CKEditorHandleOnChange(editor, setFieldValue)}
      />
     {touched.description && <ErrorMessage name="description" />}
     
     <label className="mt-3 mb-3" htmlFor="logo">Descripción Larga:</label>
     <input
        className="input-field mb-3"
        type="text"
        name="long"
        onChange={handleChange}
        placeholder="Descripción Larga"
        value={values?.long}
      />
      {touched.description && <ErrorMessage name="long"/>}

      <label className="mt-3 mb-3">Redes sociales:</label>
      <input
        className="input-field mb-3"
        type="text"
        name="linkedin_url"
        onChange={handleChange}
        placeholder="Linkedin"
        value={values?.linkedin_url}
      />
      {touched.linkedin_url && <ErrorMessage name="linkedin_url"/>}

      <input
        className="input-field mt-3 mb-3"
        type="text"
        name="twitter_url"
        onChange={handleChange}
        placeholder="Twitter"
        value={values?.twitter_url}
      />
      {touched.twitter_url && <ErrorMessage name="twitter_url"/>}

      <input
        className="input-field mt-3 mb-3"
        type="text"
        name="facebook_url"
        onChange={handleChange}
        placeholder="Facebook"
        value={values?.facebook_url}
      />
      {touched.facebook_url && <ErrorMessage name="facebook_url"/>}

      <input
        className="input-field mt-3 mb-3"
        type="text"
        name="instagram_url"
        onChange={handleChange}
        placeholder="Instagram"
        value={values?.instagram_url}
      />
      {touched.instagram_url && <ErrorMessage name="instagram_url"/>}

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
