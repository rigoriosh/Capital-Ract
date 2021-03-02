import React from 'react'

export const Admin = ({history}) => {

    const addDrinks = () => {
        history.push('/owner/admin/addDrinks');
    }
    const addFoods = () => {

    }

    return (
        <div className="animated fadeIn faster " style={{'marginTop': '60px'}}>
            <h1 >admin CAPITAL</h1>

            <button type="button" className="btn btn-dark" onClick={addDrinks}>Add Drinks</button>
            <button type="button" className="btn btn-primary" onClick={addFoods}>
                Add Foods
            </button>
        </div>
    )
}
