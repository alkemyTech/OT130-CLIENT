import { Formik } from 'formik';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from 'yup';
import { Alert } from '../../Components/Alert';
import { updateOrganizationData } from '../../Services/organizationService';
import { yupImages, yupLongDesc, yupShortDesc, yupTitles, yupLinks } from '../../Helpers/formValidations';
import { toBase64 } from '../../Helpers/base64';
import OrganizationEditForm from '../../Components/Organization/OrganizationEditForm';
import './styles.css';

import { ORGANIZATION } from '../../rutas/config';
import {
  ORGANIZATION_EDITED_ERROR,
  ORGANIZATION_EDITED_SUCCESSFULLY,
} from '../../Helpers/messagesText';

const OrganizationEdit = () => {
  const [organizationData, setOrganizationData] = useState();
  const initialValues = {
    name: '',
    description: '',
    long: '',
    logo: '',
    linkedin_url: '',
    twitter_url: '',
    facebook_url: '',
    instagram_url: '',
  };
  const {
    push,
    location: { state },
  } = useHistory();
  const id = state?.id || null;

  const handleCKEditorChange = (editor, setFieldValue) => {
    setFieldValue('description', editor.getData());
  };

  const handleSubmit = async ({ logo, name, description, long, linkedin_url, twitter_url, facebook_url, instagram_url }) => {
    const base64Img = await toBase64(logo);
    const { data } = await updateOrganizationData({ 
      name, 
      short_description: description, 
      long_description: long,
      logo: base64Img,
      linkedin: linkedin_url,
      twitter: twitter_url,
      facebook: facebook_url,
      instagram: instagram_url,
    },
      id,
    );
    if (data) {
      setOrganizationData(data);
      Alert(undefined, ORGANIZATION_EDITED_SUCCESSFULLY);
      push(ORGANIZATION);
    } else {
      Alert(undefined, ORGANIZATION_EDITED_ERROR, true);
    }
  };

  const validation = Yup.object().shape({
    name: yupTitles(),
    description: yupShortDesc(),
    long: yupLongDesc(),
    logo: yupImages(),
    linkedin_url: Yup.yupLinks(),
    twitter_url: Yup.yupLinks(),
    facebook_url: Yup.yupLinks(),
    instagram_url: Yup.yupLinks(),
  });

  return id ? (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={validation}
    >
      {({ values, handleChange, handleSubmit, touched, setFieldValue }) => {
        return (
          <OrganizationEditForm
            handleSubmit={handleSubmit}
            setFieldValue={setFieldValue}
            values={values}
            touched={touched}
            handleChange={handleChange}
            organizationData={organizationData}
            CKEditorHandleOnChange={handleCKEditorChange}
          />
        );
      }}
    </Formik>
  ) : (
    <Redirect to="/backoffice/organization" />
  );
};

export default OrganizationEdit;
