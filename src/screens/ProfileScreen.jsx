import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import ProfileAvatar from "../component/ProfileAvatar";
import PersonalDetails from "../component/PersonalDetails";
import TopRoundedShape from "../component/shape/TopRoundedShape";

const ProfileScreen = () => {
  return (
    <>
      <TopRoundedShape />
      <ScrollView>
        <View style={styles.profileContainer}>
          <ProfileAvatar />
          <PersonalDetails />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    position: "relative",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
});

export default ProfileScreen;
