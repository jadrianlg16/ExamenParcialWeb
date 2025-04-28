// apps/server/src/middleware/error.ts
import { Request, Response, NextFunction } from "express";

export default function error(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  res.status(500).json({ message: err.message || "Algo salió mal" });
}
