import express from "express";

//Controller
import { register, login } from "../crontrollers/auth";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
// export default router;
