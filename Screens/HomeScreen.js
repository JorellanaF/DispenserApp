import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { auth } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const logout = () => {
    try {
      console.log("Log Out !");
      auth.signOut();
      navigation.navigate("Login");
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/BackG.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={logout} style={styles.button}>
            <Text style={styles.buttonText}>Cerrar sesion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#FFAB00",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});
