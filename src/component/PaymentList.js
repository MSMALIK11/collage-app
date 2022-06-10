import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PaymentHistory from "./PaymentHistory";
const PaymentList = () => {
  return (
    <View>
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
