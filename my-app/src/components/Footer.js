import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container d-flex justify-content-between align-items-center flex-wrap">
                <div className="footer-text">
                    <p className="mb-0">Copyright &copy; 2024 by Justice Shield | All Rights Reserved.</p>
                </div>
                <div className="footer-iconTop">
                    <button
                        onClick={scrollToTop}
                        className="btn btn-outline-light rounded-circle p-0"
                        style={{ fontSize: '0.4rem' }}
                    >
                        <i className='bx bx-up-arrow-alt'></i>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
