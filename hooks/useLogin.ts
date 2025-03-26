// hooks/useLogin.ts
import { useMutation } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ILoginCredentials, IAuthResponse, IAuthError } from "../types/auth";

async function loginUser(credentials: ILoginCredentials): Promise<IAuthResponse> {
  const response:Response = await fetch("https://tu-api.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
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
      await AsyncStorage.setItem("userToken", data.token);
      // también puedes guardar más información del usuario si es necesario
      await AsyncStorage.setItem("userInfo", JSON.stringify(data.user));
    },
  });
}