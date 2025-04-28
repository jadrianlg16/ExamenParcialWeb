// apps/server/src/routes/member.ts
import { Router } from "express";
import MemberHttpHandler from "../handlers/member";
import MemberController from "../controllers/member";
import { createMemberService } from "../db/factory";

const router = Router();
const service     = createMemberService(process.env.DB_KIND ?? "fake");
const controller  = new MemberController(service);
const handler     = new MemberHttpHandler(controller);

router.post("/login", handler.login.bind(handler));

export default router;
