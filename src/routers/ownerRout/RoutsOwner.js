import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Admin } from '../../componentes/admin/Admin';
import { Bar } from '../../componentes/bar/Bar';
import { Menu } from '../../componentes/menu/Menu';
import { Rockola } from '../../componentes/rockola/Rockola';

export const RoutsOwner = () => {
    return (
        <>
            <Switch>
                    <Route exact path="/owner/admin"    component={Admin} />
                    <Route exact path="/owner/bar"      component={Bar} />
                    <Route exact path="/owner/menu"     component={Menu} />
                    <Route exact path="/owner/rockola"  component={Rockola} />
                    <Redirect to='/owner/admin' />
            </Switch>
        </>
    )
}
