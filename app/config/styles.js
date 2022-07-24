/**
 *
 * @format
 * @flow
 */

import {
    StyleSheet
} from 'react-native';

export const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
      },
    input: {
      height: 40,
      borderColor: '#BEBEBE',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginBottom: 20,
      textAlign: 'center',
    }
});
