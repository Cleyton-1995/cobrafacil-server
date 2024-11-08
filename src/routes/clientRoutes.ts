import { express } from "../server";

const { createClient, getClient } = require("../controllers/clientControllers");

const router = express.Router();

router.post("/", createClient);
router.get("/", getClient);

module.exports = router;
