@echo off
chcp 65001 >nul
title 出入库四态改造与退库 - 原型预览
cd /d "%~dp0"

echo ============================================
echo   出入库四态改造与退库 · 交互原型
echo   正在启动本地预览服务...
echo ============================================
echo.

rem 检查 Python
where python >nul 2>nul
if %errorlevel%==0 (
    start "" http://127.0.0.1:8123/
    python -m http.server 8123
    goto :end
)

rem 检查 Node（备用）
where node >nul 2>nul
if %errorlevel%==0 (
    start "" http://127.0.0.1:8123/
    npx --yes http-server -p 8123
    goto :end
)

echo 未检测到 Python 或 Node，无法启动服务。
echo 请直接双击 "index.html" 在浏览器中打开。
pause
goto :end

:end
