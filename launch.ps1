# PharmaChain Dashboard Launcher
Write-Host "Starting PharmaChain Dashboard..." -ForegroundColor Green
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$htmlFile = Join-Path $scriptPath "index.html"

if (Test-Path $htmlFile) {
    Start-Process $htmlFile
    Write-Host "Dashboard opened in your default browser!" -ForegroundColor Green
} else {
    Write-Host "Error: index.html not found!" -ForegroundColor Red
    pause
}

