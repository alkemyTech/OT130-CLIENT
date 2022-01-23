//General request errors

const NETWORK_ERROR = "Error de red. Asegurate de estar conectado a internet";

const UNKNOWN_ERROR = "Ha ocurrido un error";

//Specific request errors

const EMAIL_TAKEN = "El email ya ha sido registrado"

//Form validation errors

const DESCRIPTION_LONG = "Descripción demasiado larga";

const DESCRIPTION_SHORT = "Mínimo 10 caracteres";

const INPUT_REQUIRED = "Campo obligatorio";

const INVALID_EMAIL = "Email inválido";

const INVALID_IMAGE_EXT = "Extensión inválida. Solo archivos jpg o png";

const PASSWORD_SHORT = "Contraseña muy corta";

const TITLE_LONG = "Nombre muy largo";

const TITLE_SHORT = "Mínimo 4 caracteres";

export {
  NETWORK_ERROR,
  UNKNOWN_ERROR,
  TITLE_LONG,
  TITLE_SHORT,
  INPUT_REQUIRED,
  DESCRIPTION_LONG,
  DESCRIPTION_SHORT,
  INVALID_IMAGE_EXT,
  INVALID_EMAIL,
  PASSWORD_SHORT,
  EMAIL_TAKEN
};
