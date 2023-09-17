import React from 'react';
import './Features.css';
import shape from './features-shape.png';
const Features = () => {
    return (
        <>
            <div className="features-area pt-100 pb-75">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-features-card">
                            <div className="icon">
                                <i className="flaticon-doctor"></i>
                            </div>
                            <h3>
                                <a href="doctors-details.html">Qualified doctors</a>
                            </h3>
                            <p>Viamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>

                            <div className="features-shape">
                                <img src={shape} alt="shape" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-features-card">
                            <div className="icon">
                                <i className="flaticon-emergency"></i>
                            </div>
                            <h3>
                                <a href="department-details.html">Urgent care</a>
                            </h3>
                            <p>Viamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>

                            <div className="features-shape">
                                <img src={shape} alt="shape" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-features-card">
                            <div className="icon">
                                <i className="flaticon-laboratory"></i>
                            </div>
                            <h3>
                                <a href="department-details.html">Primary care</a>
                            </h3>
                            <p>Viamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>

                            <div className="features-shape">
                                <img src={shape} alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </>
    );
};

export default Features;