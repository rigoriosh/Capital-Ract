
import React from 'react'

export const HijoCounterApp = ({counter}) => {
    console.log({counter})

    
    return (
        <>
            <h1>Counter-App</h1>
            <h2> { counter } </h2>
        </>
    )
}
