/**
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
   </NavigationContainer>
  );
};
