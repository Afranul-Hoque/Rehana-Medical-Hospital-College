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
    //     const showDetails = details.find(detail => detail.id === serviceId)
    //     console.log(showDetails);
    //     // const show = showDetails[0];
    //     // console.log(show);
    // }, [])

    return (
        <div>
            <h3>hi service:{serviceId}</h3>
        </div>
    );
};

export default Servicedetails;