/**
 * @format
 * @flow strict-local
 */

import auth from '@react-native-firebase/auth';

export default class Firebase {
  constructor() {}

  async LoginUser(email, password) {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      const token = await auth().currentUser.getIdToken(true);
      return token;
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('That email address is already in use!');
      }
      throw new Error('That email address is invalid!');
    }
  }

  async CreateUser(email, password) {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      const token = await auth().currentUser.getIdToken();
      return token;
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        throw new Error('That email address is invalid!');
      }

      throw new Error(error);
    }
  }

  async SignOutUser() {
    try {
      await auth().signOut();
    } catch (error) {
      throw error;
    }
  }

  async RefreshToken() {}
}
