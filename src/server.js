const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable All CORS Requests for development
app.use(cors());
app.use(express.json());


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect("mongodb+srv://cosc617:admin@kindredapp.s34qhh0.mongodb.net/kindred", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error: ", err));

const Caregiver = require("./models/caregiver"); // Create the Caregiver model
const Appointment = require("./models/appointment");
const Review = require("./models/review");
const Client = require("./models/client");

/* Sample API call setup, uses mongoose model schema */
// GET
app.get("/api/caregiver", async (req, res) => {
  try {
    const caregivers = await Caregiver.find();
    res.json(caregivers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
app.get("/api/client", async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
app.get("/api/review", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
app.get("/api/appointment", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// POST
app.post('/api/caregiver/new', async (req, res) => {
  try {
    const newCaregiver = new Caregiver(req.body);
    await newCaregiver.save();

    res.status(201).json(newCaregiver);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post('/api/client/new', async (req, res) => {
  try {
    const newClient = new Client(req.body);
    await newClient.save();

    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post('/api/review/new', async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();

    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post('/api/appointment/new', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);

    await newAppointment.save();

    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});