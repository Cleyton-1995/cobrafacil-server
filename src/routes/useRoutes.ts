import { express } from "../server";

const { createUser } = require("../controllers/useControllers");

const router = express.Router();

router.post("/", createUser);

module.exports = router;
