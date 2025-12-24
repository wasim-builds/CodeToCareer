#!/bin/bash

# Kill any existing process on port 3001
echo "🔄 Stopping any existing server on port 3001..."
lsof -ti:3001 | xargs kill -9 2>/dev/null || true
sleep 1

# Start the server with API key
echo "🚀 Starting server with API key..."
GOOGLE_API_KEY=AIzaSyDfVYwx3Fpm1QZwJmCh1BeRHEHCgMPpnfTE npm run dev
