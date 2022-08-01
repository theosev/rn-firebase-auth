/**
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import DummyButton from '../components/Button';
import {Style} from '../config/styles';
import {Context} from '../logic/Context';

export default function Home() {
  const {signOut} = useContext(Context);
  return (
    <View style={Style.container}>
      <Text>Home</Text>
      <DummyButton text="Sign out" onPress={() => signOut()} />
    </View>
  );
}
