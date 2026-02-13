@echo off
echo ExamMaster Baslatiliyor...
echo.

REM Check if dist/index.html exists, if not build first
IF NOT EXIST "dist\index.html" (
    echo Uygulama henuz derlenmemis, derleniyor...
    IF NOT EXIST "node_modules" (
        echo Bagimliliklar yukleniyor...
        call npm install
    )
    call npm run build
    echo Derleme tamamlandi!
    echo.
)

echo Uygulama aciliyor...
start "" "%~dp0dist\index.html"
