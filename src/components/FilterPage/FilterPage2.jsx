import React from 'react'
import './FilterPage.css'
import Navbar from '../Navbar/Navbar';
const FilterPage = () => {
    const slots = ["11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"];

    return (
        <>
        <Navbar/>
            <div className="container">
                <header className="header">
                    <h1>55 doctors available in Andheri west</h1>
                    <div className="sort-by">
                        <label htmlFor="sort">Sort By</label>
                        <select id="sort">
                            <option value="relevance">Relevance</option>
                        </select>
                    </div>
                </header>
            </div>
            <div className="doctor-card">
                <div className="doctor-info">
                    <img src={'doctorPhoto'} alt="Dr. Shantanu Jambhekar" className="doctor-photo" />
                    <div className="doctor-details">
                        <h2>Dr. Shantanu Jambhekar</h2>
                        <p className="speciality">Dentist</p>
                        <p className="experience">16 years experience overall</p>
                        <p className="location">Pare, Mumbai</p>
                        <p className="clinic">Smilesense Center for Advanced Dentistry + 1 more</p>
                        <p className="availability">Available Today</p>
                        <div className="rating">
                            <span>⭐️⭐️⭐️⭐️</span>
                            <span>99% </span><span>93 Patient Stories</span>
                        </div>
                        <div className="consultation-type">
                            <span>In-Person</span>
                            <span>Video Consultation</span>
                        </div>
                    </div>
                </div>
                <div className="appointment">
                    <button className="book-button">Book Appointment</button>
                    <div className="appointment-slots">
                        <h3>Today</h3>
                        <div className="slots">
                            {slots.map((slot, index) => (
                                <button key={index} className="slot-button">{slot}</button>
                            ))}
                        </div>
                    </div>
                    <div className="appointment-slots">
                        <h3>Tomorrow</h3>
                        <div className="slots">
                            {slots.map((slot, index) => (
                                <button key={index} className="slot-button">{slot}</button>
                            ))}
                        </div>
                    </div>
                    <div className="appointment-slots">
                        <h3>Fri, 5 May</h3>
                        <div className="slots">
                            {slots.map((slot, index) => (
                                <button key={index} className="slot-button">{slot}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterPage
