
import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import CounterApp from './CounterApp';




function test({a='Thiago', b ='rios'}) {
    const saludo = 'hola'
   
    
    return  <Fragment>
                <h1>{saludo}</h1>
                <h2>{`${a}  ${b}`}</h2>
                <CounterApp value={10}/>
               {/*  <img src={logo} alt=""/> */}
            </Fragment>
}

test.prototype = {
    b: PropTypes.string.isRequired
}

export default test;