import React from "react";
import AppTabNavigation from "./AppTabNavigation";
import ActivityLogScreen from "../screens/ActivityLogScreen";
import Profile from "../screens/ProfileScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "../components/CustomDrawerContent";
import { Provider } from "mobx-react";
import store from "../providers/Store";

const Drawer = createDrawerNavigator();

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
