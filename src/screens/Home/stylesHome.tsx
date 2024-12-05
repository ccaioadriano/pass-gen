import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "space-between", // Isso ajuda a distribuir o conteúdo de forma mais balanceada
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center", // Adiciona espaço abaixo do título
  },
  passwordContainer: {
    marginBottom: 30, // Espaço abaixo do campo de senha
    alignItems: "center",
  },
  passwordInput: {
    width: "100%",
    borderWidth: 1,
    padding: 15,
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: "#fff",
    textAlign: "center",
    marginBottom: 15, // Espaço entre o campo de senha e o botão
  },
  copyButton: {
    backgroundColor: "#007BFF", // Cor chamativa
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  optionsContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20, // Espaço entre cada switch
  },
  optionLabel: {
    fontSize: 16,
    color: "#555",
  },
  generateButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignContent: 'center', 
    textAlign: "center",
  },
  linkContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  linkText: {
    fontSize: 18,
    color: "#007BFF",
    textDecorationLine: "underline",
  },
  footerButtonsContainer:{
    padding: 20,
    marginBottom: 60
  },

  footerText: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
    marginBottom: 30, // Espaço abaixo do texto de dica
  },
});

export default stylesHome;
