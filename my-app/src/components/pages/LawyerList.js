import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LawyerList.css';
import image from '../images/dp1.jpg';
import image2 from '../images/customer-img.png';
import image3 from '../images/blog-img.png';
import image4 from '../images/contact-img.png';

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
      name: 'Mir Raafay Ali Shaikh',
      description: "Hi there, I'm an Advocate from Karachi!",
      imgSrc: image,
      email: 'adnansaqib205@gmail.com',
      whatsappLink: 'https://wa.me/your-whatsapp-number'
    },
    {
      name: 'Noor Alam Khatri',
      description: "Hi there! I'm an Advocate from Karachi.",
      imgSrc: image2,
      email: 'adnansaqib205@gmail.com',
      whatsappLink: 'https://wa.me/your-whatsapp-number'
    },
    {
      name: 'Umar Zakir Khan',
      description: "Hi there! I'm an Advocate from Kohat.",
      imgSrc: image3,
      email: 'adnansaqib205@gmail.com',
      whatsappLink: 'https://wa.me/your-whatsapp-number'
    },
    {
      name: 'Mir Raafay Ali Shaikh',
      description: "Hi there, I'm an Advocate from Karachi!",
      imgSrc: image,
      email: 'adnansaqib205@gmail.com',
      whatsappLink: 'https://wa.me/your-whatsapp-number'
    },
    {
      name: 'Noor Alam Khatri',
      description: "Hi there! I'm an Advocate from Karachi.",
      imgSrc: image2,
      email: 'adnansaqib205@gmail.com',
      whatsappLink: 'https://wa.me/your-whatsapp-number'
    },
    {
      name: 'Umar Zakir Khan',
      description: "Hi there! I'm an Advocate from Kohat.",
      imgSrc: image3,
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
              <div className="card-img-top bg-cover" style={{ backgroundImage: `url(${image4})`, height: '200px' }}></div>
              <img src={profile.imgSrc} alt={profile.name} className="profile-img rounded-circle mx-auto border border-white" />
              <div className="card-body">
                <h5 className="card-title">{profile.name}</h5>
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
