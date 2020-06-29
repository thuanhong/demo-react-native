import React from "react";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import AppTabNavigation from "../TabNavigationScreen/AppTabNavigation";
import ActivityLogScreen from "../ActivityLogScreen/ActivityLogScreen";
import Profile from "../Profile/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CustomDrawerContent from "./CustomDrawerContent";
import { Provider } from "mobx-react";
import store from "../Store";

const Drawer = createDrawerNavigator();

export const HeaderLeft = () => {
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

const MainPageDrawerNavigation = () => {
  return (
    <Provider store={store}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={AppTabNavigation}  />
        <Drawer.Screen name="Activity" component={ActivityLogScreen} />
        <Drawer.Screen
          name="Profile"
          component={Profile}
        />
      </Drawer.Navigator>
    </Provider>
  );
};

export default MainPageDrawerNavigation;
