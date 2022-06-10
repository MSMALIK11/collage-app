import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FirstSemFee = ({ firstSemFee }) => {
  return (
    <View>
      <Text style={styles.mainHeading}>First Samester Fee </Text>
      <FlatList
        data={firstSemFee}
        keyExtractor={(item) => item.id}
        horizontal
     showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.feeContainer}>
            <View style={styles.feeBox}>
              <View style={styles.feeCircle}>
                <Text style={styles.subHeading}>{item.tutionFee}</Text>
              </View>
              <Text style={styles.heading}>Tution fee</Text>
            </View>
            <View style={styles.feeBox}>
              <View style={styles.feeCircle}>
                <Text style={styles.subHeading}>{item.examFee}</Text>
              </View>
              <Text style={styles.heading}>exam  fee</Text>
            </View>
            <View style={styles.feeBox}>
              <View style={styles.feeCircle}>
                <Text style={styles.subHeading}>{item.registrationFee}</Text>
              </View>
              <Text style={styles.heading}>reg. fee</Text>
            </View>
            <View style={styles.feeBox}>
              <View style={styles.feeCircle}>
                <Text style={styles.subHeading}>{item.totalFee}</Text>
              </View>
              <Text style={styles.heading}>Total fee</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default FirstSemFee

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 30,
    marginVertical: 20,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 2,
    textTransform: "capitalize",
  },

  feeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  feeBox: {
    backgroundColor: "papayawhip",
    width: 120,
    paddingVertical: 20,
    marginHorizontal: 10,
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    elevation:10
  },
  heading: {
    fontSize: 20,
    textTransform:'capitalize'
  },

  feeCircle: {
    backgroundColor: "#00037d",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 80,
    marginVertical:10,
elevation:7
  },
  subHeading:{
      fontSize:19,
      color:'#fff'
  }
});