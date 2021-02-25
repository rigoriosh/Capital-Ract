import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Admin } from '../componentes/admin/Admin';
import { AuthScreen } from '../componentes/auth/AuthScreen';
import { Bar } from '../componentes/bar/Bar';
import { HomeScreen } from '../componentes/home/HomeScreen';
import { Menu } from '../componentes/menu/Menu';
import { NavBar } from '../componentes/NavBar';
import { Nosotros } from '../componentes/nosotros/Nosotros';
import { Rockola } from '../componentes/rockola/Rockola';

import { HomeRouter } from './HomeRouter';


export const AppRouter = () => {

    const [rol, setRol] = useState('propietario');

    console.log('rol => ', rol);

    /* const dispatch = useDispatch();
    const [checkingLogin, setChecking] = useState(false);    
    const [isLogin, setisLogin] = useState(false) */

    /* useEffect(() => {        
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            setChecking(true);
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));                
                setisLogin(true);
            }else{                
                setisLogin(false);
            }
        });

    }, [dispatch, setChecking])

    if (!checkingLogin) {
        return (
            <h1>Waiting ....</h1>
        )
    } */

    return (
        <Router>
            <div>
            <NavBar rol={rol}/>
                <Switch>
                   
                    <Route exact path="/admin"    component={Admin} />
                    <Route exact path="/bar"      component={Bar} />
                    <Route exact path="/menu"     component={Menu} />
                    <Route exact path="/rockola"  component={Rockola} />
                    <Route exact path="/nosotros" component={Nosotros} />
                    <Route exact path="/auth" component={AuthScreen} />
                    <Route path="/" component={HomeScreen} />
                    {/* <PublicRout isAuthenticated={isLogin} path="/" component={AuthRouter}/> */}
                    {/* <PrivateRoute  isAuthenticated={isLogin} path="/auth" component={HomeRouter}/>                     */}
                    <Redirect to="/"/>
                </Switch>
            </div>            
        </Router>
    )
}
