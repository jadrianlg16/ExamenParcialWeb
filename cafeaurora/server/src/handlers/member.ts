// apps/server/src/handlers/member.ts
import { Request, Response } from "express";
import MemberController from "../controllers/member";

export default class MemberHttpHandler {
  constructor(private controller: MemberController) {}

  /** POST /api/members/login */
  login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const profile = await this.controller.login(username, password);
      res.json(profile);
    } catch (err: any) {
      res.status(401).json({ message: err.message });
    }
  };
}
