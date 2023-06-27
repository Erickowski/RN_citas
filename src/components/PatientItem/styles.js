import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 20,
    borderBottomColor: "#94a3b8",
    borderBottomWidth: 1,
  },
  label: {
    color: "#374151",
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: 10,
  },
  text: {
    color: "#6d28d9",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  date: {
    color: "#374151",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: "#F59E0b",
  },
  deleteButton: {
    backgroundColor: "#Ef4444",
  },
  textButton: {
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 12,
  },
});
