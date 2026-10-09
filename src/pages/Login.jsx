import { useState } from "react"
import { useLocation } from "react-router"
import './Login.css'

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const location = useLocation()
    console.log(location)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
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
                <h3 className="login-first">
                    {location.state.message}
                </h3>
            }
            <h1>Sign in to your account</h1>
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
                <button className="sign-in-btn">Sign in</button>
            </form>
        </div>
    )

}

export default Login