@echo off
echo Đang tạo file affiliate-project-final.zip...
powershell -Command "Compress-Archive -Path backend,frontend,start-all.ps1,README.txt -DestinationPath affiliate-project-final.zip -Force"
echo Đã tạo file affiliate-project-final.zip thành công!
pause
