import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import researchRouter from "./research.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use(researchRouter);

export default router;
