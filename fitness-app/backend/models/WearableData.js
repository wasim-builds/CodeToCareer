const mongoose = require('mongoose');

const wearableDataSchema = new mongoose.Schema({
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
    source: {
        type: String,
        enum: ['google_fit', 'manual'],
        default: 'google_fit'
    },
    steps: {
        type: Number,
        default: 0
    },
    distance: {
        value: { type: Number, default: 0 },
        unit: { type: String, enum: ['km', 'miles'], default: 'km' }
    },
    caloriesBurned: {
        type: Number,
        default: 0
    },
    activeMinutes: {
        type: Number,
        default: 0
    },
    heartRate: {
        average: { type: Number },
        min: { type: Number },
        max: { type: Number },
        resting: { type: Number }
    },
    sleep: {
        duration: { type: Number }, // in minutes
        deepSleep: { type: Number },
        lightSleep: { type: Number },
        remSleep: { type: Number },
        awake: { type: Number }
    },
    activities: [{
        type: { type: String },
        startTime: { type: Date },
        endTime: { type: Date },
        duration: { type: Number }, // in minutes
        calories: { type: Number },
        distance: { type: Number }
    }],
    syncedAt: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Index for faster queries
wearableDataSchema.index({ user: 1, date: -1 });
wearableDataSchema.index({ user: 1, syncedAt: -1 });

module.exports = mongoose.model('WearableData', wearableDataSchema);
