const express = require("express");
const { addProductToClient, getClientProducts } = require("../controllers/productControllers");

const router = express.Router();

// Rota para adicionar um produto a um cliente
router.post("/add", addProductToClient);

// Rota para obter todos os produtos de um cliente
router.get("/:clientId", getClientProducts);

module.exports = router;
