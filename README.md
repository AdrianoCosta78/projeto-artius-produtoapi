# Gerenciador de Produtos

Sistema completo de gerenciamento de produtos com API .NET e frontend React.

## Estrutura do Projeto

- **ProdutoAPI.API** - API REST em .NET 9.0
- **ProdutoAPI.Core** - Entidades e interfaces
- **ProdutoAPI.Infrastructure** - Implementações e banco de dados
- **produto-frontend** - Interface React

## Tecnologias

- **Backend**: .NET 9.0, Entity Framework, Swagger
- **Frontend**: React 18, CSS3, Axios
- **Banco**: InMemory Database

## Como Executar

### Backend
```bash
cd ProdutoAPI.API
dotnet run
```

### Frontend
```bash
cd produto-frontend
npm install
npm start
```

## URLs

- **API**: http://localhost:5221
- **Swagger**: http://localhost:5221/swagger
- **Frontend**: http://localhost:3000

## Funcionalidades

- CRUD completo de produtos
- Interface responsiva
- Validação de formulários
- Banco em memória com dados de exemplo
