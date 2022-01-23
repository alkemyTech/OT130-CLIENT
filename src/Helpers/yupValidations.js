import * as Yup from "yup";
import {TITLE_LONG, TITLE_SHORT, INPUT_REQUIRED, DESCRIPTION_LONG, DESCRIPTION_SHORT, INVALID_IMAGE_EXT, INVALID_EMAIL, PASSWORD_SHORT} from './messagesText'

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
      (value) => ["image/jpeg", "image/png"].includes(value?.type)
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


export {yupCustomString, yupEmail, yupImages, yupLongDesc, yupPassword, yupShortDesc, yupTitles, yupUserRoles}