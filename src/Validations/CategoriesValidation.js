import * as yup from 'yup'
import { SUPPORTED_IMAGE_FORMATS } from '../config/imagePaths';
import { 
  INPUT_REQUIRED, 
  INVALID_IMAGE_EXT, 
  TITLE_SHORT 
} from '../Helpers/messagesText';

export const categoryNameSchema = yup.object().shape({
  name: yup
  .string()
  .required(INPUT_REQUIRED)
  .min(4, TITLE_SHORT)
});
export const categoryDescriptionSchema = yup.object().shape({
  description: yup
  .string()
  .required(INPUT_REQUIRED)
});
export const categoryFileSchema = yup.object().shape({
  image: yup
  .mixed()
  .required(INPUT_REQUIRED)
  .test('fileType', INVALID_IMAGE_EXT, value => SUPPORTED_IMAGE_FORMATS.includes(value.type))
});

