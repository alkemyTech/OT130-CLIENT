import * as Yup from "yup";
import { IMAGE_ACCEPTED_EXTENSIONS } from "../config/imageConfig";
import { 
  DESCRIPTION_LONG,
  DESCRIPTION_SHORT,
  INPUT_REQUIRED,
  INVALID_IMAGE_EXT,
  INVALID_EMAIL,
  NUMBER_TO_SHORT_ERROR,
  PASSWORD_SHORT,
  TERMS_AND_CONDITIONS,
  TITLE_LONG,
  TITLE_SHORT,
  SHOULD_BE_DIGITS_ONLY,
  PASSWORD_INCORRECT,
} from './messagesText';

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
      (value) => value ? IMAGE_ACCEPTED_EXTENSIONS.includes(value.type) : true
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

const yupPasswordLogin = () =>
  Yup.string()
    .min(6, PASSWORD_INCORRECT )
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, PASSWORD_INCORRECT)
    .required(INPUT_REQUIRED)

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
  
const yupPhone = () =>
  Yup.string()
    .matches(/^[0-9]+$/, SHOULD_BE_DIGITS_ONLY)
    .min(8, NUMBER_TO_SHORT_ERROR)
    .required(INPUT_REQUIRED);
    
const yupLinks = () =>
  Yup.string()
    .url()
    .required(INPUT_REQUIRED)

const yupTermsAndConditions = () =>
  Yup.boolean()
    .oneOf([true], TERMS_AND_CONDITIONS).required(TERMS_AND_CONDITIONS)

const yupAddress = (minMsg) =>
  Yup.string()
    .required(INPUT_REQUIRED)
    .min(6,minMsg )

export {
  yupAddress,
  yupCustomString,
  yupConfirmPass,
  yupEmail, 
  yupFirstName,
  yupImages, 
  yupLongDesc, 
  yupLastName,
  yupPassword,
  yupPasswordLogin, 
  yupPassRegister,
  yupPhone,
  yupShortDesc, 
  yupTermsAndConditions,
  yupTitles, 
  yupUserRoles,
  yupLinks,
}
