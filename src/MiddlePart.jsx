import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import maledoc3 from './assests/img/maledoc3.png'
import femaledoc3 from './assests/img/femaledoc3.png'
import doctorProfile1 from './assests/img/Ellipse-30.png'
import doctorProfile2 from './assests/img/doctor-profile-2.png'
import doctorProfile3 from './assests/img/Ellipse-29.png'
import doctorProfile4 from './assests/img/doctor-profile-4.png'
import smallbar from './assests/img/smallbar.png'
import largebar from './assests/img/largebar.png'
import xImage from './assests/img/x-image.png'
import './assests/MiddlePart2.css'
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Midpopup from './Midpopup'

const MiddlePart = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      const reveal2Elements = document.querySelectorAll('.reveal-2');
      
      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom >= 0) {
          element.classList.add('reveal_visible');
        }
      });
      
      reveal2Elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom >= 0) {
          element.classList.add('reveal_visible-2');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <div className='main-section'>
      <div className="x-image1">
        {/* <img src={xImage} alt="X-Image" className="overlay" /> */}
      </div>
      <div className='container mid-container'>
        <div className="row mt-5 d-flex flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6 col-first pt-lg-5">
            {/* <div className="heading">LOREM ISPUM</div> */}
            <div className="main-heading">Where Providers Connect, Earn, and Grow</div>
            <div className="description">Every day, medical providers across various specialties confront a myriad of challenges that go beyond patient care. Administrative burdens, such as managing schedules and processing payments, consume precious hours, with studies showing that doctors spend two hours on paperwork for every hour they engage with patients</div>
            <div className="check-list my-5">
              <div className='list d-flex'>
                <FontAwesomeIcon className='mx-3 fa-size' icon={faCircleCheck} style={{ color: "#0167ff", }} />
                <p >Connect with Colleagues and Enhance Care.</p>
              </div>
              <div className="list d-flex">
                <FontAwesomeIcon className='mx-3 fa-size' icon={faCircleCheck} style={{ color: "#0167ff", }} />
                <p>Earn More and Expand Your Reach</p>
              </div>
              <div className="list d-flex">
                <FontAwesomeIcon className='mx-3 fa-size' icon={faCircleCheck} style={{ color: "#0167ff", }} />
                <p>Grow Your Practice with Confidence</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className=' d-flex flex-row justify-content-end'>
              <div className="overlay-container">
                <img
                  src={maledoc3}
                  alt="overlay"
                  className="overlay-image"
                />
              </div>
            </div>
            <div className=" reveal reveal-card">
              <Card className="reveal-profile-card card-1">
                <Card.Body>
                  <Card.Title className="card-title">
                    <img src={doctorProfile3} alt="Doctor Profile" className="doctor-profile-img" />
                    <span className="profile-name">Dr. Mehmet Akinci</span>
                  </Card.Title>
                  <p className="bar-image-1"><img src={largebar} alt="Large Bar" /></p>
                  <p className="bar-image-2"><img src={smallbar} alt="Small Bar" /></p>
                </Card.Body>
              </Card>
              <Card className="reveal-profile-card card-2">
                <Card.Body>
                  <Card.Title className="card-title ">
                    <img src={doctorProfile1} alt="Doctor Profile" className="doctor-profile-img" />
                    <span className="profile-name">Dr. Andrew Miller</span>
                  </Card.Title>
                  <p className="bar-image-1"><img src={largebar} alt="Large Bar" /></p>
                  <p className="bar-image-2"><img src={smallbar} alt="Small Bar" /></p>
                  <Card.Title className="card-title ">
                    <img src={doctorProfile2} alt="Doctor Profile" className="doctor-profile-img" />
                    <span className="profile-name">Dr. Cameron Wilson</span>
                  </Card.Title>
                  <p className="bar-image-1"><img src={largebar} alt="Large Bar" /></p>
                  <p className="bar-image-2"><img src={smallbar} alt="Small Bar" /></p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="row midSecondRow">
          <div className="col-12 col-md-6 mt-5 d-flex flex-row justify-content-start">
            <div className="overlay-container-2">
              <img
                src={femaledoc3}
                alt="overlay2"
                className="overlay-image-2"
              />
            </div>
            <div className="reveal-2 reveal-card-2 " >
            <Card className="reveal-profile-card card-3">
                <Card.Body>
                  <Card.Title className="card-title-2">
                    <img src={doctorProfile4} alt="Doctor Profile" className="doctor-profile-img" />
                    <span className="profile-name-2">Dr. Mamtha</span>
                  </Card.Title>
                  <p className="bar-image-1 "><img src={largebar} alt="Large Bar" /></p>
                  <p className="bar-image-2"><img src={smallbar} alt="Small Bar" /></p>
                  <Card.Text>Specialities</Card.Text>
                  <p className="bar-image-3 "><img src={largebar} alt="Large Bar" /></p>
                  <p className="bar-image-5 "><img src={largebar} alt="Large Bar" /></p>
                  <Card.Text>Detailed profile</Card.Text>
                  <p className="bar-image-4"><img src={largebar} alt="Large Bar" /></p>
                  <p className="bar-image-6"><img src={largebar} alt="Large Bar" /></p>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-12 col-md-6 col-second mt-5 pt-lg-5 d-flex flex-column justify-content-center">
            {/* <div className="heading">LOREM ISPUM</div> */}
            <div className="main-heading"> Become your own health advocate</div>
            <div className="description">Navigating today’s healthcare landscape can feel like an uphill battle for many patients. From the frustration of finding trustworthy healthcare providers to the confusion and uncertainty caused by misinformation online, the challenges are daunting.</div>
            <div className="check-list my-5">
              <div className='list d-flex'>
                <FontAwesomeIcon className='mx-3 fa-size' icon={faCircleCheck} style={{ color: "#0167ff", }} />
                <p >Real-Time Appointment Booking.</p>
              </div>
              <div className="list d-flex">
                <FontAwesomeIcon className='mx-3 fa-size' icon={faCircleCheck} style={{ color: "#0167ff", }} />
                <p>Telemedicine Services.</p>
              </div>
              <div className="list d-flex">
                <FontAwesomeIcon className='mx-3 fa-size' icon={faCircleCheck} style={{ color: "#0167ff", }} />
                <p>Automated Reminders.</p>
              </div>
            </div>
             <div className="btn-div">
                <button className='btn btn-primary' onClick={handleShowPopup}>Know more</button>
              </div>
          </div>
          <div className="x-image2" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            {/* <img src={xImage} alt="X-Image" className="overlay" /> */}
          </div>
        </div>
      </div>
    </div>
    <Midpopup show={showPopup} handleClose={handleClosePopup} />

    </>
  )
}

export default MiddlePart


