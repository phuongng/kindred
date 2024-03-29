import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* Sample API call setup, uses mongoose model schema */

const { Service, Appointment, ProfessionalDetails, Caregiver } = require("./models/schema"); // Creates the models from schema

app.get("/api/caregiver", async (req, res) => {
  try {
    const caregivers = await Caregiver.find();
    res.json(caregivers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// imports
// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // database connection
// mongoose.connect('mongodb+srv://cosc617:admin@kindredapp.s34qhh0.mongodb.net/');
// const db = mongoose.connection;
// db.on("error", (error) => console.log(error));
// db.once("open", () => console.log("Connected to the database!"));

// app.listen(PORT, () => {
//     console.log(`App up at http://localhost:${PORT}`);
// });