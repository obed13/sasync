// context/AuthContext.tsx
import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IAuthResponse } from "../types/auth";

interface IAuthContextType {
  user: IAuthResponse["user"] | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (data: IAuthResponse) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext:React.Context<IAuthContextType | undefined> = createContext<IAuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }):React.JSX.Element {

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<IAuthResponse["user"] | null>(null);
  const queryClient: QueryClient = useQueryClient();

  useEffect(() => {
    // tslint:disable-next-line:typedef
    const loadUser = async () =>  {
      try {
        // tslint:disable-next-line:typedef
        const userString = await AsyncStorage.getItem("userInfo");
        // tslint:disable-next-line:typedef
        const token = await AsyncStorage.getItem("userToken");

        if (token && userString) {
          setUser(JSON.parse(userString));
        }
      } catch (error) {
        console.error("Error loading user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  // tslint:disable-next-line:typedef
  const login = async (data: IAuthResponse) => {
    await AsyncStorage.setItem("userToken", data.token);
    await AsyncStorage.setItem("userInfo", JSON.stringify(data.user));
    setUser(data.user);
  };

  // tslint:disable-next-line:typedef
  const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userInfo");
    setUser(null);
    // limpiar queries al hacer logout
    queryClient.clear();
  };

  const value: IAuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext():IAuthContextType {
  // tslint:disable-next-line:typedef
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}