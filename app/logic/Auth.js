/**
 * @format
 * @flow strict-local
 */

import Firebase from "../third_party/firebase";

export default class Auth {
    constructor() {}
    
    async SignIn(data) {
        const firebase = new Firebase();
        try {
            const token = await firebase.LoginUser(data.email, data.password);
            return token;
        } catch (error) {
            throw error
        }
    }
    
    async SignUp(data) {
        const firebase = new Firebase();
        try {
            const token = await firebase.CreateUser(data.email, data.password);
            return token;
        } catch (error) {
            throw error
        }
    }
    
    async SignOut() {
        const firebase = new Firebase();
        try {
            await firebase.SignOutUser();
        } catch (error) {
            throw error
        }
    }   
}
