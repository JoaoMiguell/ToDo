import { Image, Text, TouchableOpacity, View } from "react-native"
import { useContext } from "react"

import { styles } from "./styles"
import HomeContext from "../../screens/Home/context"

import dark_delete from "../../../assets/dark_delete.png"
import light_delete from "../../../assets/light_delete.png"

interface Props {
  message: string,
  finished: boolean,
  index: number,
  darkMode: boolean
}

export function Card({message, finished, index, darkMode}: Props) {
  const { changeAssignStatus, deleteAssign } = useContext(HomeContext)

  return (
    <View>
      <TouchableOpacity onPress={() => changeAssignStatus(index)}>
        <Text style={[finished?styles.container_finished:styles.container, {color: darkMode? "#FFF" : "#000"}]}>{message}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.delete} onPress={() => deleteAssign(index)}>
        <Image source={darkMode? light_delete : dark_delete} />
      </TouchableOpacity>
    </View>
  )
}