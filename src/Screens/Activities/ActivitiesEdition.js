import * as Yup from 'yup';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
import { Link } from '@mui/material';
import { Button } from 'bootstrap';
import { Col, Container, Row } from 'react-bootstrap';

const ActivitiesEdition = () => {
  const  {id}  = useParams()
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
    const { data, error } = await getActivityDataById(id);
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
    const { data, error } = await updateActivityDataById(id, body);
    setSubmitting(false);

    if (data?.success) {
      SuccessAlert(undefined, ACTIVITY_EDITED_SUCCESSFULLY);

      resetForm();
    } else {
      ErrorAlert(error?.message === 'Network Error' ? NETWORK_ERROR : ACTIVITY_EDITED_ERROR);
    }
    setSubmitting(false);
  };

  return fetching ? (
    <Spinner />
  ) : activityData ? (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        handleSubmitForm(values, resetForm);
      }}
      validationSchema={validation}
    >
      {({ values, handleChange, handleSubmit, touched, setFieldValue }) => {
        return (
          <Container>
            <Row>
              <Col >
                <Link href="/backoffice/activities" className='btn btn-primary text-white  ' variant="body2">
                  Volver a backoffice
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
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
              </Col>
            </Row>
          </Container>
        );
      }}
    </Formik>
  ) : (
    <EmptyScreen message={NO_ACTIVITIES} />
  );
};

export default ActivitiesEdition;
