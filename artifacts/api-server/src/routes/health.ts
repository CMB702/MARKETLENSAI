import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/healthz", (_req: Request, res: Response) => {
  const jsonResponse = res as unknown as {
    json: (body: { status: string }) => void;
  };
  jsonResponse.json({ status: "ok" });
});

export default router;
