"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Inicializa o aplicativo Express
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3306;
// Middleware para analisar JSON no corpo das requisições
app.use(express_1.default.json());
// Rota inicial
app.get("/", (req, res) => {
    res.send("Hello, TypeScript with Node.js and Express!");
});
// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
