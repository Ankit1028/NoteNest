import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';
import Home from '../screens/Home';
import TabNavigation from './TabNavigation';
import {AuthContext, AuthProvider} from '../context/authContext';
const Stack = createStackNavigator();

const StackNavigation = initialScreen => {
  return (
    <AuthProvider>
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
};

export default StackNavigation;
