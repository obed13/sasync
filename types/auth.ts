// types/auth.ts
export interface ILoginCredentials {
    username: string;
    password: string;
  }

  export interface IAuthResponse {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
  }

  export interface IAuthError {
    message: string;
  }