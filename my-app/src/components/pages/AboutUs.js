import React from 'react'
import './AboutUs.css'
import aboutImg from '../images/about-img.png';

const AboutUs = () => {
  return (
    <div className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_img">
              <img src={aboutImg} alt="About Us" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about_text_main">
              <h1 className="about_taital">About Us</h1>
              <p className="about_text">
                Our legal team has a wealth of experience in a variety of practice areas, including [list practice areas], and we are equipped to handle even the most challenging legal matters. We take pride in our ability to provide effective legal representation that is tailored to each client's unique needs, and we are committed to maintaining the highest standards of professionalism and integrity in all that we do.
              </p>
              <div className="readmore_bt">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
