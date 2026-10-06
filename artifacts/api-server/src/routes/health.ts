import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/healthz", (_req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ status: "ok" }));
});

export default router;
