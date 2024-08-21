import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import image from '../components/images/Justice Shield.jpg';

const Header = () => {
    return (
        <header className="header navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    <img src={image} alt="logo img" className="logo-img" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <nav className="navbar-nav ms-auto">
                        <NavLink
                            to="/"
                            className="nav-link"
                            activeClassName="active"
                            exact
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            to="/askquestions"
                            className="nav-link"
                            activeClassName="active"
                        >
                            ASK QUESTIONS
                        </NavLink>
                        <NavLink
                            to="/lawyerlist"
                            className="nav-link"
                            activeClassName="active"
                        >
                            LAWYER LIST
                        </NavLink>
                        <NavLink
                            to="/ourclients"
                            className="nav-link"
                            activeClassName="active"
                        >
                            OUR CLIENTS
                        </NavLink>
                        <NavLink
                            to="/ourservices"
                            className="nav-link"
                            activeClassName="active"
                        >
                            OUR SERVICES
                        </NavLink>
                        <NavLink
                            to="/aboutus"
                            className="nav-link"
                            activeClassName="active"
                        >
                            ABOUT US
                        </NavLink>
                        <NavLink
                            to="/contactus"
                            className="nav-link"
                            activeClassName="active"
                        >
                            CONTACT US
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
