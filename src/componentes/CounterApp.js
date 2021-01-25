import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { HijoCounterApp } from './HijoCounterApp'

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value)        

    const incremento = (e) => {
        console.log(e)
        setCounter((counter) => counter + 1)
    }
    const reset = (e) => {
        console.log(e)
        setCounter((counter) => value)
    }
    

    return (
        <>
            <HijoCounterApp counter = {counter}/>
            <button  onClick={incremento}>+1</button>
            <button  onClick={reset}>Reset</button>
            <button  onClick={() => setCounter((counter) => counter - 1)}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}



export default CounterApp
