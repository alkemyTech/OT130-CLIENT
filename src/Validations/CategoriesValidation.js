import * as yup from 'yup'

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"]

export const categoryNameSchema = yup.object().shape({
  name: yup
  .string()
  .required("Campo obligatorio")
  .min(4, "Minimo 4 caracteres")
});
export const categoryDescriptionSchema = yup.object().shape({
  description: yup
  .string()
  .required("Campo obligatorio")
});
export const categoryFileSchema = yup.object().shape({
  image: yup
  .mixed()
  .required("Campo obligatorio")
  .test('fileType', "El formato debe ser .png/.jpg", value => SUPPORTED_FORMATS.includes(value.type))
});

export const acceptedImageFormats = 'image/png,image/jpeg';

