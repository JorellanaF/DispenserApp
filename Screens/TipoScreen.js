import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

//Picker
import { Picker } from "@react-native-picker/picker";

import { LinearGradient } from "expo-linear-gradient";

const perro = require("../assets/Perro.png");
const gato = require("../assets/Gato.png");
const pet = { perro, gato };

const TipoScreen = ({ navigation }) => {
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
    if( selectedValue == "perro"){
        navigation.navigate("Edad")
    }   if( selectedValue == "gato"){
        navigation.navigate("Edad")
    }
  }

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["rgba(217,175,217,1)", "rgba(151,217,225,1)"]}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          style={{
            flex: 1,
            width: "50%",
            height: "30%",
            resizeMode: "contain"
          }}
          source={selectPet}
        />
        <Picker
          selectedValue={selectedValue}
          style={{ flex: "auto", width: "100%", justifyContent: "center"}}
          onValueChange={(itemValue, itemIndex) => [
            setSelectedValue(itemValue),
            change(itemIndex),
          ]}
        >
          <Picker.Item label="Seleccione" value="Seleccione" />
          <Picker.Item label="Perro" value="perro" />
          <Picker.Item label="Gato" value="gato" />
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

export default TipoScreen;

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
