import React from 'react'
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import { HomeScreen } from './home/HomeScreen'
import { NavBar } from './NavBar';
import { Admin } from './admin/Admin';
import { Bar } from './bar/Bar';
import { Menu } from './menu/Menu';
import { Rockola } from './rockola/Rockola';
import { Nosotros } from './nosotros/Nosotros';



export const HomeRouter = () => {
    return (   
        <div>     
            <NavBar/>
           
                <div>
                    <Switch>
                        <Route exact  path="/" component={HomeScreen} />                   
                        <Route exact path="/admin" component={Admin} />
                        <Route exact path="/bar" component={Bar} />
                        <Route exact path="/menu" component={Menu} />
                        <Route exact path="/rockola" component={Rockola} />
                        <Route exact path="/nosotros" component={Nosotros} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            
        </div>
    )
}
