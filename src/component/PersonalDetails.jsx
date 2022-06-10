import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PersonalDetails = () => {
  const data = {
    Enrollment_no: "GU19R0786",
    Student_name: "John Smith",
    Gender: "Male",
    Father: "Mr. Adam",
    Date_of_birth: "2000-02-16",
    Address: "New York",
    Home_address: "New York",
    State: "Rhode Island",
    Zip_pin_code: "247121",
    Country: "America",
    Mobile_no: "7344587346",
    Home_no: "7344587346",
    Email: "john@gmail.com",
    Category: "NA",
    Registration_date: "2019-7-03",
    School_name: "School of Technology",
    Course_name: "BCA",
  };

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Enrollment No</Text>
        <Text style={styles.detailSubheading}>{data.Enrollment_no}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Student Name</Text>
        <Text style={styles.detailSubheading}>{data.Student_name}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Gender</Text>
        <Text style={styles.detailSubheading}>{data.Gender}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Father</Text>
        <Text style={styles.detailSubheading}>{data.Father}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Date of Birth</Text>
        <Text style={styles.detailSubheading}>{data.Date_of_birth}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Address</Text>
        <Text style={styles.detailSubheading}>{data.Address}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Home Address</Text>
        <Text style={styles.detailSubheading}>{data.Home_address}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>State</Text>
        <Text style={styles.detailSubheading}>{data.State}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Zip/Pin Code</Text>
        <Text style={styles.detailSubheading}>{data.Zip_pin_code}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Country</Text>
        <Text style={styles.detailSubheading}>{data.Country}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Mobile No.</Text>
        <Text style={styles.detailSubheading}>{data.Mobile_no}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Home No.</Text>
        <Text style={styles.detailSubheading}>{data.Home_no}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Email Address</Text>
        <Text style={styles.detailSubheading}>{data.Email}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Category</Text>
        <Text style={styles.detailSubheading}>{data.Category}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Registration Date</Text>
        <Text style={styles.detailSubheading}>{data.Registration_date}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>School Name</Text>
        <Text style={styles.detailSubheading}>{data.School_name}</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.detailHeading}>Course Name</Text>
        <Text style={styles.detailSubheading}>{data.Course_name}</Text>
      </View>
    </View>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    marginTop: 20,
    backgroundColor: "#00073d",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: "auto",
    marginBottom: 20,
    elevation:5,
  },
  detailsBox: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#7d7d7d",
  },
  detailHeading: {
    fontSize: 18,
    color: "#7d7d7d",
  },
  detailSubheading: {
    fontSize: 23,
    fontStyle: "italic",
    fontWeight: "bold",
    letterSpacing: 1.4,
    color: "#fff",
  },
});
