/**
 * Calculate BMI (Body Mass Index)
 * @param {number} weight - Weight value
 * @param {number} height - Height value
 * @param {string} weightUnit - 'kg' or 'lbs'
 * @param {string} heightUnit - 'cm' or 'inches'
 * @returns {object} - { value, category }
 */
const calculateBMI = (weight, height, weightUnit = 'kg', heightUnit = 'cm') => {
    let weightInKg = weight;
    let heightInMeters = height;

    // Convert weight to kg
    if (weightUnit === 'lbs') {
        weightInKg = weight * 0.453592;
    }

    // Convert height to meters
    if (heightUnit === 'inches') {
        heightInMeters = height * 0.0254;
    } else {
        heightInMeters = height / 100;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);

    let category;
    if (bmi < 18.5) category = 'underweight';
    else if (bmi < 25) category = 'normal';
    else if (bmi < 30) category = 'overweight';
    else category = 'obese';

    return {
        value: parseFloat(bmi.toFixed(2)),
        category
    };
};

/**
 * Calculate minimum days to see results based on goal
 * @param {string} goal - 'weight_loss', 'weight_gain', 'bodybuilding', 'maintenance'
 * @param {number} currentWeight - Current weight in kg
 * @param {number} targetWeight - Target weight in kg
 * @param {string} gender - 'male' or 'female'
 * @param {string} activityLevel - Activity level
 * @returns {number} - Minimum days to see results
 */
const calculateMinimumDays = (goal, currentWeight, targetWeight, gender, activityLevel = 'moderately_active') => {
    const weightDifference = Math.abs(targetWeight - currentWeight);

    // Base metabolic rate multipliers
    const activityMultipliers = {
        sedentary: 1.2,
        lightly_active: 1.375,
        moderately_active: 1.55,
        very_active: 1.725,
        extremely_active: 1.9
    };

    const multiplier = activityMultipliers[activityLevel] || 1.55;

    let daysRequired;

    switch (goal) {
        case 'weight_loss':
            // Safe weight loss: 0.5-1 kg per week
            // Assuming 0.75 kg per week average
            const weeksForWeightLoss = weightDifference / 0.75;
            daysRequired = Math.ceil(weeksForWeightLoss * 7);

            // Minimum 21 days to see noticeable results
            daysRequired = Math.max(daysRequired, 21);
            break;

        case 'weight_gain':
            // Safe weight gain: 0.25-0.5 kg per week
            // Assuming 0.375 kg per week average
            const weeksForWeightGain = weightDifference / 0.375;
            daysRequired = Math.ceil(weeksForWeightGain * 7);

            // Minimum 28 days to see noticeable results
            daysRequired = Math.max(daysRequired, 28);
            break;

        case 'bodybuilding':
            // Muscle building takes longer
            // Beginners: 0.5-1 kg muscle per month
            // Assuming 0.75 kg per month
            const monthsRequired = weightDifference / 0.75;
            daysRequired = Math.ceil(monthsRequired * 30);

            // Minimum 60 days to see noticeable muscle definition
            daysRequired = Math.max(daysRequired, 60);

            // Gender adjustment (males typically build muscle faster)
            if (gender === 'female') {
                daysRequired = Math.ceil(daysRequired * 1.3);
            }
            break;

        case 'maintenance':
            // For maintenance, focus on consistency
            daysRequired = 21; // 3 weeks to establish routine
            break;

        default:
            daysRequired = 30;
    }

    // Activity level adjustment
    if (activityLevel === 'sedentary') {
        daysRequired = Math.ceil(daysRequired * 1.2);
    } else if (activityLevel === 'very_active' || activityLevel === 'extremely_active') {
        daysRequired = Math.ceil(daysRequired * 0.9);
    }

    return daysRequired;
};

/**
 * Calculate daily calorie needs
 * @param {number} weight - Weight in kg
 * @param {number} height - Height in cm
 * @param {number} age - Age in years
 * @param {string} gender - 'male' or 'female'
 * @param {string} activityLevel - Activity level
 * @param {string} goal - Fitness goal
 * @returns {object} - { bmr, tdee, targetCalories }
 */
const calculateCalorieNeeds = (weight, height, age, gender, activityLevel, goal) => {
    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // Activity multipliers
    const activityMultipliers = {
        sedentary: 1.2,
        lightly_active: 1.375,
        moderately_active: 1.55,
        very_active: 1.725,
        extremely_active: 1.9
    };

    const multiplier = activityMultipliers[activityLevel] || 1.55;
    const tdee = bmr * multiplier;

    // Adjust for goal
    let targetCalories = tdee;
    switch (goal) {
        case 'weight_loss':
            targetCalories = tdee - 500; // 500 calorie deficit
            break;
        case 'weight_gain':
            targetCalories = tdee + 300; // 300 calorie surplus
            break;
        case 'bodybuilding':
            targetCalories = tdee + 400; // 400 calorie surplus
            break;
        case 'maintenance':
            targetCalories = tdee;
            break;
    }

    return {
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        targetCalories: Math.round(targetCalories)
    };
};

/**
 * Calculate macronutrient distribution
 * @param {number} calories - Daily calorie target
 * @param {string} goal - Fitness goal
 * @returns {object} - { protein, carbs, fats } in grams
 */
const calculateMacros = (calories, goal) => {
    let proteinPercent, carbsPercent, fatsPercent;

    switch (goal) {
        case 'weight_loss':
            proteinPercent = 0.35;
            carbsPercent = 0.35;
            fatsPercent = 0.30;
            break;
        case 'weight_gain':
            proteinPercent = 0.25;
            carbsPercent = 0.50;
            fatsPercent = 0.25;
            break;
        case 'bodybuilding':
            proteinPercent = 0.35;
            carbsPercent = 0.45;
            fatsPercent = 0.20;
            break;
        case 'maintenance':
            proteinPercent = 0.30;
            carbsPercent = 0.40;
            fatsPercent = 0.30;
            break;
        default:
            proteinPercent = 0.30;
            carbsPercent = 0.40;
            fatsPercent = 0.30;
    }

    return {
        protein: Math.round((calories * proteinPercent) / 4), // 4 cal per gram
        carbs: Math.round((calories * carbsPercent) / 4),     // 4 cal per gram
        fats: Math.round((calories * fatsPercent) / 9)        // 9 cal per gram
    };
};

module.exports = {
    calculateBMI,
    calculateMinimumDays,
    calculateCalorieNeeds,
    calculateMacros
};
