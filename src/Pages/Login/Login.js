import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import hospital from '../../Images/Banner/img4.jpg';
import './Login.css'

const Login = () => {
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

    return (
        <div className="container row mt-5">
            <div className=" col-md-8">

                <div className="login-section">
                    <h2>Welcome! Please Login to continue</h2>

                    <form onSubmit="">

                        <input className="login-input mt-3" type="email" name="" id="" placeholder="Enter your email" />
                        <br />
                        <input className="login-input mt-3" type="password" name="" id="" placeholder="Enter your password" />
                        <br />
                        <input className="submit-button my-4 " type="submit" value="Login" />
                    </form>
                    <p>New member? <Link to="/register">Create Account</Link> here</p>
                    <div>-------Or----------</div>

                    <button onClick={handleGoogleLogin} type="button" class=" details-button mt-2 py-2"> Google Sign In</button>
                </div>
            </div>

            <div className=" col-md-4">
                <div >
                    <img className="hospital-img" src={hospital} alt="medical-college" />
                </div>

            </div>

        </div>
    );
};

export default Login;