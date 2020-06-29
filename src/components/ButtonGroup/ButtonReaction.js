import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, Dimensions, Image } from "react-native";
import { Transitioning, Transition, Easing } from "react-native-reanimated";
import {
  TapGestureHandler,
  LongPressGestureHandler,
  State,
} from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import { inject, observer } from "mobx-react";

const width = Dimensions.get("window").width * 0.9;

const ButtonReaction = (props) => {
  const { updateLog, removeSpecifyLogItem } = props.store;
  const {item} = props;

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

  const ref = useRef();

  const [shown, setShown] = useState(false);

  return (
    <Transitioning.View
      //   style={styles.btnStyle}
      ref={ref}
      transition={transition}
    >
      {/* <TapGestureHandler
          onHandlerStateChange={() => {
            ref.current.animateNextTransition();
            setShown((prev) => !prev);
          }}
        >
          <View
            style={[
              styles.btnIcon,
              { transform: [{ rotate: shown ? "0deg" : "180deg" }] },
            ]}
          >
            <Text style={styles.btnText}>^</Text>
          </View>
        </TapGestureHandler> */}

      {/* <TouchableWithoutFeedback
        onPress={() => {
          if (likeStatus) {
            removeSpecifyLogItem(item.id);
          } else {
            updateLog({
              id: item.id,
              title: item.title,
              sub_title: item.sub_title,
              status: "likes",
            });
          }
          setLikeStatus(!likeStatus);
        }}
      > */}

      {/* </TouchableWithoutFeedback> */}
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
      >
        <TapGestureHandler
          onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.ACTIVE) {
              if (likeStatus) {
                removeSpecifyLogItem(item.id);
              } else {
                updateLog({
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
      </LongPressGestureHandler>
      {shown && (
        <View style={styles.reactionBar}>
          <Image
            style={styles.reactitonImg}
            source={require("../../../assets/react1.png")}
          />
          <Image
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
          />
        </View>
      )}
    </Transitioning.View>
  );
};

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
});

export default inject("store")(observer(ButtonReaction));
