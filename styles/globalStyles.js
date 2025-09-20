import { StyleSheet } from "react-native";

export const colors = {
  primary: "#4CAF50",
  secondary: "#1976D2",
  danger: "#E53935",
  text: "#333",
  background: "#F5F5F5",
  inputBorder: "#ccc"
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 8,
    color: colors.text
  },
  input: {
    borderWidth: 1,
    borderColor: colors.inputBorder,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 4
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },
    errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 5
  }
});