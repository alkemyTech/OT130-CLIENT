import * as Yup from 'yup';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { EmptyScreen } from '../../Components/EmptyScreen';
import ActivitiesForm from '../../Components/Activities/ActivitiesForm';
import { SuccessAlert, ErrorAlert } from '../../Components/Alert';
import { Spinner } from '../../Components/Spinner/Spinner';
import { getActivityDataById, updateActivityDataById } from '../../Services/activitiesService';
import { toBase64 } from '../../Helpers/base64';
import { yupLongDesc, yupTitles } from '../../Helpers/formValidations';
import '../../Components/FormStyles.css';
import {
  ACTIVITY_EDITED_ERROR,
  ACTIVITY_EDITED_SUCCESSFULLY,
  ACTIVITY_FETCH_ERROR,
  NETWORK_ERROR,
  NO_ACTIVITIES,
} from '../../Helpers/messagesText';

const ActivitiesEdition = ({ match: { params } }) => {
  const [fetching, setFetching] = useState(true);
  const [activityData, setActivityData] = useState();
  const [submitting, setSubmitting] = useState();

  const initialValues = {
    name: activityData?.name || '',
    description: activityData?.description || '',
    image: '',
  };

  useEffect(() => {
    loadActivity();
  }, []);

  const validation = Yup.object().shape({
    name: yupTitles(),
    description: yupLongDesc(),
  });

  const loadActivity = async () => {
    const { data, error } = await getActivityDataById(params.id);
    if (data?.success) {
      setActivityData(data?.data);
    } else {
      ErrorAlert(error?.message === 'Network Error' ? NETWORK_ERROR : ACTIVITY_FETCH_ERROR);
    }

    setFetching(false);
  };

  const handleCKEditorChange = (editor, setFieldValue) => {
    setFieldValue('description', editor.getData());
  };

  const handleSubmitForm = async ({ image, name, description }, resetForm) => {
    setSubmitting(true);
    const base64Img = image && (await toBase64(image)).toString();
    const body = {
      name,
      ...(base64Img && { image: base64Img }),
      description,
    };
    const { data, error } = await updateActivityDataById(params.id, body);
    console.log(data, error);

    setSubmitting(false);

    if (data?.success) {
      SuccessAlert(undefined, ACTIVITY_EDITED_SUCCESSFULLY);
      resetForm();
    } else {
      ErrorAlert(error?.message === 'Network Error' ? NETWORK_ERROR : ACTIVITY_EDITED_ERROR);
    }
    setSubmitting(false);
  };

  if (fetching) {
    return <Spinner />;
  }

  return activityData ? (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        handleSubmitForm(values, resetForm);
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
            activityData={activityData}
            submitting={submitting}
          />
        );
      }}
    </Formik>
  ) : (
    <EmptyScreen message={NO_ACTIVITIES} />
  );
};

export default ActivitiesEdition;
