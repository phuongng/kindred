import React from "react";
import "./signin-up_css/registration.css";
import { FaUpload } from "react-icons/fa6";

function Registration() {
	return(
		<>
		<div className="registration">
		<div className="setup-profile">
			<h3 className="h3-text">Set Up Your Profile</h3>
		</div>
		<div className="upload-icon">
		<FaUpload />
		<p className="upload-text">Upload your image</p>
		</div>
		
		<img className="profile-image"></img>
		<form action="/submit" method="post" className="registration-form">
			<div>
			<label htmlFor="username">Full Name: </label>
			<input type="text" name="username" id="username" required placeholder="Enter yout first name and last name"/>
			</div>
			
			<div>
			<label htmlFor="email">Email Address: </label>
			<input type="email" name="email" id="email" placeholder="example@gmail.com"/> 
			</div>

			<div>
			<label  htmlFor="password">Password:  </label>
			<input type="password" name="password" id="password" required placeholder="Enter Password"/>
			{/* <p>Must be at least 8 characters long.</p><br></br> */}
			</div>

			<div>
			<label> Birthday</label>
			<input type="date" name="birthday" id="birthday" required/>
			</div>
			
			<div>
			<label>Zip Code</label>
			<input type="number" minLength="5" maxLength="5" name="zipcode" id="zipcode" required placeholder="12345"/>
			</div>
				
		</form>
		<div className="button-container">
		<button type="submit" id="continue-button" className="big-button"><a href="/home">Continue</a></button>
		</div>
		
		</div>

	</>
	)
	
	
}

export default Registration;
