import React, { useContext, useEffect, useState } from 'react'
import {useSelector } from 'react-redux';
import { MenuContext } from '../../context/MenuContext';
import { CardProducto } from "./CardProducto";
import { Pedido } from './Pedido';


export const MenuDrinks = ({history}) => {
    const {drinksReducer} = useSelector(state => state);
    const {drinks} = drinksReducer;

    const menuContext = useContext(MenuContext);  
    console.log(menuContext);
    const {pedido, setPedido} = menuContext;  
    console.log({pedido});
    
    console.log({drinksReducer})
    const goFoods = () => {
        history.push('/owner/menu/foods')
    }

    ////////
        
    /* useEffect(() => {
        
        console.log({pedido});
        if(pedido.length === 0) setPedido(pedido.push(newOrder));
    }, [newOrder, pedido, setPedido]) */

    const addPedido = (producto, cuantasPidieron)=>{
        console.log({producto});
        console.log({cuantasPidieron});
        console.log({pedido});        
        if(pedido.length === 0) {
            pedido.push({producto, cuantasPidieron});
        }else{
            let pedidoDB = pedido.find(e => e.producto.id === producto.id);
            const indexPedidoDB = pedido.findIndex(e => e.producto.id === producto.id)
            pedidoDB.cuantasPidieron = cuantasPidieron;
            pedido[indexPedidoDB] = pedidoDB;            
        }
        setPedido(pedido);
    }
    

    return (
        <div className="cardsMenu animated fadeIn faster container mt-5 d-flex flex-column align-items-center">
                   
            {/* tabla de pedidos */}
            {/* <Pedido pedido={pedido}/>            */}

            MenuDrinks
            

            {/* listado de productos */}
            {
                drinks.map(d => {
                    return (                        
                        <CardProducto key={d.id} producto={d} menuContext={menuContext} 
                        addPedido={addPedido}/>
                    )
                })
            }

            
        </div>
    )
}
