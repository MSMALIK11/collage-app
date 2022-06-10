import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const CustomInput = ({ icon, title }) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <Ionicons name={icon} size={20} />
        <TextInput placeholder={title} style={styles.inputStyle} />
      </View>
      <View style={styles.lineStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 3,
  },
  inputStyle: {
    marginLeft: 10,
  },
  lineStyle: {
    width: "100%",
    height: 1,
    backgroundColor: "#f1f1f1",
  },
});

export default CustomInput;
