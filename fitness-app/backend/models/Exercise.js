const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Exercise name is required'],
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['strength', 'cardio', 'flexibility', 'balance', 'sports']
    },
    muscleGroups: [{
        type: String,
        enum: [
            'chest', 'back', 'shoulders', 'biceps', 'triceps', 'forearms',
            'abs', 'obliques', 'lower_back', 'quadriceps', 'hamstrings',
            'calves', 'glutes', 'full_body'
        ]
    }],
    equipment: {
        type: String,
        enum: ['none', 'dumbbells', 'barbell', 'machine', 'cable', 'bodyweight', 'resistance_band', 'other']
    },
    difficulty: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        default: 'beginner'
    },
    instructions: [{
        type: String
    }],
    tips: [{
        type: String
    }],
    caloriesPerMinute: {
        type: Number,
        default: 5
    },
    videoUrl: {
        type: String
    },
    imageUrl: {
        type: String
    },
    isCustom: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Index for faster searches
exerciseSchema.index({ name: 'text', category: 1, muscleGroups: 1 });

module.exports = mongoose.model('Exercise', exerciseSchema);
