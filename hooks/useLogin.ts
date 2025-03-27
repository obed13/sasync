// hooks/useLogin.ts
import { useMutation } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ILoginCredentials, IAuthResponse, IAuthError } from "../types/auth";

async function loginUser(credentials: ILoginCredentials): Promise<IAuthResponse> {

  const response:Response = await fetch("http://10.118.1.43:3001/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials ? JSON.stringify(credentials) : null,
  });

  if (!response.ok) {
    const error: IAuthError = await response.json();
    throw new Error(error.message || "Credenciales inválidas");
  }

  return response.json();
}

// tslint:disable-next-line:typedef
export function useLogin() {
  return useMutation<IAuthResponse, Error, ILoginCredentials>({
    mutationFn: loginUser,
    onSuccess: async (data) => {
      // console.log("data:",data);
      await AsyncStorage.setItem("userToken", data.token);
      // también puedes guardar más información del usuario si es necesario
      await AsyncStorage.setItem("userInfo", JSON.stringify(data.data));
    },
  });
}