// Errores generales de request

const NETWORK_ERROR = 'Error de red. Asegurate de estar conectado a internet';
const UNKNOWN_ERROR = 'Ha ocurrido un error';

// Mensajes de validación de formularios

const DESCRIPTION_LONG = 'Descripción demasiado larga';
const DESCRIPTION_SHORT = 'Mínimo 10 caracteres';
const EMAIL_TAKEN = 'El email ya ha sido registrado.';
const INPUT_REQUIRED = 'Campo obligatorio';
const INVALID_EMAIL = 'Email inválido';
const INVALID_IMAGE_EXT = 'Extensión inválida. Solo archivos jpg o png';
const NUMBER_TO_SHORT_ERROR = 'El numero debe tener minimo 8 caracteres';
const TITLE_LONG = 'Nombre muy largo';
const TITLE_SHORT = 'Mínimo 4 caracteres';
const PASSWORD_SHORT = 'Mínimo 6 caracteres';
const PASSWORD_REGISTER_CONTAIN =
  'La contraseña debe tener una longitud mínima de 6 caracteres, y contener al menos un número, una letra y un símbolo (por ejemplo: @#$%).';
const PASSWORD_DONT_MATCH = 'Las contraseñas no coinciden';
const SHOULD_BE_DIGITS_ONLY = 'Deben ser solo digitos';
const ALERT_ICON_SUCCESS = 'success';
const ALERT_ICON_ERROR = 'error';


// Textos de donación

const DONATION_TITLE_TEXT = "¡Contribuye!";
const DONATION_BUTTON_TEXT = "Contribuir";
const DONATION_THANKS_TEXT = "¡Muchas gracias por contribuir!";

export {
  DESCRIPTION_LONG,
  DESCRIPTION_SHORT,
  DONATION_BUTTON_TEXT,
  DONATION_TITLE_TEXT,
  DONATION_THANKS_TEXT,
  EMAIL_TAKEN,
  INVALID_EMAIL,
  INVALID_IMAGE_EXT,
  INPUT_REQUIRED,
  NETWORK_ERROR,
  NUMBER_TO_SHORT_ERROR,
  PASSWORD_DONT_MATCH,
  PASSWORD_REGISTER_CONTAIN,
  PASSWORD_SHORT,
  SHOULD_BE_DIGITS_ONLY,
  TITLE_LONG,
  TITLE_SHORT,
  UNKNOWN_ERROR,
  ALERT_ICON_SUCCESS,
  ALERT_ICON_ERROR,
};
