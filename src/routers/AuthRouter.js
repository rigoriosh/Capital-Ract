import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../componentes/auth/LoginScreen';
import { RegisterScreen } from '../componentes/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div >
            <div >
                <Router>
                    <Switch>
                        <Route exact path="/auth/login" component={LoginScreen} />
                        <Route exact path="/auth/register" component={RegisterScreen}/>                
                        <Redirect to="/auth/login" />
                    </Switch>
                </Router>
            </div>
            
        </div>
    )
}
