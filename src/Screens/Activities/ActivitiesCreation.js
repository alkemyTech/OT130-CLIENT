import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Formik } from 'formik';
import ActivitiesForm from '../../Components/Activities/ActivitiesForm';
import { saveActivityData } from '../../Services/activitiesService';
import {
  saveActivity,
  selectActivities,
  setLoading,
} from '../../features/activities/activitiesSlice';
import { toBase64 } from '../../Helpers/base64';
import { yupImages, yupLongDesc, yupTitles } from '../../Helpers/formValidations';
import '../../Components/FormStyles.css';
import './styles.css';
import {
  ACTIVITY_ADDED_ERROR,
  ACTIVITY_ADDED_SUCCESSFULLY,
  NETWORK_ERROR,
} from '../../Helpers/messagesText';
import { SuccessAlert, ErrorAlert } from '../../Components/Alert';

const initialValues = {
  name: '',
  description: '',
  image: '',
};

const ActivitiesCreation = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(selectActivities);

  const validation = Yup.object().shape({
    name: yupTitles(),
    description: yupLongDesc(),
    image: yupImages(),
  });

  const handleCKEditorChange = (editor, setFieldValue) => {
    setFieldValue('description', editor.getData());
  };

  const handleSubmit = async ({ image, name, description }) => {
    dispatch(setLoading(true));
    const base64Img = await toBase64(image);
    const body = {
      name,
      image: base64Img,
      description,
    };
    dispatch(saveActivity({ body }));
  };

  useEffect(() => {
    if (error) {
      ErrorAlert(error === 'Network Error' ? NETWORK_ERROR : ACTIVITY_ADDED_ERROR);
    }
    if (data?.success) {
      SuccessAlert(ACTIVITY_ADDED_SUCCESSFULLY);
    }
  }, [error, data]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        handleSubmit(values);
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
