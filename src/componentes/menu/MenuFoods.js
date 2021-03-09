import React from 'react'
import { useSelector } from 'react-redux';
import { CardProducto } from './CardProducto';
import { Pedido } from './Pedido';

export const MenuFoods = ({history}) => {
    const state = useSelector(state => state);
    const {foodsReducer} = state;
    const {foods} = foodsReducer;
    console.log(state)
    const goDrinks = () => {
        history.push('/owner/menu/drinks')
    }
    return (
        <div className="cardsMenu animated fadeIn faster container mt-5 d-flex flex-column align-items-center">
            <button type="button" className="btn btn-info btn-block" onClick={goDrinks}>
                Pedir bebidas <i className="fas fa-glass-cheers"></i>
            </button>
            <Pedido />
            MenuFoods
            {
                foods.map(d => {
                    return (                        
                        <CardProducto key={d.id} producto={d} />
                    )
                })
            }
        </div>
    )
}
