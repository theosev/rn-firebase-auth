/**
 * @format
 * @flow strict-local
 */

import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import Auth from './logic/Auth';
import { Context } from './logic/Context';
import { reducers } from './logic/Reducers';
import { State } from './logic/State';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Splash from './screens/Splash';

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(reducers, State);
  const [initializing, setInitializing] = useState(true); 
  const authentication = new Auth();

  async function onAuthStateChanged(user) {
    if (user) {
      const token = await auth().currentUser.getIdToken(true)
      dispatch({ type: 'REFRESH_TOKEN', token:  token})
    };
    if (initializing) setInitializing(false);
  }

  useEffect(()=> {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const context = useMemo(
    () => ({
      signIn: async (data) => {
        try {
          const token = await authentication.SignIn(data);
          dispatch({ type: 'SIGN_IN', token:  token});
        } catch (error) {
          console.log(error)
        }
      },
      signOut: async () => {
        try {
          await authentication.SignOut();
          dispatch({ type: 'SIGN_OUT' })
        } catch (error) {
          console.log(error)
        }
      },
      signUp: async (data) => {
        try {
          const token = await authentication.SignUp(data);
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
                initialRouteName='Splash'
                screenOptions={{ headerShown: false }}>
                  { initializing ? (
                    <Stack.Screen name='Splash' component={Splash}/>
                  ) : state.user.token === null ? (
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
