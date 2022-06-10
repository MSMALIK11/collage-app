import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

const AvatarContainer = styled.View`
  margin-top: 10%;
`;
const AvatarWraper = styled.View`
  background:#00073d;
  width: 100%;
  height:170px
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  position: relative;
 shadow-color:#74858C;
  shadow-offset: {width: 0, height: 3};
  shadow-opacity: 0.41;
  shadow-radius: 4;
border-radius:10px;
  elevation: 10;


  
`;
const Avatar = styled.View`
  width: 100px;
  height: 100px;

  background: #fdc50f;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border: 5px solid #fff;
  position: absolute;
  top: -40px;
`;

const Name = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-top: 80px;
  color: #eee;
`;

const ProfileAvatar = () => {
  return (
    <AvatarContainer>
      <AvatarWraper>
        <Avatar>
          <Ionicons name="person" size={50} />
        </Avatar>
        <Name>John Smith</Name>

        <View style={styles.infoStyle}>
          <View>
            <Text style={styles.textStyle}>Course : BCA</Text>
          </View>
          <View>
            <Text style={styles.textStyle}>Reg No. : Gu19R0454</Text>
          </View>
        </View>
      </AvatarWraper>
    </AvatarContainer>
  );
};

const styles = StyleSheet.create({
  infoStyle: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    width: "100%",
    marginBottom:10,

    justifyContent: "space-around",
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#eee",
  },
  blurStyle: {
    height: 200,
    display: "flex",
    alignItems: "center",
  },
});

export default ProfileAvatar;
