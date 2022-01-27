import * as Yup from "yup";

import { 
  DESCRIPTION_LONG,
  DESCRIPTION_SHORT,
  INPUT_REQUIRED,
  INVALID_IMAGE_EXT,
  INVALID_EMAIL,
  PASSWORD_SHORT,
  TITLE_LONG,
  TITLE_SHORT 
} from './messagesText'

const INPUT_IMAGE_MAX_IMAGE_QUANTITY = 1

const yupTitles = () =>
  Yup.string()
    .min(4, TITLE_SHORT)
    .max(200, TITLE_LONG)
    .required(INPUT_REQUIRED);

const yupShortDesc = () =>
  Yup.string()
    .min(10, DESCRIPTION_SHORT)
    .max(250, DESCRIPTION_LONG)
    .required(INPUT_REQUIRED);

const yupLongDesc = () =>
  Yup.string()
    .min(10, DESCRIPTION_SHORT)
    .max(250, DESCRIPTION_LONG)
    .required(INPUT_REQUIRED);

const yupCustomString = (min, max, minMsg, maxMsg) =>
  Yup.string(min, max, minMsg, maxMsg)
    .min(min, minMsg)
    .max(max, maxMsg)
    .required(INPUT_REQUIRED);

const yupImages = () =>
  Yup.mixed()
    .required(INPUT_REQUIRED)
    .test(
      "fileFormat",
      INVALID_IMAGE_EXT,
      (value) => value ? ["image/jpeg", "image/png"].includes(value.type) : true
    );

const yupEmail = () =>   
  Yup.string()
    .email(INVALID_EMAIL)
    .required(INPUT_REQUIRED)

const yupUserRoles = () => 
  Yup.string()
    .required(INPUT_REQUIRED)

const yupPassword = () =>
  Yup.string()
    .required(INPUT_REQUIRED)
    .min(8, PASSWORD_SHORT)

// RegisterForm validations 
const yupFirstName = () =>
  Yup.string()
    .required(INPUT_REQUIRED)
  
const yupLastName = () =>
  Yup.string()
  .required(INPUT_REQUIRED)

const yupPassRegister = (minMsg,passMsg) =>
  Yup.string()
    .min(6,minMsg )
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,passMsg)
    .required(INPUT_REQUIRED)

const yupConfirmPass = (passRef,passMsg) =>
  Yup.string()
  .oneOf([Yup.ref(passRef), null], passMsg)
  .required(INPUT_REQUIRED)

export {
  INPUT_IMAGE_MAX_IMAGE_QUANTITY,
  yupCustomString,
  yupConfirmPass,
  yupEmail, 
  yupFirstName,
  yupImages, 
  yupLongDesc, 
  yupLastName,
  yupPassword, 
  yupPassRegister,
  yupShortDesc, 
  yupTitles, 
  yupUserRoles,
}
