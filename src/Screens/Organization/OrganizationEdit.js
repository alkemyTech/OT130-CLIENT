import { Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from 'yup';
import { updateOrganizationData } from '../../Services/organizationService';
import { yupShortDesc, yupTitles } from '../../Helpers/formValidations';
import OrganizationEditForm from '../../Components/Organization/OrganizationEditForm';
import './styles.css';
import { LOGO } from '../../assets';
import { ORGANIZATION } from '../../rutas/config';
import {
  ORGANIZATION_EDITED_ERROR,
  ORGANIZATION_EDITED_SUCCESSFULLY,
} from '../../Helpers/messagesText';

const initialValues = {
  name: '',
  description: '',
  logo: LOGO,
};

const OrganizationEdit = () => {
  const {
    push,
    location: { state },
  } = useHistory();
  const id = state?.id || null;
  const [selectedImage, setSelectedImage] = useState({ image: LOGO });
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSuccess = () => {
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      push(ORGANIZATION);
    }, 3000);
  };

  const handleSubmit = async ({ logo, name, description }) => {
    const { data } = await updateOrganizationData(
      { name, short_description: description, logo: logo },
      id,
    );
    data ? handleSuccess() : setErrorMessage(true);
  };

  const handleScreenMessages = () => {
    if (errorMessage) {
      return <p className="align-text-center">{ORGANIZATION_EDITED_ERROR}</p>;
    } else if (successMessage) {
      return <p className="align-text-center">{ORGANIZATION_EDITED_SUCCESSFULLY}</p>;
    }
  };

  const validation = Yup.object().shape({
    name: yupTitles(),
    description: yupShortDesc(),
  });

  const handleSelectImage = (value, setFieldValue) => {
    setFieldValue('logo', value);
    setSelectedImage({ image: value });
  };

  return id ? (
    <div>
      {handleScreenMessages()}
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
              handleSelectImage={handleSelectImage}
              selectedImage={selectedImage}
            />
          );
        }}
      </Formik>
    </div>
  ) : (
    <Redirect to="/backoffice/organization" />
  );
};

export default OrganizationEdit;
