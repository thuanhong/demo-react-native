import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen/HomeScreen';
import SettingScreen from './SettingScreen/SettingScreen';
import {HeaderLeft} from '../DrawerScreen/MainPageDrawerNavigation';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const AppTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            [iconName, color] = focused
              ? ['home', '#2173F7']
              : ['home-outline', '#5F6870'];
          } else if (route.name === 'Settings') {
            [iconName, color] = focused
              ? ['movie', '#2173F7']
              : ['movie-outline', '#5F6870'];
          }
          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={25} color={color} />
          );
        },
      })}
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const StackAppTabNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Home Screen',
        headerLeft: () => <HeaderLeft/>
      }}
    >
      <Stack.Screen name="StackTab" component={AppTabNavigation} />
    </Stack.Navigator>
  );
}

export default StackAppTabNavigation;
