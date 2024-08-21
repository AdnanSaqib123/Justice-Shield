import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurServices.css';

const OurServices = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center s-title">Our Services</h2>
      <div className="row mt-4">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="service text-center">
            <i className='bx bx-home-heart'></i>
            <h3>Family</h3>
            <ul>
              <li>Court Marriage</li>
              <li>Divorce / Khula</li>
              <li>Maintenance</li>
              <li>Guardianship Certificate</li>
              <li>Child Custody</li>
              <li>Child Adoption</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="service text-center">
            <i className='bx bx-car'></i>
            <h3>Personal Injury</h3>
            <ul>
              <li>Car Accident</li>
              <li>Medical Malpractice</li>
              <li>Wrongful Death</li>
              <li>Negligence</li>
              <li>Wrongful Detention</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="service text-center">
            <i className='bx bx-shield'></i>
            <h3>Criminal Defense</h3>
            <ul>
              <li>DUI And DWI</li>
              <li>Traffic Violation</li>
              <li>Domestic Violence</li>
              <li>Sexual Abuse / Harassment</li>
              <li>Nuisance</li>
              <li>Criminal Offences</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="service text-center">
            <i className='bx bx-briefcase'></i>
            <h3>Employment</h3>
            <ul>
              <li>Discrimination Workers</li>
              <li>Compensation Wrongful</li>
              <li>Illegal Termination</li>
              <li>Labour & Service Matters</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="service text-center">
            <i className='bx bx-home-circle'></i>
            <h3>Real Estate</h3>
            <ul>
              <li>Landlord & Tenant</li>
              <li>Sale and Acquisition of Property</li>
              <li>Property Conveyance Deeds</li>
              <li>Illegal Dispossession</li>
              <li>Tenant Eviction</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="service text-center">
            <i className='bx bx-calculator'></i>
            <h3>Taxation</h3>
            <ul>
              <li>Income Tax</li>
              <li>Sales Tax</li>
              <li>Excise Tax</li>
              <li>Property Tax</li>
              <li>Stamp Duty</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="service text-center">
            <i className='bx bx-id-card'></i>
            <h3>NAB & Anti-Corruption</h3>
            <ul>
              <li>Money Laundering</li>
              <li>Corruption Charges</li>
              <li>Appeal / Revision</li>
              <li>Inquiry / Reference</li>
              <li>Pre-Arrest Bails / Evidence</li>
              <li>Suspension of Sentence</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="service text-center">
            <i className='bx bx-briefcase'></i>
            <h3>Constitutional Petition</h3>
            <ul>
              <li>Mandamus</li>
              <li>Habeas Corpus</li>
              <li>Certiorari</li>
              <li>Prohibition</li>
              <li>Public Interest Litigation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
