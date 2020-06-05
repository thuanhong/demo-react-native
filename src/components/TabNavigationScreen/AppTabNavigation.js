import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen/HomeScreen';
import SettingScreen from './SettingScreen/SettingScreen';

const Tab = createMaterialTopTabNavigator();

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

export default AppTabNavigation;
