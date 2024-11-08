const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const { PrismaCliet } = require("@prisma/client");
const userRoutes = require("./routes/userRoutes");
const clietRoutes = require("./routes/clientRoutes");
const chargeRoutes = require("./routes/chargeRoutes");

dotenv.config();
const prisma = new PrismaCliet();
const app = express();

app.use(cors());
app.use(express.json());

app.use("./api/users", userRoutes);
app.use("./api/clients", clietRoutes);
app.use("./api/chaeges", chargeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));