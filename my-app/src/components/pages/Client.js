import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css'; // Import Boxicons
import './Client.css';
import image from '../images/customer-img.png';

const reviews = [
    {
        name: 'Giolio Mark',
        text: 'Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
        img: image,
    },
    {
        name: 'DenoMark',
        text: 'Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
        img: image,
    },
    {
        name: 'DenoMark',
        text: 'Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
        img: image,
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
        <div id="ourClients" className="container py-5">
            <h1 className="text-center text-primary font-weight-bold mb-5">CLIENT REVIEWS</h1>

            <div id="carouselExampleControls" className="carousel slide">
                <div className="carousel-inner">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                        >
                            <div className="d-flex align-items-center justify-content-center p-3">
                                <div className="d-flex flex-column flex-md-row align-items-start">
                                    <div className="mr-md-3">
                                        <img src={review.img} alt="Customer" className="img-fluid" />
                                    </div>
                                    <div>
                                        <h3 className="font-weight-bold text-danger d-flex align-items-center">
                                            {review.name}
                                            {/* <img src={review.icon} alt="Quick Icon" className="ml-2" /> */}
                                        </h3>
                                        <p className="text-dark mt-2">{review.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    onClick={handlePrev}
                >
                    <i className=" carousel-control-prev-icon"></i>
                    <span className="sr-only"></span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    onClick={handleNext}
                >
                    <i className=" carousel-control-next-icon"></i>
                    <span className="sr-only"></span>
                </a>
            </div>
        </div>
    );
};

export default Client;
