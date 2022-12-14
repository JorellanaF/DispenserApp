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

const Hora1 = "Kevin_Orellana/feeds/hora-1";
const Minuto1 = "Kevin_Orellana/feeds/minuto-1";
const Hora2 = "Kevin_Orellana/feeds/hora-2";
const Minuto2 = "Kevin_Orellana/feeds/minuto-2";
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

  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
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
      userName: "{Username_ADAFRUIT}",
      password: "{KEY_ADAFRUIT}",
    });
  };

  const onTime = () => {
    client = new Paho.MQTT.Client("io.adafruit.com", 443, "883483772");
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({
      onSuccess: onConnect,
      useSSL: true,
      userName: "{Username_ADAFRUIT}",
      password: "{KEY_ADAFRUIT}",
    });

    navigation.reset({
        index: 0,
        routes: [{ name: "Exito" }],
      });
  };

  const onConnect = () => {
    const hora1 = date1.getHours().toString();
    client.publish(Hora1, hora1);
    const minuto1 = date1.getMinutes().toString();
    client.publish(Minuto1, minuto1);

    const hora2 = date2.getHours().toString();
    client.publish(Hora2, hora2);
    const minuto2 = date2.getMinutes().toString();
    client.publish(Minuto2, minuto2);
  };

  const changeDate = (hora) => {
    setDate(hora);
  };

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
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: "20%",
              //backgroundColor: "red"
            }}
          >
            <Text style={{ fontSize: 30, color: "black", alignSelf: "center" }}>
              Primera comida
            </Text>
            <DateTimePicker
              style={{ width: "100%" }}
              open={open}
              value={date1}
              textColor="black"
              mode="time"
              is24Hour={true}
              display="spinner"
              onChange={(evt, selectedDate) => {
                setDate1(selectedDate);
              }}
            />
          </View>
          <View
            style={{
                height: "20%",
              //backgroundColor: "red"
            }}
          >
            <Text style={{ fontSize: 30, color: "black", alignSelf: "center" }}>
              Segunda comida
            </Text>
            <DateTimePicker
              style={{ width: "100%" }}
              open={open}
              value={date2}
              textColor="black"
              mode="time"
              is24Hour={true}
              display="spinner"
              onChange={(evt, selectedDate) => {
                setDate2(selectedDate);
              }}
            />
          </View>
          <View style={{ height: "20%", justifyContent: "flex-end" }}>
            <TouchableOpacity
              style={styles.buttonContainer}
              disabled={isLED1Disabled}
              onPress={onTime}
            >
              <Text>Siguiente</Text>
            </TouchableOpacity>
          </View>
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
