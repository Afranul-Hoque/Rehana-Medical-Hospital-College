import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import './Header.css';

const Header = () => {

    // const { user, logOut } = useAuth();
    const { user, logOut } = useAuth();
    return (
        <div className="header-description">
            <nav className="navbar navbar-expand-lg  bg-dark nav-section">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Rehana Medical College Hospital</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <Link to="/home" className="nav-link active">Home</Link>


                            <Link to="/services" className="nav-link active">Services</Link>


                            <Link className="nav-link active">Students</Link>

                            <Link className="nav-link active">Publications</Link>
                            {
                                user.email && <span><Link to="/home" className="nav-link active">{user.displayName}</Link></span>
                            }

                            {
                                user.email ?
                                    <Link onClick={logOut} to="/home" className="nav-link active">Logout</Link>
                                    :
                                    <Link to="/login" className="nav-link active">login</Link>
                            }


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;