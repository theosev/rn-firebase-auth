/**
 * @format
 * @flow strict-local
 */

import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, TextInput, View } from 'react-native';
import DummyButton from '../components/Button';
import { Style } from '../config/styles';
import { Context } from '../logic/Context';
 
export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp } = useContext(Context);

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
                <DummyButton text='Sign up' onPress={() => signUp({ email, password })}/>
            </View>
        </KeyboardAvoidingView>
    );
}
