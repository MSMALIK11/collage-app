import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TopRoundedShape = () => {
  return <View style={styles.shapeStyle}></View>;
};

export default TopRoundedShape;

const styles = StyleSheet.create({
  shapeStyle: {
    width: "100%",
    height: 150,
    backgroundColor: "#1e90ff",
    position: "absolute",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    top: 0,
    left: 0,
    right: 0,
  },
});
