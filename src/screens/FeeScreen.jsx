import { StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";
import Totalfee from "../component/Totalfee";
import CourseFee from "../component/CourseFee";
import FirstSemFee from "../component/FirstSemFee";
const FeeScreen = () => {
   const firstSemFee =[
      {
     id:'1',
     title: "first semester fee ",
     tutionFee: "16500",
     examFee: "2500",
     registrationFee: "5000",
     totalFee: "24000",
   },
     
  ];
  return (
    <ScrollView>
      <View style={styles.FeeScreenContainer}>
        <Totalfee />
        <CourseFee />
        <FirstSemFee firstSemFee={firstSemFee} />
      </View>
    </ScrollView>
  );
};

export default FeeScreen;

const styles = StyleSheet.create({
  FeeScreenContainer: {
    paddingHorizontal: 20,
    paddingVertical:20,
   
    flex:1,
    backgroundColor:"#fff",

   
  },
});
