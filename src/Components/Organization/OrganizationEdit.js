import { useFormik  } from "formik";
import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as Yup from "yup";
import { updateOrganizationData , getByIdOrganizationData } from "../../Services/organiationService";
import { yupShortDesc, yupTitles , yupImages , yupLongDesc , yupUrlWebSite} from "../../Helpers/formValidations";
import "./style.css";
import { LOGO } from "../../assets";
import { ORGANIZATION } from "../../rutas/config";
import { toBase64 } from "../../Helpers/base64";




const OrganizationEdit = () => {
  const {
    push,
    location: { state },
  } = useHistory();
  const id = state?.id || null;
/*   const [selectedImage, setSelectedImage] = useState({ image: LOGO }); */
  const [organization, setOrganization] = useState({});


  useEffect(() => {
    handleGetByIdOrganization();
  },[]);
  const handleGetByIdOrganization = async () => {
    const { data } = await getByIdOrganizationData(id);
    setOrganization(data);
  };
  const validationSchema = Yup.object().shape({
    name: yupTitles(),
    short_description: yupShortDesc(),
    long_description: yupLongDesc(),
    /* logo: yupImages(), */
    linkedin_url: yupUrlWebSite(),
    instagram_url: yupUrlWebSite(),
    facebook_url: yupUrlWebSite(),
    twitter_url: yupUrlWebSite() 
/*    ,
    long_description: yupLongDesc(),
    logo: yupImages(),
    linkedin_url: yupUrlWebSite(),
    instagram_url: yupUrlWebSite(),
    facebook_url: yupUrlWebSite(),
    twitter_url: yupUrlWebSite() */


  });
  const initialValues = {
    name: '',
    long_description: '',
    short_description: '',
    linkedin_url : '',
    instagram_url : '',
    facebook_url : '',
    twitter_url : '',
  /*   logo:'', */
/*     logo:null, */
/*     logo: '',
    long_description: '',
    short_description: '',
    linkedin_url : '',
    instagram_url : '',
    facebook_url : '',
    twitter_url : '', */
  };
  const onSubmit = async (values) => {
    await updateOrganizationData(values, id);
    console.log('Form data' , values)
    console.log(values.logo)
    formik.resetForm();
    push(ORGANIZATION);
  };
  const formik = useFormik({
    initialValues,

    onSubmit,
    // validate,
    validationSchema
  })
  
  

  return id?
 
   (
    <div className="container">
      <div className="organization-fields-container">
        <form  onSubmit={formik.handleSubmit}>
          <div className="form-group">
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
            {formik.touched.name && formik.errors.name ? (
              <div className="alert alert-danger">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="short_description">Descripción Corta</label>
            <input
              type="text"
              className="form-control"
              id="short_description"
              name="short_description"
              placeholder="Descripción Corta"
              value={formik.values.short_description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.short_description && formik.errors.short_description ? (
              <div className="alert alert-danger">{formik.errors.short_description}</div>
            ) : null}
          </div>
          <div className="form-group">
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
            {formik.touched.long_description && formik.errors.long_description ? (
              <div className="alert alert-danger">{formik.errors.long_description}</div>
            ) : null}
          </div>
          <div className="form-group">
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
            {formik.touched.linkedin_url && formik.errors.linkedin_url ? (
              <div className="alert alert-danger">{formik.errors.linkedin_url}</div>
            ) : null}
          </div>
          <div className="form-group">
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
            {formik.touched.instagram_url && formik.errors.instagram_url ? (
              <div className="alert alert-danger">{formik.errors.instagram_url}</div>
            ) : null}
          </div>
          <div className="form-group">
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
            {formik.touched.facebook_url && formik.errors.facebook_url ? (
              <div className="alert alert-danger">{formik.errors.facebook_url}</div>
            ) : null}
          </div>
          <div className="form-group">
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
            {formik.touched.twitter_url && formik.errors.twitter_url ? (
              <div className="alert alert-danger">{formik.errors.twitter_url}</div>
            ) : null}
          </div>
        {/*   <div className="form-group">
            <label htmlFor="logo">Logo</label>
            <input
              ref={formik.fileInput}
              type="file"
              className="form-control"
              id="logo"
              name="logo"
              placeholder="Logo"
              onChange={(e)=>{ 
                formik.setFieldValue('logo', e.target.files[0])
              }}
            />
            {formik.touched.logo && formik.errors.logo ? (
              <div className="alert alert-danger">{formik.errors.logo}</div>
            ) : null}
          </div> */}
{/*          
          <div className="form-group">
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
            {formik.touched.long_description && formik.errors.long_description ? (
              <div className="alert alert-danger">{formik.errors.long_description}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="logo">Logo</label>
            <input
              type="file"
              className="form-control"
              max={1}
              accept="image/jpeg, image/png"
              id="logo"
              name="logo"
              placeholder="Logo"
              value={formik.values.logo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.logo && formik.errors.logo ? (
              <div className="alert alert-danger">{formik.errors.logo}</div>
            ) : null}
          </div>
          <div className="form-group">
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
            {formik.touched.linkedin_url && formik.errors.linkedin_url ? (
              <div className="alert alert-danger">{formik.errors.linkedin_url}</div>
            ) : null}
          </div>
          <div className="form-group">
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
            {formik.touched.instagram_url && formik.errors.instagram_url ? (
              <div className="alert alert-danger">{formik.errors.instagram_url}</div>
            ) : null}
          </div>
          <div className="form-group">
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
            {formik.touched.facebook_url && formik.errors.facebook_url ? (
              <div className="alert alert-danger">{formik.errors.facebook_url}</div>
            ) : null}
          </div>
          <div className="form-group">
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
            {formik.touched.twitter_url && formik.errors.twitter_url ? (
              <div className="alert alert-danger">{formik.errors.twitter_url}</div>
            ) : null}
          </div> */}
          <button type="submit" className="submit-btn">
            Guardar
          </button>
        </form>
      </div>
    </div>
                
  ) 
  : <Redirect to={ORGANIZATION} />


}
export default OrganizationEdit;
