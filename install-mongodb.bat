@echo off
echo Installing MongoDB...

echo Option 1: Download MongoDB Community Server
echo Go to: https://www.mongodb.com/try/download/community
echo Download and install MongoDB Community Server

echo.
echo Option 2: Use MongoDB Atlas (Cloud)
echo 1. Go to: https://www.mongodb.com/atlas
echo 2. Create free account
echo 3. Create cluster
echo 4. Get connection string
echo 5. Replace MONGODB_URI in backend/.env

echo.
echo Option 3: Use Docker
echo docker run -d -p 27017:27017 --name mongodb mongo

pause