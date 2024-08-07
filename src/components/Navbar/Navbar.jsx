import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBell } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome bell icon
import SignupCard from '../signup/signup';
import LoginCard from '../login/login';
import brand from '../Assets/brand-logo.png';

const Navbar = () => {
  const [isSignInClicked, setIsSignInClicked] = useState(false);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [isCorporateDropdownOpen, setCorporateDropdownOpen] = useState(false);
  const [isProvidersDropdownOpen, setProvidersDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const corporateDropdownRef = useRef(null);
  const providersDropdownRef = useRef(null);

  const toggleCorporateDropdown = () => setCorporateDropdownOpen(!isCorporateDropdownOpen);
  const toggleProvidersDropdown = () => setProvidersDropdownOpen(!isProvidersDropdownOpen);

  const [showPopup, setShowPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleShowLoginPopup = () => setShowLoginPopup(true);
  const handleCloseLoginPopup = () => setShowLoginPopup(false);
  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const handleClickOutside = (event) => {
    if (corporateDropdownRef.current && !corporateDropdownRef.current.contains(event.target)) {
      setCorporateDropdownOpen(false);
    }
    if (providersDropdownRef.current && !providersDropdownRef.current.contains(event.target)) {
      setProvidersDropdownOpen(false);
    }
  };

  const handleSignInClick = () => {
    setIsSignInClicked(true);
    setIsRegisterClicked(false);
  };

  const handleRegisterClick = () => {
    setIsRegisterClicked(true);
    setIsSignInClicked(false);
  };

  const handleCloseSignupCard = () => {
    setIsSignInClicked(false);
  };

  const handleCloseLoginCard = () => {
    setIsRegisterClicked(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('doctorId');
    sessionStorage.removeItem('doctorEmail');
    sessionStorage.removeItem('role');
    setIsLoggedIn(false);
    navigate('/'); // Redirect to home or login page after logout
  };

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('loggedIn') === 'true';
    setIsLoggedIn(loggedIn);

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light navbar-head-style">
          <a className="navbar-brand" href="#"><img src={brand} alt="Brand Logo" height="36px" className='brand-img' /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto nav-ul">
              <li className="nav-item active ml-md-4">
                <Link className="find-doctor nav-link nav-link-style" to="#">Find Doctor</Link>
              </li>
              <li className="nav-item active ml-md-4">
                <Link className="about-nav nav-link nav-link-style " to="#">About</Link>
              </li>
              <li className="nav-item dropdown active ml-md-4" ref={corporateDropdownRef}>
                <Link className="for-corporates nav-link nav-link-style dropdown-toggle" to="#" role="button" onClick={toggleCorporateDropdown}>
                  For Corporates
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </Link>
              </li>
              <li className="nav-item dropdown active ml-md-4" ref={providersDropdownRef}>
                <Link className="for-providers nav-link nav-link-style dropdown-toggle" to="#" role="button" onClick={toggleProvidersDropdown}>
                  For Providers
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </Link>
              </li>
            </ul>
            {!isLoggedIn && (
              <ul className="navbar-nav ml-auto mr-md-2">
                <li className="nav-item ml-md-4">
                  <button type="button" className="btn nav-signin-button" onClick={handleShowLoginPopup}>Sign In</button>
                </li>
                <li className="nav-item ml-md-3">
                  <button type="button" className="btn nav-register-button" onClick={handleShowPopup}>Register</button>
                </li>
              </ul>
            )}
            {isLoggedIn && (
              <ul className="navbar-nav ml-auto mr-md-2">
              
                <li className="nav-item ml-md-4">
                  <div className='dashboard-setting-bell'>
                  <button type="button" className="btn nav-notification-button">
                    <FontAwesomeIcon icon={faBell} />
                  </button>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </nav>
        {isSignInClicked && (
          <div className="blur-background">
            <LoginCard onClose={handleCloseSignupCard} onSwitchToSignup={handleRegisterClick} />
          </div>
        )}
        {isRegisterClicked && (
          <div className="blur-background">
            <SignupCard onCloseSignupCard={handleCloseLoginCard} onSwitchToLogin={handleSignInClick} />
          </div>
        )}
      </header>
      <SignupCard show={showPopup} handleClose={handleClosePopup} />
      <LoginCard show={showLoginPopup} handleClose={handleCloseLoginPopup} />
    </>
  );
}

export default Navbar;
