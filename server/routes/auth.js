import express from "express";

//Controller
import { register } from "../crontrollers/auth";

const router = express.Router();

router.post("/register", register);

module.exports = router;
// export default router;
