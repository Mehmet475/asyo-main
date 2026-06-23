@echo off
cd /d "%~dp0"
echo Sunucu baslatiliyor...
start "" "http://127.0.0.1:3000"
npx live-server --port=3000 --no-browser
pause
