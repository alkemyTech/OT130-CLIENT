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
const TITLE_LONG = 'Nombre muy largo';
const TITLE_SHORT = 'Mínimo 4 caracteres';
const PASSWORD_SHORT = 'Mínimo 6 caracteres';
const PASSWORD_REGISTER_CONTAIN =
  'La contraseña debe tener una longitud mínima de 6 caracteres, y contener al menos un número, una letra y un símbolo (por ejemplo: @#$%).';
const PASSWORD_DONT_MATCH = 'Las contraseñas no coinciden';
const ORGANIZATION_FETCH_ERROR = 'Ocurrió un error al intentar traer los datos de la organización';
const ORGANIZATION_EDITED_SUCCESSFULLY = 'La organizacion fue editada correctamente';
const ORGANIZATION_EDITED_ERROR = 'Ocurrió un error al intentar editar la organización';
const ORGANIZATION_LOGO = 'Logo de la organización';
const ORGANIZATION_NAME = 'Nombre de la organización';
const ORGANIZATION_DESCRIPTION = 'Descripcion de la organización';

export {
  DESCRIPTION_LONG,
  DESCRIPTION_SHORT,
  EMAIL_TAKEN,
  INPUT_REQUIRED,
  INVALID_IMAGE_EXT,
  INVALID_EMAIL,
  NETWORK_ERROR,
  PASSWORD_SHORT,
  PASSWORD_REGISTER_CONTAIN,
  PASSWORD_DONT_MATCH,
  TITLE_LONG,
  TITLE_SHORT,
  UNKNOWN_ERROR,
  ORGANIZATION_EDITED_ERROR,
  ORGANIZATION_EDITED_SUCCESSFULLY,
  ORGANIZATION_FETCH_ERROR,
  ORGANIZATION_LOGO,
  ORGANIZATION_NAME,
  ORGANIZATION_DESCRIPTION,
};
