// apps/server/src/controllers/member.ts
import { MemberProfile } from "@cafe-aurora/types";
import { MemberService } from "../db/memberService";

export default class MemberController {
  constructor(private memberService: MemberService) {}

  async login(
    username: string,
    password: string,
  ): Promise<MemberProfile> {
    const profile = await this.memberService.validate(username, password);
    if (!profile) throw new Error("Credenciales incorrectas");
    return profile;
  }
}
