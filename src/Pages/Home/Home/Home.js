import React from 'react';
import Doctors from '../../Doctors/Doctors';
import Ambulance from '../Ambulance/Ambulance';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Ambulance></Ambulance>
            <Footer></Footer>

        </div>
    );
};

export default Home;