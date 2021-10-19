import React from 'react';
import { Link } from 'react-router-dom';

const Pagenotfound = () => {
    return (
        <div>
            <h3>Sorry this page is not found here</h3>
            <Link to="/home">Go back Home </Link>
        </div>
    );
};

export default Pagenotfound;