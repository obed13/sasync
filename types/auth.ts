// types/auth.ts
export interface ILoginCredentials {
    username: string;
    password: string;
  }

  export interface IAuthResponse {
    token: string;
    data: {
      ALMACEN: string; 
      AXO_ACTIVO: string;
      FECHA_CADUCIDAD_PASSWORD: string;
      ID_BITACORA_ACCESO: string; 
      ID_CAMBIO_CLAVE: string;
      SAS030_CLAVE: string;
      SAS150_AMATERNO: string;
      SAS150_APATERNO: string;
      SAS150_CLAVE: string;
      SAS150_CONTROL: string;
      SAS150_ESTATUS: string;
      SAS150_ID: string;
      SAS150_JEFE_PUESTO: string;
      SAS150_NIVEL: string;
      SAS150_NOMBRE: string;
      SAS150_PUESTO: string;
      ULTIMO_ACCESO: string;
      ULTIMO_CAMBIO_CLAVE: string;
    };
  }

  export interface IAuthError {
    message: string;
  }