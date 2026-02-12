@echo off
echo Baslatiliyor...
IF NOT EXIST "node_modules" (
    echo node_modules bulunamadi, yukleniyor...
    call npm install
)
echo Gelistirme sunucusu baslatiliyor...
start "" "http://localhost:5173"
call npm run dev -- --open
pause
