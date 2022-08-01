/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button} from 'react-native';

export default function DummyButton({text = '', onPress}) {
  return <Button title={text} onPress={onPress} />;
}
