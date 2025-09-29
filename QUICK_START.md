# Quick Start Guide

## Option 1: Automatic Setup (Recommended)
1. Double-click `setup-and-run.bat`
2. Wait for installation and servers to start
3. Frontend: http://localhost:3000
4. Backend: http://localhost:5000

## Option 2: Manual Setup
1. Install dependencies: `npm install`
2. Install Tailwind: `npm install -D tailwindcss postcss autoprefixer`
3. Backend deps: `cd backend && npm install`
4. Start backend: `cd backend && npm start`
5. Start frontend: `npm start`

## Option 3: Development Mode
1. Run: `npm run dev` (starts both servers)

## Troubleshooting
- If Tailwind styles don't work: Run `npx tailwindcss init -p`
- If backend fails: Check backend/.env file
- If email fails: Follow EMAIL_SETUP.md instructions
- Port conflicts: Change ports in .env files

## URLs
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- View Data: http://localhost:5000/api/data