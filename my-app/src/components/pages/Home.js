import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';  // Ensure custom CSS complements Bootstrap
import image from '../images/banner-img.png';

const Home = () => {
    const profiles = [
        {
            whatsappLink: 'https://wa.me/your-whatsapp-number'
        }
    ];

    return (
        <div id="home" className="header_section">
            <div className="container-fluid">
                <div className="row no-gutters">
                    {/* Left Container */}
                    <div className="col-md-6 left-container d-flex flex-column justify-content-center text-center text-md-start">
                        <div className="text-content">
                            <h1 className="banner_taital">We Provide Law Practice</h1>
                            <p className="banner_text">
                                Experienced attorneys providing effective legal
                                representation tailored to your unique needs.
                            </p>
                            <div className="both-btn mt-4">
                                <a className="btn btn-primary me-2" href="#">Read More</a>
                                <a className="btn btn-secondary" href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Container */}
                    <div className="col-md-6 right-container text-center">
                        <div className="banner_img">
                            <img src={image} alt="Banner" className="img-fluid" />
                        </div>
                        {profiles.map((profile, index) => (
                            <a href={profile.whatsappLink} className="stickyicon btn btn-success mb-3">
                                <i className='bx bxl-whatsapp'></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
