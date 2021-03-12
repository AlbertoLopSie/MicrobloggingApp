import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Divider from "../components/Divider";

function Signup(props) {
  return (
    <View style={styles.rect}>
      <StatusBar hidden />
      <View style={styles.icon2RowColumn}>
        <View style={styles.icon2Row}>
          <MaterialIconsIcon
            name="arrow-back"
            style={styles.icon2}
          ></MaterialIconsIcon>
          <MaterialCommunityIconsIcon
            name="twitter"
            style={styles.icon}
          ></MaterialCommunityIconsIcon>
        </View>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#788793"
          style={styles.textInput}
        ></TextInput>
        <Text style={styles.text2}>50</Text>
        <Text style={styles.text4}>Create your account</Text>
      </View>
      <View style={styles.icon2RowColumnFiller}></View>
      <View style={styles.textInput2Column}>
        <TextInput
          placeholder="Phone number or email address"
          placeholderTextColor="rgba(120,135,147,1)"
          secureTextEntry={true}
          style={styles.textInput2}
        ></TextInput>
        <View style={styles.rect2}>
          <Divider style={styles.divider}></Divider>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
            style={styles.button}
          >
            <Text style={styles.text3}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "#141f28"
  },
  icon2: {
    color: "#1da1f2",
    fontSize: 35
  },
  icon: {
    color: "rgba(29,161,242,1)",
    fontSize: 40,
    marginLeft: 113
  },
  icon2Row: {
    height: 44,
    flexDirection: "row",
    marginRight: 132
  },
  textInput: {
    width: 312,
    height: 42,
    color: "#1da1f2",
    borderColor: "#1da1f2",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginTop: 207,
    marginLeft: 6
  },
  text2: {
    color: "#757575",
    fontSize: 18,
    lineHeight: 20,
    alignSelf: "flex-end",
    marginTop: 17
  },
  text4: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    lineHeight: 50,
    marginTop: -230
  },
  icon2RowColumn: {
    marginTop: 29,
    marginLeft: 24,
    marginRight: 31
  },
  icon2RowColumnFiller: {
    flex: 1
  },
  textInput2: {
    width: 313,
    height: 42,
    color: "#1da1f2",
    borderColor: "rgba(123,139,151,1)",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 282,
    marginLeft: 30
  },
  rect2: {
    height: 71
  },
  divider: {
    width: 360,
    height: 1
  },
  button: {
    width: 109,
    height: 50,
    backgroundColor: "#1da1f2",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 13,
    marginLeft: 240
  },
  text3: {
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 20,
    alignSelf: "center"
  },
  textInput2Column: {
    marginBottom: 29
  }
});

export default Signup;
