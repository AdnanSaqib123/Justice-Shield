import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <a href="#" className="logo">
                {/* <img src="./images/Justice Shield.jpg" alt="logo img" /> */}
            </a>
            <i className="bx bx-menu" id="menu-icon"></i>
            <nav className="navbar">
                <Link to="/" className="active">HOME</Link>
                <Link to="/askquestions" >ASK QUESTIONS</Link>
                <Link to="/lawyerlist" >LAWYER LIST</Link>
                <Link to="/ourclients" >OUR CLIENTS</Link>
                <Link to="/ourservices" >OUR SERVICES</Link>
                <Link to="/aboutus" >ABOUT US</Link>
                <Link to="/contactus" >CONTACT US</Link>
            </nav>
        </header>
    )
}

export default Header
