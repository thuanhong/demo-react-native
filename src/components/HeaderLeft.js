import React from "react";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <MaterialCommunityIcons.Button
      name="menu"
      size={25}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      backgroundColor="transparent"
      color="#5F6870"
    />
  );
};

export default HeaderLeft;
