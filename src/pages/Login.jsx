import { useState } from "react"
import { useLocation } from "react-router"
import './Login.css'
import { loginUser } from '../api'

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null)
    const location = useLocation()
    console.log(location)

    function handleSubmit(e) {
        e.preventDefault()
        setStatus('submitting')
        
        //  Use "b@b.com" as the username and "p123" as the password.
        async function handleLoginUser (creds) {
            try {  
                const data = await loginUser(creds)
                console.log(data)
                setError(null)
                return data
            } catch (err) {
                setError(err)
            } finally {
                setStatus('idle')
            }
        }
        
        handleLoginUser(loginFormData)      
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-div container">
            { location.state?.message && 
                <h3 className="login-error">
                    {location.state.message}
                </h3>
            }
            <h1>Sign in to your account</h1>
            {error?.message && <h3 className="login-error">There was an error: {error.message}</h3>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button 
                    className="login-btn"
                    disabled={status === 'submitting'}
                >
                    {status === "submitting" 
                        ? "Signing in..." 
                        : "Sign in"
                    }
                </button>
            </form>
        </div>
    )

}

export default Login