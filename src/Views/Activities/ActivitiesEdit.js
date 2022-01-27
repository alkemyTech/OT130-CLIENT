import * as Yup from "yup";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { EmptyScreen } from "../../Components/EmptyScreen";
import FormActivities from "../../Components/Activities/Form";
import { getActivityDataById, updateActivityDataById } from "../../Services/activitiesService";
import { toBase64 } from "../../Helpers/base64";
import { yupLongDesc, yupTitles } from "../../Helpers/formValidations";
import "../../Components/FormStyles.css";
import { NO_ACTIVITIES } from "../../Helpers/messagesText";

const ActivitiesEdit = ({ match: { params } }) => {
  const [activityData, setActivityData] = useState();
  const [submitting, setSubmitting] = useState();

  const initialValues = {
    name: activityData?.name || "",
    description: activityData?.description || "",
    image: "",
  };

  useEffect(() => {
    loadActivity();
  }, []);

  const validation = Yup.object().shape({
    name: yupTitles(),
    description: yupLongDesc(),
  });

  const loadActivity = async () => {
    const { data } = await getActivityDataById(params.id);
    data && setActivityData(data);
  };

  const handleCKEditorChange = (editor, setFieldValue) => {
    setFieldValue("description", editor.getData());
  };

  const handleSubmitForm = async ({ image, name, description }) => {
    setSubmitting(true);
    const base64Img = image && (await toBase64(image)).toString();
    const body = {
      name,
      ...(base64Img && { image: base64Img }),
      description,
    };
    await updateActivityDataById(params.id, body);
    setSubmitting(false);
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
          <FormActivities
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

export default ActivitiesEdit;
