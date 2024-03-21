const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
    name: String,
    cost: Number
});

const appointmentsSchema = new mongoose.Schema({
    patient: String,
    date: Date,
    cost: Number,
    procedure: [servicesSchema]
});

const professionalDetailsSchema = new mongoose.Schema({
    email: String,
    rate: Number,
    office: String,
    yearsOfExperience: Number,
    skills: [servicesSchema],
    title: String,
    rating: Number,
    appointments: [appointmentsSchema]
});

const caregiverSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  zip: Number,
  professional_details: professionalDetailsSchema
});

// Create models
const Service = mongoose.model("Service", servicesSchema);
const Appointment = mongoose.model("Service", appointmentsSchema);
const ProfessionalDetails = mongoose.model("Caregiver", professionalDetailsSchema);
const Caregiver = mongoose.model("Caregiver", appointmentsSchema);

// Export models
module.exports = { Service, Appointment, ProfessionalDetails, Caregiver };

