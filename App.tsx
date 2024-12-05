import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PasswordProvider } from "./src/contexts/PasswordContext";
import Home from "./src/screens/Home/Home";
import PasswordList from "./src/screens/PasswordList/PasswordList";

// Estilos
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
});

// Definir o tipo da navegação
type RootStackParamList = {
  Home: undefined;
  PasswordList: undefined;
};

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <PasswordProvider>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PasswordList" component={PasswordList} />
          </Stack.Navigator>
        </SafeAreaView>
      </PasswordProvider>
    </NavigationContainer>
  );
}
