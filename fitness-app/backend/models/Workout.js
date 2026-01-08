const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    exercises: [{
        exercise: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercise',
            required: true
        },
        sets: [{
            setNumber: { type: Number },
            reps: { type: Number },
            weight: {
                value: { type: Number },
                unit: { type: String, enum: ['kg', 'lbs'], default: 'kg' }
            },
            duration: { type: Number }, // in seconds
            distance: {
                value: { type: Number },
                unit: { type: String, enum: ['km', 'miles', 'meters'], default: 'km' }
            },
            restTime: { type: Number }, // in seconds
            completed: { type: Boolean, default: true }
        }],
        notes: { type: String }
    }],
    duration: {
        type: Number, // total workout duration in minutes
        required: true
    },
    caloriesBurned: {
        type: Number,
        default: 0
    },
    notes: {
        type: String
    },
    mood: {
        type: String,
        enum: ['excellent', 'good', 'average', 'tired', 'exhausted']
    },
    difficulty: {
        type: String,
        enum: ['easy', 'moderate', 'hard', 'very_hard']
    },
    syncedFromGoogleFit: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update timestamp
workoutSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Calculate total calories burned
workoutSchema.methods.calculateCalories = function () {
    let totalCalories = 0;

    this.exercises.forEach(exerciseLog => {
        if (exerciseLog.exercise.caloriesPerMinute) {
            const exerciseDuration = exerciseLog.sets.reduce((total, set) => {
                return total + (set.duration || 0);
            }, 0);

            totalCalories += (exerciseDuration / 60) * exerciseLog.exercise.caloriesPerMinute;
        }
    });

    return Math.round(totalCalories);
};

// Index for faster queries
workoutSchema.index({ user: 1, date: -1 });

module.exports = mongoose.model('Workout', workoutSchema);
