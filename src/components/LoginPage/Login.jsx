import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = () => {
        console.log({email, password})
    }

    return (
        <>
            <div className="container">
                <div className="card">
                    <h1>Login Now!</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="email-input" placeholder="Enter your email..." required /> <br />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" className="password-input" placeholder="Enter your password..." required /> <br />
                        <input type="submit" value="Login" className="login-btn" />
                    </form>
                    <h3>{message}</h3>
                    <div className="help-links">
                        <p>Forgot Password?  <span><Link to="/forgot-password">Reset your password</Link></span></p>
                        <p>Not registered yet? <span><Link to="/register">Create an account</Link></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
