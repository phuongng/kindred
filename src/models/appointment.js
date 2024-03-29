const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    appointmentID: {
        type: mongoose.Types.ObjectId
    },
    serviceNeeded: {
        "Personal Care Assistance": {
            type: Boolean,
            required: true,
        },
        "Mobility Aid": {
            type: Boolean,
            required: true,
        },
        "Errands": {
            type: Boolean,
            required: true,
        },
        "Medication Management": {
            type: Boolean,
            required: true,
        },
        "Catheter Care": {
            type: Boolean,
            required: true,
        },
        "Emotional Support": {
            type: Boolean,
            required: true,
        }
    },
    dateTime: {
        type: Date,
        default: () => Date.now(),
    },
    clientID: {
        type: String,
        ref: 'client',
    },
    caregiverID: {
        type: String,
        ref: 'caregiver',
    },
    status: {
        type: String,
        enum: {
            values: ["Pending", "Accepted", "Cancelled", "Completed"]
        },
    }
});

module.exports = mongoose.model('appointment', appointmentSchema);