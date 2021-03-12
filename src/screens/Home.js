import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  ScrollView
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Tweet from "../components/Tweet";
import Divider from "../components/Divider";
import FeatherIcon from "react-native-vector-icons/Feather";

function Home(props) {
  return (
    <View style={styles.rect}>
      <StatusBar hidden />
      <View style={styles.rect2Column}>
        <View style={styles.rect2}>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("DrawerPanel")}
              style={styles.button}
            >
              <Image
                source={require("../assets/images/IMG_20190324_163843_1.jpg")}
                resizeMode="cover"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.text}>Home</Text>
          </View>
          <View style={styles.buttonRowFiller}></View>
          <View style={styles.rect3}>
            <View style={styles.iconStack}>
              <MaterialCommunityIconsIcon
                name="star-four-points-outline"
                style={styles.icon}
              ></MaterialCommunityIconsIcon>
              <MaterialCommunityIconsIcon
                name="plus"
                style={styles.icon2}
              ></MaterialCommunityIconsIcon>
              <MaterialCommunityIconsIcon
                name="plus"
                style={styles.icon3}
              ></MaterialCommunityIconsIcon>
            </View>
          </View>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <Tweet
              Content=""
              CommentNumber="30"
              RetweetNumber="2K"
              LikeNumber="50K"
              Username=""
              style={styles.tweet}
            ></Tweet>
            <Divider style={styles.divider}></Divider>
            <Tweet
              Content="Designers love absolute. Developers love flex. And here I am, trying to marry them off.          Design <3 Code."
              CommentNumber="30"
              RetweetNumber="2K"
              LikeNumber="50K"
              Username=""
              style={styles.tweet2}
            ></Tweet>
            <Divider style={styles.divider2}></Divider>
            <Tweet
              Content="Designers love absolute. Developers love flex. And here I am, trying to marry them off.          Design <3 Code."
              CommentNumber="30"
              RetweetNumber="2K"
              LikeNumber="50K"
              Username=""
              style={styles.tweet3}
            ></Tweet>
            <Divider style={styles.divider3}></Divider>
            <View style={styles.tweet4Stack}>
              <Tweet
                Content=""
                CommentNumber="30"
                RetweetNumber="2K"
                LikeNumber="50K"
                Username=""
                style={styles.tweet4}
              ></Tweet>
              <View style={styles.rect4}>
                <View style={styles.rect5}>
                  <View style={styles.icon4Stack}>
                    <MaterialCommunityIconsIcon
                      name="plus"
                      style={styles.icon4}
                    ></MaterialCommunityIconsIcon>
                    <MaterialCommunityIconsIcon
                      name="feather"
                      style={styles.icon5}
                    ></MaterialCommunityIconsIcon>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.rect2ColumnFiller}></View>
      <View style={styles.rect6}>
        <View style={styles.rect7}>
          <MaterialCommunityIconsIcon
            name="home"
            style={styles.icon6}
          ></MaterialCommunityIconsIcon>
          <FeatherIcon name="search" style={styles.icon7}></FeatherIcon>
          <MaterialCommunityIconsIcon
            name="bell-outline"
            style={styles.icon8}
          ></MaterialCommunityIconsIcon>
          <FeatherIcon name="mail" style={styles.icon9}></FeatherIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "#141f2b"
  },
  rect2: {
    height: 84,
    backgroundColor: "#1c2a38",
    flexDirection: "row"
  },
  button: {
    width: 50,
    height: 50
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginLeft: 20,
    marginTop: 13
  },
  buttonRow: {
    height: 50,
    flexDirection: "row",
    marginLeft: 17,
    marginTop: 17
  },
  buttonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rect3: {
    width: 31,
    height: 28,
    marginRight: 18,
    marginTop: 28
  },
  icon: {
    top: 1,
    left: 6,
    position: "absolute",
    color: "#1da6fa",
    fontSize: 25
  },
  icon2: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "#1da6fa",
    fontSize: 10
  },
  icon3: {
    top: 17,
    left: 6,
    position: "absolute",
    color: "#1da6fa",
    fontSize: 8
  },
  iconStack: {
    width: 31,
    height: 28
  },
  scrollArea: {
    height: 644,
    backgroundColor: "rgba(20,31,40,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 644
  },
  tweet: {
    height: 148
  },
  divider: {
    height: 1,
    marginTop: 5
  },
  tweet2: {
    height: 114
  },
  divider2: {
    height: 1,
    marginTop: 10
  },
  tweet3: {
    height: 110
  },
  divider3: {
    height: 1,
    marginTop: 16
  },
  tweet4: {
    top: 0,
    left: 0,
    height: 149,
    position: "absolute",
    right: 0
  },
  rect4: {
    width: 80,
    height: 80,
    backgroundColor: "#1da6fa",
    position: "absolute",
    right: 20,
    bottom: 0,
    borderRadius: 100,
    justifyContent: "center"
  },
  rect5: {
    width: 50,
    height: 40,
    alignSelf: "center"
  },
  icon4: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  icon5: {
    top: 0,
    left: 10,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon4Stack: {
    width: 50,
    height: 44
  },
  tweet4Stack: {
    height: 212,
    marginTop: 2
  },
  rect2Column: {},
  rect2ColumnFiller: {
    flex: 1
  },
  rect6: {
    height: 84,
    backgroundColor: "#1c2a38"
  },
  rect7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1
  },
  icon6: {
    color: "#1da6fa",
    fontSize: 40
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon8: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon9: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  }
});

export default Home;
