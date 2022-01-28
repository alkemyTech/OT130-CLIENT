import * as Yup from "yup";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Formik } from "formik";
import ActivitiesForm from "../../Components/Activities/ActivitiesForm";
import { saveActivityData } from "../../Services/activitiesService";
import { toBase64 } from "../../Helpers/base64";
import { yupImages, yupLongDesc, yupTitles } from "../../Helpers/formValidations";
import "../../Components/FormStyles.css";
import "./styles.css";
import { ACTIVITY_ADDED_ERROR, ACTIVITY_ADDED_SUCCESSFULLY } from "../../Helpers/messagesText";

const initialValues = {
  name: "",
  description: "",
  image: "",
};

const ActivitiesCreate = () => {
  const { go } = useHistory();
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const validation = Yup.object().shape({
    name: yupTitles(),
    description: yupLongDesc(),
    image: yupImages(),
  });

  const handleCKEditorChange = (editor, setFieldValue) => {
    setFieldValue("description", editor.getData());
  };

  const handleSuccess = () => {
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      go(0);
    }, 3000);
  };

  const handleSubmit = async ({ image, name, description }) => {
    const base64Img = await toBase64(image);
    const body = {
      name,
      image: base64Img,
      description,
    };
    const { successMessage } = await saveActivityData(body);
    successMessage ? handleSuccess() : setErrorMessage(true);
  };

  const handleScreenMessages = () => {
    if (errorMessage) {
      return <p className="align-text-center">{ACTIVITY_ADDED_ERROR}</p>;
    } else if (successMessage) {
      return <p className="align-text-center">{ACTIVITY_ADDED_SUCCESSFULLY}</p>;
    }
  };

  return (
    <div>
      {handleScreenMessages()}
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
              submitting={successMessage}
            />
          );
        }}
      </Formik>
    </div>
  );
};

export default ActivitiesCreate;
