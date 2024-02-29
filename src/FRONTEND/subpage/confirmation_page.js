import React from "react";
import Navbar from "../components/navbar";
import "./subpage_css/confirmation.css";

function  Confirmation() {
	return(
		<>
	<Navbar />
	<div className="confirmation">
		<div className="confirmation-message">
			<h3>See you soon!</h3>
			<p>Thank you for scheduling with Naomi</p>
			<p><b>You'll receive an email as soon as your booking is confirmed</b></p>
			<p className="return-home"><a href="/dashboard">Return to your care dashboard</a></p>
		</div>

		<div className="message-to-giver">
			<p><b>Is there anything else that you want your caregiver to know?</b></p>
			<input className="message-box" type="text" placeholder="Write a message"></input>
			
		</div>

		<div><button className="big-button">Send</button></div>
	</div>
	</>
	)
	
	
}

export default  Confirmation;