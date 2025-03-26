// components/AuthRedirect.tsx
import { Redirect } from "expo-router";
import { useAuthContext } from "../context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import React from "react";

export default function AuthRedirect():React.JSX.Element {
  const { isAuthenticated, isLoading } = useAuthContext();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return isAuthenticated ? <Redirect href="/(tabs)/index" /> : <Redirect href="/screen/LoginScreen" />;
}