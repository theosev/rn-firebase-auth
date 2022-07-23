/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';
import DummyButton from '../components/Button';
import { Style } from '../config/styles';
  
 export default function Home() {
     return (
        <View style={Style.container}>
            <Text>Home</Text>
            <DummyButton text="Sign out"/>
        </View>
    );
 }
