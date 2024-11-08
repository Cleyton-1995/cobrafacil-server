import { error } from "console";
import { Request, Response } from "express";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function addProductToClient(req: Request, res: Response) {
  try {
    const { clientId, productId, totalAmount, dueDate } = req.body;

    const client = prisma.client.findUnique({ where: { id: clientId } });
    const product = prisma.product.findUnique({ where: { id: productId } });

    if (!client || !product) {
      return res
        .status(404)
        .json({ error: "Clinte ou Produto não encontrado" });
    }

    const charge = await prisma.charge.create({
      data: {
        totalAmount,
        dueDate: new Date(dueDate),
        clientId,
        productId,
      },
    });

    res.status(201).json(charge);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao associar produto ao Cliente" });
  }
}

async function getClientProducts(req: Request, res: Response) {
  try {
    const { clientId } = req.params;

    const charges = await prisma.charge.findMany({
      where: { clientId: parseInt(clientId) },
      include: {
        product: true,
      },
    });

    const products = charges.map((charge: { product: any }) => charge.product);

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao buscar produtos do Cliente" });
  }
}
module.exports = { addProductToClient, getClientProducts }