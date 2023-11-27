import { IMessage } from "../models/interfaces/alert.interface";

export const PATH_SERVICE: Array<string> = [
  'users',
  'users?page={page}',
  'users?delay={delay}',
  'users/{id}',
  'unknown',
  'unknown/{id}',
  'register',
  'login',
  'http://localhost:4200/api/error/error/error'
];

export const PATH_URL_DATA: Array<string> = [
  '',
  'manejo-datos',
  'mejoras-navegacion',
  'estrategias-optimizacion',
  'pruebas-unitarias',
  'mensaje',
  'error',
  '**',
];

export const MESSAGE_400: IMessage = {
  icon: 'error',
  title: 'Error',
  message: '400 - Hubo un error, inténtelo nuevamente.',
};

export const MESSAGE_401: IMessage = {
    icon: 'warning',
    title: 'Aviso',
    message: '401 - Es necesario autenticar',
};

export const MESSAGE_403: IMessage = {
    icon: 'info',
    title: 'Aviso',
    message: '403 - No tienes los permisos necesarios',
};

export const MESSAGE_404: IMessage = {
    icon: 'info',
    title: 'Aviso',
    message: '404 - No se encontraron resultados para la búsqueda',
};

export const MESSAGE_405: IMessage = {
    icon: 'error',
    title: 'Aviso',
    message: '405 - No se puede realizar la consulta, contacte al administrador del servicio',
};

export const MESSAGE_200: IMessage = {
  icon: 'success',
  title: 'Éxito',
  message: '200 - La operación se ha realizado con éxito',
};
