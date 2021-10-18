import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setSetvices] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setSetvices(data))
    }, [])
    return (
        <div className="container">
            <div className="text-center my-4 py-4">
                <h2 className="Service-heading pb-3">Welcome to Rehana Medical College Hospital
                </h2>

                <h4 className="services">Rehana-mch Services</h4>
                <hr className="underline" />
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.slice(0, 6).map(service => <Service

                        key={service.key}
                        service={service}


                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;