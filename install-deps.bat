@echo off
echo Installing frontend dependencies...
npm install

echo Installing Tailwind CSS...
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

echo Installing backend dependencies...
cd backend
npm install

echo Setup complete!
pause