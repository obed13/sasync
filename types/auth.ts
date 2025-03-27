// types/auth.ts
export interface ILoginCredentials {
    username: string;
    password: string;
  }

  export interface IAuthResponse {
    token: string;
    data: {
      id: string;
      name: string;
      email: string;
      sas150_id: string;
    };
  }

  export interface IAuthError {
    message: string;
  }