import React, { useEffect, useState } from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import passwordService from "../../services/passwordService";

const PasswordList = ({ route }: { route: any }) => {
  const [passwords, setPasswords] = useState<
    { id: number; password: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPasswords = async () => {
      try {
        const result = await passwordService.getPasswords();
        setPasswords(result);
      } catch (error) {
        console.error("Erro ao buscar senhas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPasswords();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loadingText}>Carregando...</Text>
      ) : passwords.length > 0 ? (
        <FlatList
          data={passwords}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.passwordItem}>
              <Text style={styles.passwordText}>{item.password}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>Nenhuma senha salva</Text>
      )}
      <Text style={styles.message}>{route.params?.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  loadingText: {
    fontSize: 16,
    color: "#777",
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
  },
  passwordItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  passwordText: {
    fontSize: 18,
    color: "#555",
  },
  message: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginTop: 16,
  },
});

export default PasswordList;
