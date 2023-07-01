import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F59E0B",
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
  closeButton: {
    margin: 30,
    backgroundColor: "#E06900",
    padding: 15,
    borderRadius: 10,
  },
  closeButtonText: {
    color: "#FFF",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
  },
  fieldContainer: {
    backgroundColor: "#FFF",
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  field: {
    marginBottom: 10,
  },
  label: {
    textTransform: "uppercase",
    fontWeight: "600",
    color: "#374151",
    fontSize: 12,
  },
  value: {
    fontWeight: "700",
    fontSize: 20,
    color: "#334155",
  },
});

export default styles;
