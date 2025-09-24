Write-Host "Starting full stack project..." -ForegroundColor Cyan

# --- CONFIG ---
$projectRoot = "J:\MMO\affiliate-project"
$backendPath = Join-Path $projectRoot "backend"
$frontendPath = Join-Path $projectRoot "frontend"

# Lưu danh sách process con để tự động kill khi đóng script
$global:childProcesses = @()

function Kill-Port {
    param([int]$Port)
    $pids = netstat -ano | findstr ":$Port" | ForEach-Object {
        ($_ -split '\s+')[-1]
    }
    foreach ($pid in $pids) {
        if ($pid -match '^\d+$') {
            Write-Host "Killing process $pid on port $Port" -ForegroundColor Yellow
            taskkill /PID $pid /F | Out-Null
        }
    }
}

function Start-ChildProcess {
    param(
        [string]$WorkingDir,
        [string]$Command
    )
    $process = Start-Process powershell -PassThru -ArgumentList "cd `"$WorkingDir`"; $Command"
    $global:childProcesses += $process.Id
}

function Cleanup {
    Write-Host ""
    Write-Host "Stopping all child processes..." -ForegroundColor Yellow
    foreach ($pid in $global:childProcesses) {
        try {
            Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
            Write-Host "Killed process $pid"
        } catch {
            Write-Host "Could not kill process $pid (may already be stopped)"
        }
    }
    Write-Host "All services stopped. Goodbye!" -ForegroundColor Cyan
    exit
}

# Bắt sự kiện Ctrl+C hoặc đóng cửa sổ
$null = Register-EngineEvent PowerShell.Exiting -Action { Cleanup }

# --- STEP 1: Giải phóng port ---
Kill-Port 4000
Kill-Port 5173

# --- STEP 2: Đảm bảo đang dùng Node 20 ---
Write-Host "Switching to Node v20.19.5..." -ForegroundColor Magenta
nvm use 20.19.5 | Out-Null

# --- STEP 3: Chạy backend ---
if (Test-Path $backendPath) {
    Write-Host "Starting backend..." -ForegroundColor Green
    Start-ChildProcess $backendPath "npm install; npm run dev"
} else {
    Write-Host "Backend folder not found at $backendPath" -ForegroundColor Red
}

# --- STEP 4: Chạy frontend ---
if (Test-Path $frontendPath) {
    Write-Host "Starting frontend..." -ForegroundColor Green
    Start-ChildProcess $frontendPath "npm install; npm run dev"
} else {
    Write-Host "Frontend folder not found at $frontendPath" -ForegroundColor Red
}

# --- STEP 5: Mở browser ---
Start-Process "http://localhost:5173"
Write-Host ""
Write-Host "All processes started. Browser opened." -ForegroundColor Cyan
Pause
Cleanup
