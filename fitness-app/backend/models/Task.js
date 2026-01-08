const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
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
    tasks: [{
        type: {
            type: String,
            enum: ['workout', 'nutrition', 'water', 'sleep', 'meditation', 'steps', 'custom'],
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        target: {
            value: { type: Number },
            unit: { type: String }
        },
        completed: {
            type: Boolean,
            default: false
        },
        completedAt: {
            type: Date
        },
        progress: {
            current: { type: Number, default: 0 },
            target: { type: Number }
        }
    }],
    streak: {
        current: {
            type: Number,
            default: 0
        },
        longest: {
            type: Number,
            default: 0
        },
        lastCompletedDate: {
            type: Date
        }
    },
    completionPercentage: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
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
taskSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Calculate completion percentage
taskSchema.methods.calculateCompletion = function () {
    if (this.tasks.length === 0) return 0;

    const completedTasks = this.tasks.filter(task => task.completed).length;
    this.completionPercentage = Math.round((completedTasks / this.tasks.length) * 100);

    return this.completionPercentage;
};

// Update streak
taskSchema.methods.updateStreak = function () {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastCompleted = this.streak.lastCompletedDate ? new Date(this.streak.lastCompletedDate) : null;

    if (lastCompleted) {
        lastCompleted.setHours(0, 0, 0, 0);
        const daysDiff = Math.floor((today - lastCompleted) / (1000 * 60 * 60 * 24));

        if (daysDiff === 1) {
            // Consecutive day
            this.streak.current += 1;
        } else if (daysDiff > 1) {
            // Streak broken
            this.streak.current = 1;
        }
        // If daysDiff === 0, same day, don't update
    } else {
        // First completion
        this.streak.current = 1;
    }

    // Update longest streak
    if (this.streak.current > this.streak.longest) {
        this.streak.longest = this.streak.current;
    }

    this.streak.lastCompletedDate = today;
};

// Index for faster queries
taskSchema.index({ user: 1, date: -1 });

module.exports = mongoose.model('Task', taskSchema);
