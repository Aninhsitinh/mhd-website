@echo off
chcp 65001 > nul
title MHD Valuation - Dung Docker Local

:: Đảm bảo làm việc tại đúng thư mục chứa file .bat này
cd /d "%~dp0"

cls
echo ==============================================================================
echo                 MHD VALUATION - DỪNG HỆ THỐNG DOCKER
echo ==============================================================================
echo.
echo Đang tắt tất cả các container và giải phóng RAM...
echo.

docker compose down

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ==============================================================================
    echo [V] ĐÃ DỪNG TOÀN BỘ HỆ THỐNG THÀNH CÔNG!
    echo ==============================================================================
    echo Toàn bộ dữ liệu PostgreSQL và hình ảnh /media vẫn được bảo toàn an toàn.
) else (
    echo [X] Có lỗi khi dừng container. Vui lòng kiểm tra Docker Desktop.
)

echo.
echo Bấm phím bất kỳ để đóng cửa sổ này.
pause > nul
