import React from 'react';
import Ambulance1 from '../../../Images/ambulance/ambulance1.jpg';
import './Ambulance.css'
const Ambulance = () => {
    return (
        <div className="container ambulance-section">
            <div className="my-5 text-center">
                <h3>Emergency Ambulance Service</h3>
            </div>
            <div className="row mt-4 pt-3">
                <div className="col-md-5 ambulance-img">
                    <img src={Ambulance1} alt="" />
                </div>
                <div className="col-md-6 number-section">
                    <div className="mobile-number">
                        <h4>mobile number</h4>
                        <div>
                            <h4>019823849</h4>
                            <h4>019823849</h4>
                            <h4>019823849</h4>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Ambulance;