const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    weight: {
        value: { type: Number },
        unit: { type: String, enum: ['kg', 'lbs'], default: 'kg' }
    },
    bodyFat: {
        type: Number, // percentage
        min: 0,
        max: 100
    },
    measurements: {
        chest: { type: Number }, // in cm
        waist: { type: Number },
        hips: { type: Number },
        biceps: { type: Number },
        thighs: { type: Number },
        calves: { type: Number },
        neck: { type: Number }
    },
    photos: [{
        url: { type: String },
        type: { type: String, enum: ['front', 'side', 'back'] },
        uploadedAt: { type: Date, default: Date.now }
    }],
    notes: {
        type: String
    },
    mood: {
        type: String,
        enum: ['excellent', 'good', 'average', 'low', 'poor']
    },
    energyLevel: {
        type: Number,
        min: 1,
        max: 10
    },
    sleepQuality: {
        hours: { type: Number },
        quality: { type: String, enum: ['excellent', 'good', 'fair', 'poor'] }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Index for faster queries
progressSchema.index({ user: 1, date: -1 });

module.exports = mongoose.model('Progress', progressSchema);
