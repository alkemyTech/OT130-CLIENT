export const ORGANIZATION = '/backoffice/organization';
export const EDIT_ORGANIZATION = '/backoffice/organization/edit';
export const CREATE_ACTIVITY = '/create-activity';
export const BACKOFFICE_ORGANIZATION = '/backoffice/organization';

export const BACKOFFICE_PATHS = [
  {
    ROUTE: '/backoffice/home',
    PLACEHOLDER: 'home',
  },
  {
    ROUTE: BACKOFFICE_ORGANIZATION,
    PLACEHOLDER: 'organization',
  },
  {
    ROUTE: '/backoffice/slides',
    PLACEHOLDER: 'slides',
  },
  {
    ROUTE: '/backoffice/users',
    PLACEHOLDER: 'users',
  },
  {
    ROUTE: '/backoffice/activities',
    PLACEHOLDER: 'activities',
  },
];

export const PUBLIC_PATHS = [
  {
    PLACEHOLDER: 'Inicio',
    ROUTE: '/',
    USER_ACCESED: false,
  },
  {
    PLACEHOLDER: 'Nosotros',
    ROUTE: '/us',
    USER_ACCESED: false,
  },
  {
    PLACEHOLDER: 'Contacto',
    ROUTE: '/contacts',
    USER_ACCESED: false,
  },
  {
    PLACEHOLDER: 'Campaña Escuelas',
    ROUTE: '/school-campaign',
    USER_ACCESED: false,
  },
  {
    PLACEHOLDER: 'Campaña juguetes',
    ROUTE: '/toys-campaign',
    USER_ACCESED: false,
  },
];
