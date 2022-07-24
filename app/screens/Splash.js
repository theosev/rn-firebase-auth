/**
 * @format
 * @flow strict-local
 */

 import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Style } from '../config/styles';
   
  export default function Splash() {
     return (
         <View style={Style.container}>
            <ActivityIndicator />
         </View>
     );
 }
 