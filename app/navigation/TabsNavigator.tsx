// app/navigation/TabsNavigator.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../(tabs)/index";
import LoginScreen from "../screen/LoginScreen";
import React from "react";

// tslint:disable-next-line:typedef
const Tab = createBottomTabNavigator();

export default function TabsNavigator():React.JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={LoginScreen} />
    </Tab.Navigator>
  );
}