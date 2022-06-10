import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import PaymentOption from "../component/PaymentOption";
import PaymentHistory from "../component/PaymentHistory";
import TopRoundedShape from "../component/shape/TopRoundedShape";
const PaymentScreen = () => {
  return (
    <>
      <TopRoundedShape />
      <ScrollView>
        <View style={styles.paymentScreenContainer}>
          <PaymentOption />
          <PaymentHistory />
          <PaymentHistory />
          <PaymentHistory />
          <PaymentHistory />
        </View>
      </ScrollView>
    </>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  paymentScreenContainer: {
    paddingHorizontal: 20,
    backgroundColor:'#fff'
  },
});
