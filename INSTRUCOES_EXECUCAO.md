# Instruções para Executar o Projeto Completo

## Pré-requisitos
- .NET 9.0 SDK
- Node.js (versão 16 ou superior)
- Navegador web moderno

## Passo a Passo

### 1. **Executar a API Backend**
```bash
# Navegar para a pasta da API
cd ProdutoAPI.API

# Executar a aplicação
dotnet run
```

**API estará rodando em:** http://localhost:5221
**Swagger estará em:** http://localhost:5221/swagger

### 2. **Executar o Frontend React**
```bash
# Abrir novo terminal e navegar para a pasta do frontend
cd produto-frontend

# Instalar dependências (primeira vez apenas)
npm install

# Executar o projeto
npm start
```

**Frontend estará rodando em:** http://localhost:3000

## URLs de Acesso

| Componente | URL | Descrição |
|------------|-----|-----------|
| **API Backend** | http://localhost:5221 | API REST dos produtos |
| **Swagger** | http://localhost:5221/swagger | Documentação da API |
| **Frontend React** | http://localhost:3000 | Interface do usuário |

## Testando o Sistema

### **Via Swagger (API)**
1. Acesse: http://localhost:5221/swagger
2. Teste os endpoints:
   - `GET /api/produto` - Listar produtos
   - `POST /api/produto` - Criar produto
   - `PUT /api/produto/{id}` - Atualizar produto
   - `DELETE /api/produto/{id}` - Excluir produto

### **Via Frontend React**
1. Acesse: http://localhost:3000
2. Use a interface para:
   - Visualizar produtos existentes
   - Criar novos produtos
   - Editar produtos
   - Excluir produtos

## Funcionalidades Disponíveis

### **Backend (API)**
- CRUD completo de produtos
- Validação de dados
- Banco em memória com dados de exemplo
- Swagger para documentação
- CORS configurado para frontend

### **Frontend (React)**
- Interface responsiva e moderna
- Formulários com validação
- Tabela de produtos com ações
- Modal para criar/editar
- Mensagens de feedback
- Design mobile-first

## Dados de Exemplo

O sistema já vem com produtos pré-cadastrados:
- **Notebook Dell** - R$ 3.500,00 - Eletrônicos
- **Mouse Wireless** - R$ 89,90 - Periféricos  
- **Teclado Mecânico** - R$ 299,90 - Periféricos

## Solução de Problemas

### **API não inicia**
- Verifique se a porta 5221 está livre
- Execute `dotnet clean` e `dotnet build`

### **Frontend não conecta com API**
- Verifique se a API está rodando
- Confirme se o CORS está configurado
- Verifique a URL no arquivo `api.js`

### **Erro de dependências**
- Execute `npm install` na pasta do frontend
- Verifique se o Node.js está atualizado

## Estrutura do Projeto

```
projeto-produtoapi-artius-main/
├── ProdutoAPI.API/          # API Backend (.NET)
├── ProdutoAPI.Core/         # Entidades e Interfaces
├── ProdutoAPI.Infrastructure/ # Implementações e Banco
└── produto-frontend/        # Frontend React
    ├── src/
    │   ├── components/      # Componentes React
    │   ├── services/        # Serviços de API
    │   └── App.js          # Componente principal
    └── package.json        # Dependências Node.js
```

## Próximos Passos

Após executar com sucesso, você pode:
1. Adicionar mais funcionalidades na API
2. Melhorar a interface do frontend
3. Implementar autenticação de usuários
4. Adicionar testes automatizados
5. Fazer deploy para produção

---

Projeto completo e funcional! 
Execute os dois serviços e teste todas as funcionalidades. 