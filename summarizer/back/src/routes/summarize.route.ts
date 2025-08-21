import { Router } from "express";
import { summarize } from "../controllers/summarize.controller";

const router = Router();

router.post("/summarize", summarize);

export default router;
