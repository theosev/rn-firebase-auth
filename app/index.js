/**
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useMemo, useReducer } from 'react';
import Auth from './logic/Auth';
import { Context } from './logic/Context';
import { reducers } from './logic/Reducers';
import { State } from './logic/State';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(reducers, State);
  const auth = new Auth();
  const context = useMemo(
    () => ({
      signIn: async (data) => {
        try {
          const token = await auth.SignIn(data);
          dispatch({ type: 'SIGN_IN', token:  token});
        } catch (error) {
          console.log(error)
        }
      },
      signOut: async () => {
        try {
          await auth.SignOut();
          dispatch({ type: 'SIGN_OUT' })
        } catch (error) {
          console.log(error)
        }
      },
      signUp: async (data) => {
        try {
          const token = await auth.SignUp(data);
          dispatch({ type: 'SIGN_IN', token:  token});
        } catch (error) {
          console.log(error)
        }
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
