#!/bin/bash

# Quick Start Script for Clearvens Development

echo "🚀 Starting Clearvens Development Environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install backend dependencies
echo ""
echo "📦 Installing backend dependencies..."
cd backend
npm install

# Start backend in background
echo "🔙 Starting backend server (port 5000)..."
npm run dev &
BACKEND_PID=$!

# Install frontend dependencies
cd ../frontend
echo ""
echo "📦 Installing frontend dependencies..."
npm install

# Start frontend
echo "🖥️  Starting frontend server (port 3000)..."
npm run dev

# Cleanup on exit
trap "kill $BACKEND_PID" EXIT
