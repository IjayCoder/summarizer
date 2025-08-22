import { Router } from "express";
import { summarize } from "../controllers/summarize.controller";
import { sanitizeBody } from "../middlewares/validate";

const router = Router();

router.post("/summarize", sanitizeBody, summarize);

export default router;
