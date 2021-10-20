import React from 'react';
import doctors1 from '../../Images/Doctors/doctors1.jpg';
import doctors2 from '../../Images/Doctors/doctors2.jpg';
import doctors3 from '../../Images/Doctors/doctors3.jpg';
import doctors4 from '../../Images/Doctors/doctors4.jpg';
import './Doctors.css'

const Doctors = () => {
    return (
        <div className="mx-4 mt-5 pt-5 doctor-section">
            <div className="mb-4 pb-3 text-center">
                <h3>Our Specialist Doctors</h3>
            </div>
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="card" >
                                        <img src={doctors1} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h4 class="card-title">Maria ban</h4>
                                            <h6>Child Specialist</h6>
                                            <p class="card-text">MBBS - Dhaka Medical Hospital, </p>
                                            <h5>Professor: Dhaka Medical Hospital</h5>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div class="card" >
                                        <img src={doctors2} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h4 class="card-title">Khairul Amin</h4>
                                            <h6>Sex  Specialist</h6>
                                            <p class="card-text">MBBS - Cumilla Medical Hospital, </p>
                                            <h5>Professor: Square Medical Hospital</h5>

                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>

                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="card" >
                                        <img src={doctors3} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h4 class="card-title">Muktar Ali</h4>
                                            <h6>Gainocologist Specialist</h6>
                                            <p class="card-text">MBBS - Rajshahi Medical Hospital, FSPS(CANADA) </p>
                                            <h5>Professor: Dhaka Medical Hospital</h5>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div class="card" >
                                        <img src={doctors4} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h4 class="card-title">Professor Dr. Salam Siddique</h4>
                                            <h6>Brain Specialist</h6>
                                            <p class="card-text">MBBS - American Medical Hospital, MSP(USA) </p>
                                            <h5>Professor: Dhaka Medical Hospital</h5>

                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Doctors;