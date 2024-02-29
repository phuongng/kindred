import React, { useState } from "react";
import "./navbar_css/message.css";
import Navbar from "../components/navbar";
import { FaPhone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

function Message() {
  const [receiver] = useState({
    name: "John Doe",
    title: "Caregiver"
  });

  const currentDay = new Date().toLocaleDateString();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  // Function to handle sending a message
  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage = {
        text: inputMessage,
        time: new Date().toLocaleTimeString()
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
    }
  };

  // Function to handle input message change
  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  return (
    <>
      <Navbar />
	  <div className="message">
			
		<div className="message-receiver-info-container">
			<div className="receiver-img-container">
			<img src="" className="receiver-img" alt="Receiver"></img>
			</div>
			<div className="message-receiver-info">
			<p>
				<b>Chat with <span>{receiver.name}</span></b>	
			</p>
			<p>{receiver.title}</p>
			</div>
			<div>
			<FaPhone />
			</div>
		</div>
		<hr className="horizontal-line-msg"></hr>
		<div className="message-container">
		<p> <i>{currentDay}</i></p>
			{messages.map((message, index) => (
				<div key={index} className="message-item">
					<p className="sender-message">{message.text}</p>
					<p className="message-time">{message.time}</p>
				</div>
			))}
		</div>

		<div className="message-input">
			<input 
				className="" 
				type="text" 
				placeholder="Write a message"
				value={inputMessage}
				onChange={handleInputChange}
			></input>
			<IoIosSend  className="send-icon" onClick={sendMessage} />
		</div>
	  </div>
      
    </>
  );
}

export default Message;
