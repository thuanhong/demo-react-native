import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Animated, { Transitioning, Transition } from "react-native-reanimated";
import {
  TapGestureHandler,
  LongPressGestureHandler,
  State,
} from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import { observer } from "mobx-react-lite";
import {useStores} from '../../hooks/useStores';

const width = Dimensions.get("window").width * 0.9;

const {
  Value,
  interpolate,
  timing,
  and,
  greaterOrEq,
  lessOrEq,
  add,
  cond,
  event,
  set,
  sub,
  debug
} = Animated;

const ButtonReaction = observer((props) => {
  // const { updateLog, removeSpecifyLogItem } = props.store;
  const { activityStore } = useStores();
  const { item } = props;

  const [likeStatus, setLikeStatus] = useState(false);
  const transition = (
    <Transition.Sequence>
      <Transition.Change interpolation="easeInOut" propagation="bottom" />
      <Transition.In
        type="fade"
        propagation="bottom"
        durationMs={300}
        interpolation="easeIn"
      />
      <Transition.Out
        type="fade"
        propagation="bottom"
        durationMs={200}
        interpolation="easeOut"
      />
    </Transition.Sequence>
  );
  const scale1 = new Value(0);
  // const scale2 = new Value(0);
  // const scale3 = new Value(0);
  // const scale4 = new Value(0);
  // const scale5 = new Value(0);
  // const scale6 = new Value(0);

  const runAni = () => {
    timing(scale1, {
      duration: 800,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    }).start();
  };

  const animation = interpolate(scale1, {
    inputRange: [0, 1],
    outputRange: [1, 1.3],
  });

  let imgX = 0;
  let imgY = 0;
  let imgWidth = 0;
  let imgHeight = 0;

  const pressX = new Value(0);
  const pressY = new Value(0);

  const ref = useRef();

  const [shown, setShown] = useState(false);

  const temp1 = new Value(1)

  // const onGestureEvent = event([
  //   {
  //     nativeEvent: {
  //       translationX: pressX,
  //       translationY: pressY,
  //     },
  //   },
  // ]);

  return (
    <Transitioning.View ref={ref} transition={transition}>
      <LongPressGestureHandler
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.ACTIVE) {
            ref.current.animateNextTransition();
            setShown((prev) => !prev);
          } else if (nativeEvent.state === State.END) {
            ref.current.animateNextTransition();
            setShown((prev) => !prev);
          }
        }}
        minDurationMs={800}
        //   onGestureEvent={({ nativeEvent }) => {
        //     // console.log({imgX, imgY, imgWidth, imgHeight})
        //     // console.log(nativeEvent)
        //     // console.log(nativeEvent)
        //   // let a = {"absoluteX": 62.5, "absoluteY": 506, "handlerTag": 6, "numberOfPointers": 1, "state": 4, "target": 137, "x": 50.5, "y": -20};
        //     if (nativeEvent["x"] >= imgX && nativeEvent['y'] >= imgY - 63 &&
        //     nativeEvent["x"] <= imgX + imgWidth && nativeEvent["y"] <= imgY - 63 + imgHeight) {
        //           console.log("asdasdasda")
        //         }

        // }}
        onGestureEvent={({ nativeEvent }) => {

          console.log({imgX, imgY, imgWidth, imgHeight})
          console.log(nativeEvent['x'], nativeEvent['y'])
          set(pressX, nativeEvent['x'])
          set(pressY, nativeEvent['y'])
          set(temp1, cond(greaterOrEq(pressY, pressX), 2, 1))
        }}
      >
        <View>
          <TapGestureHandler
            onHandlerStateChange={({ nativeEvent }) => {
              if (nativeEvent.state === State.ACTIVE) {
                if (likeStatus) {
                  activityStore.removeSpecifyLogItem(item.id);
                } else {
                  activityStore.updateLog({
                    id: item.id,
                    title: item.title,
                    sub_title: item.sub_title,
                    status: "likes",
                  });
                }
                setLikeStatus(!likeStatus);
              }
            }}
          >
            <View style={styles.btnStyle}>
              <AntDesign
                name="like2"
                size={22}
                color={likeStatus ? "#2173F7" : "#5F6870"}
              />
              <Text
                style={[
                  styles.textBtn,
                  likeStatus ? styles.active : styles.inactive,
                ]}
              >
                Like
              </Text>
            </View>
          </TapGestureHandler>
          {shown && (
            <View style={styles.reactionBar}>
              <Animated.Image
                onLayout={({
                  nativeEvent: {
                    layout: { x, y, width, height },
                  },
                }) => {
                  imgX = x;
                  imgY = y;
                  imgWidth = width;
                  imgHeight = height;
                }}
                style={[
                  styles.reactitonImg,
                  {
                    transform: [
                      {
                        scale: temp1
                      },
                    ],
                  },
                ]}
                source={require("../../../assets/react1.png")}
              />
              {/* <Image
                  style={styles.reactitonImg}
                  source={require("../../../assets/react2.png")}
                />
                <Image
                  style={styles.reactitonImg}
                  source={require("../../../assets/react3.png")}
                />
                <Image
                  style={styles.reactitonImg}
                  source={require("../../../assets/react4.png")}
                />
                <Image
                  style={styles.reactitonImg}
                  source={require("../../../assets/react5.png")}
                />
                <Image
                  style={styles.reactitonImg}
                  source={require("../../../assets/react6.png")}
                /> */}
            </View>
          )}
        </View>
      </LongPressGestureHandler>
    </Transitioning.View>
  );
});

const styles = StyleSheet.create({
  btnStyle: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    padding: 15,
    color: "#5F6870",
  },
  active: {
    color: "#2173F7",
  },
  inactive: {
    color: "#5F6870",
  },
  reactionBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    width: width,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 13,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    bottom: 50,
  },
  reactitonImg: {
    width: 50,
    height: 50,
  },
  textBtn: {
    fontSize: 20,
    marginLeft: 5,
    color: "#5F6870",
  },
});

export default ButtonReaction;
