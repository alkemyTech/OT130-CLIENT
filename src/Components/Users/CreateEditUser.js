import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toBase64 } from '../../Helpers/base64';
import FormComponent from './UsersForm';
import {
  NETWORK_ERROR,
  UNKNOWN_ERROR,
  EMAIL_TAKEN,
  ERROR_UPDATING_USER,
} from '../../Helpers/messagesText';
import {
  yupTitles,
  yupEmail,
  yupShortDesc,
  yupImages,
  yupUserRoles,
  yupPassword,
} from '../../Helpers/formValidations';
import { addUser, getUser, updateUser } from '../../Services/usersService';
import { INPUT_IMAGE_MAX_IMAGE_QUANTITY } from '../../config/imageConfig';
import { ErrorAlert } from '../Alert';

const validation = Yup.object().shape({
  name: yupTitles(),
  email: yupEmail(),
  description: yupShortDesc(),
  image_file: yupImages(),
  role_id: yupUserRoles(),
  password: yupPassword(),
});

const initialValues = {
  name: '',
  email: '',
  description: '',
  role_id: 2,
  image_file: null,
  password: '',
};

const CreateEditUser = ({ user }) => {
  const [success, setSuccess] = useState(false);
  const [requestError, setRequestError] = useState();
  const [currentUser, setCurrentUser] = useState(initialValues);
  const { id } = useParams();
  const fileInputRef = useRef();

  const getErrorMessage = (error) => {
    if (error?.message === 'Network Error') {
      return NETWORK_ERROR;
    } else if (error?.response?.data?.errors?.email) {
      return EMAIL_TAKEN;
    }
    return UNKNOWN_ERROR;
  };

  const getUserById = async () => {
    if (id && currentUser.id === undefined) {
      const { data, error } = await getUser(id);
      if (error) {
        ErrorAlert('Error', error.message);
      } else {
        data.data.description = '';
        data.data.image_file = '';
        setCurrentUser(data.data);
      }
    }
  };

  useEffect(() => {
    getUserById();
  });

  const submit = async (params) => {
    const { setRequestError, values, user, setSuccess, resetForm, fileInputRef, setSubmitting } =
      params;

    setRequestError('');
    setSuccess(false);

    values.role_id = Number(values.role_id);

    if (values.image_file) {
      values.profile_image = await toBase64(values.image_file);
    }
    console.log(id);
    delete values.image_file;

    const updateData = {
      name: values.name,
      password: values.password,
      email: values.email,
      profile_image: values.profile_image,
      description: values.description,
    };

    const { error, data } = id ? await updateUser(updateData, id) : await addUser(values);
    console.log(data, error.response);
    fileInputRef.current.value = null;

    if (data?.success) {
      setSuccess(true);
      resetForm();
    } else {
      ErrorAlert(ERROR_UPDATING_USER, getErrorMessage(error));
    }

    setSubmitting(false);
  };

  return (
    <Formik
      validationSchema={validation}
      initialValues={currentUser}
      enableReinitialize
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
      {({ handleSubmit, setFieldValue, touched, isSubmitting, values }) => {
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
            values={values}
          />
        );
      }}
    </Formik>
  );
};

export default CreateEditUser;
