import { Request, Response, NextFunction } from "express";

export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  const admin = false;

  if (admin) {
    return next();
  }
  return res.status(401).json({
    error: "User is not authorized",
  });
}
