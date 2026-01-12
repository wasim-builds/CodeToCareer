# YouTube API Setup Guide

## Quick Setup (5 minutes)

### 1. Get YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Click **"Enable APIs and Services"**
4. Search for **"YouTube Data API v3"**
5. Click **Enable**
6. Go to **Credentials** → **Create Credentials** → **API Key**
7. Copy your API key
8. (Optional) Click **Restrict Key** → Select **YouTube Data API v3** only

### 2. Add API Key to Your Project

Create or edit `.env.local` in your project root:

```bash
NEXT_PUBLIC_YOUTUBE_API_KEY="YOUR_API_KEY_HERE"
```

**Important:** Replace `YOUR_API_KEY_HERE` with your actual API key.

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Test the Integration

Visit these pages to see YouTube videos:

- **Theory Page:** http://localhost:3001/theory/python
- **Quiz Page:** http://localhost:3001/quiz/javascript

You should see 3-4 relevant tutorial videos at the bottom of each page!

---

## Features

✅ **Smart Caching** - Videos cached for 7 days to save API quota  
✅ **40+ Topics** - Pre-mapped search queries for all major topics  
✅ **Responsive Design** - Works on mobile, tablet, and desktop  
✅ **Rich Metadata** - Shows views, duration, channel, publish date  
✅ **Dark Theme** - Matches your app with YouTube red accents  
✅ **Error Handling** - Graceful fallback if API fails  

---

## API Quota Information

- **Daily Quota:** 10,000 units
- **Search Cost:** 100 units per search
- **Daily Searches:** ~100 searches/day
- **With Caching:** Unlimited page views (cached for 7 days)

**Example:** If you have 20 topics, that's 2,000 units (20 × 100) for the initial load. After that, all visits use cached data for 7 days!

---

## Troubleshooting

### No videos showing?

1. Check if API key is set in `.env.local`
2. Check browser console for errors
3. Verify API is enabled in Google Cloud Console
4. Check if quota is exceeded (rare with caching)

### Videos not relevant?

Edit the topic mapping in `lib/youtube.ts` → `getTopicSearchQuery()` function.

### Want more/fewer videos?

Change the `limit` prop in:
- Theory pages: `<YouTubeVideos topicId={theory.topicId} limit={3} />`
- Quiz pages: `<YouTubeVideos topicId={topicId} limit={4} />`

---

## What's Next?

The integration is complete! YouTube videos will now appear on:
- ✅ All theory pages (after Stack Overflow Q&A)
- ✅ All quiz topic pages (after Stack Overflow Q&A)

Enjoy enhanced learning with video tutorials! 🎥
