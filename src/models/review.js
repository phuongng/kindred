const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    reviewID: {
        type: mongoose.Types.ObjectId
    },
    clientID: {
        type: String,
        ref: 'client',
    },
    caregiverID: {
        type: String,
        ref: 'caregiver',
    },
    appointmentID: {
        type: String,
        ref: 'appointment',
    },
    rating: {
        type: Number,
        required: true,
        maxlength: 5,
        minlength: 1
    },
    comment: {
        type: String
    },
    date: {
        type: Date,
        default: () => Date.now(),
    }
});

module.exports = mongoose.model('Review', reviewSchema);