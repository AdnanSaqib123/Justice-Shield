import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LawyerList.css';
import dp1 from '../images/dp1.jpg';
import dp2 from '../images/dp2.png';
import dp3 from '../images/dp3.jpg';
import dp4 from '../images/dp4.jpg';
import dp5 from '../images/dp5.jpg';
import dp6 from '../images/dp6.jpg';
import bg1 from '../images/karachiheighcourt-img.jpg';
import bg2 from '../images/peshwarheighcourt-img.jpg';
import bg3 from '../images/lahoreheighcourt-img.jpg';
import bg4 from '../images/banner5-img.jpg';
import bg5 from '../images/banner6-img.jpg';
import bg6 from '../images/banner2-img.jpg';

const LawyerList = () => {
  const [showMore, setShowMore] = useState({});

  const handleReadMore = (index) => {
    setShowMore((prev) => ({ ...prev, [index]: true }));
  };

  const handleLess = (index) => {
    setShowMore((prev) => ({ ...prev, [index]: false }));
  };

  const profiles = [
    {
      bgimage: bg1,
      name: 'Mir Raafay Ali Shaikh',
      description: "Hi there, I'm an Advocate from Karachi!",
      imgSrc: dp1,
      email: 'adnansaqib205@gmail.com',
      whatsappLink: 'https://wa.me/your-whatsapp-number'
    },
    {
      bgimage: bg2,
      name: 'Noor Alam Khatri',
      description: "Hi there! I'm an Advocate from Peshawar.",
      imgSrc: dp2,
      email: 'adnansaqib205@gmail.com',
      whatsappLink: 'https://wa.me/your-whatsapp-number'
    },
    {
      bgimage: bg3,
      name: 'Umar Zakir Khan',
      description: "Hi there! I'm an Advocate from Lahore.",
      imgSrc: dp3,
      email: 'adnansaqib205@gmail.com',
      whatsappLink: 'https://wa.me/your-whatsapp-number'
    },
    {
      bgimage: bg4,
      name: 'Muhammad Ali',
      description: "Hi there, I'm an Advocate from Rawalpindi.",
      imgSrc: dp4,
      email: 'adnansaqib205@gmail.com',
      whatsappLink: 'https://wa.me/your-whatsapp-number'
    },
    {
      bgimage: bg5,
      name: 'Muhammad Ilyas',
      description: "Hi there! I'm an Advocate from Islamabad.",
      imgSrc: dp5,
      email: 'adnansaqib205@gmail.com',
      whatsappLink: 'https://wa.me/your-whatsapp-number'
    },
    {
      bgimage: bg6,
      name: 'Ch Sheraz Hassan',
      description: "Hi there! I'm an Advocate from Kohat.",
      imgSrc: dp6,
      email: 'adnansaqib205@gmail.com',
      whatsappLink: 'https://wa.me/your-whatsapp-number'
    }
  ];

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        {profiles.map((profile, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card text-center mb-25 shadow-sm">
              <img src={profile.bgimage} alt={profile.bg} className="card-img-top bg-cover height: '200px'" />
              <img src={profile.imgSrc} alt={profile.name} className="profile-img rounded-circle mx-auto border border-white" />
              <div className="card-body">
                <h5 className="card-title fs-1">{profile.name}</h5>
                <p className="card-text">{profile.description}</p>
                {!showMore[index] ? (
                  <a href="#" className="bg-custom-dark-blue" onClick={(e) => { e.preventDefault(); handleReadMore(index); }}>
                    <i className='bx bx-chevrons-down fs-3'></i>
                  </a>
                ) : null}
                <div className={`read-more-container ${showMore[index] ? 'show' : ''}`}>
                  <p className="email">Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
                  <a href={profile.whatsappLink} className="btn btn-success mb-3">
                    <i className='bx bxl-whatsapp'></i>
                  </a>
                  {showMore[index] && (
                    <a href="#" className="bg-custom-dark-blue fs-3 mt-3" onClick={(e) => { e.preventDefault(); handleLess(index); }}>
                      <i className='bx bx-chevrons-up fs-3'></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LawyerList;
