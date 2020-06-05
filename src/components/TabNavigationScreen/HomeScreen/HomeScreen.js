import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewFeedScreen from './NewFeedScreen/NewFeedScreen';
import CommentScreen from './CommentScreen/CommentScreen';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator

    >
      <Stack.Screen name="NewFeed" component={NewFeedScreen} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Comment" component={CommentScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
