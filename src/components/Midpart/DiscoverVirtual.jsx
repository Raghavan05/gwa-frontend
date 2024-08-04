import React from 'react';
import './DiscoverVirtual.css';
import ConsultationIcon from '../../assests/img/consultation-icon.png'
import SignupIcon from '../../assests/img/Signup-icon.png'
import CalendarIcon from '../../assests/img/calendar.png'

const DiscoverVirtual = () => {
    return (
        <div className="discover-virtual">
          <h1>Discover Virtual</h1>
          <p>Your Health, Your Convenience, Anytime, Anywhere</p>
          <div className="steps-container">
            <div className="step">
              <div className="step-number-container">
                <div className="step-number">1</div>
                <div className="step-line"></div>
              </div>
              <img src={SignupIcon} alt="Sign Up" className="step-icon" />
              <h2>Sign up or Log in</h2>
              <p>Easily create an account or log in securely to get started.</p>
            </div>
            <div className="step">
              <div className="step-number-container">
                <div className="step-number">2</div>
                <div className="step-line"></div>
              </div>
              <img src={CalendarIcon} alt="Book Appointment" className="step-icon" />
              <h2>Book Your Appointment</h2>
              <p>Browse doctors by specialty, read reviews, and pick a convenient time.</p>
            </div>
            <div className="step">
              <div className="step-number-container">
                <div className="step-number">3</div>
                {/* <div className="step-line"></div> */}
              </div>
              <img src={ConsultationIcon} alt="Virtual Consultation" className="step-icon" />
              <h2>Start Your Virtual Consultation</h2>
              <p>Join from any device at any time and consult with your doctor comfortably from your home.</p>
            </div>
          </div>
        </div>
      );
    }
    
    export default DiscoverVirtual;
    