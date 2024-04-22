import React, { useState } from 'react';
import "./navbar_css/user.css";
import Navbar from "../components/navbar";
import { MdNotificationsNone } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
function User_dashboard() {
  const [caregiver, setCaregiver] = useState([
    { name: "Adelina", day: "March 3", time: "10AM" }
  ]);
   
  return (
   <>
   <Navbar />
   <div className='user-dashboard'>
    <div className="dashboard-notification">
        <div className="small-profile-image">
          <img className="user-image"></img>
        </div>
        <div className="welcome-user">
        <p><b>Hello, user</b></p>
        <p>Welcome to your care dashboard!</p>
        </div>

        <div className="nofi-icon-container">
          <MdNotificationsNone className="nofi-icon" />
          {/* <MdNotificationsActive /> */}
        </div>
        
      </div>

      {/* upcoming appointment */}
      <div className='upcoming-appointment'> 
        <div className='upcoming-appointment-left'>
        <h3>Upcomming Appointment</h3>
          <p>{caregiver.name}</p>
          <p>{caregiver.day}</p>
          <p>{caregiver.time}</p>

        </div>

        <div className='upcoming-appointment-right'>
          <img src='' ></img>
          <p className='message-icon-container'><a href='/message'>Message</a> <IoIosSend className='message-icon'/></p>
         
        </div>
       
      </div>

      <div className='edit-account-button'>
        <button className='medium-button'><a href="/home">Edit Care Preferences  </a></button>
        <button className='medium-button'><a href="/booking">Edit Booking  </a></button>
      </div>

      <div className='addtional-question'>
        <h4>Need more care?</h4>
        <p>Check out your saved providers or explore others.</p>
      </div>
      

      <div className='caregiver-list'>

      </div>

      <p><a href="/caregiver">See more</a></p>

   </div>
   
   </>
  );
}

export default User_dashboard;
