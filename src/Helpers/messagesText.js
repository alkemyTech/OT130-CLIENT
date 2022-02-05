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
const ALERT_ICON_SUCCESS = 'success';
const ALERT_ICON_ERROR = 'error';
const ACTIVITY_ADDED_SUCCESSFULLY = 'La actividad fue añadida correctamente';
const ACTIVITY_ADDED_ERROR = 'Ocurrió un error al intentar añadir la actividad';
const ACTIVITY_EDITED_SUCCESSFULLY = 'La actividad fue editada correctamente';
const ACTIVITY_EDITED_ERROR = 'Ocurrió un error al intentar editar la actividad';
const ACTIVITY_FETCH_ERROR = 'Ocurrió un error al intentar buscar la actividad con la ID dada';
const NO_ACTIVITIES = 'No se han encontrado actividades';
const SEND = 'Enviar';
const ACTIVITY_TITLE = 'Titulo de la actividad';
const SHOULD_BE_DIGITS_ONLY = 'Deben ser solo digitos';
const ORGANIZATION_EDITED_SUCCESSFULLY = 'La Organización fue editada correctamente';

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
  INPUT_REQUIRED,
  INVALID_IMAGE_EXT,
  INVALID_EMAIL,
  NETWORK_ERROR,
  PASSWORD_SHORT,
  PASSWORD_REGISTER_CONTAIN,
  PASSWORD_DONT_MATCH,
  SHOULD_BE_DIGITS_ONLY,
  TITLE_LONG,
  TITLE_SHORT,
  UNKNOWN_ERROR,
  ALERT_ICON_SUCCESS,
  ALERT_ICON_ERROR,
  ACTIVITY_ADDED_SUCCESSFULLY,
  ACTIVITY_ADDED_ERROR,
  ACTIVITY_FETCH_ERROR,
  ACTIVITY_EDITED_ERROR,
  ACTIVITY_EDITED_SUCCESSFULLY,
  NO_ACTIVITIES,
  SEND,
  ACTIVITY_TITLE,
  NUMBER_TO_SHORT_ERROR,
  ORGANIZATION_EDITED_SUCCESSFULLY
};
