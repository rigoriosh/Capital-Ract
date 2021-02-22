import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startLogOut } from '../actions/auth';

export const NavBar = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogOut = () => {
        dispatch(startLogOut())
        history.replace('/auth');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="row"  id="navbarSupportedContent">
                <button type="button" className="btn btn-dark " >Menu</button>
                <button type="button" className="btn btn-dark " onClick={handleLogOut}>Salir</button>
                <button type="button" class="btn btn-dark">Dark</button>
            </div>
        </nav>
    )
}
