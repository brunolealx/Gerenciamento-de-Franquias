const request = require("supertest");
const app = require("../src/server");
const setup = require("./setup");
const Franquia = require("../src/models/Franquia");
const Usuario = require("../src/models/User"); // Importa o modelo de usuário
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

let token; // Armazena o token de autenticação

beforeAll(async () => {
    await setup.connect(); // Conecta ao banco de testes

    // Criando um usuário de teste
    const usuarioTeste = new Usuario({
        name: "Usuário Teste",
        email: "teste@email.com",
        password: bcrypt.hashSync("senha123", 10), // Hash da senha
    });

    await usuarioTeste.save(); // Salva no banco de dados de testes

    // Gerando um token JWT para autenticação
    token = jwt.sign({ user: { id: usuarioTeste._id } }, process.env.JWT_SECRET, { expiresIn: "1h" });
});

afterAll(async () => {
    await setup.disconnect(); // Fecha a conexão após os testes
});

beforeEach(async () => {
    await Franquia.deleteMany(); // Limpa os dados antes de cada teste
});

describe("Testes da API de Franquias", () => {
    it("Deve criar uma nova franquia", async () => {
        const response = await request(app)
            .post("/api/franquias")
            .set("Authorization", `Bearer ${token}`) // Adiciona o token
            .send({
                nome: "Franquia Teste",
                cnpj: "12.345.678/0001-90",
                endereco: "Rua Exemplo, 123",
                telefone: "(11) 99999-9999"
            });

        expect(response.status).toBe(201);
        expect(response.body.franquia).toHaveProperty("_id"); // Alterado aqui
    });

    it("Deve retornar erro ao criar franquia com CNPJ duplicado", async () => {
        await Franquia.create({
            nome: "Franquia Teste",
            cnpj: "12.345.678/0001-90",
            endereco: "Rua Exemplo, 123",
            telefone: "(11) 99999-9999"
        });

        const response = await request(app)
            .post("/api/franquias")
            .set("Authorization", `Bearer ${token}`)
            .send({
                nome: "Franquia Teste",
                cnpj: "12.345.678/0001-90",
                endereco: "Rua Exemplo, 123",
                telefone: "(11) 99999-9999"
            });

        expect(response.status).toBe(400);
        expect(response.body.erro).toBe("Já existe uma franquia com esse CNPJ!");
    });

    it("Deve listar todas as franquias", async () => {
        await Franquia.create({
            nome: "Franquia Teste",
            cnpj: "12.345.678/0001-90",
            endereco: "Rua Exemplo, 123",
            telefone: "(11) 99999-9999"
        });

        const response = await request(app)
            .get("/api/franquias")
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});