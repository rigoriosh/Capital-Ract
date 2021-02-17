import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form>
                <input type="text" placeholder="Name" name="Name" className="auth__input"/>
                <input type="text" placeholder="Email" name="email" className="auth__input"/>
                <input type="password" placeholder="password" name="password" className="auth__input"/>
                <input type="password" placeholder="confirm Password" name="confirmPassword" className="auth__input"/>
                <button type="submit" className="btn btn-primary btn-block mb-5" disabled={false}>Register</button>
                
                
                <Link to="/auth/login" className="link">Already Register?</Link>
            </form>
        </>
    )
}
