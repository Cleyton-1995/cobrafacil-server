import { express } from "../server";

const { createClient, getClient } = require("@prisma/client");

const router = express.Router();

router.post("/", createClient);
router.get("/", getClient);

module.exports = router;
