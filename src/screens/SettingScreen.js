import React from 'react';
import {View, Text, Button, Platform, Alert} from 'react-native';
import AlertMessage from 'react-native-alert-message';

const SettingScreen = () => {
  return (
    <View>
      <Text>Setting</Text>
      <Button title={'Click'} onPress={() => AlertMessage.ShowMessage('THIS is ios', 5)}></Button>
    </View>
  );
};

export default SettingScreen;
