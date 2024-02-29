import React from "react";
import Navbar from "../components/navbar";

function  ConfirmationMessage() {
	return(
		<>
	<Navbar />
	<div className="confirmation_message">
		<h3>Your schedule has been successfully booked!</h3>
        <p>A copy has sent to your email as </p>

	</div>
	</>
	)
	
	
}

export default  ConfirmationMessage;