import React, { useState, useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { toBase64 } from "../../Helpers/base64";
import FormComponent from "./UsersForm";
import { UNKNOWN_ERROR } from "../../Helpers/messagesText";
import {
  yupTitles,
  yupEmail,
  yupShortDesc,
  yupImages,
  yupUserRoles,
  yupPassword,
} from "../../Helpers/formValidations";
import { postUser, updateUser } from "../../Services/usersService";
import { INPUT_IMAGE_MAX_IMAGE_QUANTITY } from "../../config/imageConfig";

const validation = Yup.object().shape({
  name: yupTitles(),
  email: yupEmail(),
  description: yupShortDesc(),
  image_file: yupImages().notRequired(),
  role_id: yupUserRoles(),
  password: yupPassword(),
});

const initialValues = {
  name: "",
  email: "",
  description: "",
  role_id: 2,
  image_file: null,
  password: "",
};

const submit = async (params) => {
  const {
    setRequestError,
    values,
    user,
    setSuccess,
    resetForm,
    fileInputRef,
    setSubmitting,
  } = params;
  values.role_id = Number(values.role_id);

  if (values.image_file) {
    values.profile_image = await toBase64(values.image_file);
  }

  delete values.image_file;
  const response = user
    ? await updateUser(values, user, setRequestError)
    : await postUser(values, setRequestError);

  if (response.data.success) {
    setSuccess(true);
    resetForm();
    fileInputRef.current.value = null;
  } else {
    setRequestError(UNKNOWN_ERROR);
  }

  setSubmitting(false);
};

const CreateEditUser = ({ user }) => {
  const [success, setSuccess] = useState(false);
  const [requestError, setRequestError] = useState();

  const fileInputRef = useRef();

  return (
    <Formik
      validationSchema={validation}
      initialValues={user || initialValues}
      onSubmit={(values, { setSubmitting, resetForm }) =>
        submit({
          values,
          setSubmitting,
          user,
          setSuccess,
          setRequestError,
          resetForm,
          fileInputRef,
        })
      }
    >
      {({ handleSubmit, setFieldValue, touched, isSubmitting }) => {
        return (
          <FormComponent
            touched={touched}
            handleSubmit={handleSubmit}
            setFieldValue={setFieldValue}
            success={success}
            requestError={requestError}
            isSubmitting={isSubmitting}
            fileInputRef={fileInputRef}
            imageMax={INPUT_IMAGE_MAX_IMAGE_QUANTITY}
          />
        );
      }}
    </Formik>
  );
};

export default CreateEditUser;
