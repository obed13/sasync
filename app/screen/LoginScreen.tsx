// screens/LoginScreen.tsx
import React, { useState } from "react";
import { View, TextInput, Button, Alert, ActivityIndicator, Text, StyleSheet, Image } from "react-native";
import { useLogin } from "../../hooks/useLogin";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";
import { useNavigation } from "@react-navigation/native";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

interface IProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<IProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: login, isPending } = useLogin();


  // tslint:disable-next-line:typedef
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // tslint:disable-next-line:typedef
  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Error", "Por favor ingresa usuario y contraseña");
      return;
    }

    login(
      { username, password },
      {
        onSuccess: (data) => {
          navigation.replace("(tabs)");
        },
        onError: (error) => {
          console.error("Error en login:", error);
          Alert.alert("Error de autenticación", error.message);
        },
      }
    );
  };

  return (
    <View style={styles.container} >
      <Image source={require("../../assets/images/esas_logo.png")}  />
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {isPending ? (
        <ActivityIndicator size="large" color="#691a30" />
      ) : (
        <Button
          title="Iniciar sesión"
          onPress={handleLogin}
            disabled={isPending}
            color="#691a30" 
        />
      )}
    </View>
  );
};

// tslint:disable-next-line:typedef
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default LoginScreen;