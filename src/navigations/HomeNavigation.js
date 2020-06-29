import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewFeedScreen from '../screens/NewFeedScreen';
import CommentScreen from '../screens/CommentScreen';


const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="NewFeed"
        component={NewFeedScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Comment" component={CommentScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
