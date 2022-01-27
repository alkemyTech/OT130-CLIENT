import * as Yup from "yup";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Formik } from "formik";
import FormActivities from "../../Components/Activities/Form";
import { saveActivityData } from "../../Services/activitiesService";
import { toBase64 } from "../../Helpers/base64";
import { yupImages, yupLongDesc, yupTitles } from "../../Helpers/formValidations";
import "../../Components/FormStyles.css";
import "./styles.css";
import { ACTIVITY_ADDED_SUCCESSFULLY } from "../../Helpers/messagesText";
import { CREATE_ACTIVITY } from "../../rutas/config";

const initialValues = {
  name: "",
  description: "",
  image: "",
};

const ActivitiesForm = () => {
  const { push } = useHistory();
  const [success, setSuccess] = useState(false);

  const validation = Yup.object().shape({
    name: yupTitles(),
    description: yupLongDesc(),
    image: yupImages(),
  });

  const handleCKEditorChange = (editor, setFieldValue) => {
    setFieldValue("description", editor.getData());
  };

  const handleSubmit = async ({ image, name, description }) => {
    setSuccess(true);
    const base64Img = await toBase64(image);
    const body = {
      name,
      image: base64Img,
      description,
    };
    await saveActivityData(body);
    setSuccess(false);
    push(CREATE_ACTIVITY, { success: "true" });
  };

  return (
    <div>
      {success && <p className="success-message">{ACTIVITY_ADDED_SUCCESSFULLY}</p>}
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleSubmit(values);
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
              submitting={success}
            />
          );
        }}
      </Formik>
    </div>
  );
};

export default ActivitiesForm;
