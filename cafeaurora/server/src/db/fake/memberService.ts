// apps/server/src/db/fake/memberService.ts
import { MemberProfile } from "@cafe-aurora/types";
import { MemberService } from "../memberService";

const MEMBERS: Record<
  string,
  { password: string } & MemberProfile
> = {
  "sandra.g": { password: "latte123",    fullName: "Sandra García",   membershipNumber: 5001 },
  "roberto.m":{ password: "capuccino456",fullName: "Roberto Martínez",membershipNumber: 5002 },
  "esteban.l":{ password: "espresso789", fullName: "Esteban López",   membershipNumber: 5003 },
};

export class FakeMemberService extends MemberService {
  initialized = false;

  async init() { this.initialized = true; }

  async validate(u: string, p: string) {
    const rec = MEMBERS[u];
    if (rec && rec.password === p) {
      const { fullName, membershipNumber } = rec;
      return { fullName, membershipNumber };
    }
    return null;
  }
}
