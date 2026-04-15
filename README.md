# 🧮 Projeto Calculadora - CI/CD (Engenharia de Software)

Este repositório contém o projeto de uma calculadora desenvolvido de forma colaborativa, utilizando fluxos de trabalho profissionais (Git Flow) e princípios de **Integração e Entrega Contínua (CI/CD)**.

## 👥 Integrantes do Grupo
**Otávio** (Scrum Master / Integrador)
**Caio** (Desenvolvedor de Multiplicação)
**Carlos** (Desenvolvedor de soma / Raiz quadrada)

---

## 🚫 REGRAS DE OURO (IMPORTANTE!)
1.  **NUNCA** faça commit direto na branch main.
2.  **NUNCA** faça commit direto na branch DEV.
3.  Todo o desenvolvimento deve passar por **Pull Requests** para a DEV.
4.  Use branches separadas para cada funcionalidade (ex: feat-multiplicacao).

---

## 🏗️ Passo a Passo para o Grupo

### 1. Caio (Multiplicação)
1.  Vá para sua branch: git checkout multiplicação (ou feat-multiplicacao).
2.  Puxe a base atualizada da DEV: git pull origin DEV.
3.  Desenvolva a lógica de multiplicação no script.js. 
4.  Suba as alterações: 
    - git add .
    - git commit -m "feat: implementada multiplicação"
    - git push origin multiplicação
5.  **Peça para Otávio abrir o Pull Request (PR) para a DEV.**

### 2. Carlos (Divisão/Subtração)
1.  Vá para sua branch: git checkout subtração (ou feat-divisao-subtracao).
2.  Puxe a base atualizada da DEV: git pull origin DEV.
3.  Desenvolva a lógica de subtração e divisão no script.js.
4.  Suba as alterações:
    - git add.
    - git commit -m "feat: implementadas divisão e subtração"
    - git push origin subtração
5.  **Peça para Otávio abrir o Pull Request (PR) para a DEV.**

### 3. Otávio (Scrum Master - O Integrador)
1.  **Monitorar PRs**: No GitHub/GitLab, verifique os Pull Requests das branches dos seus colegas indo para a branch DEV.
2.  **Revisão e Teste**: Antes de aceitar, verifique se o código deles funciona e se não há conflitos.
3.  **Merge para DEV**: Clique em **Merge** após revisar.
4.  **Integração Final**: Quando TUDO estiver rodando na DEV, abra o PR final de DEV para main.

---

## 🚀 Como Rodar o Projeto
Basta abrir o arquivo index.html em seu navegador ou utilizar a extensão Live Server do VS Code.

---

## 📦 Gerar Release Local

Para gerar uma release local do projeto (ZIP com todos os arquivos necessários):

### Opção 1: PowerShell (Recomendado)
```powershell
# Versão padrão (1.0.0)
.\build-release.ps1

# Ou especificar versão
.\build-release.ps1 -Version "2.1.0"
```

### Opção 2: Batch Script
```batch
# Versão padrão
build-release.bat

# Ou especificar versão
build-release.bat 2.1.0
```

### O que o script faz:
- ✅ Cria pasta `releases/` no projeto
- ✅ Copia `index.html`, `style.css` e todos os `.js`
- ✅ Gera arquivo `VERSION.txt` com informações da versão
- ✅ Cria `CHANGELOG.txt` com últimas mudanças (se usar Git)
- ✅ Gera arquivo ZIP da release
- ✅ Mostra informações sobre o arquivo gerado

### Exemplo de uso:
```
🚀 Iniciando geração de release local v1.0.0
📁 Criado diretório releases
📋 Copiando arquivos...
📝 Gerando changelog...
📦 Criando arquivo ZIP...
✅ Release gerada com sucesso!
📂 Localização: releases\calculadora-v1.0.0.zip
📊 Tamanho: 0.05 MB
```

### Para usar a release:
1. Extraia o ZIP em qualquer pasta
2. Abra `index.html` no navegador
3. Ou use um servidor local: `python -m http.server 8000`