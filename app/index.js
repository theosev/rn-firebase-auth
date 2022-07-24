/**
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useMemo, useReducer } from 'react';
import { SignIn, signOut, signUp } from './logic/Auth';
import { Context } from './logic/Context';
import { reducers } from './logic/Reducers';
import { State } from './logic/State';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(reducers, State);
  const context = useMemo(
    () => ({
      signIn: async (data) => {
        await SignIn(data);
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: async () => {
        await signOut();
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async (data) => {
        await signUp(data);
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }));

  return (
    <Context.Provider value={context}>
      <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Login'
                screenOptions={{ headerShown: false }}>
                  {
                    state.user.token === null ? (
                      <>
                        <Stack.Screen name='Login' component={Login}/>
                        <Stack.Screen name='SignUp' component={SignUp}/>
                      </>
                    ) : (
                      <Stack.Screen name='Home' component={Home}/>
                  )}
            </Stack.Navigator>
      </NavigationContainer>
   </Context.Provider>
  );
};
