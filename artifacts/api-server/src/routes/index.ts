import { Router } from "express";
import healthRouter from "./health.js";
import researchRouter from "./research.js";

const router = Router();

router.use(healthRouter);
router.use(researchRouter);

export default router;
