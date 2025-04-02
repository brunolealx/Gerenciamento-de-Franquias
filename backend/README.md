# Documentação do Projeto - Gerenciamento de Franquias

## 1. Introdução

Este projeto tem como objetivo fornecer uma solução completa para o gerenciamento de franquias. A API possibilita o cadastro, consulta, atualização e remoção de franquias, além de contar com um sistema de autenticação seguro utilizando JWT.

## 2. Tecnologias Utilizadas

- **Node.js** - Runtime para execução do JavaScript no backend.
- **Express.js** - Framework para criação de APIs REST.
- **MongoDB** - Banco de dados NoSQL para armazenamento das informações.
- **Mongoose** - ODM para interação com MongoDB.
- **JSON Web Token (JWT)** - Para autenticação segura.
- **Bcrypt.js** - Para hash de senhas.
- **Jest & Supertest** - Para testes automatizados da API.

## 3. Instalação e Configuração

### 3.1. Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 3.2. Instalando Dependências

```bash
npm install
```

### 3.3. Configurando Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

```env
MONGO_URI=mongodb://localhost:27017/franquias
JWT_SECRET=seu_segredo_super_secreto
PORT=3000
```

### 3.4. Rodando a API

```bash
npm start
```

A API estará disponível em `http://localhost:3000`

## 4. Autenticação e Segurança

A API utiliza autenticação baseada em JWT. Todas as requisições protegidas exigem um token válido no cabeçalho `Authorization: Bearer <token>`.

### 4.1. Gerar Token (Login)

**Endpoint:** `POST /api/auth/login`

**Exemplo de Requisição:**

```json
{
  "email": "teste@email.com",
  "password": "senha123"
}
```

**Resposta:**

```json
{
  "token": "eyJhbGciOiJI..."
}
```

## 5. API de Franquias

### 5.1. Criar uma Franquia

**Endpoint:** `POST /api/franquias` **Autenticação:** Requer token JWT

**Exemplo de Requisição:**

```json
{
  "nome": "Franquia Exemplo",
  "cnpj": "12.345.678/0001-90",
  "endereco": "Rua Exemplo, 123",
  "telefone": "(11) 99999-9999"
}
```

**Resposta:**

```json
{
  "mensagem": "Franquia criada com sucesso!",
  "franquia": {
    "_id": "60c72b2f9b1d4c23d8a5e731",
    "nome": "Franquia Exemplo",
    "cnpj": "12.345.678/0001-90",
    "endereco": "Rua Exemplo, 123",
    "telefone": "(11) 99999-9999",
    "dataCriacao": "2025-04-02T18:40:00.076Z"
  }
}
```

### 5.2. Listar Todas as Franquias

**Endpoint:** `GET /api/franquias` **Autenticação:** Requer token JWT

**Resposta:**

```json
[
  {
    "_id": "60c72b2f9b1d4c23d8a5e731",
    "nome": "Franquia Exemplo",
    "cnpj": "12.345.678/0001-90",
    "endereco": "Rua Exemplo, 123",
    "telefone": "(11) 99999-9999",
    "dataCriacao": "2025-04-02T18:40:00.076Z"
  }
]
```

### 5.3. Atualizar uma Franquia

**Endpoint:** `PUT /api/franquias/:id` **Autenticação:** Requer token JWT

### 5.4. Deletar uma Franquia

**Endpoint:** `DELETE /api/franquias/:id` **Autenticação:** Requer token JWT

## 6. Banco de Dados

Modelo da coleção `Franquias`:

```json
{
  "_id": "ObjectId",
  "nome": "String",
  "cnpj": "String",
  "endereco": "String",
  "telefone": "String",
  "dataCriacao": "Date"
}
```

## 7. Testes

Para rodar os testes automatizados:

```bash
npm test
```

Os testes utilizam Jest e Supertest para validar a API.

---

Isso cobre os principais pontos! Se quiser adicionar algo ou modificar, me avise!



