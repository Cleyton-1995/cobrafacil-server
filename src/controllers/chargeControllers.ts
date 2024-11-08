import { Request, Response } from "express";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createCharge(req: Request, res: Response) {
  try {
    const { description, totalAmount, clientId } = req.body;
    const charge = await prisma.charge.create({
      data: { description, totalAmount, clientId },
    });

    res.status(201).json(charge);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar cobrança" });
  }
}
async function getChargeByClient(req: Request, res: Response) {
  try {
    const { clientId } = req.params;
    const charges = await prisma.charge.findMany({
      data: { clientId: parseInt(clientId) },
    });

    res.json(charges);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar cobranças do cliente" });
  }
}

module.exports = { createCharge, getChargeByClient };
