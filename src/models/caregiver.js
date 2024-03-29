const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caregiverSchema = new Schema({
    caregiverID: {
        type: mongoose.Types.ObjectId
    },
    login: {
        username: {
            type: String,
            unique: true,
            required: true,
            minLength: [6, 'Must be at least 6 characters'],
            maxLength: 20
        },
        password: {
            type: String,
            required: true,
            minLength: [8, 'Must be at least 8 characters'],
        }
    },
    personalInfo: {
        firstName: {
            type: String
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        sexatbirth: {
            type: String,
            enum: {
                values: ["female","male"]
            },
            required: true
        },
        zipcode: {
            type: Number,
            require: true,
            max: 99999
        }
    },
    workInfo: {
        serviceOffered: {
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
        aveRating: {
            type: Number,
            default: 0
        },
        reviews: [{
            type: mongoose.Types.ObjectId,
            ref: 'review'
        }],
        yearsExperience: {
            type: Number,
            required: true
        },
        aboutMe: {
            type: String,
            maxLength: 100,
            required: true
        },
        availability: {
            days: {
                sun: {
                    type: Boolean,
                    required: true,
                },
                mon: {
                    type: Boolean,
                    required: true,
                },
                tue: {
                    type: Boolean,
                    required: true,
                },
                wed: {
                    type: Boolean,
                    required: true,
                },
                thu: {
                    type: Boolean,
                    required: true,
                },
                fri: {
                    type: Boolean,
                    required: true,
                },
                sat: {
                    type: Boolean,
                    required: true,
                }
            }
        }
    },
    appointments: [{
        type: mongoose.Types.ObjectId,
        ref: 'appointment'
    }]
});

module.exports = mongoose.model('caregiver', caregiverSchema);