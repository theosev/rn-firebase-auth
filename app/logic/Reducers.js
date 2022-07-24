/**
 *
 * @format
 * @flow
 */

const SIGNUP = 'SIGN_IN';
const SIGNOUT = 'SIGN_OUT';
const REFRESH_TOKEN = 'REFRESH_TOKEN';

export function reducers(prevState, action) {
    switch (action.type) {
        case SIGNUP:
            return {
                ...prevState,
                user: {
                    auth_status: 'signed_in',
                    token: action.token
                }
            };
        case SIGNOUT:
            return {
                ...prevState,
                user: {
                    auth_status: null,
                    token: null
                }                
            };
        case REFRESH_TOKEN:
            return {
                ...prevState,
                user: {
                    token: action.token
                }                
            };
        default: 
            return prevState;
    }
}
