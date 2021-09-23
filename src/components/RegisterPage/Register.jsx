import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = () => {
        console.log({name, email, password})
    }

    return (
        <>
                <div className="container">
                    <div className="card">
                        <h1>Create a new account!</h1>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmit()
                        }}>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="full-name" className="full-name" placeholder="Enter your full name..." required /> <br />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="email-input" placeholder="Enter your email..." required /> <br />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" className="password-input" placeholder="Enter your password..." required /> <br />
                            <input type="submit" value="Register" className="register-btn" />
                        </form>
                        <h3>{message}</h3>
                        <div className="help-links">
                        <p>Already registered? <span><Link to="/">Login here</Link></span></p>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Register