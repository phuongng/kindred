const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable All CORS Requests for development
app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect("mongodb+srv://cosc617:admin@kindredapp.s34qhh0.mongodb.net/kindred", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error: ", err));

const Caregiver = require("./models/caregiver"); // Create the Caregiver model

/* Sample API call setup, uses mongoose model schema */
app.get("/api/caregiver", async (req, res) => {
  try {
    console.log('hi');
    console.log(Caregiver);
    const caregivers = await Caregiver.find();
    console.log(caregivers);
    res.json(caregivers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});