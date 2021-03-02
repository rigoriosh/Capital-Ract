import React, { useState } from 'react'

export const AddDrinks = ({history}) => {

    const [drinks, setDrinks] = useState(
        [
            {
                nombre: 'Aguila',
                precio: 3500,
                descripcion: 'Cerveza',
                cantidad: 50,
                id: 1
            },
            {
                nombre: 'Poker',
                precio: 3500,
                descripcion: 'Cerveza',
                cantidad: 50,
                id: 2
            }
        ]
    )

    const deleteDrink = (id) => {
        console.log({id});
    }
    const regresar = () => {
        history.push('/owner/admin');
    }
    const newDrink = () => {
        history.push('/owner/admin/NewDrink');
    }
    return (
        <>
            
            <button type="button" className="btn btn-dark btn-block" onClick={regresar}>
                <i className="fa fa-arrow-left"></i> Return            
            </button>
            <hr/>
            <h1>Drinks's List</h1>
            <hr/>
            <div className="row">
                <div className="col text-right">
                    <button className="btn btn-primary" onClick={newDrink}><i className="fa fa-plus"></i></button>            
                </div>
            </div>
            <table className="table table-sm table-striped table-dark mt-3 animate__headShake" >
                <thead>
                <tr>            
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Actions</th>            
                </tr>
                </thead>
                <tbody>
                    {
                        drinks.map(e => (
                            <tr key={e.id} className="table-active" >                            
                                <th scope="row">{e.nombre}</th>
                                <td>{e.precio}</td>                    
                                <td>{e.cantidad}</td>
                                <td>
                                <button className="btn btn-info mr-1 btn-sm" >
                                    <i className="fa fa-pen"></i>                
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() => {deleteDrink(e.id)}}>
                                    <i className="fa fa-trash"></i>                
                                </button>
                                </td>
                            </tr>
                        ))
                    }
                          
                </tbody>
            </table>




        </>
    )
}
