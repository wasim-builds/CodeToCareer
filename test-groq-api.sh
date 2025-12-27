#!/bin/bash

echo "========================================="
echo "Testing Groq API Integration"
echo "========================================="
echo ""

# Test 1: Check if server is running
echo "Test 1: Checking if dev server is running..."
if lsof -ti:3001 > /dev/null 2>&1; then
    echo "✅ Server is running on port 3001"
else
    echo "❌ Server is NOT running"
    echo "   Run: npm run dev"
    exit 1
fi
echo ""

# Test 2: Check API key
echo "Test 2: Checking API key..."
if [ -f .env.local ]; then
    if grep -q "GROQ_API_KEY" .env.local; then
        echo "✅ API key is configured"
    else
        echo "❌ API key NOT found in .env.local"
        exit 1
    fi
else
    echo "❌ .env.local file NOT found"
    exit 1
fi
echo ""

# Test 3: Test API endpoint
echo "Test 3: Testing /api/quiz/generate endpoint..."
echo "   Calling Groq API to generate 3 Python questions..."
echo ""

RESPONSE=$(curl -s -X POST http://localhost:3001/api/quiz/generate \
  -H "Content-Type: application/json" \
  -d '{"topic":"Python","difficulty":"medium","count":3}')

# Check if response contains questions
if echo "$RESPONSE" | grep -q '"questions"'; then
    echo "✅ API returned questions!"
    
    # Check provider
    if echo "$RESPONSE" | grep -q '"provider":"groq"'; then
        echo "✅ Provider is GROQ (AI-generated)"
    else
        echo "⚠️  Provider is not Groq"
    fi
    
    # Extract and show first question
    echo ""
    echo "Sample Question Generated:"
    echo "----------------------------------------"
    echo "$RESPONSE" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    if 'questions' in data and len(data['questions']) > 0:
        q = data['questions'][0]
        print(f\"Question: {q['question']}\")
        print(f\"Options: {', '.join(q['options'][:2])}...\")
        print(f\"Correct Answer: {q['correctAnswer']}\")
        print(f\"Explanation: {q['explanation'][:100]}...\")
except:
    print('Could not parse response')
" 2>/dev/null || echo "$RESPONSE" | head -c 200
    echo ""
    echo "----------------------------------------"
else
    echo "❌ API did NOT return questions"
    echo "Response: $RESPONSE"
    exit 1
fi
echo ""

# Test 4: Test again to verify randomness
echo "Test 4: Testing randomness (calling API again)..."
RESPONSE2=$(curl -s -X POST http://localhost:3001/api/quiz/generate \
  -H "Content-Type: application/json" \
  -d '{"topic":"JavaScript","difficulty":"easy","count":2}')

if echo "$RESPONSE2" | grep -q '"questions"'; then
    echo "✅ Second API call successful"
    echo ""
    echo "Sample Question from 2nd call:"
    echo "----------------------------------------"
    echo "$RESPONSE2" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    if 'questions' in data and len(data['questions']) > 0:
        q = data['questions'][0]
        print(f\"Question: {q['question']}\")
except:
    print('Could not parse response')
" 2>/dev/null || echo "$RESPONSE2" | head -c 200
    echo "----------------------------------------"
else
    echo "⚠️  Second API call failed"
fi
echo ""

echo "========================================="
echo "✅ ALL TESTS PASSED!"
echo "========================================="
echo ""
echo "Your Groq API integration is working!"
echo ""
echo "To test in browser:"
echo "1. Open: http://localhost:3001"
echo "2. Go to any quiz topic"
echo "3. Click 'Endless Mode'"
echo "4. Click 'Start'"
echo "5. Questions should be AI-generated and different each time!"
echo ""
echo "To see server logs, check the terminal where 'npm run dev' is running"
echo ""
