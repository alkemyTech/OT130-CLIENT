import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Redirect, useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { updateOrganizationData } from "../../Services/organiationService";
import { yupShortDesc, yupTitles , yupImages , yupLongDesc , yupUrlWebSite} from "../../Helpers/formValidations";
import { toBase64 } from "../../Helpers/base64";
import "./style.css";
import { ORGANIZATION } from "../../rutas/config";


const OrganizationEdit = () => {
  const {
    push,
    location: { state },
  } = useHistory();
  const id = state?.id || null;
  const [submitForm, setSubmitForm] = useState(false);

  const timerMessage = (time) => {
    setTimeout(() => {
        setSubmitForm(false);
        push(ORGANIZATION);
    }, time);
  };

  const handleCKEditorChange = (editor, setFieldValue) => {
    setFieldValue("short_description", editor.getData());
  };

  const validationSchema = Yup.object().shape({
    name: yupTitles(),
    long_description: yupLongDesc(),
    short_description: yupShortDesc(),
    logo: yupImages(),
    linkedin_url: yupUrlWebSite(),
    instagram_url: yupUrlWebSite(),
    facebook_url: yupUrlWebSite(),
    twitter_url: yupUrlWebSite() 
  });

  const initialValues =  {
    name: '',
    long_description: '',
    short_description: '',
    linkedin_url : '',
    instagram_url : '',
    facebook_url : '',
    twitter_url : '',
    logo: ''
  };

  const onSubmit = async (values) => {
    try{
      values.logo = await toBase64(values.logo);
    }catch(error){
      console.log(error);
    }
    await updateOrganizationData(values, id);
    setSubmitForm(true);
    timerMessage(3000);
    formik.resetForm();

  };
 
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  return id
  ?
    (
      <div className="container ">
        <div className="organization-fields-container row">
          <h1>Editar Organización</h1>
          <form  onSubmit={formik.handleSubmit}>
        
            <div className="form-group mb-4 mt-4">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Nombre"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name &&
                <div className="error-message message">{formik.errors.name}</div>
              }
            </div>

            <div className="form-group mb-4 mt-4">
              <label htmlFor="long_description">Descripción Larga</label>
              <input
                type="text"
                className="form-control"
                id="long_description"
                name="long_description"
                placeholder="Descripción Larga"
                value={formik.values.long_description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.long_description && formik.errors.long_description &&
                <div className="error-message message">{formik.errors.long_description}</div>
              }
            </div>
            
            <div  className="form-group mb-4 mt-4">
              <label htmlFor="short_description">Descripción Corta</label>
              <CKEditor
                className="form-control"
                editor={ClassicEditor }
                data={initialValues.short_description}
                onChange={(e,editor) => handleCKEditorChange(editor, formik.setFieldValue)}
              />
              {formik.touched.short_description && formik.errors.short_description &&
                <div className="error-message message">{formik.errors.short_description}</div>
              }
            </div>

            <div className="form-group mb-4 mt-4">
              <label htmlFor="linkedin_url">Linkedin</label>
              <input
                type="text"
                className="form-control"
                id="linkedin_url"
                name="linkedin_url"
                placeholder="Linkedin"
                value={formik.values.linkedin_url}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.linkedin_url && formik.errors.linkedin_url &&
                <div className="error-message message">{formik.errors.linkedin_url}</div>
              }
            </div>

            <div className="form-group mb-4 mt-4">
              <label htmlFor="instagram_url">Instagram</label>
              <input
                type="text"
                className="form-control"
                id="instagram_url"
                name="instagram_url"
                placeholder="Instagram"
                value={formik.values?.instagram_url}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}  
              />
              {formik.touched.instagram_url && formik.errors.instagram_url &&
                <div className="error-message message">{formik.errors.instagram_url}</div>
              }
            </div>

            <div className="form-group mb-4 mt-4">
              <label htmlFor="facebook_url">Facebook</label>
              <input
                type="text"
                className="form-control"
                id="facebook_url"
                name="facebook_url"
                placeholder="Facebook"
                value={formik.values.facebook_url}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.facebook_url && formik.errors.facebook_url &&
                <div className="error-message message">{formik.errors.facebook_url}</div>
              }
            </div>

            <div className="form-group mb-4 mt-4">
              <label htmlFor="twitter_url">Twitter</label>
              <input
                type="text"
                className="form-control"
                id="twitter_url"
                name="twitter_url"
                placeholder="Twitter"
                value={formik.values.twitter_url}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.twitter_url && formik.errors.twitter_url &&
                <div className="error-message message">{formik.errors.twitter_url}</div>
              }
            </div>

            <div className="form-group">
              <label htmlFor="logo">Logo</label>
              <input
                ref={formik.fileInput}
                type="file"
                className="form-control"
                accept="image/png , image/jpeg"
                id="logo"
                name="logo"
                placeholder="Logo"
                onChange={(e) => {
                  formik.setFieldValue('logo', e.currentTarget.files[0]);
                }}
              />
              {formik.touched.logo && formik.errors.logo ? (
                <div className="error-message message">{formik.errors.logo}</div>
              ) : null}
            </div>
            {submitForm && <div className="success-message message">Organización editada correctamente</div>}
            <button type="submit" className="submit-btn mb-4 mt-4">
              Guardar
            </button>
            <Link className="submit-btn btn btn-danger" to={ORGANIZATION}>Cancelar</Link>

          </form>
        </div>
      </div>            
    ) 
  : <Redirect to={ORGANIZATION} />
}
export default OrganizationEdit;
