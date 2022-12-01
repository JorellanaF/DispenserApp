import React from "react";
import { StyleSheet, Image, View, ImageBackground } from "react-native";

//Background
import { LinearGradient } from "expo-linear-gradient";

//import { auth } from "../../firebase";

//const image = { require("../../assets/Logo.png") };

export default class SplashScreen extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    setTimeout(() => {
      /*auth.onAuthStateChanged((user) => {
        this.props.navigation.navigate(user ? "Home" : "Login");
      });*/
      //this.props.navigation.navigate("LoginScreen");
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
      this.props.navigation.navigate("Login");
    }, 1500);
  }

  render() {
    return (
      <LinearGradient
      // Background Linear Gradient
      colors={[ "rgba(217,175,217,1)", "rgba(151,217,225,1)"]}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          style={{ width: "80%", height: "50%" }}
          resizeMode="contain"
          source={require("../assets/Logo.png")}
        />
        </View>
    </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#FFAB00",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
