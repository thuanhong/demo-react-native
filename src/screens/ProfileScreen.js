import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import Animated from "react-native-reanimated";
import HeaderLeft from '../components/HeaderLeft'


const HEIGHT_SCREEN = Dimensions.get("window").height;

const { Value, interpolate, event, add, multiply } = Animated;

const  Profile = () => {
  let coordianateY = new Value(0);
  onScrollHandler = event([
    {
      nativeEvent: { contentOffset: { y: coordianateY } },
    },
  ]);

  const headerOpacity1 = interpolate(coordianateY, {
    inputRange: [0, HEIGHT_SCREEN / 4],
    outputRange: [0, 1],
  });

  const headerOpacity2 = interpolate(coordianateY, {
    inputRange: [0, HEIGHT_SCREEN / 4],
    outputRange: [1, 0],
  });

  const imgTranslateX = interpolate(coordianateY, {
    inputRange: [0, HEIGHT_SCREEN / 3],
    outputRange: [0, multiply(HEIGHT_SCREEN / 3, -1)],
    extrapolate: "clamp",
  });

  return (
    <View>
      <Animated.View
        style={[
          styles.header,
          {
            opacity: headerOpacity1,
            backgroundColor: "rgba(41,115,232,1)",
          },
        ]}
      >
        <HeaderLeft/>
        <Text style={styles.text}>Your Profile</Text>
        <View style={{ flex: 1 }}></View>
      </Animated.View>
      <Animated.View
        style={[
          styles.header,
          {
            opacity: headerOpacity2,
          },
        ]}
      >
        
        <HeaderLeft/>
        <Text
          style={[
            styles.text,
            {
              color: "white",
            },
          ]}
        >
          Your Profile
        </Text>
        <View style={{ flex: 1 }}></View>
      </Animated.View>
      <Animated.Image
        source={{uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}}
        style={[
          styles.bigImg,
          {
            transform: [{ translateY: imgTranslateX }],
            opacity: headerOpacity2,
            height: add(HEIGHT_SCREEN / 3, imgTranslateX),
          },
        ]}
      />
      <Animated.ScrollView
        onScroll={onScrollHandler}
        scrollEventThrottle={1}
        style={{
          paddingTop: add(HEIGHT_SCREEN / 3, imgTranslateX)
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item) => (
          <View key={item} style={styles.item}>
            <Text style={{fontSize: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    flexDirection: "row",
    position: "absolute",
    zIndex: 99,
    width: "100%",
  },
  btn: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "black",
    padding: 10,
    flex: 1,
  },
  img: {
    width: "100%",
    height: 250,
    marginBottom: 30,
    borderRadius: 10,
  },
  bigImg: {
    width: "100%",
    resizeMode: "cover",
    position: 'absolute'
  },
  item: {
    padding: 30,
    borderBottomWidth: 1,
  }
});

export default Profile;