import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Easing } from "react-native-reanimated";

const { Value, timing, interpolate, concat } = Animated;

export default function Rotate() {
  let rotate = new Value(0);

  const runAni = () => {
    timing(rotate, {
      duration: 4000,
      toValue: 1800,
      easing: Easing.inOut(Easing.ease),
    }).start(() => runAni1());
  };
  const runAni1 = () => {
    timing(rotate, {
      duration: 4000,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    }).start(() => runAni());
  };

  useEffect(() => {
    runAni();
  }, []);

  const animation = interpolate(rotate, {
    inputRange: [0, 1800],
    outputRange: [0.6, 1.5],
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={[
          styles.squareContainer,
          {
            transform: [
              { rotate: concat(rotate, "deg") },
              { scale: animation },
            ],
          },
        ]}
      >
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <View style={[styles.square, { backgroundColor: "#A8D0D8" }]} />
          <View style={[styles.square, { backgroundColor: "#EEE19A" }]} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={[styles.square, { backgroundColor: "#C9B9E4" }]} />
          <View style={[styles.square, { backgroundColor: "#F5D3D3" }]} />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  squareContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flex: 1,
  },
  square: {
    borderRadius: 10,
    margin: 5,
    width: 70,
    height: 70,
  },
});
