import React from 'react'

export const Menu = ({history}) => {
    const goDrinks = () => {
        history.push('/owner/menu/drinks')
    }
    const goFoods = () => {
        history.push('/owner/menu/foods')
    }
    return (
        <div className="cardsMenu animated fadeIn faster container mt-5 d-flex flex-column align-items-center">
            <div className="card border-primary mb-3 text-center" style={{"maxWidth": "18rem"}}>        
                <div className="card-body text-primary">
                    <h5 className="card-title ">Que deseas pedir?</h5>                    
                </div>
            </div>
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
        </div>
    )
}
