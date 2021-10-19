import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './Register.css'
import hospital from '../../Images/Banner/img4.jpg'
import useAuth from '../../Hook/useAuth';

const Register = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    const handleEmail = e => {

    }
    const handlePassword = e => {

    }

    const handleRegistrationForm = e => {
        e.preventDefault();
    }

    return (

        <div className="container row mt-5">
            <div className=" col-md-8">

                <div className="login-section">
                    <h2 className="Service-heading pb-3">Rehana-MCH
                    </h2>
                    <h2>Welcome! Please Create your account</h2>

                    <form onSubmit={handleRegistrationForm}>
                        <h5 className="mt-3">Your Name</h5>
                        <input className="login-input " type="name" name="" id="" placeholder="Enter your name" />
                        <h5 className="mt-3">Email</h5>
                        <input onBlur={handleEmail} className="login-input " type="email" name="" id="" placeholder="Enter your email" />
                        <br />
                        <h5 className="mt-3">Password</h5>
                        <input onBlur={handlePassword} className="login-input " type="password" name="" id="" placeholder="Enter your password" />
                        <br />
                        <h5 className="mt-3">Re-enter Password</h5>
                        <input className="login-input " type="password" name="" id="" placeholder="Re-enter your password" />
                        <br />
                        <input className="submit-button my-4 " type="submit" value="Create Account" />
                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link> here</p>
                    <div>-------Or----------</div>

                    <button onClick={handleGoogleLogin} type="button" class=" details-button mt-2 py-2"> Google Sign In</button>

                </div>
            </div >

            <div className=" col-md-4">
                <div >
                    <img className="hospital-img" src={hospital} alt="medical-college" />
                </div>

            </div>

        </div>







    );
};

export default Register;