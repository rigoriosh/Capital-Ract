import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { HomeScreen } from '../componentes/HomeScreen';
import { AuthRouter } from './AuthRouter';
import {firebase} from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import PublicRout from './PublicRout';
import PrivateRoute from './PrivateRoute';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checkingLogin, setChecking] = useState(false);    
    const [isLogin, setisLogin] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setChecking(true);
                setisLogin(true);
            }else{
                setChecking(false);
                setisLogin(false);
            }
        });

    }, [dispatch, setChecking])

    if (checkingLogin) {
        return (
            <h1>Waiting ....</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRout isAuthenticated={isLogin} path="/auth" component={AuthRouter}/>
                    <PrivateRoute exact isAuthenticated={isLogin} path="/" component={HomeScreen}/>                    
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>            
        </Router>
    )
}
