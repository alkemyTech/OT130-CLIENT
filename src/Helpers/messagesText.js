// Errores generales de request

const NETWORK_ERROR = 'Error de red. Asegurate de estar conectado a internet'
const UNKNOWN_ERROR = 'Ha ocurrido un error'

// Mensajes de validación de formularios

const DESCRIPTION_LONG = "Descripción demasiado larga"
const DESCRIPTION_SHORT = "Mínimo 10 caracteres"
const INPUT_REQUIRED = "Campo obligatorio"
const INVALID_EMAIL = "Email inválido"
const INVALID_IMAGE_EXT = "Extensión inválida. Solo archivos jpg o png"
const NUMBER_SHORT = "El numero debe tener minimo 8 caracteres"
const INVALID_PHONE = "Deben ser solo digitos"
const TITLE_LONG = "Nombre muy largo"
const TITLE_SHORT = "Mínimo 4 caracteres"
const PASSWORD_SHORT = "Mínimo 6 caracteres"
const PASSWORD_REGISTER_CONTAIN = 'La contraseña debe tener una longitud mínima de 6 caracteres, y contener al menos un número, una letra y un símbolo (por ejemplo: @#$%).'
const PASSWORD_DONT_MATCH = "Las contraseñas no coinciden"

export {
    DESCRIPTION_LONG, 
    DESCRIPTION_SHORT, 
    INVALID_EMAIL,
    INVALID_IMAGE_EXT, 
    INVALID_PHONE,
    INPUT_REQUIRED, 
    NETWORK_ERROR,
    NUMBER_SHORT,
    PASSWORD_DONT_MATCH,
    PASSWORD_REGISTER_CONTAIN, 
    PASSWORD_SHORT,
    TITLE_LONG, 
    TITLE_SHORT, 
    UNKNOWN_ERROR, 
}