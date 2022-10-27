import { Text, TouchableOpacity } from "react-native"
import { useContext } from "react"

import { styles } from "./styles"
import HomeContext from "../../screens/Home/context"

interface Props {
  message: string,
  finished: boolean,
  index: number,
  darkMode: boolean
}

export function Card({message, finished, index, darkMode}: Props) {
  const { changeAssignStatus } = useContext(HomeContext)

  return (
    <>
      {
        finished 
          ? (
            <TouchableOpacity onPress={() => changeAssignStatus(index)}>
              <Text style={[styles.container_finished, {color: darkMode? "#FFF" : "#000"}]}>{message}</Text>
            </TouchableOpacity>
          )
          : (
            <TouchableOpacity onPress={() => changeAssignStatus(index)}>
              <Text style={[styles.container, {color: darkMode? "#FFF" : "#000"}]}>{message}</Text>
            </TouchableOpacity>
          )
      }
    </>
  )
}