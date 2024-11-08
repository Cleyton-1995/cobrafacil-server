import { express } from "../server";

const { createCharge, getChargeByClient } = require("../controllers/chargeControllers");

const router = express.Router();

router.post("/", createCharge);
router.get("/:clientId", getChargeByClient);

module.exports = router;
