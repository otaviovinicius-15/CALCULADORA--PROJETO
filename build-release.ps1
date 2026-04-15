# Script de Release Local para Projeto Calculadora
# Este script gera uma release local do projeto

param(
    [string]$Version = "1.0.0",
    [string]$OutputDir = "releases"
)

Write-Host "🚀 Iniciando geração de release local v$Version" -ForegroundColor Green

# Criar diretório de releases se não existir
if (!(Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
    Write-Host "📁 Criado diretório $OutputDir" -ForegroundColor Yellow
}

# Criar pasta da release
$ReleaseDir = "$OutputDir\calculadora-v$Version"
if (Test-Path $ReleaseDir) {
    Remove-Item -Recurse -Force $ReleaseDir
}
New-Item -ItemType Directory -Path $ReleaseDir | Out-Null

# Copiar arquivos do projeto
Write-Host "📋 Copiando arquivos..." -ForegroundColor Cyan
Copy-Item "index.html" -Destination $ReleaseDir
Copy-Item "style.css" -Destination $ReleaseDir
Get-ChildItem "*.js" | ForEach-Object {
    Copy-Item $_.FullName -Destination $ReleaseDir
}

# Gerar arquivo de versão
$VersionInfo = @"
Versão: $Version
Data: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
Commit: $(git rev-parse --short HEAD 2>$null)
Branch: $(git branch --show-current 2>$null)
"@

$VersionInfo | Out-File -FilePath "$ReleaseDir\VERSION.txt" -Encoding UTF8

# Gerar changelog se houver git
if (Test-Path ".git") {
    Write-Host "📝 Gerando changelog..." -ForegroundColor Cyan
    $Changelog = git log --oneline --pretty=format:"%h - %s (%ar)" -10 2>$null
    if ($Changelog) {
        "CHANGELOG (últimas 10 mudanças):`n$Changelog" | Out-File -FilePath "$ReleaseDir\CHANGELOG.txt" -Encoding UTF8
    }
}

# Criar arquivo ZIP
$ZipFile = "$OutputDir\calculadora-v$Version.zip"
if (Test-Path $ZipFile) {
    Remove-Item $ZipFile
}

Write-Host "📦 Criando arquivo ZIP..." -ForegroundColor Cyan
Compress-Archive -Path "$ReleaseDir\*" -DestinationPath $ZipFile

# Limpar pasta temporária
Remove-Item -Recurse -Force $ReleaseDir

Write-Host "✅ Release gerada com sucesso!" -ForegroundColor Green
Write-Host "📂 Localização: $ZipFile" -ForegroundColor White
Write-Host "📊 Tamanho: $((Get-Item $ZipFile).Length / 1MB) MB" -ForegroundColor White

# Mostrar conteúdo do ZIP
Write-Host "`n📋 Conteúdo da release:" -ForegroundColor Yellow
Get-ChildItem "$OutputDir\calculadora-v$Version.zip" | Select-Object Name, @{Name="Size(MB)";Expression={[math]::Round($_.Length/1MB, 2)}}

Write-Host "`n💡 Para usar:" -ForegroundColor Cyan
Write-Host "1. Extraia o ZIP em um servidor web"
Write-Host "2. Abra index.html no navegador"
Write-Host "3. Ou use um servidor local: python -m http.server 8000"</content>
<parameter name="filePath">c:\Users\otavio_v_santos\Documents\CALCULADORA--PROJETO\build-release.ps1