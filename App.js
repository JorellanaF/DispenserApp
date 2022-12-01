import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./Screens/SplashScreen";
import LoginScreen from "./Screens/LoginScreen";
import Horario1 from "./Screens/Horario1";
import Horario2 from "./Screens/Horario2";
import Horario3 from "./Screens/Horario3";
import HomeScreen from "./Screens/HomeScreen";
import TipoScreen from "./Screens/TipoScreen";
import EdadScreen from "./Screens/EdadScreen";
import ExitoScreen from "./Screens/ExitoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tipo"
          component={TipoScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Edad"
          component={EdadScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Horario1"
          component={Horario1}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Horario2"
          component={Horario2}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Horario3"
          component={Horario3}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Exito"
          component={ExitoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
