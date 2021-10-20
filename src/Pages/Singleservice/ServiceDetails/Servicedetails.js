import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Servicedetails = () => {
    const { serviceId } = useParams();
    const { details, setDetals } = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDetals(data))
    }, [])


    // useEffect(() => {
    //     const showDetails = details.find(detail => detail.id === +serviceId)
    //     console.log(showDetails);

    // }, [])

    return (
        <div>
            <div>
                <h2 className="Service-heading pb-3">Welcome to Rehana Medical College Hospital
                </h2>
                <h4 className="services">Show Services Details</h4>
            </div>
            <h3>hi service:{serviceId}</h3>

        </div>
    );
};

export default Servicedetails;