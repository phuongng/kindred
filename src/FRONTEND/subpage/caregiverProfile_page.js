import React, { useState } from 'react';
import Navbar from "../components/navbar";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import "../subpage/subpage_css/caregiverProfile.css";

function CaregiverProfile() {
    const [caregivers, setCaregivers] = useState([
        { 
            name: "", 
            title: "", 
            rating: 0, 
            review: 0, 
            total_patients: 0, 
            year_experience: 0, 
            about_me: "", 
            services_offered: "" 
        }
    ]);
    const [activeOptions, setActiveOptions] = useState([]);

    const handleClick = (id) => {
        if (activeOptions.includes(id)) {
            setActiveOptions(activeOptions.filter(option => option !== id));
        } else {
            setActiveOptions([...activeOptions, id]);
        }
    };

    return(
        <>
            <Navbar />
            <div className="caregiver-profile">
                <div className="caregiver-profile-1">
                    <div className='caregiverProfile-image-container'>
                        <img className="caregiverProfiler-image"></img>
                    </div>
                
                    <div className="caregiver-name">
                        <p className='giver-name'>{caregivers[0].name}</p>
                        <p className='giver-title'>{caregivers[0].title}</p>
                        <div>
                            <FaStar /> <span>{`${caregivers[0].rating} / 5 (${caregivers[0].review} reviews)`}</span>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="caregiver-profile-2">
                    <div className="caregiver-profile-2-container" >
                        <div className="profile-2-icon-container"> 
                            <FaUser className="profile-2-icon" />
                        </div>
                    
                        <p>{caregivers[0].total_patients}+</p>
                        <p>Patients</p>
                    </div>

                    <div className="caregiver-profile-2-container">
                        <div className="profile-2-icon-container">
                            <FaCalendarCheck className="profile-2-icon"/>
                        </div>
                    
                        <p>{caregivers[0].year_experience}+</p>
                        <p>Years</p>
                    </div>

                    <div className="caregiver-profile-2-container" >
                        <div className="profile-2-icon-container">
                            <FaStar className="profile-2-icon"/> 
                        </div>
                            
                        <p>{caregivers[0].rating}</p>
                        <p>Rating</p>
                    </div>

                    <div className="caregiver-profile-2-container">
                        <div className="profile-2-icon-container">
                            <RiMessage2Fill className="profile-2-icon"/> 
                        </div>
                    
                        <p>{caregivers[0].review}+</p>
                        <p>Reviews</p>
                    </div>  
                </div>
                
                <div className="caregiver-profile-3">
                    <h3>About me</h3>
                    <p>{caregivers[0].about_me}</p>
                </div>

                <div className="caregiver-profile-4">
                    <h3>Services Offered</h3>

                    <div className="service-list">
                        <p className={activeOptions.includes('option1') ? 'active' : ''} onClick={() => handleClick('option1')}>Perconal Care Assistance</p>
                        <p className={activeOptions.includes('option2') ? 'active' : ''} onClick={() => handleClick('option2')}>Mobility Aid</p>
                        <p className={activeOptions.includes('option3') ? 'active' : ''} onClick={() => handleClick('option3')}>Errands</p>
                        <p className={activeOptions.includes('option4') ? 'active' : ''} onClick={() => handleClick('option4')}>Medication Management</p>
                        <p className={activeOptions.includes('option5') ? 'active' : ''} onClick={() => handleClick('option5')}>Catheter Care</p>
                        <p className={activeOptions.includes('option6') ? 'active' : ''} onClick={() => handleClick('option6')}>Emotional Support</p>
                    </div>
                </div>

                <div>
                    <button className='big-button'><a href="/booking">Schedule Services</a></button>
                </div>
            </div>
        </>
    )
}

export default CaregiverProfile;
