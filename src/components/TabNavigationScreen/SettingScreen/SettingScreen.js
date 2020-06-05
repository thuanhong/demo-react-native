import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text} from 'react-native';

const SettingScreen = () => {
  return (
    <View>
      <Text>Setting</Text>
      <MaterialCommunityIcons name={'home'} size={20} color={'#215e8d'} />
    </View>
  );
};

export default SettingScreen;
