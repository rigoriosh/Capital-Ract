import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { startLogOut } from '../actions/auth';

export const NavBar = ({rol}) => {

    console.log('rol => ', rol);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogOut = () => {
        dispatch(startLogOut())
        history.replace('/auth');
    }
    const tst = () => {
        console.log('test');
        history.replace('/bar');
    }

    //const [rol, setRol] = useState('');
    return (
        <>
            <div className="menu-wrap">
                <input type="checkbox" className="toggler"/>
                
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li >                                    
                                    <Link to="/" replace><strong className="colorText" >Inicio</strong></Link>
                                    <i className="fas fa-step-backward"></i>
                                </li>
                                {
                                    (rol === 'propietario') && 
                                        (
                                            <li onClick={tst}>
                                                <strong className="colorText" >Admin</strong>
                                                <i className="fas fa-tools"></i>
                                            </li>
                                        )
                                    
                                }
                                {
                                    (rol === 'adminBar' || rol === 'propietario') && (
                                        <li onClick={tst}>
                                            <strong className="colorText" >Bar</strong>
                                            <i className="fas fa-glass-cheers"></i>
                                        </li>
                                    )
                                }
                                {
                                    (rol === 'usuario' || rol === 'propietario' || rol === 'adminBar') && (
                                        <>
                                            <li onClick={tst}>
                                                <strong className="colorText" >Menu</strong>
                                                <i className="fas fa-bars"></i>
                                            </li>
                                            <li >                                    
                                                <Link to="/rockola" replace><strong className="colorText" >Rockola</strong></Link>
                                                <i className="fab fa-spotify"></i>
                                            </li>
                                        </>
                                    )
                                }
                                
                               
                                <li >                                    
                                    <Link to="/nosotros" replace><strong className="colorText" >Nosotros</strong></Link>
                                    <i className="fas fa-users"></i>
                                </li>
                                {
                                    (rol !== 'propietario' && rol !== 'adminBar' && rol !== 'usuario') && (
                                        <li >                                    
                                            <Link to="/nosotros" replace><strong className="colorText" >Ingresar</strong></Link>
                                            <i className="fas fa-users"></i>
                                        </li>
                                    )
                                }                                
                                {
                                    (rol === 'propietario' || rol === 'adminBar' || rol === 'usuario')&&(
                                        <li onClick={handleLogOut}>                                    
                                            <strong className="colorText" >Salir</strong>
                                            <i className="fas fa-sign-out-alt"></i>
                                        </li>                                
                                    )
                                }                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

           
        </>
        
    )
}


/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="row"  id="navbarSupportedContent">
                <button type="button" className="btn " >Menu</button>
                <button type="button" className="btn btn-dark " onClick={handleLogOut}>Salir</button>
                <button type="button" className="btn btn-dark">Dark</button>
            </div>
        </nav> */

/* 
<div className="row NavBar">
                <div className="col colorBtn pointer" onClick={tst}>Menu</div>
                <div className="col pointer" onClick={tst}>Admin</div>
                <div className="col pointer" onClick={tst}>Administrador</div>
                <div className="col pointer" onClick={tst}>Menu</div>
                <div className="col pointer" onClick={tst}>Rockola</div>
                <div className="col pointer" onClick={tst}>Salir</div>
            </div>
*/