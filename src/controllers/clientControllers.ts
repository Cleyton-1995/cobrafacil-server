import { Request, Response } from "express";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createClient(req: Request, res: Response) {
  try {
    const { name, email, phone } = req.body;
    const client = await prisma.client.create({
      data: { name, email, phone },
    });

    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar cliente" });
  }
}
async function getClient(req: Request, res: Response) {
  try {
    const clients = await prisma.client.findMany();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscsar cliente" });
  }
}

module.exports = { createClient, getClient };
