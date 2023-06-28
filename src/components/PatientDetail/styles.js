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
});

export default styles;
