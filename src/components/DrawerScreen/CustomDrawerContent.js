import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, Button} from 'react-native';
import {AuthContext} from '../../App';

const CustomDrawerContent = props => {
  const {signOut} = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <Image
        style={{resizeMode: 'stretch', width: '100%', height: 200}}
        source={require('../../../assets/drawer.jpg')}
      />
      <DrawerItemList {...props} />
      <Button title="Logout" onPress={signOut} />
    </DrawerContentScrollView>
  );
};
export default CustomDrawerContent;
