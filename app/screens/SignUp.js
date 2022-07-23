/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { KeyboardAvoidingView, TextInput, View } from 'react-native';
import DummyButton from '../components/Button';
import { Style } from '../config/styles';
 
export default function SignUp() {
    return (
        <KeyboardAvoidingView style={Style.container}>
            <View style={Style.form}>
                <TextInput
                    style={Style.input}
                    placeholder='username'
                />
                <TextInput
                    style={Style.input}
                    placeholder='password'
                />
                <DummyButton text='Sign up'/>
            </View>
        </KeyboardAvoidingView>
    );
}
