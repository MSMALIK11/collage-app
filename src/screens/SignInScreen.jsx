import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import CheckBox from "../component/CheckBox";
import CustomInput from "../component/CustomInput";
const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ position: "relative", width: "100%" }}>
        <Image
          style={styles.imgStyle}
          source={require("../../assets/images/bg-5.jpg")}
          resizeMode="cover"
        />
        {/* overlay text */}
        <View style={styles.textStyle}>
          <Text style={{ color: "#eee", fontSize: 13 }}> Welcome to </Text>
          <Text style={{ color: "#fff", fontSize: 30 }}>
            Glocal Unnversity{" "}
          </Text>
          <Text style={{ color: "#eee", fontSize: 13,textAlign:'right' }}>
          Shipping Global Mind
          </Text>
        </View>
        <View style={styles.overLay}></View>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.LoginText}>Login</Text>
        <Text style={styles.LoginSubText}>
          Hello, let's get you into your account.
        </Text>
        <Text style={styles.loginWith}>Login With</Text>

        <CheckBox />
        <CustomInput icon="person-outline" title="School name" />
       
        <CustomInput icon="home-outline" title="Schoole Code" />
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "95%",
    height: "85%",
    marginTop: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginHorizontal: 10,
    overflow: "hidden",
    elevation: 10,
  },
  imgStyle: {
    width: "100%",
    height: 200,
  },

  overLay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: 0.7,
  },
  loginContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    position: "relative",
  },
  LoginText: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  LoginSubText: {
    color: "#7d7d7d",
    fontSize: 8,
  },
  loginWith: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    letterSpacing: 2.4,
    color: "#333",
  },
  btnContainer: {
    backgroundColor: "indigo",
    paddingVertical: 7,
    shadowColor: "#74858C",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 5,
  },
  btnText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  textStyle: {
    position: "absolute",
    left: "40%",
    top: "10%",
    transform: [{ translateX: -50 },{translateY:50}],
    zIndex:99
  },
});

export default SignInScreen;
