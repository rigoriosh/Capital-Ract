import React, { useState } from 'react'
import { MenuDrinks } from './menuDrinks';

export const Menu = ({history}) => {
    const [selecMenu, setSelecMenu] = useState('');
    console.log('In menu');
    /* const goDrinks = () => {
        history.push('/owner/menu/drinks')
    }
    const goFoods = () => {
        history.push('/owner/menu/foods')
    } */
    return (
        <div className="cardsMenu animated fadeIn faster container mt-5 d-flex flex-column align-items-center">                       
            
                {
                    (selecMenu === '')
                    && (
                        <div className="col">                            
                            <button type="button" className="btn btn-danger btn-block">Que deseas pedir? <i className="fas fa-glass-cheers"></i></button> <hr/>                         
                            <button onClick={()=>{setSelecMenu('bebidas')}} type="button" className="btn btn-info ">Pedir bebidas <i className="fas fa-glass-cheers"></i></button>
                            <button onClick={()=>{setSelecMenu('comidas')}} type="button" className="btn btn-success ">Pedir comidas <i className="fas fa-pizza-slice"></i></button>
                        </div>
                    )
                }
                {
                    (selecMenu === 'bebidas')
                    && (
                        <div className="col">
                            <button onClick={()=>{setSelecMenu('comidas')}} type="button" className="btn btn-success btn-block">Pedir comidas <i className="fas fa-pizza-slice"></i></button>
                            <MenuDrinks/>
                        </div>
                    )
                }
                {
                    (selecMenu === 'comidas')
                    && (
                        <button onClick={()=>{setSelecMenu('bebidas')}} type="button" className="btn btn-info btn-block">Pedir bebidas <i className="fas fa-glass-cheers"></i></button>
                    )
                }
                
          
            

{/* 
            <div onClick={goDrinks} className="card text-white bg-info mb-3" style={{"maxWidth": "18rem"}}>
                <div className="card-header text-center">Bebidas</div>
                <div className="card-body">
                    <h5 className="card-title">Disfruta de las mejores bebidas, para los mejores momentos.</h5>
                    
                </div>
            </div>
            <div onClick={goFoods} className="card text-white bg-success mb-3" style={{"maxWidth": "18rem"}}>
                <div className="card-header text-center">Comidas</div>
                <div className="card-body">
                    <h5 className="card-title ">Acompaña esos momentos con algo delicioso para picar.</h5>
                    
                </div>
            </div>
         */}    
        </div>
    )
}
