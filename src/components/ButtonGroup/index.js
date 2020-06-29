import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonReaction from "./ButtonReaction";

const ButtonGroup = (props) => {
  const navigation = useNavigation();
  const { item } = props;

  return (
    <View style={styles.cardBtn}>
      <ButtonReaction item={item} />
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("Comment", {
            comment: item.comment,
            item: {
              id: item.id,
              title: item.title,
              sub_title: item.sub_title,
              status: "commented",
            },
          })
        }
      >
        <View style={styles.btnStyle}>
          <MaterialCommunityIcons
            name="comment-outline"
            size={22}
            color="#5F6870"
          />
          <Text style={styles.textBtn}>Comment</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.btnStyle}>
          <MaterialCommunityIcons name="share" size={22} color="#5F6870" />
          <Text style={styles.textBtn}>Share</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    color: "#c8d1da",
    position: 'relative'
  },
  textBtn: {
    fontSize: 20,
    marginLeft: 5,
    color: "#5F6870",
  },
  btnStyle: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    padding: 15,
    color: "#5F6870",
  },
});

export default ButtonGroup;
