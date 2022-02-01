// Errores generales de request

const NETWORK_ERROR = 'Error de red. Asegurate de estar conectado a internet'
const UNKNOWN_ERROR = 'Ha ocurrido un error'

// Mensajes de validación de formularios

const DESCRIPTION_LONG = "Descripción demasiado larga"
const DESCRIPTION_SHORT = "Mínimo 10 caracteres"
const EMAIL_TAKEN = 'El email ya ha sido registrado.'
const INPUT_REQUIRED = "Campo obligatorio"
const INVALID_EMAIL = "Email inválido"
const INVALID_IMAGE_EXT = "Extensión inválida. Solo archivos jpeg o png"
const TITLE_LONG = "Nombre muy largo"
const TITLE_SHORT = "Mínimo 4 caracteres"
const PASSWORD_SHORT = "Mínimo 6 caracteres"
const PASSWORD_REGISTER_CONTAIN = 'La contraseña debe tener una longitud mínima de 6 caracteres, y contener al menos un número, una letra y un símbolo (por ejemplo: @#$%).'
const PASSWORD_DONT_MATCH = "Las contraseñas no coinciden"
const ALERT_ICON_SUCCESS = "success"
const ALERT_ICON_ERROR = "error"



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
    ALERT_ICON_SUCCESS,
    ALERT_ICON_ERROR
}