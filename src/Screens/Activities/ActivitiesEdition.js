import * as Yup from 'yup';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { EmptyScreen } from '../../Components/EmptyScreen';
import ActivitiesForm from '../../Components/Activities/ActivitiesForm';
import { getActivityDataById, updateActivityDataById } from '../../Services/activitiesService';
import { toBase64 } from '../../Helpers/base64';
import { yupLongDesc, yupTitles } from '../../Helpers/formValidations';
import '../../Components/FormStyles.css';
import {
  ACTIVITY_EDITED_ERROR,
  ACTIVITY_EDITED_SUCCESSFULLY,
  ACTIVITY_FETCH_ERROR,
  NO_ACTIVITIES,
} from '../../Helpers/messagesText';
import { SuccessAlert, ErrorAlert } from '../../Components/Alert';

const ActivitiesEdition = ({ match: { params } }) => {
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
    data ? setActivityData(data.data) : ErrorAlert(ACTIVITY_FETCH_ERROR, error.message);
  };

  const handleCKEditorChange = (editor, setFieldValue) => {
    setFieldValue('description', editor.getData());
  };

  const handleSubmitForm = async ({ image, name, description }) => {
    setSubmitting(true);
    const base64Img = image && (await toBase64(image)).toString();
    const body = {
      name,
      ...(base64Img && { image: base64Img }),
      description,
    };
    const { data, error } = await updateActivityDataById(params.id, body);
    setSubmitting(false);
    data
      ? SuccessAlert(undefined, ACTIVITY_EDITED_SUCCESSFULLY)
      : ErrorAlert(ACTIVITY_EDITED_ERROR, error.message);
  };

  return activityData ? (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        handleSubmitForm(values);
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
