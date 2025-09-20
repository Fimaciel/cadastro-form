import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalStyles";

export const formContaStyles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.danger,
    marginBottom: 10
  }
});
