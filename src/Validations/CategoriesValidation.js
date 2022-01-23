import * as Yup from 'yup'

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"]

export const categoryNameSchema = Yup.object().shape({

  name: Yup.string().required("Campo obligatorio").min(4, "Minimo 4 caracteres")

});
export const categoryDescriptionSchema = Yup.object().shape({

  description: Yup.string().required("Campo obligatorio")

});
export const categoryFileSchema = Yup.object().shape({

  image: Yup.mixed()
    .required("Campo obligatorio")
    .test('fileType', "El formato debe ser .png/.jpg", value => SUPPORTED_FORMATS.includes(value.type))
});



