import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Easing } from "react-native-reanimated";

const {
  Value,
  timing,
  interpolate,
  concat,
  cond,
  set,
  startClock,
  clockRunning,
  Clock,
  block,
  stopClock,
} = Animated;

export default function CircleLoading() {
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlag(!flag);
    }, 2800);
    return () => clearInterval(interval);
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {[1500, 1800, 2100, 2400, 2700].map((item) => (
        <CircleAnimated duration={item} />
      ))}
    </View>
  );
}

function runTiming(clock, value, dest, duration) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: duration,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ]);
}

const CircleAnimated = (props) => {
  const { duration } = props;

  let animation = runTiming(new Clock(), -90, 270, duration);

  return (
    <Animated.View
      style={[
        styles.squareContainer,
        {
          transform: [
            { rotate: concat(animation, "deg") },
            { translateX: 100 },
          ],
        },
      ]}
    >
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  squareContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    position: "absolute",
    borderRadius: 50,
    backgroundColor: "red",
    width: 20,
    height: 20,
  },
});
