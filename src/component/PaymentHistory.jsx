import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const PaymentHistory = () => {
  return (
    <View style={styles.PaymentStyle}>
      <View style={styles.paymentBox}>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 25, color: "#74858C" }}>Transaction</Text>
          {/* <Text style={styles.successStates}>Successfull</Text> */}
        </View>

        <View style={styles.paymentInfo}>
          <View style={styles.circleStyle}>
            <FontAwesome name="money" size={23} color="#fff" />
          </View>
          <View>
            <Text
              style={{
                fontSize: 22,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Tution Fee
            </Text>

            <Text style={{ color: "#eee", marginTop: 5 }}>
              10 April at 12:30 PM
            </Text>
          </View>
          <View style={{ flex: 1 }}></View>
          <View
            style={{
              marginRight: 4,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome name="rupee" size={23} color="#eee" />
            <Text
              style={{
                color: "#fff",
                fontSize: 22,
                fontWeight: "bold",
                marginLeft: 4,
              }}
            >
              33000
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentHistory;

const styles = StyleSheet.create({
  PaymentStyle: {
    width: "100%",
    display: "flex",

    marginTop: 30,
  },
  paymentBox: {
    width: "100%",
    height: 125,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 3,

    backgroundColor: "#00073d",
    shadowColor: "#74858C",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.41,
    shadowRadius: 3,
    elevation: 5,
    position: "relative",
    overflow: "hidden",
  },
  paymentInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  circleStyle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#45B8AC",
    display: "flex",
    alignItems: "center",

    justifyContent: "center",
    marginRight: 10,
    elevation: 5,
  },

});
