import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { FontAwesome5 } from "@expo/vector-icons";

const Totalfee = () => {
  const data = [
    {
      title: "total fees",
      amount: "156000",
      icon: "money-bill-alt",
      color: "crimson",
    },
    {
      title: "due fees",
      amount: "60000",
      icon: "money-bill-alt",
      color:'indigo'
    },
  ];
  return (
    <View style={styles.totalFeeContainer}>
     <FlatList
     data={data}
     keyExtractor={(fee)=> fee.title }
     renderItem={({item})=>(
<View style={styles.feeBox}>
        <View style={[styles.iconBox,{backgroundColor:item.color}]}>
       
          <FontAwesome5 name={item.icon} size={50} color="#fff" />
        </View>
        <View style={{ marginLeft: 50 }}>
          <Text style={styles.mainHeading}>{item.title}</Text>
          <Text style={styles.subHeading}>{item.amount}</Text>
        </View>
      </View>
     )}
     />
    
     
     

     
    </View>
  );
}

export default Totalfee

const styles = StyleSheet.create({
  totalFeeContainer: {},
  feeBox: {
    display: "flex",
    flexDirection: "row",

    alignItems: "center",

    width: "95%",
    height: 100,

    marginVertical: 5,
    backgroundColor: "#00073d",
    shadowColor: "#74858C",

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  iconBox: {
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
  },
  mainHeading: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 5,
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#eee",
    fontSize: 17,
  },
});