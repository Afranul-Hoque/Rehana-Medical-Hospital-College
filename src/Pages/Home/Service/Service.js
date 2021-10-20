import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, img, Service, Number, discription } = props.service;
    return (
        <div >
            <div className="card service-img card-description">
                <img src={img} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p>The Department of <span className="service-name">{name} </span> at Rehana Medical College Hospital. {discription}</p>

                    <h5>Service: {Service}</h5>
                    <h6>Contact: {Number}</h6>


                    <Link to={`/Singlepageservice/${id}`}>
                        <button type="button" class=" details-button mt-2 py-2"> Details More</button>
                    </Link>




                </div>
            </div>

        </div >
    );
};

export default Service;