import express from "express";
import { portscanner } from "../controllers/portscanner.js";

const router = express.Router();

router.use(express.json());

router.post("/", portscanner);

export default router;
