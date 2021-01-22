 import logo from '../logo.svg';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types'




function test({a='Thiago', b}) {
    const saludo = 'hola'
   
    
    return  <Fragment>
                <h1>{saludo}</h1>
                <h2>{`${a}  ${b}`}</h2>
                <img src={logo} alt=""/>
            </Fragment>
}

test.prototype = {
    b: PropTypes.string.isRequired
}

export default test;