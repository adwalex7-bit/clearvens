@echo off
echo.
echo ========================================
echo   Clearvens - Development Setup
echo ========================================
echo.

REM Check if Node.js is installed
node -v >nul 2>&1
if errorlevel 1 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js version:
node -v
echo.

REM Install backend dependencies
echo Installing backend dependencies...
cd backend
call npm install
echo.

REM Install frontend dependencies
cd ..\frontend
echo Installing frontend dependencies...
call npm install
echo.

echo ========================================
echo Setup complete!
echo ========================================
echo.
echo To start development:
echo.
echo 1. Open a terminal and run: cd backend && npm run dev
echo 2. Open another terminal and run: cd frontend && npm run dev
echo.
echo Frontend: http://localhost:3000
echo Backend: http://localhost:5000
echo Admin Panel: http://localhost:3000/admin
echo.
pause
