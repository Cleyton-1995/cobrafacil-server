import { Request, Response } from "express";

const { prismaClient } = require("@prisma/client");

const prisma = new prismaClient();

async function createUser(req: Request, res: Response) {
  try {
    const { name, email, password, account } = req.body;
    const user = await prisma.user.createUser({
      data: { name, email, password, account },
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
}

module.exports = { createUser };
