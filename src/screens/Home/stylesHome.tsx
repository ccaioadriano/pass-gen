import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "center",
  },
  passwordContainer: { flexDirection: "row", marginBottom: 20 },
  passwordInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#FFF",
  },
  copyButton: {
    marginLeft: 10,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  copyButtonText: { color: "#FFF" },
  optionsContainer: { marginBottom: 20 },
  optionLabel: { fontSize: 16, marginBottom: 5 },
  slider: { width: "100%" },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  generateButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  generateButtonText: { color: "#FFF", fontSize: 18 },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  sliderContainer: {},
});

export default styles;
