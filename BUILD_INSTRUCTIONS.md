# Deploy Instructions for Hostinger

## 📋 Prerequisites
- Node.js 18+ installed locally for building
- Hostinger hosting account

## 🚀 Build Process

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Upload to Hostinger:**
   - Upload ALL contents of the `dist/` folder to your public_html directory
   - Upload the `.htaccess` file to the root of public_html
   - **DO NOT** upload src/, node_modules/, or any development files

## 📁 File Structure on Hostinger
```
public_html/
├── index.html          (from dist/)
├── assets/            (from dist/assets/)
├── .htaccess          (for React Router)
└── other built files  (from dist/)
```

## ⚙️ Hostinger Configuration
- **PHP Version:** Not needed (pure HTML/CSS/JS)
- **Node.js:** Not needed on server (only for building)
- **Database:** Not needed
- **SSL:** Enable for better security

## 🔧 Troubleshooting

### Tela em Branco (Blank Screen) - PROBLEMA MAIS COMUM
1. **Verificar console do navegador:**
   - Abra F12 → Console
   - Procure por erros de JavaScript ou assets não encontrados
   
2. **Verificar estrutura de arquivos:**
   ```
   public_html/
   ├── index.html
   ├── assets/ (pasta completa do dist/assets)
   ├── .htaccess
   └── favicon.ico
   ```
   
3. **Testar arquivo estático:**
   - Crie um arquivo test.html simples para verificar se o servidor funciona
   - `<html><body><h1>Teste</h1></body></html>`

### Error 500 (Internal Server Error)
1. **Permissões de arquivo (CRÍTICO no Hostinger):**
   - Pastas: 755 permissions
   - Arquivos: 644 permissions
   - Use o File Manager do Hostinger para ajustar
   
2. **Verificar .htaccess:**
   - Renomeie temporariamente .htaccess para .htaccess-backup
   - Se o site funcionar, o problema está no .htaccess
   - Teste com versão simplificada
   
3. **Logs de erro do Hostinger:**
   - Painel Hostinger > Avançado > Logs de Erro
   - Verificar erros específicos nos últimos minutos
   
4. **Upload completo:**
   - Verificar se TODOS os arquivos da pasta dist/ foram enviados
   - Especialmente a pasta assets/ completa

### Error 404 nas rotas (React Router)
1. **Verificar se .htaccess está na raiz do public_html**
2. **Testar rota direta:** acesse dominio.com/sobre
3. **Se não funcionar, usar .htaccess simplificado:**
   ```
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

### Assets não carregam (CSS/JS/Images)
- Verificar se a pasta assets/ foi enviada completamente
- Verificar permissões da pasta assets/ (755)
- Testar acesso direto: dominio.com/assets/index-xxx.css
- Se não carrega, reenviar a pasta assets/

### WhatsApp não funciona
- Verificar formato do número em constants.ts (5511999999999)
- Testar link direto: wa.me/5511999999999

## 📞 Contact Information
Update company info in `src/lib/constants.ts` before building.