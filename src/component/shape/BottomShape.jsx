import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const BottomShape = () => {
  return (
    <View style={styles.shapeStyle}>
      <Image source={require("../../../assets/images/balloon.jpg")} />
    </View>
  );
};

export default BottomShape;

const styles = StyleSheet.create({
  shapeStyle: {
    width: "100%",
    height: "100%",

    position: "absolute",
    top: 0,
    left: 0,
    right: 0,

    zIndex: -1,
  },
});
