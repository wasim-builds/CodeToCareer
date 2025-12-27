# 🚀 Free AI API Setup Guide

## Get Your FREE Groq API Key (Recommended)

### Step 1: Sign Up
1. Visit: **https://console.groq.com/keys**
2. Click "Sign Up" (FREE, no credit card required)
3. Use Google/GitHub or email to sign up

### Step 2: Create API Key
1. After login, click "Create API Key"
2. Give it a name (e.g., "Quiz App")
3. **Copy the API key** (starts with `gsk_...`)

### Step 3: Add to Environment
1. Open `.env.local` in your project root
2. Add this line:
```
GROQ_API_KEY=gsk_your_key_here
```

### Step 4: Restart Server
```bash
npm run dev
```

---

## Alternative: Google Gemini (Already Set Up)

You already have Gemini configured! If you want a fresh key:

1. Visit: **https://aistudio.google.com/app/apikey**
2. Click "Create API Key"
3. Copy the key
4. Add to `.env.local`:
```
GOOGLE_API_KEY=your_gemini_key_here
```

---

## How It Works

### Automatic Fallback
The system tries providers in this order:
1. **Groq** (fastest & free) ⚡
2. **Gemini** (backup) 🔄
3. **Error** (if both fail) ❌

### Manual Provider Selection
You can force a specific provider in the API call:
```typescript
fetch('/api/quiz/generate', {
  method: 'POST',
  body: JSON.stringify({
    topic: 'JavaScript',
    difficulty: 'medium',
    count: 5,
    provider: 'groq' // or 'gemini'
  })
})
```

---

## Free Tier Limits

### Groq (Recommended)
- ✅ **14,400 requests/day**
- ✅ **Unlimited tokens**
- ✅ **Super fast** (10x faster)
- ✅ **No credit card**

### Google Gemini
- ✅ **1,500 requests/day**
- ✅ **1M tokens/day**
- ✅ **15 requests/minute**
- ✅ **No credit card**

---

## Testing

### Test Groq
```bash
curl -X POST http://localhost:3001/api/quiz/generate \
  -H "Content-Type: application/json" \
  -d '{"topic":"JavaScript","difficulty":"medium","count":3,"provider":"groq"}'
```

### Test Gemini
```bash
curl -X POST http://localhost:3001/api/quiz/generate \
  -H "Content-Type: application/json" \
  -d '{"topic":"JavaScript","difficulty":"medium","count":3,"provider":"gemini"}'
```

### Test Auto Fallback
```bash
curl -X POST http://localhost:3001/api/quiz/generate \
  -H "Content-Type: application/json" \
  -d '{"topic":"JavaScript","difficulty":"medium","count":3}'
```

---

## Troubleshooting

### "No AI providers configured"
- Make sure `.env.local` exists in project root
- Check that `GROQ_API_KEY` or `GOOGLE_API_KEY` is set
- Restart the dev server

### "Failed to generate questions"
- Check API key is valid
- Check internet connection
- Try the other provider
- Check console for detailed error

---

## Next Steps

1. Get your free Groq API key
2. Add to `.env.local`
3. Restart server
4. Test the AI Endless Mode in the quiz!

**Enjoy unlimited free AI quiz generation! 🎉**
