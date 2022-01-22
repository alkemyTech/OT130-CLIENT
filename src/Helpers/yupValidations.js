import * as Yup from "yup";

export const yupTitles = () =>
  Yup.string()
    .min(4, "Mínimo 4 caracteres")
    .max(200, "Nombre muy largo")
    .required("Campo obligatorio");

export const yupShortDesc = () =>
  Yup.string()
    .min(10, "Mínimo 10 caracteres")
    .max(250, "Descripción demasiado larga")
    .required("Campo obligatorio");

export const yupLongDesc = () =>
  Yup.string()
    .min(10, "Mínimo 10 caracteres")
    .max(250, "Descripción demasiado larga")
    .required("Campo obligatorio");

export const yupCustomString = (min, max, minMsg, maxMsg) =>
  Yup.string(min, max, minMsg, maxMsg)
    .min(min, minMsg)
    .max(max, maxMsg)
    .required("Campo obligatorio");

export const yupImages = () =>
  Yup.mixed()
    .required("Campo obligatorio")
    .test(
      "fileFormat",
      "Extensión inválida. Solo archivos jpg o png",
      (value) => ["image/jpeg", "image/png"].includes(value?.type)
    );
