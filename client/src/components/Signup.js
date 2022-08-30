import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import signup from ".src/assests/signup.png";

export const Signup = (props) => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = credentials;
        if (password === cpassword) {
            const response = await fetch("https://enotes-app.herokuapp.com/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            const json = await response.json()
            console.log(json);
            if (json.success) {
                // Save the auth token and redirect
                localStorage.setItem('token', json.authtoken);
                history.push("/");
                props.showAlert("Account Created Successfully", "success");
            }
            else {
                props.showAlert("Invalid Credentials", "danger");
            }
        }
        else {
            props.showAlert("Please enter same password in the fields", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const checkView = () => {
        if (window.innerWidth <= 767) {
            return true;
        }
        return false;
    }

    return (
        <>
            <div className="d-flex createUser">
                {!checkView() && <div className="width">
                    <img src={signup} className="signup" alt="signup" />
                </div>}
                <div className="container mt-3">
                    <h1 style={{"font-family": "-webkit-body"}}>Create Account</h1>
                    <h5 style={{"font-family": "cursive"}}>To use eNotes App, you needs to signup and can freely use the app.</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-4">
                            <label htmlFor="name">Name</label>
                            <input type="name" className="form-control bg-light form-width" id="name" name="name" placeholder="Enter name here*" onChange={onChange} />
                        </div>
                        <div className="mb-3 mt-4">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control bg-light form-width" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email address here*" onChange={onChange} />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="mb-3 mt-4">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control bg-light form-width" id="password" name="password" placeholder="Your password here*" onChange={onChange} minLength={5} required />
                        </div>
                        <div className="mb-3 mt-4">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" className="form-control bg-light form-width" id="cpassword" name="cpassword" placeholder="Rewrite the same password here*" onChange={onChange} minLength={5} required />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit Credentials</button>
                    </form>
                </div>
            </div>
        </ >
    )
}
export default Signup