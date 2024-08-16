import React, { useState } from 'react';
import './LawyerList.css';
import image from '../images/dp1.jpg';       // Import the local images
import image2 from '../images/customer-img.png';
import image3 from '../images/blog-img.png';

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
      facebookLink: 'https://www.facebook.com/your-facebook-link'
    },
    {
      name: 'Noor Alam Khatri',
      description: "Hi there! I'm an Advocate from Karachi.",
      imgSrc: image2,
      email: 'adnansaqib205@gmail.com',
      facebookLink: 'https://www.facebook.com/your-facebook-link'
    },
    {
      name: 'Umar Zakir Khan',
      description: "Hi there! I'm an Advocate from Kohat.",
      imgSrc: image3,
      email: 'adnansaqib205@gmail.com',
      facebookLink: 'https://www.facebook.com/your-facebook-link'
    }
  ];

  return (
    <div className="lawyer-list-container">
      {profiles.map((profile, index) => (
        <div className="card" key={index}>
          <div className="background">
            <img src={profile.imgSrc} alt={profile.name} className="profile-img" />
          </div>
          <div className="info">
            <h2 className="name">{profile.name}</h2>
            <p className="description">{profile.description}</p>
            {!showMore[index] ? (
              <a href="#" className="read-more" onClick={(e) => { e.preventDefault(); handleReadMore(index); }}>
                <i className='bx bx-chevrons-down'></i>
              </a>
            ) : null}
            <div className={`read-more-container ${showMore[index] ? 'show' : ''}`}>
              <p className="email">Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
              <a href={profile.facebookLink} className="facebook-link">Visit Facebook Page</a>
              {showMore[index] && (
                <a href="#" className="less" onClick={(e) => { e.preventDefault(); handleLess(index); }}>
                  <i className='bx bx-chevrons-up'></i>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LawyerList;
