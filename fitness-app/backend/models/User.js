const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6,
        select: false
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: [true, 'Please select a gender']
    },
    dateOfBirth: {
        type: Date
    },
    height: {
        value: { type: Number },
        unit: { type: String, enum: ['cm', 'inches'], default: 'cm' }
    },
    weight: {
        value: { type: Number },
        unit: { type: String, enum: ['kg', 'lbs'], default: 'kg' }
    },
    bmi: {
        value: { type: Number },
        category: { type: String, enum: ['underweight', 'normal', 'overweight', 'obese'] }
    },
    goal: {
        type: { type: String, enum: ['weight_loss', 'weight_gain', 'bodybuilding', 'maintenance'] },
        targetWeight: { type: Number },
        minimumDays: { type: Number },
        startDate: { type: Date }
    },
    activityLevel: {
        type: String,
        enum: ['sedentary', 'lightly_active', 'moderately_active', 'very_active', 'extremely_active'],
        default: 'moderately_active'
    },
    preferences: {
        notifications: {
            workout: { type: Boolean, default: true },
            nutrition: { type: Boolean, default: true },
            progress: { type: Boolean, default: true }
        },
        reminderTimes: [{
            type: { type: String, enum: ['workout', 'meal', 'water'] },
            time: { type: String }
        }],
        units: {
            weight: { type: String, enum: ['kg', 'lbs'], default: 'kg' },
            distance: { type: String, enum: ['km', 'miles'], default: 'km' }
        }
    },
    googleFit: {
        connected: { type: Boolean, default: false },
        accessToken: { type: String, select: false },
        refreshToken: { type: String, select: false },
        lastSync: { type: Date }
    },
    pushToken: {
        type: String
    },
    profilePicture: {
        type: String
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Update timestamp
userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Calculate BMI
userSchema.methods.calculateBMI = function () {
    if (!this.height?.value || !this.weight?.value) {
        return null;
    }

    let heightInMeters = this.height.value;
    let weightInKg = this.weight.value;

    // Convert to metric if needed
    if (this.height.unit === 'inches') {
        heightInMeters = this.height.value * 0.0254;
    } else {
        heightInMeters = this.height.value / 100;
    }

    if (this.weight.unit === 'lbs') {
        weightInKg = this.weight.value * 0.453592;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);

    let category;
    if (bmi < 18.5) category = 'underweight';
    else if (bmi < 25) category = 'normal';
    else if (bmi < 30) category = 'overweight';
    else category = 'obese';

    return { value: parseFloat(bmi.toFixed(2)), category };
};

module.exports = mongoose.model('User', userSchema);
