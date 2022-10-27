import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    maxWidth: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 20,
    fontFamily: "OpenSans_700Bold"
  },
  container_finished: {
    maxWidth: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 20,
    color: "#9C9C9C",
    fontFamily: "OpenSans_300Light",
    textDecorationLine: "line-through",
  },
  delete: {
    display: "flex",
    alignItems: "center" 
  }
})