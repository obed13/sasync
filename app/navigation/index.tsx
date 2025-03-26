// navigation/index.tsx
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screen/LoginScreen";
import TabsNavigator from "./TabsNavigator";
import React from "react";
import { RootStackParamList } from "./types";

// tslint:disable-next-line:typedef
const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator():React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="(tabs)" component={TabsNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}