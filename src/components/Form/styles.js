import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6d28d9",
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    color: "#FFF",
  },
  titleBold: {
    fontWeight: "900",
  },
  field: {
    marginHorizontal: 30,
    marginBottom: 10,
  },
  label: {
    color: "#fff",
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  inputMultiline: {
    height: 100,
  },
  cancelButton: {
    margin: 30,
    backgroundColor: "#5827A4",
    padding: 15,
    borderRadius: 10,
  },
  cancelButtonText: {
    color: "#FFF",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
  },
  newAppointmentButton: {
    marginVertical: 50,
    backgroundColor: "#F59E0B",
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  newAppointmentButtonText: {
    fontWeight: "900",
    fontSize: 16,
    textAlign: "center",
    color: "#5827A4",
    textTransform: "uppercase",
  },
});

export default styles;
