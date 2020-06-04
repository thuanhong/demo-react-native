import React, {useMemo, useEffect, useContext} from 'react';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppTabNavigation from './components/AppTabNavigation';
import AuthenticateScreen from './components/AuthenticateScreen';
import AsyncStorage from '@react-native-community/async-storage';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Image, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const AuthContext = React.createContext();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderLeft = () => {
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

const App = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <NavigationContainer
      style={{
        backgroundColor: '#e8ebee',
      }}>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator
          headerMode="screen"
          initialRouteName="Auth"
          screenOptions={{
            headerTintColor: 'black',
            headerStyle: {backgroundColor: 'white'},
          }}>
          {state.userToken == null ? (
            <Stack.Screen
              name="Auth"
              component={AuthenticateScreen}
              options={{
                headerShown: false,
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            <Stack.Screen
              name="Welcome"
              component={MainPageDrawerNavigation}
              options={{
                headerLeft: () => <HeaderLeft />,
              }}
            />
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

const CustomDrawerContent = props => {
  const {signOut} = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <Image
        style={{resizeMode: 'stretch', width: '100%', height: 200}}
        source={require('../assets/drawer.jpg')}
      />
      <DrawerItemList {...props} />
      <Button title="Logout" onPress={signOut} />
    </DrawerContentScrollView>
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

export default App;
