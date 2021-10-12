import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged in Successfully", "success");
            history.push("/");
        }
        else {
            props.showAlert("Invalid Details", "danger");
        }
    }

    const onChange = (e) => {

        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const checkView = () => {
        if (window.innerWidth <= 768) {
            return true;
        }
        return false;
    }

    return (
        <>
            <div className="d-flex flex-Direction">
                <div className="container mt-3 ml width">
                    <h1 style={{ "font-family": "-webkit-body" }}>Welcome Back :)</h1>
                    <h5 style={{ "font-family": "cursive" }}>To keep connected with us please login with your personal information by email address and password.</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-4">
                            <label htmlFor="email" className="form-label mt-3">Email Address</label>
                            <input type="email" className="form-control bg-light form-width" value={credentials.email} placeholder="Enter email address here*" onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="password" className="form-label mt-3">Password</label>
                            <input type="password" className="form-control bg-light form-width" value={credentials.password} placeholder="Enter password here*" onChange={onChange} name="password" id="password" />
                        </div>
                        <div className="mb-3 mt-3">
                            <button type="submit" className="btn btn-primary">LogIn</button>
                        </div>
                    </form>
                </div>
                {!checkView() && <div className="width">
                    <img className="login" />
                </div>}
            </div>
        </ >

    )
}

export default Login
