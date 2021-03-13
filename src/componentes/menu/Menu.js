import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import { MenuContext } from '../../context/MenuContext';
import { MenuDrinks } from './menuDrinks';
import { MenuFoods } from './menuFoods';
import { Pedido } from './Pedido';

export const Menu = ({history}) => {
    const state = useSelector(state => state);    
    const {drinksReducer, foodsReducer} = state;
    const menuContext = useContext(MenuContext);
    const {pedido} = menuContext;
    const [selecMenu, setSelecMenu] = useState('');    
    const [updateMenu, setupdateMenu] = useState(false);    
    const menuDrinks = drinksReducer.drinks;
    const menuFoods = foodsReducer.foods;
    const quitarProductosSinPedidos = (pedido) =>{
        console.log({pedido});
        let itemsAeliminar = [];
        pedido.forEach((e, i) => {
            if(e.cuantasPidieron === 0) itemsAeliminar.push(i);
        });
        itemsAeliminar.forEach(i => {
            pedido.splice(i,1);
        });
        console.log({pedido});
    }
    quitarProductosSinPedidos(pedido);
    console.log({menuDrinks});
    console.log({menuContext});
    console.log({history});
    
    return (
        <div className="cardsMenu animated fadeIn faster container mt-5 d-flex flex-column align-items-center">                       

                {
                    (pedido.length > 0) && (
                        <Pedido history={history}/>
                    )
                }
            
                {
                    (selecMenu === '')
                    && (
                        <div className="col mt-1">        
                            <div className="alert alert-secondary tex-center" role="alert">Que deseas pedir?</div>                                                
                            <button onClick={()=>{setSelecMenu('bebidas')}} type="button" className="btn btn-info ">Pedir algo de tomar <i className="fas fa-glass-cheers"></i></button>
                            <button onClick={()=>{setSelecMenu('comidas')}} type="button" className="btn btn-success ">Pedir algo de comer <i className="fas fa-pizza-slice"></i></button>
                        </div>
                    )
                }
                {
                    (selecMenu === 'bebidas')
                    && (
                        <div className="col">
                            <button onClick={()=>{setSelecMenu('comidas')}} type="button" className="btn btn-success btn-block">Y despues algo de comer <i className="fas fa-pizza-slice"></i></button>
                            <MenuDrinks drinks={menuDrinks} updateMenu={updateMenu} setupdateMenu = {setupdateMenu}/>
                        </div>
                    )
                }
                {
                    (selecMenu === 'comidas')
                    && (
                        <div className="col">
                            <button onClick={()=>{setSelecMenu('bebidas')}} type="button" className="btn btn-info btn-block">Y despues algo de tomar<i className="fas fa-glass-cheers"></i></button>
                            <MenuFoods foods={menuFoods} updateMenu={updateMenu} setupdateMenu = {setupdateMenu}/>
                        </div>
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
