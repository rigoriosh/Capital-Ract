import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { HomeScreen } from '../componentes/HomeScreen';
import { AuthRouter } from './AuthRouter';


export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={AuthRouter}/>
                <Route path="/" component={HomeScreen}/>
                <Redirect to="/auth/login"/>
            </Switch>
        </Router>
    )
}
