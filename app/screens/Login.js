/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { KeyboardAvoidingView, TextInput, View } from 'react-native';
import DummyButton from '../components/Button';
import { Style } from '../config/styles';
 
export default function Login() {

    function login() {
        console.log('Log in')
    }

    function sign_up() {
        console.log('Sign up')
    }

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
                <DummyButton text='Log in' onPress={login}/>
                <View style={{marginBottom: 10}}></View>
                <DummyButton text='Sign up' onPress={sign_up}/>
            </View>
        </KeyboardAvoidingView>
    );
}
