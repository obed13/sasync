// hooks/useAuth.ts
import { useQuery } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IAuthResponse } from "../types/auth";

async function checkAuth(): Promise<IAuthResponse> {
  // tslint:disable-next-line:typedef
  const token = await AsyncStorage.getItem("userToken");
  // tslint:disable-next-line:typedef
  const userString = await AsyncStorage.getItem("userInfo");

  if (!token || !userString) {
    throw new Error("No autenticado");
  }

  // tslint:disable-next-line:typedef
  const user = JSON.parse(userString);

  // aquí podrías validar el token con tu backend si es necesario
  return { token, user };
}

// tslint:disable-next-line:typedef
export function useAuth() {
  return useQuery<IAuthResponse, Error>({
    queryKey: ["auth"],
    queryFn: checkAuth,
    retry: false,
    staleTime: Infinity,
  });
}