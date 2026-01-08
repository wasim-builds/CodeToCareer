const User = require('../models/User');
const { calculateBMI, calculateMinimumDays, calculateCalorieNeeds, calculateMacros } = require('../utils/calculationUtils');

/**
 * @desc    Get user profile
 * @route   GET /api/users/profile
 * @access  Private
 */
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        res.status(200).json({
            success: true,
            data: { user }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * @desc    Update user profile
 * @route   PUT /api/users/profile
 * @access  Private
 */
const updateProfile = async (req, res) => {
    try {
        const updates = req.body;
        const user = await User.findById(req.user.id);

        // Update allowed fields
        const allowedFields = ['name', 'dateOfBirth', 'activityLevel', 'preferences', 'pushToken'];
        allowedFields.forEach(field => {
            if (updates[field] !== undefined) {
                user[field] = updates[field];
            }
        });

        await user.save();

        res.status(200).json({
            success: true,
            message: 'Profile updated successfully',
            data: { user }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * @desc    Calculate and update BMI
 * @route   POST /api/users/bmi
 * @access  Private
 */
const updateBMI = async (req, res) => {
    try {
        const { height, weight, heightUnit, weightUnit } = req.body;

        if (!height || !weight) {
            return res.status(400).json({
                success: false,
                message: 'Please provide height and weight'
            });
        }

        const user = await User.findById(req.user.id);

        // Update height and weight
        user.height = { value: height, unit: heightUnit || 'cm' };
        user.weight = { value: weight, unit: weightUnit || 'kg' };

        // Calculate BMI
        const bmi = user.calculateBMI();
        user.bmi = bmi;

        await user.save();

        res.status(200).json({
            success: true,
            message: 'BMI calculated successfully',
            data: {
                bmi,
                height: user.height,
                weight: user.weight
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * @desc    Set fitness goal
 * @route   POST /api/users/goal
 * @access  Private
 */
const setGoal = async (req, res) => {
    try {
        const { goalType, targetWeight } = req.body;

        if (!goalType) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a goal type'
            });
        }

        const user = await User.findById(req.user.id);

        if (!user.weight?.value) {
            return res.status(400).json({
                success: false,
                message: 'Please set your current weight first'
            });
        }

        // Calculate minimum days
        const minimumDays = calculateMinimumDays(
            goalType,
            user.weight.value,
            targetWeight || user.weight.value,
            user.gender,
            user.activityLevel
        );

        user.goal = {
            type: goalType,
            targetWeight: targetWeight || user.weight.value,
            minimumDays,
            startDate: new Date()
        };

        await user.save();

        // Calculate calorie and macro recommendations
        const age = user.dateOfBirth ? Math.floor((Date.now() - user.dateOfBirth) / (365.25 * 24 * 60 * 60 * 1000)) : 25;
        const calorieNeeds = calculateCalorieNeeds(
            user.weight.value,
            user.height?.value || 170,
            age,
            user.gender,
            user.activityLevel,
            goalType
        );
        const macros = calculateMacros(calorieNeeds.targetCalories, goalType);

        res.status(200).json({
            success: true,
            message: 'Goal set successfully',
            data: {
                goal: user.goal,
                recommendations: {
                    minimumDays,
                    calories: calorieNeeds,
                    macros
                }
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getProfile,
    updateProfile,
    updateBMI,
    setGoal
};
