import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ImageBackground,
} from "react-native";

import { AsyncStorage } from "react-native";
import init from "react_native_mqtt";

import { LinearGradient } from "expo-linear-gradient";

const topicsub = "boton";
const topic = "boton";
const hora1 = "Kevin_Orellana/feeds/hora-1";
const minuto1 = "Kevin_Orellana/feeds/minuto-1";
var client;

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  reconnect: true,
  sync: {},
});

import DateTimePicker from "@react-native-community/datetimepicker";

export default function Horario1({navigation}) {
  const [isLED1Disabled, setIsLED1Disabled] = useState(false);
  const [textButton, setTextButton] = useState("");
  const [counter, setCounter] = useState(0);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onMessageArrived = (message) => {
    console.log("onMessageArrived: " + message.payloadString);
    onLED1Connect();
  };

  const onLED1Connect = () => {
    console.log("led connected");
    //setIsLED1Disabled(false);
  };

  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
    }
  }

  const onLight = () => {
    client = new Paho.MQTT.Client("io.adafruit.com", 443, "883483772");
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({
      onSuccess: onConnect,
      useSSL: true,
      userName: "Kevin_Orellana",
      password: "aio_uCJP52mWjLMKxbQ9CZZ2rgk306DA",
    });
  };

  const onTime = () => {
    client = new Paho.MQTT.Client("io.adafruit.com", 443, "883483772");
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({
      onSuccess: onConnect,
      useSSL: true,
      userName: "Kevin_Orellana",
      password: "aio_uCJP52mWjLMKxbQ9CZZ2rgk306DA",
    });

    navigation.reset({
      index: 0,
      routes: [{ name: "Exito" }],
    });
  };

  const onConnect = () => {
    const hora = date.getHours().toString();
    client.publish(hora1, hora);
    const minuto = date.getMinutes().toString();
    client.publish(minuto1, minuto);
  };

  /*const onConnect = () => {
    console.log("onConnect");
    console.log("HAY");
    if (textButton == "OFF") {
      setTextButton("ON");
      client.publish(led, "ON");
      console.log("ENCENDIDO");
    } else {
      setTextButton("OFF");
      client.publish(led, "OFF");
      console.log("APAGADO");
    }
    console.log("---------------------------");
    //client.publish(led, "OFF");
  };*/

  //const [distancia, setDistancia] = useState(0);

  //const client = new Paho.MQTT.Client("io.adafruit.com", 443, "883483772");
  //client.onMessageArrived = onMessageArrived;
  //client.connect({ onSuccess:onConnect, useSSL: true, userName: "jorellanaf", password: "aio_WMyL14ylmVooCbX3GQ1WbBz2ikOB" });

  const changeDate = (hora) => {
    setDate(hora);
  };

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[ "rgba(217,175,217,1)", "rgba(151,217,225,1)"]}
      style={styles.background}
    >
      <View style={styles.container}>
        <View
          style={{ flex: 1, justifyContent: "center",
           //backgroundColor: "red" 
        }}
        >
          <Text style={{ fontSize: 40, color: "black" }}>Primera comida</Text>
        </View>
        <View
          style={{
            flex: 2,
            width: "100%",
            justifyContent: "center",
            //backgroundColor: "yellow",
          }}
        >
          <DateTimePicker
            style={{ width: "100%" }}
            open={open}
            value={date}
            textColor =  "black"
            mode="time"
            is24Hour={true}
            display="spinner"
            onChange={(evt, selectedDate) => {
              setDate(selectedDate);
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.buttonContainer}
            disabled={isLED1Disabled}
            onPress={onTime}
          >
            <Text>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    opacity: 0.9,
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
  button: {
    padding: 5,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  valueButtonContainer: {
    height: 160,
    backgroundColor: "#841584",
    borderRadius: 8,
    padding: 10,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});