import React from 'react'

export const Pedido = () => {
    return (
        <div className="d-flex mt-4" >  
            <div id="pedidos"  style={{"width": "100%"}}>                                
                <div className="alert alert-success mb-0 text-center small" role="alert">MI PEDIDO</div>    
                <table className="table table-sm table-striped table-dark animate__headShake text-center mt-0 mb-0 ">
                <thead>
                    <tr>            
                    <th scope="col">Ítem</th>
                    <th scope="col">$</th>          
                    <th scope="col">Cntas</th>
                    <th scope="col">SubT</th>            
                    </tr>
                </thead>
                <tbody >
                    <tr  className="table-active" >
                    <th scope="row">item.nombre</th>
                    <td>item.precio</td>
                    <td>item.cantidad</td>
                    <td>item.precio item.cantidad</td>
                    </tr>
                </tbody>
                </table>

                <button type="button" className="btn btn-info btn-block btnPedido" >
                <i className="fas fa-shopping-cart block" style={{"padding": "0px 1px 0px 5px"}}></i>
                Realizar pedido
                <span className="badge badge-dark">$ total</span>
                </button>
            </div>
        </div>
    )
}
