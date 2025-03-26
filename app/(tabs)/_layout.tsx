import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { View } from "react-native";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { useAuthContext } from "../../context/AuthContext";
import AuthRedirect from "../../components/AuthRedirect";

export default function TabLayout(): React.ReactNode {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <AuthRedirect />;
  }
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.grey,
            position: "absolute",
            bottom: 40,
            justifyContent: "center",
            alignSelf: "center",
            height: 63,
            marginHorizontal: 80,
            paddingHorizontal: 10,
            paddingVertical: 8,
            paddingBottom: 8,
            borderRadius: 40,
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: "#333",
            borderTopColor: "#333",
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#999",
          tabBarActiveTintColor: Colors.white,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  top: 12,
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,
                }}
              >
                <SimpleLineIcons name="pie-chart" style={{width:20,height:20}} size={18} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="transactions"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  top: 12,
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,
                }}
              >
                <AntDesign name="swap" style={{width:20,height:20}} size={18} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  top: 12,
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,
                }}
              >
                <FontAwesome name="user-o" style={{width:20,height:20,left: 2}} size={18} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
      <StatusBar style="light" />
    </>
  );
}
