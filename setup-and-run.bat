@echo off
echo === Gupta Contractor Setup ===

echo 1. Installing frontend dependencies...
call npm install

echo 2. Installing Tailwind CSS...
call npm install -D tailwindcss postcss autoprefixer

echo 3. Installing backend dependencies...
cd backend
call npm install
cd ..

echo 4. Make sure MongoDB is running...
echo    - Local: mongod
echo    - Or use MongoDB Atlas cloud

echo 5. Starting backend server...
start "Backend Server" cmd /k "cd backend && npm start"

timeout /t 3 /nobreak > nul

echo 6. Starting frontend...
start "Frontend Server" cmd /k "npm start"

echo Setup complete! Both servers are starting...
pause