import React, { useState } from "react";
import { StyleSheet, Text, TurboModuleRegistry, View } from "react-native";
import Checkbox from "expo-checkbox";

const CheckBox = () => {
  const [isChecked, setChecked] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <View style={{ display: "flex", flexDirection: "row", marginTop: 11 }}>
      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text style={styles.paragraph}>User Name</Text>
      </View>
      <View style={[styles.checkboxContainer, { marginLeft: 10 }]}>
        <Checkbox
          style={styles.checkbox}
          value={mobile}
          onValueChange={setMobile}
        />
        <Text style={styles.paragraph}>Mobile</Text>
      </View>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
  },
  checkbox: {
    marginRight: 4,
  },
  paragraph: {
    fontSize: 20,
    color: "#444",
    fontWeight: "bold",
    marginLeft: 3,
  },
});
