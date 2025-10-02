@echo off
cd /d "J:\MMO\affiliate-project\frontend"

echo === Xoa git cu ===
rmdir /s /q .git

echo === Init git moi ===
git init
git add .
git commit -m "Initial commit - frontend project"

echo === Tao branch main ===
git branch -M main

echo === Gan remote moi ===
git remote add origin https://github.com/Huypt8x/affiliate-frontend.git

echo === Push code len GitHub ===
git push -u origin main

echo === Hoan thanh! ===
pause
