const { OpenAIClient, AzureKeyCredential } = require('@azure/openai');
const fs = require('fs');

class AIService {
    constructor() {
        this.endpoint = process.env.AZURE_OPENAI_ENDPOINT;
        this.apiKey = process.env.AZURE_OPENAI_API_KEY;
        this.deploymentName = process.env.AZURE_OPENAI_DEPLOYMENT_NAME || 'gpt-4';

        if (this.endpoint && this.apiKey) {
            this.client = new OpenAIClient(
                this.endpoint,
                new AzureKeyCredential(this.apiKey)
            );
        }
    }

    /**
     * Get fitness advice from AI chatbot
     * @param {Array} messages - Conversation history
     * @param {Object} userContext - User profile context
     * @returns {string} - AI response
     */
    async getChatResponse(messages, userContext = {}) {
        if (!this.client) {
            throw new Error('Azure OpenAI is not configured. Please add API credentials to .env file');
        }

        try {
            // Build system prompt with user context
            const systemPrompt = this.buildSystemPrompt(userContext);

            const chatMessages = [
                { role: 'system', content: systemPrompt },
                ...messages
            ];

            const response = await this.client.getChatCompletions(
                this.deploymentName,
                chatMessages,
                {
                    maxTokens: 800,
                    temperature: 0.7,
                    topP: 0.95
                }
            );

            return response.choices[0].message.content;
        } catch (error) {
            console.error('AI Chat Error:', error);
            throw new Error('Failed to get AI response');
        }
    }

    /**
     * Analyze food image and estimate calories
     * @param {string} imagePath - Path to food image
     * @returns {Object} - { foods, totalCalories, confidence }
     */
    async analyzeFoodImage(imagePath) {
        if (!this.client) {
            // Return mock data if AI is not configured
            return this.getMockFoodAnalysis();
        }

        try {
            // Read image and convert to base64
            const imageBuffer = fs.readFileSync(imagePath);
            const base64Image = imageBuffer.toString('base64');

            const messages = [
                {
                    role: 'system',
                    content: 'You are a nutrition expert AI. Analyze food images and provide detailed nutritional information in JSON format.'
                },
                {
                    role: 'user',
                    content: [
                        {
                            type: 'text',
                            text: 'Analyze this food image and provide: 1) List of food items, 2) Estimated calories for each item, 3) Macronutrients (protein, carbs, fats in grams), 4) Confidence level (0-100). Return ONLY valid JSON with this structure: {"foods": [{"name": "...", "quantity": 1, "unit": "serving", "calories": 0, "macros": {"protein": 0, "carbs": 0, "fats": 0}}], "totalCalories": 0, "confidence": 0}'
                        },
                        {
                            type: 'image_url',
                            image_url: {
                                url: `data:image/jpeg;base64,${base64Image}`
                            }
                        }
                    ]
                }
            ];

            const response = await this.client.getChatCompletions(
                this.deploymentName,
                messages,
                {
                    maxTokens: 1000,
                    temperature: 0.3
                }
            );

            const content = response.choices[0].message.content;

            // Parse JSON response
            try {
                const analysis = JSON.parse(content);
                return analysis;
            } catch (parseError) {
                console.error('Failed to parse AI response:', content);
                return this.getMockFoodAnalysis();
            }
        } catch (error) {
            console.error('Food Analysis Error:', error);
            return this.getMockFoodAnalysis();
        }
    }

    /**
     * Build system prompt with user context
     */
    buildSystemPrompt(userContext) {
        const { goal, gender, bmi, activityLevel } = userContext;

        let prompt = `You are an expert fitness and nutrition AI assistant. You provide personalized advice based on scientific principles.

User Profile:
- Gender: ${gender || 'Not specified'}
- BMI: ${bmi?.value || 'Not specified'} (${bmi?.category || 'Not specified'})
- Goal: ${goal?.type || 'Not specified'}
- Activity Level: ${activityLevel || 'Not specified'}

Guidelines:
1. Provide evidence-based fitness and nutrition advice
2. Be encouraging and motivational
3. Consider the user's specific goal and profile
4. Recommend safe and sustainable practices
5. Suggest consulting healthcare professionals for medical concerns
6. Keep responses concise and actionable

Focus areas:
- Workout recommendations
- Nutrition advice
- Recovery and rest
- Motivation and mindset
- Progress tracking tips`;

        return prompt;
    }

    /**
     * Get mock food analysis (fallback when AI is not configured)
     */
    getMockFoodAnalysis() {
        return {
            foods: [
                {
                    name: 'Mixed Food Item',
                    quantity: 1,
                    unit: 'serving',
                    calories: 350,
                    macros: {
                        protein: 15,
                        carbs: 45,
                        fats: 12
                    }
                }
            ],
            totalCalories: 350,
            confidence: 60,
            note: 'This is an estimated analysis. For accurate results, please configure Azure OpenAI.'
        };
    }

    /**
     * Generate workout recommendations
     */
    async getWorkoutRecommendations(userContext) {
        if (!this.client) {
            return this.getMockWorkoutRecommendations(userContext.goal?.type);
        }

        const prompt = `Based on the user's goal of ${userContext.goal?.type}, gender ${userContext.gender}, and activity level ${userContext.activityLevel}, suggest a weekly workout plan. Include:
1. Number of workout days per week
2. Types of exercises (strength, cardio, flexibility)
3. Duration for each session
4. Specific exercise recommendations

Keep it practical and achievable.`;

        try {
            const response = await this.getChatResponse([
                { role: 'user', content: prompt }
            ], userContext);

            return response;
        } catch (error) {
            return this.getMockWorkoutRecommendations(userContext.goal?.type);
        }
    }

    /**
     * Mock workout recommendations
     */
    getMockWorkoutRecommendations(goal) {
        const recommendations = {
            weight_loss: 'Focus on 4-5 days of cardio (30-45 min) combined with 2-3 days of strength training. Include HIIT sessions for maximum calorie burn.',
            weight_gain: 'Focus on 4-5 days of strength training with progressive overload. Include compound exercises like squats, deadlifts, and bench press.',
            bodybuilding: 'Follow a 5-6 day split routine targeting different muscle groups. Focus on hypertrophy with 8-12 reps per set.',
            maintenance: 'Maintain 3-4 days of mixed training including strength and cardio. Focus on consistency and enjoyment.'
        };

        return recommendations[goal] || recommendations.maintenance;
    }
}

module.exports = new AIService();
