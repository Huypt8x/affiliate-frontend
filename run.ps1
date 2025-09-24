Write-Host "✅ ExecutionPolicy bypassed tạm thời cho session này" -ForegroundColor Green
powershell -ExecutionPolicy Bypass -File "start-all.ps1"
