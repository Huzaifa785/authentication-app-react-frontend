import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ForgotPassword.css'

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = () => {
        console.log({email})
    }
    return (
        <>
            <div className="container">
                <div className="card">
                    <h1>Reset Password</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="email-input" placeholder="Enter your email..." required /> <br />
                        <input type="submit" value="Send Me Instructions!" className="reset-btn" />
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

export default ForgotPassword
