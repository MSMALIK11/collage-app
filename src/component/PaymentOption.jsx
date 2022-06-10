import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
const PaymentOption = () => {
  return (
    <View style={styles.paymentWraper}>
      <View style={styles.paymentContainer}>
        <View>
          <TouchableOpacity style={styles.iconBox}>
            <Ionicons name="add" size={30} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              paddingTop: 5,
              fontWeight: "bold",
              color: "#00073d",
            }}
          >
            Add
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.iconBox}>
            <FontAwesome name="dollar" size={28} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              paddingTop: 5,
              fontWeight: "bold",
              color: "#00073d",
            }}
          >
            Pay Fee
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.iconBox}>
            <Ionicons name="send" size={28} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              paddingTop: 5,
              fontWeight: "bold",
              color: "#00073d",
            }}
          >
            Send
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentOption;

const styles = StyleSheet.create({
  paymentWraper: {
    textAlign: "center",

    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
  paymentContainer: {
    width: "90%",

    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    height: 100,
    marginVertical: 10,
    paddingHorizontal: 10,
  },

  iconBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#00073d",
    width: 60,
    height: 60,
    borderRadius: 60,
    shadowColor: "#74858C",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.41,
    shadowRadius: 7,
    elevation: 12,
  },
});
