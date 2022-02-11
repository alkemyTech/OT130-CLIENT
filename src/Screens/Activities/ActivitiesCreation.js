import * as Yup from 'yup';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Formik } from 'formik';
import ActivitiesForm from '../../Components/Activities/ActivitiesForm';
import { saveActivityData } from '../../Services/activitiesService';
import { toBase64 } from '../../Helpers/base64';
import { yupImages, yupLongDesc, yupTitles } from '../../Helpers/formValidations';
import '../../Components/FormStyles.css';
import './styles.css';
import { ACTIVITY_ADDED_ERROR, ACTIVITY_ADDED_SUCCESSFULLY } from '../../Helpers/messagesText';
import { SuccessAlert, ErrorAlert } from '../../Components/Alert';

const initialValues = {
  name: '',
  description: '',
  image: '',
};

const ActivitiesCreation = () => {
  const { go } = useHistory();
  const [loading, setLoading] = useState(false);

  const validation = Yup.object().shape({
    name: yupTitles(),
    description: yupLongDesc(),
    image: yupImages(),
  });

  const handleCKEditorChange = (editor, setFieldValue) => {
    setFieldValue('description', editor.getData());
  };

  const handleSubmit = async ({ image, name, description }) => {
    setLoading(true);
    const base64Img = await toBase64(image);
    const body = {
      name,
      image: base64Img,
      description,
    };
    const { data, error } = await saveActivityData(body);

    setLoading(false);
    if (data) {
      SuccessAlert(undefined, ACTIVITY_ADDED_SUCCESSFULLY);
    } else {
      ErrorAlert(ACTIVITY_ADDED_ERROR, error.message);
    }
  };

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
