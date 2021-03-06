import React from 'react'

export const Admin = ({history}) => {

    const addDrinks = () => {
        history.push('/owner/admin/addDrinks');
    }
    const addFoods = () => {
        history.push('/owner/admin/addFoods');
    }

    const addRoles = () => {
        console.log('roles')
    }

    return (
        <div className="animated fadeIn faster container" >
            <h1 style={{"marginLeft": "55px"}}>admin CAPITAL</h1>

            <button type="button" className="btn btn-dark" onClick={addDrinks}>Add Drinks</button>
            <button type="button" className="btn btn-primary" onClick={addFoods}>Add Foods</button>
            <button type="button" className="btn btn-success" onClick={addRoles}>Roles</button>
        </div>
    )
}
