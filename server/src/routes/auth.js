import expres from "express";
import * as authController from "../controllers/auth";

const router = expres.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;
