@echo off
setlocal enabledelayedexpansion
chcp 65001 > nul
title MHD Valuation - Khoi Dong Docker Local

:: Đảm bảo làm việc tại đúng thư mục chứa file .bat này
cd /d "%~dp0"

cls
echo ==============================================================================
echo               MHD VALUATION - KHỞI ĐỘNG HỆ THỐNG TOÀN DIỆN (DOCKER)
echo ==============================================================================
echo.

:: 1. Kiểm tra Docker daemon
echo [*] [1/3] Đang kiểm tra kết nối Docker Desktop...
docker info > nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [!] Docker Desktop chưa chạy. Đang thử tự động bật Docker Desktop...
    if exist "C:\Program Files\Docker\Docker\Docker Desktop.exe" (
        start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"
        echo [+] Đã gửi lệnh mở Docker Desktop. Vui lòng đợi trong giây lát...
    ) else (
        echo [!] Vui lòng tự mở ứng dụng Docker Desktop trên máy tính.
    )

    echo [*] Đang chờ Docker Desktop khởi động hoàn tất (khoảng 15-30 giây)...
    :WAIT_DOCKER
    timeout /t 5 > nul
    docker info > nul 2>&1
    if %ERRORLEVEL% NEQ 0 (
        echo     ... vẫn đang chờ Docker Desktop sẵn sàng ...
        goto WAIT_DOCKER
    )
)

echo [+] [1/3] Docker Desktop đã kết nối thành công!
echo.

:: 2. Khởi chạy Docker Compose
echo [*] [2/3] Đang khởi động Cụm hệ thống (PostgreSQL + Payload CMS + Nuxt 3)...
echo.
docker compose up -d --build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [X] Lỗi: Không thể khởi chạy container. Vui lòng kiểm tra Docker Desktop.
    echo.
    pause
    exit /b 1
)

echo.
echo [+] [2/3] Các container đã được kích hoạt thành công!
echo.

:: 3. Thông báo và mở trình duyệt
echo [*] [3/3] Đang chuẩn bị mở trình duyệt web...
echo ==============================================================================
echo [V] HỆ THỐNG ĐÃ KHỞI CHẠY THÀNH CÔNG!
echo ==============================================================================
echo.
echo 1. Website Frontend (Nuxt 3):     http://localhost:3000
echo 2. Quản trị CMS (Payload CMS):     http://localhost:3001/admin
echo 3. Cơ sở dữ liệu (PostgreSQL):    localhost:5432 (Database: mhd_cms)
echo.
echo Đang tự động mở 2 tab trình duyệt...
timeout /t 3 > nul

start http://localhost:3000
start http://localhost:3001/admin

echo.
echo ------------------------------------------------------------------------------
echo - Để xem log hoạt động: Mở cửa sổ lệnh khác gõ: docker compose logs -f
echo - Để tắt hệ thống: Click đúp vào file 'stop-local.bat'
echo ------------------------------------------------------------------------------
echo.
echo Cửa sổ này có thể đóng lại bất cứ lúc nào (Hệ thống vẫn chạy ngầm trên Docker).
pause
