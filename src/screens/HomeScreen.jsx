import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const data = [
    {
      color: "#4b0082",
      name: "Home",
      icon: "home",
    },
    {
      color: "red",
      name: "Profile",
      icon: "person",
    },
    {
      color: "#800000",
      name: "Fee",
      icon: "basket",
    },
    {
      color: "#800000",
      name: "Payment",
      icon: "basket",
    },
    {
      color: "crimson",
      name: "Notification",
      icon: "notifications",
    },
    {
      color: "#4b0082",
      name: "Query",
      icon: "help",
    },
    {
      color: "#6b8e23",
      name: "Time Table",
      icon: "time-outline",
    },
    {
      color: "deeppink",
      name: "Event",
      icon: "flower-outline",
    },
    {
      color: "royalblue",
      name: "Transport",
      icon: "md-bus",
    },
    {
      color: "royalblue",
      name: "Library",
      icon: "book",
    },
    {
      color: "palevioletred",
      name: "Hostel",
      icon: "business",
    },
    {
      color: "mediumaquamarine",
      name: "Result",
      icon: "bulb-outline",
    },
  ];

 
  return (
    <View style={styles.topContainer}>
      <View style={styles.circleStyle}></View>
      <FlatList
        keyExtractor={(item) => item.name}
        style={styles.flatContainer}
        data={data}
        numColumns="3"
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
            <View
              style={[styles.homeContainer,{backgroundColor:item.color}]}
            >
              <Ionicons name={item.icon} size={35} style={{ color: "#fff" }} />
              <Text
              

                style={styles.iocnText}
              >
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: "#fff",
    flex: 1,
  },
  homeContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,

    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: "#ddd",
  },
  iocnText: {
    color: "#fff",
    fontWeight: "bold",
    color: "#f1f1f1",
  },
  circleStyle: {
    width: 510,
    height: 510,
    backgroundColor: "#f5c32c",
    position: "absolute",
    bottom: "-30%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 500,
  },
});
