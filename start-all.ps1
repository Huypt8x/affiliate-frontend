
Write-Host "🚀 Starting Affiliate Project..." -ForegroundColor Green

# Chạy Backend trong cửa sổ mới
Start-Process powershell -ArgumentList "cd '..\backend'; npm install; npm run dev"

# Đợi 3 giây để backend chạy xong trước khi start frontend
Start-Sleep -Seconds 3

# Chạy Frontend trong cửa sổ mới
Start-Process powershell -ArgumentList "cd '..\frontend'; npm install; npm run dev -- --port 1573"

Write-Host "✅ Backend & Frontend đang chạy ở các cửa sổ PowerShell khác."
Write-Host "🌐 Mở trình duyệt: http://localhost:1573/programs"
