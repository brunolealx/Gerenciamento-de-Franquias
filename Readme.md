# Gerenciamento de Franquias

Este projeto tem como objetivo fornecer uma solução completa para o gerenciamento de franquias, incluindo controle de estoque, vendas, agendamento de colaboradores, relatórios financeiros dinâmicos e painéis interativos de performance.

## Tecnologias Utilizadas

- **Backend:** Node.js, Express, MongoDB
- **Frontend:** React, Tailwind CSS
- **Infraestrutura:** AWS, Docker

## Requisitos

Antes de iniciar o projeto, certifique-se de ter instalado:
- Node.js e npm (ou yarn)
- Docker e Docker Compose (opcional, para ambiente de desenvolvimento conteinerizado)
- MongoDB (ou usar uma instância na nuvem, como MongoDB Atlas)

## Instalação e Configuração

1. Clone o repositório:
   ```sh
   git clone https://github.com/brunolealx/Gerenciamento-de-Franquias.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd Gerenciamento-de-Franquias
   ```

### Backend

1. Acesse a pasta do backend:
   ```sh
   cd backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   MONGO_URI=seu_mongo_uri
   PORT=5000
   JWT_SECRET=sua_chave_secreta
   ```
4. Inicie o servidor:
   ```sh
   npm start
   ```

### Frontend

1. Acesse a pasta do frontend:
   ```sh
   cd frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie a aplicação React:
   ```sh
   npm start
   ```

A aplicação estará disponível em `http://localhost:3000`.

## Docker (Opcional)

Para rodar o backend em um contêiner Docker, use:
```sh
docker-compose up --build
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias no projeto. Para isso:
1. Faça um fork do repositório
2. Crie uma branch (`git checkout -b minha-feature`)
3. Faça as alterações e commit (`git commit -m 'Adicionando nova feature'`)
4. Envie um pull request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

