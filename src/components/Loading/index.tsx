import { ActivityIndicator, ImageBackground, View } from "react-native";

import { styles } from "./styles";

import splash from "../../../assets/splash.png"

export function Loading() {
  return (
    <View style={styles.container}>
      <ImageBackground source={splash} style={{width:"100%",height:"100%", display:"flex",justifyContent:"center"}}>
        <ActivityIndicator color={"#9c9c9c"} size={90}/>
      </ImageBackground>
    </View>
  )
}