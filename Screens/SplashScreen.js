import React from "react";
import { StyleSheet, Image, View, ImageBackground } from "react-native";

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
      <ImageBackground
        source={require("../assets/BackG.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
        <Image
          style={{ width: "50%", height: "50%" }}
          resizeMode="contain"
          source={require("../assets/Huella.png")}
        />
        </View>
      </ImageBackground>
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
});
