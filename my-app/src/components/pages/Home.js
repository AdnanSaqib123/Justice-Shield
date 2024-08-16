import React from 'react'
import './Home.css'
import image from '../images/banner-img.png';

const Home = () => {
    return (
        <div id="home" className="header_section">
            <div className="container-fluid">
                <div className="banner_section layout_padding">
                    <div className="container-fluid">
                        <div id="banner_slider" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="banner_taital_main">
                                                <h1 className="banner_taital">We Provide Law Practice</h1> 
                                                <p className="banner_text">
                                                    Experienced attorneys providing effective legal
                                                    representation tailored to your unique needs.
                                                </p>
                                                <br />
                                                <div className="both-btn">
                                                    <div className="readmore_btn active">
                                                        <a href="#">Read More</a>
                                                    </div>
                                                    <div className="started_bt">
                                                        <a href="#">Contact Us</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="banner_img">
                                                <img src={image} alt="Banner" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
