@echo off
REM Script Batch para Release Local (Windows)
REM Uso: build-release.bat [versao]

if "%1"=="" (
    set VERSION=1.0.0
) else (
    set VERSION=%1
)

echo 🚀 Gerando release local v%VERSION%

REM Criar diretório releases
if not exist releases mkdir releases

REM Criar pasta da release
set RELEASE_DIR=releases\calculadora-v%VERSION%
if exist %RELEASE_DIR% rmdir /s /q %RELEASE_DIR%
mkdir %RELEASE_DIR%

echo 📋 Copiando arquivos...
copy index.html %RELEASE_DIR% >nul
copy style.css %RELEASE_DIR% >nul
for %%f in (*.js) do copy "%%f" "%RELEASE_DIR%" >nul

REM Gerar arquivo de versão
echo Versao: %VERSION% > %RELEASE_DIR%\VERSION.txt
echo Data: %date% %time% >> %RELEASE_DIR%\VERSION.txt
git rev-parse --short HEAD 2>nul >> %RELEASE_DIR%\VERSION.txt
echo. >> %RELEASE_DIR%\VERSION.txt

REM Gerar changelog se houver git
if exist .git (
    echo 📝 Gerando changelog...
    git log --oneline --pretty=format:"%%h - %%s (%%ar)" -10 2>nul > %RELEASE_DIR%\CHANGELOG.txt
)

REM Criar ZIP (usa PowerShell se disponível)
set ZIP_FILE=releases\calculadora-v%VERSION%.zip
if exist %ZIP_FILE% del %ZIP_FILE%

echo 📦 Criando arquivo ZIP...
powershell -command "Compress-Archive -Path '%RELEASE_DIR%\*' -DestinationPath '%ZIP_FILE%'"

REM Limpar pasta temporária
rmdir /s /q %RELEASE_DIR%

echo ✅ Release gerada com sucesso!
echo 📂 Localização: %ZIP_FILE%
for %%A in (%ZIP_FILE%) do echo 📊 Tamanho: %%~zA bytes

echo.
echo 💡 Para usar:
echo 1. Extraia o ZIP
echo 2. Abra index.html no navegador
echo 3. Ou use servidor local: python -m http.server 8000

pause