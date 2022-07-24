/**
 * @format
 * @flow strict-local
 */

import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, TextInput, View } from 'react-native';
import DummyButton from '../components/Button';
import { Style } from '../config/styles';
import { Context } from '../logic/Context';
 
export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useContext(Context);

    function sign_up() {
        navigation.navigate('SignUp')
    }

    return (
        <KeyboardAvoidingView style={Style.container}>
            <View style={Style.form}>
                <TextInput
                    style={Style.input}
                    placeholder='email'
                    onChangeText={setEmail}
                />
                <TextInput
                    style={Style.input}
                    placeholder='password'
                    onChangeText={setPassword}
                />
                <DummyButton text='Log in' onPress={() => signIn({ email, password })}/>
                <View style={{marginBottom: 10}}></View>
                <DummyButton text='Sign up' onPress={sign_up}/>
            </View>
        </KeyboardAvoidingView>
    );
}
