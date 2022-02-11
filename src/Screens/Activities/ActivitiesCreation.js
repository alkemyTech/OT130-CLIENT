import * as Yup from 'yup';
import React, { useState } from 'react';
import { Formik } from 'formik';
import ActivitiesForm from '../../Components/Activities/ActivitiesForm';
import { saveActivityData } from '../../Services/activitiesService';
import { toBase64 } from '../../Helpers/base64';
import { yupImages, yupLongDesc, yupTitles } from '../../Helpers/formValidations';
import '../../Components/FormStyles.css';
import './styles.css';
import { ACTIVITY_ADDED_ERROR, ACTIVITY_ADDED_SUCCESSFULLY, NETWORK_ERROR } from '../../Helpers/messagesText';
import { SuccessAlert, ErrorAlert } from '../../Components/Alert';

const initialValues = {
  name: '',
  description: '',
  image: '',
};

const ActivitiesCreation = () => {
  const [loading, setLoading] = useState(false);

  const validation = Yup.object().shape({
    name: yupTitles(),
    description: yupLongDesc(),
    image: yupImages(),
  });

  const handleCKEditorChange = (editor, setFieldValue) => {
    setFieldValue('description', editor.getData());
  };

  const handleSubmit = async ({ image, name, description }, resetForm) => {
    setLoading(true);
    const base64Img = await toBase64(image);
    const body = {
      name,
      image: base64Img,
      description,
    };
    const { data, error } = await saveActivityData(body);

    if (error) {
      ErrorAlert(error.message === 'Network Error' ? NETWORK_ERROR : ACTIVITY_ADDED_ERROR)
    } else if (data.success) {
      SuccessAlert(ACTIVITY_ADDED_SUCCESSFULLY)
      resetForm()
    }
    setLoading(false)
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, {resetForm}) => {
        handleSubmit(values, resetForm);
      }}
      validationSchema={validation}
    >
      {({ values, handleChange, handleSubmit, touched, setFieldValue }) => {
        return (
          <ActivitiesForm
            handleSubmit={handleSubmit}
            setFieldValue={setFieldValue}
            values={values}
            touched={touched}
            formikHandleOnChange={handleChange}
            CKEditorHandleOnChange={handleCKEditorChange}
            submitting={loading}
          />
        );
      }}
    </Formik>
  );
};

export default ActivitiesCreation;
