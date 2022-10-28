import { View, Text, Image, TouchableOpacity, TextInput, Button, ScrollView, Linking } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dialog } from '@rneui/themed';
import { useState, useContext, useEffect } from "react";
import produce from "immer"
import AsyncStorage from "@react-native-async-storage/async-storage"

import HomeContext from "./context"
import BackgroundContext from "../../components/Background/context"

import { styles } from "./styles";
import { Card } from "../../components/Card";

import dark_mode from "../../../assets/dark_mode.png";
import dark_coffee from "../../../assets/dark_coffee.png"
import light_mode from "../../../assets/light_mode.png"
import light_coffee from "../../../assets/light_coffee.png"

interface Assignment {
  message: string,
  finished: boolean
}

export function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [assignments, setAssignments] = useState<Assignment[]>()
  const [newAssign, setNewAssign] = useState<string>()
  const { changeTheme } = useContext(BackgroundContext)

  function changeModal() {
    setShowModal(!showModal)
  }

  function newAssignments() {
    if (newAssign == undefined) return;
    let assign: Assignment = {
      message: newAssign,
      finished: false
    }
    if (assignments != undefined) {
      setAssignments([...assignments, assign])
    } else {
      setAssignments([assign])
    }
  }

  function changeAssignStatus(index:number) {
    setAssignments(produce(assignments, draft => {
      const element = draft![index]
      element.finished = !element.finished
    }))
  }

  function deleteAssign(index:number): void {
    setAssignments(produce(assignments, draft => {
      draft?.splice(index, 1)
    }))
  }

  async function ChangeTheme() {
    setDarkMode(!darkMode)
    changeTheme()
    await AsyncStorage.setItem("theme", String(darkMode))
    
  }

  useEffect(() => {
    AsyncStorage.getItem("theme").then(value => {
      const previusTheme = Boolean(value) as boolean|undefined
      if (previusTheme == undefined) return
      if (previusTheme) ChangeTheme()
    }).catch(() => {return})
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <HomeContext.Provider value={{changeAssignStatus, deleteAssign}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => ChangeTheme()}>
            <Image source={darkMode ? light_mode : dark_mode} style={styles.icon_mode} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            Linking.openURL("https://github.com/JoaoMiguell/ToDo")
          }}>
            <Image source={darkMode ? light_coffee : dark_coffee} />
          </TouchableOpacity>
        </View>
        <View style={styles.header_titles}>
          <Text style={[styles.title, {color: darkMode? "#FFF" : "#000"}]}>HOJE</Text>
          <Text style={styles.subTitle}>AMANHÃ</Text>
        </View>

        <ScrollView style={{flex: 1}}>
          {
            assignments?.map((assign, index) => (
              <Card key={index}
                message={assign.message}
                finished={assign.finished}
                index={index}
                darkMode={darkMode}
              />
            ))
          }
        </ScrollView>
        

        <Dialog isVisible={showModal} onBackdropPress={changeModal}>
          <Dialog.Title title="Crie uma nova tarefa" />
          <TextInput style={styles.input} onChangeText={(value) => setNewAssign(value)}></TextInput>
          <Button title="Criar" onPress={newAssignments}/>
        </Dialog>

        <TouchableOpacity style={styles.add_area} onPress={changeModal}>
          <Text style={[styles.add_text, {color: darkMode? "#FFF" : "#000"}]}>Adicionar tarefa</Text>
        </TouchableOpacity>
      </HomeContext.Provider>
    </SafeAreaView>
  )
}