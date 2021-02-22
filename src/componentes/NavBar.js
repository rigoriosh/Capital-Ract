import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const NavBar = () => {

    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(startLogOut())
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* <a className="navbar-brand" href="">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* <li className="nav-item active">
                            <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Link</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link disabled" href="">Disabled</a>
                        </li> */}
                    <li>
                        <button className="btn button-narrow" onClick={handleLogOut}>LogOut</button>
                    </li>
                </ul>

            </div>
        </nav>
    )
}
