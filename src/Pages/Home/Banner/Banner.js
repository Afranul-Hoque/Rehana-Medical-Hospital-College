import React from 'react';
import './Banner.css';
import img1 from '../../../Images/Banner/img1.jpg';
import img2 from '../../../Images/Banner/img2.jpg';
import img3 from '../../../Images/Banner/img3.jpg';
import img4 from '../../../Images/Banner/img4.jpg';

const Banner = () => {
    return (
        <div >
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active banner-section">
                        <img src={img4} className="d-block w-100 banner-img " alt="..." />
                        <div className="carousel-caption d-none d-md-block banner-description">
                            <h5>Rehana Medical College Hospital</h5>
                            <p>We are ready to serve you.</p>
                        </div>
                    </div>
                    <div className="carousel-item banner-section">
                        <img src={img2} className="d-block  banner-img w-100" alt="..." />
                        <div className="carousel-caption d-none banner-description d-md-block">
                            <h5>Special beds are present here</h5>
                            <p>Last week we added 50 more special beds in here.</p>
                        </div>
                    </div>
                    <div className="carousel-item banner-section">
                        <img src={img3} className="d-block  banner-img w-100" alt="..." />
                        <div className="carousel-caption banner-description d-none d-md-block">
                            <h5>Using best Machines here</h5>
                            <p>Best Machine gives you an accurate results of your health condition</p>
                        </div>
                    </div>
                    <div className="carousel-item banner-section">
                        <img src={img1} className="d-block banner-img w-100" alt="..." />
                        <div className="carousel-caption banner-description d-none d-md-block">
                            <h5>Our Doctors and Nurses</h5>
                            <p>They are always ready for your call</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;