import React, { useEffect, useState } from 'react';
import noimages from '.././/../assets/images/noImages.png';

export const CardProducto = ({producto, menuContext, addPedido}) => {
    const [cantidadPedido, setCantidadPedido] = useState(0);  
    const {pedido, setPedido} = menuContext;
    console.log({pedido});
    console.log({producto})
    
    
    const fixPedido = (action) => {
        let cuantasPidieron = 0;
        if(action === 'sumar'){
            cuantasPidieron = cantidadPedido + 1;
        }else{
            cuantasPidieron = cantidadPedido - 1;            
        }
        setCantidadPedido(cuantasPidieron);
        addPedido(producto, cuantasPidieron);
    }
    return (
        <div className="card cardProducto text-center" style={{'backgroundColor': JSON.parse(producto.color).hex}}>
                {/* <img src={producto.imagen}  className="card-img-top" alt="Card  cap"/>  */}
                {
                    (producto.imagen.length === 0) 
                    ? (<img src={noimages} alt="No " />)
                    :(
                        <img height="200" src={producto.imagen} alt="anything"/>  
                    )
                }               
                <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>     
                    <p className="card-text">{producto.description}</p>
                    <h5>Precio: {producto.price}</h5>
                    {
                        (cantidadPedido > 0) && (<p>Cantidad: {cantidadPedido}</p>)
                    }                    
                    <button onClick={() => fixPedido('sumar')} type="button" className="btn btn-success rounded-circle" style={{"marginRight": "5px"}}><i className="fas fa-plus" style={{"padding": "0px 0px 0px 0px"}}></i></button>
                    {
                        (cantidadPedido > 0) && (
                        <button onClick={() => fixPedido('restar')} type="button" className="btn btn-dark rounded-circle" style={{"marginRight": "5px"}}><i className="fas fa-minus" style={{"padding": "0px 0px 0px 0px"}}></i></button> 
                        )
                    }                    
                
                </div>
            </div>
    )
}
