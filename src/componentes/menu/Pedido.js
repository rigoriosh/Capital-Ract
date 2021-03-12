import React, { useEffect, useState } from 'react'

export const Pedido = ({pedido}) => {
    console.log(pedido)   
    const [total, setTotal] = useState(0);
    /* useEffect(() => {
        const subT = pedido.map(p => {
            console.log({p});
            const a = p.productos.map(({cantidad, precioUni}) => {                
                console.log(cantidad * precioUni);
                return cantidad * precioUni;
            })   
            let t = total;
            a.forEach(element => {
                t = t + element;
            });
            return t;  
        })

        console.log(subT[0]);
        setTotal(subT[0]);
    }, [pedido, setTotal, total]) */
    return (
        <div className="d-flex mt-4" >  
            <div id="pedidos"  style={{"width": "100%"}}>                                
                <div className="alert alert-success mb-0 text-center small" role="alert">MI PEDIDO</div>    
                <table className="table table-sm table-striped table-dark animate__headShake text-center mt-0 mb-0 ">
                <thead>
                    <tr>            
                    <th scope="col">Ítem</th>
                    <th scope="col">V.Unidad</th>          
                    <th scope="col">Cntas</th>
                    <th scope="col">SubT</th>            
                    </tr>
                </thead>
                <tbody >
                    {
                        pedido.map(p => {
                            return (
                                p.productos.map(item => {
                                    return (
                                        <tr key={Math.random()}  className="table-active" >
                                            <th scope="row">{item.nameP}</th>
                                            <td>${item.precioUni}</td>
                                            <td>{item.cantidad}</td>
                                            <td>${item.precioUni * item.cantidad}</td>
                                        </tr>
                                    )
                                })  
                            )                                                      
                        })
                    }
                    
                </tbody>
                </table>

                <button type="button" className="btn btn-info btn-block btnPedido" >
                    <i className="fas fa-shopping-cart block" style={{"padding": "0px 1px 0px 5px"}}></i>
                    Realizar pedido
                    <span className="badge badge-dark">Total: ${total}</span>
                </button>
            </div>
        </div>
    )
}
