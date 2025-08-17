# Front-end do Gerenciador de Produtos

Interface React para gerenciamento de produtos.

## Como executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- API backend rodando na porta 5221

### Instalação
1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm start
```

3. Acesse: http://localhost:3000

## Funcionalidades

- **Listagem de produtos** com tabela responsiva
- **Criação de novos produtos** com validação
- **Edição de produtos** existentes
- **Exclusão de produtos** com confirmação
- **Interface responsiva** para mobile e desktop
- **Validação em tempo real** dos formulários
- **Mensagens de feedback** para o usuário

## Tecnologias

- React 18
- CSS3 com design responsivo
- Axios para comunicação com API
- Validação de formulários
- Componentes modulares

## Responsividade

Funciona em:
- Desktop
- Tablet
- Mobile

## Integração com API

O front-end consome a API REST localizada em:
- **Base URL**: http://localhost:5221/api
- **Endpoints**: /produto (GET, POST, PUT, DELETE)

## Design

- Interface limpa e funcional
- Design responsivo
- Cores harmoniosas 