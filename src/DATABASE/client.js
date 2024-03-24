const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    clientID: {
        type: mongoose.Types.ObjectId
    },
    login: {
        username: {
            type: String,
            unique: true,            required: true,
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
        clientType: {
            type: String,
            enum: {
                values: ["Patient", "Guardian"]
            },
            required: true
        },
        guardianName: {
            type: String,
            required: function () {
                return this.clientType === "Guardian";
            }
        },
        patientFirstName: {
            type: String,
        },
        patientLastName: {
            type: String,
            required: true
        },
        photo: {
            type: String
        },
        sexatbirth: {
            type: String,
            enum: {
                values: ["female","male"]
            }
        },
        email: {
            type: String,
            required: true
        },
        dob: {
            type: Date,
            required: true
        },
        zipcode: {
            type: Number,
            required: true,
            max: 99999
        }
    },
    appointments: [{
        type: mongoose.Types.ObjectId,
        ref: 'appointment'
    }],
});

module.exports = mongoose.model('client', clientSchema);