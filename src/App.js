import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppTabNavigation from './components/AppTabNavigation';
import AuthenticateScreen from './components/AuthenticateScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer
      style={{
        backgroundColor: '#e8ebee',
      }}>
      <Stack.Navigator
        headerMode="screen"
        initialRouteName="Auth"
        screenOptions={{
          headerTintColor: 'black',
          headerStyle: {backgroundColor: 'white'},
        }}>
        <Stack.Screen
          name="Auth"
          component={AuthenticateScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Main" component={AppTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
