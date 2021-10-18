import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, img, Service, Specialist, Number } = props.service;
    return (
        <div >
            <div className="card service-img card-description">
                <img src={img} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p>The Department of <span className="service-name">{name} </span> at Anwer Khan Modern Medical College Hospital has a highly skilled team of Gastroenterologists.</p>
                    <p>Specialist: <span className="specialist-name">{Specialist}</span> </p>
                    <h5>Service: {Service}</h5>
                    <h6>Contact: {Number}</h6>

                    <button type="button" class=" details-button"> Details More</button>


                </div>
            </div>

        </div >
    );
};

export default Service;