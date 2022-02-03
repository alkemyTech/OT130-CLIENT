import * as yup from 'yup'
import { SUPPORTED_IMAGE_FORMATS } from '../config/imagePaths';
import { 
  INPUT_REQUIRED, TITLE_SHORT, 
  INVALID_IMAGE_EXT 
} from "./messagesText";

const categoryNameSchema = yup.object().shape({
  name: yup
  .string()
  .required(INPUT_REQUIRED)
  .min(4, TITLE_SHORT)
});

const categoryDescriptionSchema = yup.object().shape({
  description: yup
  .string()
  .required(INPUT_REQUIRED)
});
 
const categoryFileSchema = yup.object().shape({
  image: yup
  .mixed()
  .required(INPUT_REQUIRED)
  .test('fileType', INVALID_IMAGE_EXT, value => SUPPORTED_IMAGE_FORMATS.includes(value.type))
});

export {
  categoryNameSchema,
  categoryDescriptionSchema,
  categoryFileSchema
};