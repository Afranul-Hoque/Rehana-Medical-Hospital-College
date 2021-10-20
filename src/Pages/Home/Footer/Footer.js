import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container pb-4 text-white">
            <div className="row container pt-5 ">
                {/* contact us */}

                <div className="col-md-4">
                    <div>
                        <h3 className="footer-titles">Contact Us</h3>
                    </div>
                    <div className="ms-4">
                        <h4 className="pt-4 mb-3 text-uppercase">Rehana-MCH</h4>
                        <div >

                            <span><i className="fas fa-map-marker-alt pe-2"></i>  Hospital Road, Maijdee, Noakhali-3800.</span>
                            <br />
                            <span><i className="fas fa-envelope pe-2 mt-3"></i>Ahrafi4554@gmail.com</span>
                            <br />
                            <span><i className="fas fa-phone-alt pe-2 mt-3"></i>019032xxx, 018723xxx , 0173532xxx</span>

                        </div>
                    </div>

                </div>


                {/* service link in footer */}


                <div className="col-md-4 footer-link">
                    <div>
                        <h3 className="footer-titles">Useful Links</h3>
                    </div>

                    <div className="mt-5 ms-3 pt-3">

                        <ul>
                            <Link className="nav-items" to="/home"> <li>Home</li> </Link>

                            <Link className="nav-items" to="/services"><li>Services</li></Link>

                            <Link className="nav-items" to="/gallery"><li>Students</li></Link>

                        </ul>
                    </div>

                </div>

                <div className="col-md-4 ">
                    <div className="ms-4">

                        <div>
                            <h3 className="footer-titles ">Medical College</h3>
                        </div>
                        <div className="ms-4 mt-5 pt-4">
                            <span><i className="fas fa-map-marker-alt pe-2 mt-3"></i>  Housing Road, Maijdee, Noakhali-3800.</span>

                            <br />
                            <span><i className="fas fa-users pe-2 mt-3"></i> 5000 Students.</span>
                            <br />
                            <span><i className="fas fa-notes-medical pe-2 mt-3"></i> 14 Departments</span>
                        </div>
                    </div>

                </div>

            </div>
            <div className="text-center mt-4 pt-3">
                <p>All Rights Reserved © 2012 | Rehana-MCH</p>
            </div>
        </div >
    );
};

export default Footer;