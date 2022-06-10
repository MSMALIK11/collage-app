import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import SignInScreen from "./src/screens/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  HomeScreen,
  ProfileScreen,
  FeeScreen,
  PaymentScreen,
} from "./src/HomeRoute";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Fee" component={FeeScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
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
    backgroundColor: "papayawhip",
  },
});
