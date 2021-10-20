import React from 'react';
import Doctors from '../Doctors/Doctors';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const Doctor = () => {
    return (
        <div>
            <Header></Header>
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default Doctor;