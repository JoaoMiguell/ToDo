import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "90%",
    marginLeft: "5%",
    marginBottom: 20,
    fontSize: 20,
    fontFamily: "OpenSans_700Bold"
  },
  container_finished: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "90%",
    marginLeft: "5%",
    marginBottom: 20,
    fontSize: 20,
    color: "#9C9C9C",
    fontFamily: "OpenSans_300Light",
    textDecorationLine: "line-through",
  }
})