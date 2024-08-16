import React, { useState } from 'react';
import './Client.css';
import image from '../images/customer-img.png';
import image2 from '../images/quick-icon.png';

const reviews = [
    {
        name: 'Giolio Mark',
        text: 'Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
        img: image,
        icon: image2,
    },
    {
        name: 'DenoMark',
        text: 'Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
        img: image,
        icon: image2,
    },
    {
        name: 'DenoMark',
        text: 'Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
        img: image,
        icon: image2,
    },
];

const Client = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % reviews.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div id="ourClients" className="customer_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="customer_taital">CLIENT REVIEWS</h1>
                    </div>
                </div>
            </div>
            <div id="my_slider" className="carousel">
                <div className="carousel-inner">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                        >
                            <div className="customer_section_2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="box_main">
                                                <div className="customer_main">
                                                    <div className="customer_left">
                                                        <div className="customer_img">
                                                            <img src={review.img} alt="Customer" />
                                                        </div>
                                                    </div>
                                                    <div className="customer_right">
                                                        <h3 className="customer_name">
                                                            {review.name} <span className="quick_icon">
                                                                <img src={review.icon} alt="Quick Icon" />
                                                            </span>
                                                        </h3>
                                                        <p className="enim_text">{review.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><br /><br />
                        </div>
                    ))}
                </div>
                <a
                    className="carousel-control-prev"
                    href="#my_slider"
                    role="button"
                    onClick={handlePrev}
                >
                    <i className="bx bx-left-arrow-alt"></i>
                </a>
                <a
                    className="carousel-control-next"
                    href="#my_slider"
                    role="button"
                    onClick={handleNext}
                >
                    <i className="bx bx-right-arrow-alt"></i>
                </a>
            </div>
        </div>
    );
};

export default Client;
