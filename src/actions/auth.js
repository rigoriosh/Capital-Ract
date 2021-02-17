import { tipos } from "../types/tipos"
import {firebase, googleAuthProvider} from '../firebase/firebaseConfig';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(email, password));
        }, 3500);

    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( resp => {
                const {user} = resp;
                dispatch(login(user.uid, user.displayName))
            })
    }
} 

export const login = (uid, displayName) => (
    {
        type: tipos.login,
        payload:{
            uid,
            displayName
        }
    }
)