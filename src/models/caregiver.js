const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    user_fullname: String,
    contact: String,
    dayOfWeek: String,
    day: Number,
    month: String,
    year: Number,
    start_time: String,
    total: Number,
    price_breakdown: [String]
});

const caregiverSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    DOB: Date,
    zipcode: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    caregiver: {
        caregiver_name: String,
        contact: String,
        hourly_rate: Number,
        location: String,
        year_experience: Number,
        title: [String],
        rating: Number,
        reviews: Number,
        skills: [String],
        appointments: [appointmentSchema] // Embedding the appointment schema directly
    }
});

module.exports = mongoose.model('Caregiver', caregiverSchema);