import express, { Request, Response } from "express";

// Inicializa o aplicativo Express
const app = express();
const PORT = process.env.PORT || 3306;

// Middleware para analisar JSON no corpo das requisições
app.use(express.json());

// Rota inicial
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Node.js and Express!");
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
