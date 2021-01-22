import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value)

    const manejarEvento = (e) => {
        console.log(e)
        setCounter((counter) => counter + 1)
    }
    const substract = (e) => {
        console.log(e)
        setCounter((counter) => value)
    }
    

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button  onClick={manejarEvento}>+1</button>
            <button  onClick={substract}>Reset</button>
            <button  onClick={() => setCounter((counter) => counter - 1)}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}



export default CounterApp
