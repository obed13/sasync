import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { ReactNode, useEffect } from "react";
import "react-native-reanimated";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {AuthProvider} from "../context/AuthContext";

// prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// create a client
const queryClient:QueryClient = new QueryClient();

export default function RootLayout():ReactNode {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="screen/LoginScreen"
            options={{
              title: "Iniciar sesión ",
              presentation: "modal", // opcional: si quieres que aparezca como modal
              headerShown: false
            }}
          />
          <Stack.Screen name="+not-found" options={{ title: "Not Found" }} />
        </Stack>
      </AuthProvider>
    </QueryClientProvider>
  );
}
