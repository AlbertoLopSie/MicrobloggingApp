import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Divider from "../components/Divider";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import Tweet from "../components/Tweet";

function Profile(props) {
  return (
    <View style={styles.rect}>
      <StatusBar hidden />
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}>
          <View style={styles.imageStackStack}>
            <View style={styles.imageStack}>
              <ImageBackground
                source={require("../assets/images/lights.jpg")}
                resizeMode="cover"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
              >
                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={styles.button}
                  >
                    <MaterialIconsIcon
                      name="arrow-back"
                      style={styles.icon2}
                    ></MaterialIconsIcon>
                  </TouchableOpacity>
                  <EntypoIcon
                    name="dots-three-vertical"
                    style={styles.icon}
                  ></EntypoIcon>
                </View>
              </ImageBackground>
              <Image
                source={require("../assets/images/IMG_20190324_163843_1.jpg")}
                resizeMode="cover"
                style={styles.image2}
              ></Image>
            </View>
            <View style={styles.rect3}>
              <Text style={styles.text}>Edit profile</Text>
            </View>
          </View>
          <Text style={styles.text10}>Ankur Kedia</Text>
          <Text style={styles.text9}>@theankurkedia</Text>
          <Text style={styles.text8}>Software Engineer @BuilderXio</Text>
          <View style={styles.rect5Row}>
            <View style={styles.rect5}>
              <IoniconsIcon name="md-pin" style={styles.icon4}></IoniconsIcon>
              <Text style={styles.text3}>Bengaluru, India</Text>
            </View>
            <View style={styles.rect4}>
              <MaterialCommunityIconsIcon
                name="calendar-text"
                style={styles.icon3}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.text2}>Joined August 2011</Text>
            </View>
          </View>
          <View style={styles.rect7Row}>
            <View style={styles.rect7}>
              <Text style={styles.text6}>211</Text>
              <Text style={styles.text7}>Following</Text>
            </View>
            <View style={styles.rect6}>
              <Text style={styles.text4}>122</Text>
              <Text style={styles.text5}>Followers</Text>
            </View>
          </View>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.rect8}>
              <View style={styles.rect9}>
                <Text style={styles.text11}>Tweets</Text>
              </View>
              <View style={styles.rect10}>
                <Text style={styles.text12}>Tweets &amp; replies</Text>
              </View>
              <View style={styles.rect11}>
                <Text style={styles.text13}>Media</Text>
              </View>
              <View style={styles.rect12}>
                <Text style={styles.text14}>Likes</Text>
              </View>
              <Divider style={styles.divider}></Divider>
            </View>
            <View style={styles.rect13}>
              <View style={styles.image3Row}>
                <Image
                  source={require("../assets/images/IMG_20190324_163843_1.jpg")}
                  resizeMode="cover"
                  style={styles.image3}
                ></Image>
                <View style={styles.text15RowColumn}>
                  <View style={styles.text15Row}>
                    <Text style={styles.text15}>Ankur Kedia</Text>
                    <Text style={styles.text16}>@theankurkedia</Text>
                  </View>
                  <Text style={styles.text18}>
                    Incredible story{"\n"}Incredible writing{"\n"}Incredible
                    animatio{"\n"}Incredible video{"\n"}
                    {"\n"}The egg{"\n"}youtu.be/h6fcK_fRYal....
                  </Text>
                </View>
                <Text style={styles.text17}>• 15 Jul</Text>
                <IoniconsIcon
                  name="ios-arrow-down"
                  style={styles.icon5}
                ></IoniconsIcon>
              </View>
              <View style={styles.rect14}>
                <EvilIconsIcon
                  name="comment"
                  style={styles.icon6}
                ></EvilIconsIcon>
                <EvilIconsIcon
                  name="retweet"
                  style={styles.icon7}
                ></EvilIconsIcon>
                <EvilIconsIcon
                  name="heart"
                  style={styles.icon8}
                ></EvilIconsIcon>
                <EvilIconsIcon
                  name="share-google"
                  style={styles.icon9}
                ></EvilIconsIcon>
                <IoniconsIcon
                  name="ios-stats"
                  style={styles.icon10}
                ></IoniconsIcon>
              </View>
            </View>
            <Divider style={styles.divider2}></Divider>
            <Tweet style={styles.tweet2}></Tweet>
            <Divider style={styles.divider3}></Divider>
            <Tweet style={styles.tweet}></Tweet>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1
  },
  rect2: {
    top: 0,
    left: 0,
    backgroundColor: "#1c2a38",
    position: "absolute",
    right: 0,
    bottom: 377
  },
  image: {
    top: 0,
    left: 0,
    height: 132,
    position: "absolute",
    right: 0,
    flexDirection: "row"
  },
  image_imageStyle: {},
  button: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(28,42,56,0.8)",
    opacity: 0.76,
    borderRadius: 100,
    justifyContent: "center"
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    height: 28,
    width: 25,
    marginLeft: 264,
    marginTop: 5
  },
  buttonRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 24,
    marginLeft: 22,
    marginTop: 25
  },
  image2: {
    top: 91,
    left: 12,
    width: 90,
    height: 90,
    position: "absolute",
    borderRadius: 100,
    borderColor: "#1c2a38",
    borderWidth: 5
  },
  imageStack: {
    top: 0,
    left: 0,
    height: 181,
    position: "absolute",
    right: 0
  },
  rect3: {
    top: 141,
    left: 254,
    width: 100,
    height: 30,
    position: "absolute",
    borderRadius: 100,
    borderColor: "#8596a3",
    borderWidth: 1,
    justifyContent: "center"
  },
  text: {
    color: "#8596a3",
    fontSize: 14,
    lineHeight: 20,
    alignSelf: "center"
  },
  imageStackStack: {
    height: 181
  },
  text10: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    lineHeight: 20,
    marginTop: 5,
    marginLeft: 20
  },
  text9: {
    color: "#798894",
    fontSize: 18,
    lineHeight: 20,
    marginTop: 11,
    marginLeft: 21
  },
  text8: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    lineHeight: 20,
    marginTop: 11,
    marginLeft: 21
  },
  rect5: {
    width: 134,
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  icon4: {
    color: "#798894",
    fontSize: 15
  },
  text3: {
    color: "#798894",
    fontSize: 16,
    lineHeight: 20
  },
  rect4: {
    width: 163,
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 12
  },
  icon3: {
    color: "#798894",
    fontSize: 15
  },
  text2: {
    color: "#798894",
    fontSize: 16,
    lineHeight: 20
  },
  rect5Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 22,
    marginRight: 44
  },
  rect7: {
    width: 92,
    height: 21,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "flex-end"
  },
  text6: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    lineHeight: 20
  },
  text7: {
    color: "#798894",
    fontSize: 14,
    lineHeight: 20
  },
  rect6: {
    width: 92,
    height: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 11
  },
  text4: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    lineHeight: 20
  },
  text5: {
    color: "#798894",
    fontSize: 14,
    lineHeight: 20
  },
  rect7Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 97,
    marginLeft: 21,
    marginRight: 159
  },
  scrollArea: {
    top: 340,
    left: 0,
    backgroundColor: "#151f2b",
    position: "absolute",
    right: 0,
    bottom: 0
  },
  scrollArea_contentContainerStyle: {
    height: 529
  },
  rect8: {
    height: 51,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  rect9: {
    flex: 0.21,
    borderColor: "#1da1f2",
    borderWidth: 0,
    borderBottomWidth: 4
  },
  text11: {
    color: "#1da1f2",
    fontSize: 18,
    lineHeight: 20,
    marginTop: 15,
    alignSelf: "center"
  },
  rect10: {
    flex: 0.46
  },
  text12: {
    color: "#8494a1",
    fontSize: 18,
    lineHeight: 20,
    marginTop: 14,
    marginLeft: 12
  },
  rect11: {
    flex: 0.15,
    justifyContent: "center"
  },
  text13: {
    color: "#8494a1",
    fontSize: 18,
    lineHeight: 20,
    alignSelf: "center"
  },
  rect12: {
    flex: 0.16,
    justifyContent: "center"
  },
  text14: {
    color: "#8494a1",
    fontSize: 18,
    lineHeight: 20,
    alignSelf: "center"
  },
  divider: {
    top: 50,
    left: 0,
    height: 1,
    position: "absolute",
    right: 0
  },
  rect13: {
    width: 337,
    height: 153,
    marginTop: 10,
    marginLeft: 12
  },
  image3: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderColor: "#1c2a38",
    borderWidth: 0,
    marginTop: 2
  },
  text15: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    lineHeight: 20
  },
  text16: {
    color: "#798894",
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 4
  },
  text15Row: {
    height: 20,
    flexDirection: "row"
  },
  text18: {
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    lineHeight: 15,
    marginTop: 2
  },
  text15RowColumn: {
    width: 200,
    marginLeft: 8
  },
  text17: {
    color: "#798894",
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 3
  },
  icon5: {
    color: "#798894",
    fontSize: 20,
    marginLeft: 4,
    marginTop: 2
  },
  image3Row: {
    height: 127,
    flexDirection: "row"
  },
  rect14: {
    width: 258,
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginLeft: 68
  },
  icon6: {
    color: "#8394a1",
    fontSize: 20
  },
  icon7: {
    color: "#8394a1",
    fontSize: 20
  },
  icon8: {
    color: "#8394a1",
    fontSize: 20
  },
  icon9: {
    color: "#8394a1",
    fontSize: 20
  },
  icon10: {
    color: "#8394a1",
    fontSize: 20
  },
  divider2: {
    height: 1,
    marginTop: 8
  },
  tweet2: {
    width: 360,
    height: 149,
    marginTop: 1
  },
  divider3: {
    height: 1,
    marginTop: 5
  },
  tweet: {
    width: 360,
    height: 149,
    marginTop: 1
  },
  rect2Stack: {
    flex: 1
  }
});

export default Profile;
