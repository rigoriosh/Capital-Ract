import React from 'react'
import {useSelector } from 'react-redux';
import { CardProducto } from "./CardProducto";
import { Pedido } from './Pedido';


export const MenuDrinks = ({history}) => {
    const {drinksReducer} = useSelector(state => state);
    const {drinks} = drinksReducer;
    
    console.log(drinksReducer)
    const goFoods = () => {
        history.push('/owner/menu/foods')
    }

    return (
        <div className="cardsMenu animated fadeIn faster container mt-5 d-flex flex-column align-items-center">
            
            <button type="button" className="btn btn-info btn-block" onClick={goFoods}>
                Pedir comidas <i className="fas fa-pizza-slice"></i>
            </button>
            {/* tabla de pedidos */}
            <Pedido />           

            MenuDrinks
            

            {/* listado de productos */}
            {
                drinks.map(d => {
                    return (                        
                        <CardProducto key={d.id} producto={d} />
                    )
                })
            }

            
        </div>
    )
}
