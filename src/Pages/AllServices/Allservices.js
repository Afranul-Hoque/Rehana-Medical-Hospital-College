import React from 'react';
import Ambulance from '../Home/Ambulance/Ambulance';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import Services from '../Home/Services/Services';

const Allservices = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Ambulance></Ambulance>
            <Footer></Footer>
        </div>
    );
};

export default Allservices;