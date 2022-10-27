import { StatusBar } from 'expo-status-bar';
import { setBackgroundColorAsync, setButtonStyleAsync} from "expo-navigation-bar"
import { View } from "react-native";
import { useState } from "react"

import { styles } from "./styles";

import BackgroundContext from "./context"

interface Props {
  children: React.ReactNode
}

export function Background({children}: Props) {
  const [darkMode, setDarkMode] = useState(false)

  setBackgroundColorAsync(darkMode?"black":"white")
  setButtonStyleAsync(darkMode?"light":"dark")

  function changeTheme() { setDarkMode(!darkMode) }

  return (
    <View style={[styles.container, {backgroundColor: darkMode ? "#000": "#FFF"}]}>
      <StatusBar style={darkMode ? "light" : "dark"} />

      <BackgroundContext.Provider value={{changeTheme}}>
        {children}
      </BackgroundContext.Provider>
    </View>
  )
}