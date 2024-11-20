import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home/Home";
import { PasswordProvider } from "./src/contexts/PasswordContext";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PasswordProvider>
        <Home />
      </PasswordProvider>
    </SafeAreaView>
  );
}
