import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const UserRouts = ({rol, component: Component, ...rest}) => {
    return (
        <Route {...rest}
         component = { (props) => (
             (rol === 'useario')
             ? <Component {...props}/>
             : <Redirect to="/auth/login" />
         )}
 
 
        />
     )
}

UserRouts.propTypes = {

}

export default UserRouts
