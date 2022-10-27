import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    maxWidth: "90%",
    marginLeft: "5%"
  },
  icon_mode: {
    height: 31
  },
  header_titles: {
    maxWidth: "90%",
    marginLeft: "5%",
    marginTop: 25,
    marginBottom: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  title: {
    fontFamily: "OpenSans_800ExtraBold",
    fontSize: 35
  },
  subTitle: {
    textDecorationLine: "line-through",
    color: "#9C9C9C",
    fontSize: 24,
    fontFamily: "OpenSans_800ExtraBold"
  },
  add_area: {
    alignSelf: "center",
    paddingVertical: 20,
    paddingHorizontal: 100,

  },
  add_text: {
    fontSize: 20,
    fontFamily: "OpenSans_300Light"
  },
  input: {
    height: 40,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
})