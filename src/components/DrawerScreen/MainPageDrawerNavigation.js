import React from 'react';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import AppTabNavigation from '../TabNavigationScreen/AppTabNavigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawerContent from './CustomDrawerContent';

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
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={AppTabNavigation} />
    </Drawer.Navigator>
  );
};

export default MainPageDrawerNavigation;
