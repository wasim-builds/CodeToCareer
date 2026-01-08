const mongoose = require('mongoose');

const nutritionSchema = new mongoose.Schema({
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
    mealType: {
        type: String,
        enum: ['breakfast', 'lunch', 'dinner', 'snack'],
        required: true
    },
    foods: [{
        name: { type: String, required: true },
        quantity: { type: Number, default: 1 },
        unit: { type: String, default: 'serving' },
        calories: { type: Number, required: true },
        macros: {
            protein: { type: Number, default: 0 }, // in grams
            carbs: { type: Number, default: 0 },   // in grams
            fats: { type: Number, default: 0 }     // in grams
        },
        micronutrients: {
            fiber: { type: Number, default: 0 },
            sugar: { type: Number, default: 0 },
            sodium: { type: Number, default: 0 }
        }
    }],
    totalCalories: {
        type: Number,
        required: true
    },
    totalMacros: {
        protein: { type: Number, default: 0 },
        carbs: { type: Number, default: 0 },
        fats: { type: Number, default: 0 }
    },
    photoUrl: {
        type: String
    },
    aiDetected: {
        type: Boolean,
        default: false
    },
    aiConfidence: {
        type: Number, // 0-100
        min: 0,
        max: 100
    },
    notes: {
        type: String
    },
    waterIntake: {
        type: Number, // in ml
        default: 0
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
nutritionSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Calculate total calories and macros
nutritionSchema.methods.calculateTotals = function () {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;

    this.foods.forEach(food => {
        totalCalories += food.calories * food.quantity;
        totalProtein += (food.macros?.protein || 0) * food.quantity;
        totalCarbs += (food.macros?.carbs || 0) * food.quantity;
        totalFats += (food.macros?.fats || 0) * food.quantity;
    });

    this.totalCalories = Math.round(totalCalories);
    this.totalMacros = {
        protein: Math.round(totalProtein),
        carbs: Math.round(totalCarbs),
        fats: Math.round(totalFats)
    };
};

// Index for faster queries
nutritionSchema.index({ user: 1, date: -1 });

module.exports = mongoose.model('Nutrition', nutritionSchema);
