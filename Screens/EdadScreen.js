import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

//Picker
import { Picker } from "@react-native-picker/picker";

import { LinearGradient } from "expo-linear-gradient";

const perro = require("../assets/Perro.png");
const gato = require("../assets/Gato.png");
const pet = { perro, gato };

const EdadScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectPet, setSelectPet] = useState();
  console.log(selectedValue);
  console.log(selectPet);

  const change = (itemIndex) => {
    if (itemIndex === 1) {
      setSelectPet(pet.perro);
    }
    if (itemIndex === 2) {
      setSelectPet(pet.gato);
    }
  };

  const changeScreen = () => {
    if(selectedValue == "bebe"){
        navigation.navigate("Horario3")
    } if(selectedValue == "joven"){
        navigation.navigate("Horario2")
    } if(selectedValue == "adulto"){
        navigation.navigate("Horario1")
    }
  }

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["rgba(217,175,217,1)", "rgba(151,217,225,1)"]}
      style={styles.background}
    >
      <View style={styles.container}>
      <View
          style={{
            flex: 1,
            justifyContent: "center",
            //backgroundColor: "red"
          }}
        >
          <Text style={{ fontSize: 40, color: "black" }}>Edad</Text>
        </View>
        <Picker
          selectedValue={selectedValue}
          style={{ flex: "1", width: "100%", justifyContent: "center"}}
          onValueChange={(itemValue, itemIndex) => [
            setSelectedValue(itemValue),
            change(itemIndex),
          ]}
        >
          <Picker.Item label="Seleccione edad" value="Seleccione" />
          <Picker.Item label="0-4" value="bebe" />
          <Picker.Item label="5-8" value="joven" />
          <Picker.Item label="9-15" value="adulto" />
        </Picker>
        <View style={{ height: "20%"}}>
          <TouchableOpacity
            style={styles.buttonContainer}
            //disabled={isLED1Disabled}
            onPress={changeScreen}
          >
            <Text>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default EdadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  buttonContainer: {
    height: "auto",
    width: "100%",
    backgroundColor: "#97e19f",
    borderRadius: 15,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
