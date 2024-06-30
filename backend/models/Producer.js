const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    dob: { type: Date, required: true },
    bio: { type: String, required: true },
});

module.exports = mongoose.model('Producer', producerSchema);
